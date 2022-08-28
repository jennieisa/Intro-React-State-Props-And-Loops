import Album from './Album.jsx';

const AlbumList = ({albums}) => {
    console.log(albums);

    return (
        <div>
            <h3>Album List</h3>
            {albums.map((album, index) => <Album title={album.title} tracks={album.tracks} key={index}/>)}
        </div>
    );
}

export default AlbumList;