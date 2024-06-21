import { useState } from "react";
import ReactPlayer from 'react-player'

import urlVideo from "../../assets/test.mp4"

import PlayIcon from "../PlayIcon/PlayIcon";
import PauseIcon from "../PauseIcon/PauseIcon";
import Progress from "../Progress/Progress";

import style from "./Video.module.css"

function Video() {
    const [pause, setPause] = useState(false);

    const clickPause = () => {
        setPause(true);
        console.log("pause");

    }
    const [playing, setPlaying] = useState(false)
    const clickPlayer = () => {
        if (!playing) setPlaying(true)
        if (playing) setPlaying(false)
        if (pause) setPause(false)
    }
    const endVideo = () => {
        console.log("end");

        setPlaying(false);
        setPause(false)
        setSecondProgress(0)
    }




    const widthProgress = 200;
    const strokeWidthProgress = 4;
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
        console.log(s);
        console.log(cProgress);

        setSecondProgress(s)
    }




    return (
        <div className={style.video} >

            {pause && <PauseIcon></PauseIcon>}
            <Progress cProgress={cProgress} radiusProgress={radiusProgress} secondProgress={secondProgress} strokeWidthProgress={strokeWidthProgress} widthProgress={widthProgress}></Progress>
            <div onClick={clickPlayer}>
                <ReactPlayer
                    onEnded={endVideo}
                    onPause={clickPause}
                    onProgress={progressVideo}
                    playing={playing}
                    // light="https://img.freepik.com/free-photo/a-colorful-picture-of-flowers-with-a-yellow-flower-on-the-bottom_1340-32004.jpg?size=338&ext=jpg&ga=GA1.1.1788614524.1718323200&semt=ais_user"
                    url={urlVideo}
                    playIcon={<PlayIcon width="60px" />}
                    width="200px"
                    height="200px"
                    className={style.reactPlayer}
                    progressInterval={100}
                />
            </div>

        </div>
    );
}

export default Video;