import React from 'react';
import FlashcardsWrapper from './components/FlashcardsWrapper';
import MOCK_DATA from './data/index';
import './stylesheets/index.css';

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
