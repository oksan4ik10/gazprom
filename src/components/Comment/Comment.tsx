import style from "./Comment.module.css"

function Comment() {
    return (
        <div className={style.wrapper}>
            <div className={style.rect}></div>
            <div className={style.rect}></div>
            <div className={style.rect}></div>
            <div className={style.rect}></div>
            <div className={style.rect}></div>
            <div className={style.rect}></div>
            <p className={style.text}>Lorem ipsum, dolor sit amet consectetur<br />adipisicing elit. Quibusdam, itaque.</p>

        </div>
    );
}

export default Comment;