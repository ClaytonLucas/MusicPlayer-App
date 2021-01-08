import {useState, useEffect} from 'react';
import Player from './components/Player';

function App() {
  const [songs] = useState([
    {
      title: "Change The World",
      artist: "Eric Clapton",
      img_src: "./images/song-1.jpg",
      src: "./music/eric clapton change the world.mp3"
    },
    {
      title: "Head Over Heels",
      artist: "Tears or Fears",
      img_src: "./images/song-2.jpg",
      src: "./music/tears for fears head over heels.mp3"
    },
    {
      title: "You Get What You Give",
      artist: "New Radicals",
      img_src: "./images/song-3.jpg",
      src: "./music/new radicals you get what you give.mp3"
    },
    {
      title: "Virtual Insanity",
      artist: "Jamiroquai",
      img_src: "./images/song-4.jpg",
      src: "./music/Jamiroquai - Virtual Insanity.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);
  
  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    
    <div className="App">
      <Player 
      currentSongIndex={currentSongIndex} 
      setCurrentSongIndex={setCurrentSongIndex}
      nextSongIndex={nextSongIndex} 
      songs={songs}></Player>
    </div>
  );
}

export default App;
