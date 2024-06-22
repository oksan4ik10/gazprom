import style from "./Progress.module.css"
interface IProps {
    secondProgress: number;
    widthProgress: number;
    strokeWidthProgress: number;
    radiusProgress: number;
    cProgress: number;
}


function Progress(props: IProps) {
    const { secondProgress, cProgress, radiusProgress, widthProgress, strokeWidthProgress } = props;

    return (
        <svg className={style.progress + " " + (secondProgress === 0 ? style.stop : "")} viewBox={`0 0 ${widthProgress} ${widthProgress}`} version="1.1" xmlns="http://www.w3.org/2000/svg">

            <circle
                cx={widthProgress / 2}
                cy={widthProgress / 2}
                r={radiusProgress}
                strokeWidth={strokeWidthProgress}
                stroke="white"
                fill="transparent"
                strokeDasharray={`${secondProgress} ${cProgress} `}
            />

        </svg>
    );
}

export default Progress;