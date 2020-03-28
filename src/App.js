import React from 'react';
import './stylesheets/index.css';
import Flashcard from './components/flashcard.jsx';

function App() {
  return (
    <div className="App">
      <Flashcard
        text={"Front of card 1"}
      />
    </div>
  );
}

export default App;
