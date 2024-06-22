import { useRef, useState } from "react";
import ReactPlayer from 'react-player'

import urlVideo from "../../assets/test.mp4"

import Progress from "../Progress/Progress";

import style from "./Video.module.css"

function Video() {

    const [playing, setPlaying] = useState(false)
    const clickPlayer = () => {
        setStartVideo(true)
        if (!playing) setPlaying(true)
        if (playing) setPlaying(false)
    }
    const endVideo = () => {
        setPlaying(false);
        setSecondProgress(cProgress);
        setTimeout(() => {
            setStartVideo(false)
            setSecondProgress(0)


        }, 100)
        setTimeout(() => { if (player.current) player.current.seekTo(0); }, 400)

    }




    const widthProgress = 200;
    const strokeWidthProgress = 3;
    const radiusProgress = (widthProgress / 2) - (strokeWidthProgress / 2)
    const cProgress = 2 * 3.14 * radiusProgress
    const [secondProgress, setSecondProgress] = useState(0);
    const progressVideo = (state: {
        played: number
        playedSeconds: number
        loaded: number
        loadedSeconds: number
    }) => {
        if (!playing) return
        const second = state.playedSeconds / state.loadedSeconds;
        const s = cProgress * second;
        setSecondProgress(s)
    }

    const [startVideo, setStartVideo] = useState(false);
    const player = useRef<ReactPlayer>(null);


    return (
        <div className={style.videoWrapper + " " + (startVideo ? style.playVideo : "")} >
            <div className={style.wrapper} onClick={clickPlayer}>
                <div className={style.rect}></div>
                <div className={style.rect}></div>
                <div className={style.rect}></div>
                <div className={style.rect}></div>
                <div className={style.rect}></div>
                <div className={style.rect}></div>

            </div>
            <div className={style.video} >

                {/* {pause && <PauseIcon></PauseIcon>} */}
                <Progress cProgress={cProgress} radiusProgress={radiusProgress} secondProgress={secondProgress} strokeWidthProgress={strokeWidthProgress} widthProgress={widthProgress}></Progress>
                <div className={style.wrapperPlayer}>
                    <ReactPlayer
                        ref={player}
                        onEnded={endVideo}

                        onProgress={progressVideo}
                        playing={playing}
                        // light="https://img.freepik.com/free-photo/a-colorful-picture-of-flowers-with-a-yellow-flower-on-the-bottom_1340-32004.jpg?size=338&ext=jpg&ga=GA1.1.1788614524.1718323200&semt=ais_user"
                        url={urlVideo}


                        className={style.reactPlayer}
                        progressInterval={100}
                    />
                </div>

            </div>
        </div>


    );
}

export default Video;