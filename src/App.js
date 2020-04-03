import React from 'react';
import './stylesheets/index.css';
import MOCK_DATA from './data/index';
import FlashcardsWrapper from './components/FlashcardsWrapper';

function App() {
  return (
    <div className="App">
      <div className="cards__wrapper">
        <FlashcardsWrapper
          flashcards={MOCK_DATA}
        />
      </div>
    </div>
  );
}

export default App;
