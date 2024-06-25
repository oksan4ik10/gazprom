import Video from "./components/Video/Video"
import Comment from "./components/Comment/Comment"
import "./App.css"
import { useEffect, useRef, useState } from "react"

export const App = () => {

  const [videoInfo, setVideo] = useState([
    {
      idVideo: 0,
      text: "Чем ты занимаешься в ГПб?",
      url: "1.1.mp4",
      play: false,
      startVideo: false,
      offset: "70px",
      loadedSeconds: 17
    },
    {
      idVideo: 1,
      text: "А как ты попала в ГПб?",
      url: "1.2.mp4",
      play: false,
      startVideo: false,
      offset: "40px",
      loadedSeconds: 10.566667
    },
    {
      idVideo: 2,
      text: "Чему ты научился в ГПб?",
      url: "1.3.mp4",
      play: false,
      startVideo: false,
      offset: "15px",
      loadedSeconds: 16.133333

    },
    {
      idVideo: 3,
      text: "Назови топ-3 задачи в ГПб",
      url: "1.4.mp4",
      play: false,
      startVideo: false,
      offset: "80px",
      loadedSeconds: 29.233333
    },
    {
      idVideo: 4,
      text: "Какой твой самый интересный проект в ГПб?",
      url: "1.5.mp4",
      play: false,
      startVideo: false,
      offset: "15px",
      loadedSeconds: 32.6
    },
    {
      idVideo: 5,
      text: "Что тебе помогает поддерживать work-life balance?",
      url: "1.6.mp4",
      play: false,
      startVideo: false,
      offset: "45px",
      loadedSeconds: 12.1
    },
    {
      idVideo: 6,
      text: "Что тебя мотивирует в работе?",
      url: "1.7.mp4",
      play: false,
      startVideo: false,
      offset: "15px",
      loadedSeconds: 15.033333
    },
    {
      idVideo: 7,
      text: "Какие sof skills самые важные для<br/>карьерного роста?",
      url: "1.8.mp4",
      play: false,
      startVideo: false,
      offset: "15px",
      loadedSeconds: 27.2
    },
    {
      idVideo: 8,
      text: "А какие hard skills?",
      url: "1.9.mp4",
      play: false,
      startVideo: false,
      offset: "60px",
      loadedSeconds: 8.1
    },
    {
      idVideo: 9,
      text: "Какие у тебя цели в рамках карьерного роста?",
      url: "1.10.mp4",
      play: false,
      startVideo: false,
      offset: "15px",
      loadedSeconds: 29.933333
    },
    {
      idVideo: 10,
      text: "Опиши работу в ГПб в 3 пунктах",
      url: "1.11.mp4",
      play: false,
      startVideo: false,
      offset: "50px",
      loadedSeconds: 8.7
    }
  ])



  const changePlay = (idVideo: number, startState: boolean) => {
    setVideo(videoInfo.map((item) => {
      if (item.idVideo === idVideo) {
        item.play = !item.play;
        item.startVideo = startState;
      }
      else {
        item.play = false;
        item.startVideo = false;
      }
      return item
    }))
  }

  const refHeader = useRef<HTMLDivElement>(null);
  const [heightHeader, setHeightHeader] = useState(0);
  useEffect(() => {
    const { current } = refHeader;
    if (current) {
      setHeightHeader(current.getBoundingClientRect().height)
    }
  }, [])



  return <div className="wrapper">
    <header className="header" ref={refHeader}>
      <div className="container container__header">
        <h1 className="header__title">ЧТО ГОВОРЯТ СТАЖЁРЫ?</h1>
      </div>

    </header>
    <main className="main">
      <div className="elem1"></div>
      <div className="elem2"></div>
      <div className="elem3"></div>
      <div className="container main__container">

        {videoInfo.map((item) =>
          <div className="main__task" key={item.idVideo}>
            <Comment text={item.text}></Comment>
            <div className="task__video">
              <Video loadedSeconds={item.loadedSeconds} offset={item.offset} heightHeader={heightHeader} startVideo={item.startVideo} changePlay={changePlay} play={item.play} idVideo={item.idVideo} url={item.url}></Video>
            </div>

          </div>
        )}



      </div>

    </main>

  </div>
}