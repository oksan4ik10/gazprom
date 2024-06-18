interface IProps {
    width: string;
}
function PlayIcon(props: IProps) {
    const { width } = props;

    return (
        <div className="play" style={{ width: width, backgroundColor: "red", height: "60px" }}>

        </div>
    );
}

export default PlayIcon;