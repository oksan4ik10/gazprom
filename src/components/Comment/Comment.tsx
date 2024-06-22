import style from "./Comment.module.css"

interface IProps {
    text: string
}

function Comment(props: IProps) {
    const { text } = props;
    return (
        <div className={style.wrapper}>
            <div className={style.rect}></div>
            <div className={style.rect}></div>
            <div className={style.rect}></div>
            <div className={style.rect}></div>
            <div className={style.rect}></div>
            <div className={style.rect}></div>
            <p className={style.text}>{text}</p>

        </div>
    );
}

export default Comment;