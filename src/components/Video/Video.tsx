import { CSSProperties, useRef, useState } from "react";
import ReactPlayer from 'react-player'
import { useInView } from "react-intersection-observer";

import Progress from "../Progress/Progress";

import style from "./Video.module.css"

interface IProps {
    url: string;
    play: boolean;
    idVideo: number;
    changePlay: (id: number, startState: boolean) => void
    startVideo: boolean;
    heightHeader: number;
    offset: string;
    loadedSeconds: number;
}


function Video(props: IProps) {
    const { url, play, idVideo, changePlay, startVideo, heightHeader, offset, loadedSeconds } = props;

    const ref = useRef<HTMLDivElement>(null);
    const scrollToElement = () => {
        const { current } = ref
        if (current !== null) {

            const { top, height } = current.getBoundingClientRect();
            const heightWindow = window.innerHeight;


            if ((top + (height * 1.49)) > heightWindow) window.scrollTo(
                {
                    top: window.scrollY + (height * 1.49),
                    behavior: "smooth",
                }
            )

            if (top < heightHeader) {
                window.scrollTo(
                    {
                        top: top > 0 ? window.scrollY - ((heightHeader - top) * 1.49) : window.scrollY - ((height + top) * 1.49),
                        behavior: "smooth",
                    }
                )

            }
        }
    }

    const clickPlayer = () => {
        changePlay(idVideo, true)
        if (!startVideo && idVideo === 10) {
            setTimeout(() => scrollToElement(), 200)
            return
        }

        if (!startVideo) scrollToElement()

    }
    const endVideo = () => {
        setSecondProgress(cProgress);
        setTimeout(() => {
            setSecondProgress(0)
            changePlay(idVideo, false)
        }, 100)
        setTimeout(() => { if (player.current) player.current.seekTo(0.01); }, 400)

    }



    const widthProgress = 200;
    const strokeWidthProgress = 2;
    const radiusProgress = (widthProgress / 2) - (strokeWidthProgress / 2)
    const cProgress = 2 * 3.14 * radiusProgress
    const [secondProgress, setSecondProgress] = useState(0);
    const progressVideo = (state: {
        played: number
        playedSeconds: number
        loaded: number
        loadedSeconds: number
    }) => {
        if (!play) {
            if (player.current) player.current.seekTo(0.01);
            return
        }
        console.log(state.loadedSeconds);

        const second = state.playedSeconds / loadedSeconds;
        const s = cProgress * second;
        setSecondProgress(s)
    }

    const player = useRef<ReactPlayer>(null);

    const { ref: refVideo, inView } = useInView({
        threshold: .1,
        triggerOnce: true
    })

    const styleVideo = { "--offset": offset } as CSSProperties;


    return (
        <div className={style.videoWrapper + " " + ((startVideo) ? style.playVideo : "") + " "} ref={ref}>
            <div className={style.wrapper} onClick={clickPlayer} ref={refVideo}>

            </div>
            <div className={style.video} >

                {/* {pause && <PauseIcon></PauseIcon>} */}
                {startVideo && <Progress cProgress={cProgress} radiusProgress={radiusProgress} secondProgress={secondProgress} strokeWidthProgress={strokeWidthProgress} widthProgress={widthProgress}></Progress>}
                <div className={style.lazyLoad + " " + style.wrapperPlayer + " " + (inView ? style.lazyOpacity : "")}></div>
                <div className={style.wrapperPlayer}>
                    <ReactPlayer
                        ref={player}
                        onEnded={endVideo}

                        onProgress={progressVideo}
                        playing={play}
                        width="348px"
                        height="348px"
                        style={styleVideo}
                        // light="https://img.freepik.com/free-photo/a-colorful-picture-of-flowers-with-a-yellow-flower-on-the-bottom_1340-32004.jpg?size=338&ext=jpg&ga=GA1.1.1788614524.1718323200&semt=ais_user"
                        url={url}


                        className={style.reactPlayer}
                        progressInterval={100}
                    />
                </div>

            </div>
        </div>


    );
}

export default Video;