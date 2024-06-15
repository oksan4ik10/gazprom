import { useState } from "react";
import urlVideo from "../assets/test.mp4"
import ReactPlayer from 'react-player'

function Video() {
    const clickPause = () => {
        console.log(23);

    }
    const [playing, setPlaying] = useState(false)
    const clickPlayer = () => {
        setPlaying(!playing)
    }

    return (
        <div onClick={clickPlayer} className="video">
            <ReactPlayer
                onPause={clickPause}
                playing={playing}
                light="https://img.freepik.com/free-photo/a-colorful-picture-of-flowers-with-a-yellow-flower-on-the-bottom_1340-32004.jpg?size=338&ext=jpg&ga=GA1.1.1788614524.1718323200&semt=ais_user"
                url={urlVideo}
                // playIcon={<PlayIcon width="60" />}
                width="200px"
                height="200px"
                className='react-player'
                style={{ borderRadius: "50%", overflow: "hidden", border: "1px solid red" }}


            />
        </div>
    );
}

export default Video;