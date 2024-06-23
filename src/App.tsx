import Video from "./components/Video/Video"
import Comment from "./components/Comment/Comment"
import "./App.css"
import { useState } from "react"
import urlVideo from "./assets/test.mp4"
export const App = () => {

  const [videoInfo, setVideo] = useState([
    {
      idVideo: 0,
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse at totam ea, porro ipsa corporis numquam. Quidem fugiat fuga, repudiandae laudantium, perferendis neque quam voluptates culpa reprehenderit quae corrupti doloremque!",
      url: urlVideo,
      play: false,
      startVideo: false
    },
    {
      idVideo: 1,
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, quis.",
      url: urlVideo,
      play: false,
      startVideo: false
    }
  ])

  const changePlay = (idVideo: number) => {
    setVideo(videoInfo.map((item) => {
      if (item.idVideo === idVideo) {
        item.play = !item.play;
        item.startVideo = true;
      }
      else {
        item.play = false;
        item.startVideo = false;
      }
      return item
    }))
  }


  return <div className="wrapper">
    <header className="header">
      <div className="container container__header">
        <h1 className="header__title">ЧТО ГОВОРЯТ СТАЖЁРЫ?</h1>
      </div>

    </header>
    <main className="main">
      <div className="container main__container">
        {videoInfo.map((item) =>
          <div className="main__task" key={item.idVideo}>
            <Comment text={item.text}></Comment>
            <div className="task__video">
              <Video startVideo={item.startVideo} changePlay={changePlay} play={item.play} idVideo={item.idVideo} url={item.url}></Video>
            </div>

          </div>
        )}



      </div>

    </main>

  </div>
}