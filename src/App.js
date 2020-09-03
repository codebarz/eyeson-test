import React from 'react';
import logo from './logo.svg';
import './App.css';
import eyeson from 'eyeson';

function App() {
  React.useEffect(() => {
    eyeson.onEvent((event) => {
      if (event.type !== 'accept') {
        return;
      }
      // Note: Some iOS devices might require video to have autoplay attribute set.
      let video = document.querySelector('video');
      video.srcObject = event.remoteStream;
      video.play();
    });
    eyeson.start('rwdWOeNn7IUbr8VlnfS6YxGu');
  });
  return <video className="video"></video>;
}

export default App;
