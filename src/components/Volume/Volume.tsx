import style from "./Volume.module.css"

interface IProps {
    clickVolume: () => void;
}

function Volume(props: IProps) {
    const { clickVolume } = props;
    return (
        <div className={style.volume} onClick={clickVolume}>
            <div className={style.volume__icon}></div>

        </div>
    );
}

export default Volume;