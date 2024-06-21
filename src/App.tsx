import Video from "./components/Video/Video"
import Comment from "./components/Comment/Comment"
import "./App.css"
export const App = () => {
  return <div className="wrapper">
    <header className="header">
      <div className="container container__header">
        <h1 className="header__title">ЧТО ГОВОРЯТ СТАЖЁРЫ?</h1>
      </div>

    </header>
    <main className="main">
      <div className="container main__container">
        <h2>teststetet</h2>
        <Comment></Comment>
        <Video></Video>
      </div>

    </main>

  </div>
}