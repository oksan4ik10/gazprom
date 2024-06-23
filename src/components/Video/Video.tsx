import { useRef, useState } from "react";
import ReactPlayer from 'react-player'

import Progress from "../Progress/Progress";

import style from "./Video.module.css"

interface IProps {
    url: string;
    play: boolean;
    idVideo: number;
    changePlay: (id: number, startState: boolean) => void
    startVideo: boolean
}

function Video(props: IProps) {
    const { url, play, idVideo, changePlay, startVideo } = props;
    const clickPlayer = () => {
        changePlay(idVideo, true)

    }
    const endVideo = () => {
        setSecondProgress(cProgress);
        setTimeout(() => {
            setSecondProgress(0)
            changePlay(idVideo, false)
        }, 100)
        setTimeout(() => { if (player.current) player.current.seekTo(0); }, 400)

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
        if (!play) return
        const second = state.playedSeconds / state.loadedSeconds;
        const s = cProgress * second;
        setSecondProgress(s)
    }

    const player = useRef<ReactPlayer>(null);


    return (
        <div className={style.videoWrapper + " " + ((startVideo && play) ? style.playVideo : "")} >
            <div className={style.wrapper} onClick={clickPlayer}>

            </div>
            <div className={style.video} >

                {/* {pause && <PauseIcon></PauseIcon>} */}
                {startVideo && <Progress cProgress={cProgress} radiusProgress={radiusProgress} secondProgress={secondProgress} strokeWidthProgress={strokeWidthProgress} widthProgress={widthProgress}></Progress>}
                <div className={style.wrapperPlayer}>
                    <ReactPlayer
                        ref={player}
                        onEnded={endVideo}

                        onProgress={progressVideo}
                        playing={play}
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