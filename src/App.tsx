import Video from "./components/Video/Video"
import Comment from "./components/Comment/Comment"
import "./App.css"
import { useEffect, useRef, useState } from "react"
import urlVideo from "./assets/test.mp4"
export const App = () => {

  const [videoInfo, setVideo] = useState([
    {
      idVideo: 0,
      text: "На какой позиции ты сейчас находишься?",
      url: urlVideo,
      play: false,
      startVideo: false
    },
    {
      idVideo: 1,
      text: "Какие цели ты ставишь перед собой в рамках<br/>карьерного роста на ближайшее будущее?",
      url: urlVideo,
      play: false,
      startVideo: false
    },
    {
      idVideo: 2,
      text: "Какой совет ты был дал себе из прошлого/из будущего?",
      url: urlVideo,
      play: false,
      startVideo: false
    },
    {
      idVideo: 3,
      text: "Расскажи о каком-то интересном проекте,<br/>над которым ты работал во время<br/>стажировки или на своей текущей позиции",
      url: urlVideo,
      play: false,
      startVideo: false
    },
    {
      idVideo: 4,
      text: "Что помогает тебе поддерживать work & life balance?",
      url: urlVideo,
      play: false,
      startVideo: false
    },
    {
      idVideo: 5,
      text: "На твой взгляд, есть ли какие‑нибудь<br/>особенности, которые отличают работу<br/>аналитика данных от всех остальных профессий?",
      url: urlVideo,
      play: false,
      startVideo: false
    },
    {
      idVideo: 6,
      text: "Что мотивирует тебя в работе?",
      url: urlVideo,
      play: false,
      startVideo: false
    },
    {
      idVideo: 7,
      text: "Твой совет кандидатам,<br/>которые только начинают поиск стажировки",
      url: urlVideo,
      play: false,
      startVideo: false
    },
    {
      idVideo: 8,
      text: "Как ты считаешь, какие навыки и знания<br/>студентам следует развивать, чтобы быть<br/>успешными на рынке труда сейчас и в будущем?",
      url: urlVideo,
      play: false,
      startVideo: false
    },
    {
      idVideo: 9,
      text: "Какие навыки ты приобрел благодаря стажировке?",
      url: urlVideo,
      play: false,
      startVideo: false
    },
    {
      idVideo: 10,
      text: "Какие навыки ты считаешь самыми важными<br/>для карьерного роста в компании?",
      url: urlVideo,
      play: false,
      startVideo: false
    },
    {
      idVideo: 11,
      text: "Поделись своим личным топ-3 прогнозов относительно<br/>развития и использования искусственного интеллекта в<br/>аналитике или Как считаете, можно ли вашу рабочую<br/>деятельность полностью автоматизировать и отдать ИИ?",
      url: urlVideo,
      play: false,
      startVideo: false
    }, {
      idVideo: 12,
      text: "Какие аспекты твоей работы драйвят<br/>тебя больше всего?",
      url: urlVideo,
      play: false,
      startVideo: false
    },
    {
      idVideo: 13,
      text: "Какие области/сферы ты считаешь наиболее<br/>перспективными для развития своей карьеры?",
      url: urlVideo,
      play: false,
      startVideo: false
    }, {
      idVideo: 14,
      text: "Какие рекомендации ты бы дал(а) студенту,<br/>который хочет развиваться в аналитике?",
      url: urlVideo,
      play: false,
      startVideo: false
    },
    {
      idVideo: 15,
      text: "Опиши работу в Газпромбанке тремя словами",
      url: urlVideo,
      play: false,
      startVideo: false
    },
    {
      idVideo: 16,
      text: "Есть ли в вашей компании спортивные/<br/>творческие/другие комьюнити? Расскажи,<br/>участвуешь ли в каком-то из них",
      url: urlVideo,
      play: false,
      startVideo: false
    },
    {
      idVideo: 17,
      text: "Что ты ценишь больше всего в<br/>корпоративной культуре компании?",
      url: urlVideo,
      play: false,
      startVideo: false
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
              <Video heightHeader={heightHeader} startVideo={item.startVideo} changePlay={changePlay} play={item.play} idVideo={item.idVideo} url={item.url}></Video>
            </div>

          </div>
        )}



      </div>

    </main>

  </div>
}