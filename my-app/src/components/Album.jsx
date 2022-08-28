const Album = ({title, tracks}) => {
    return (
        <div>
            {title}
            <ul>
                {tracks.map((track, index) => <li key={index}>{track}</li>)}
            </ul>
        </div>
    );
}

export default Album;