import React from 'react';
import './stylesheets/index.css';
import Flashcard from './components/Flashcard.jsx';

function App() {
  return (
    <div className="App">
      <Flashcard
        content={'Front of card 1. Back is centered image.'}
        contentType={'text'}
      />
    </div>
  );
}

export default App;
