
import style from "./Volume.module.css"

interface IProps {
    clickVolume: () => void;
    changeVolume: (n: number) => void;
    volume: number;
}

function Volume(props: IProps) {
    const { clickVolume, volume, changeVolume } = props;
    const changeRangeVolume = (e: React.FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        changeVolume((+target.value / 10))
    }

    return (
        <div className={style.volume} onClick={clickVolume}>
            <input type="range" min={0} max={10} value={volume * 10} step={1} onChange={changeRangeVolume} />
            <div className={style.volume__icon}></div>

        </div>
    );
}

export default Volume;