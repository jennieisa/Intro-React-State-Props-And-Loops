import './App.css';
import { useState } from 'react';
import Album from './components/Album';
import AlbumList from './components/AlbumList';

function App() {
  const [myAlbums, setMyAlbums] = useState(
    [
      {
        title: '1 2 3',
        tracks: ['Last night', 'Tomorrow night', 'Tonight']
      },
      {
        title: 'Usher', 
        tracks: ['My boo', 'Confession pt.2', 'Nevermind']
      },
      {
        title: 'Björnes Magasin',
        tracks: ['Lilla snigel', 'Skyll inte på Hugo', 'Saft är gott']
      }
    ]
  )  

  let addAlbum = () => {
    //setMyAlbums()
    let albumTitle = document.querySelector('#title').value; 

    let newAlbum = {
      title: albumTitle,
      tracks: ['Låt 1', 'Låt 2', 'Låt 3']
    }

    setMyAlbums([...myAlbums, newAlbum])
  }

  return (
    <div className='App'>
      <header className='App-header'>
      Add album: <input type='text' id='title'></input>
      <button onClick={addAlbum}>Add album</button>
        <h1>My albums</h1>
        <AlbumList albums={myAlbums}/>
      </header>
    </div>
  );
}

export default App;
