import React from 'react';
import './stylesheets/index.css';
import MOCK_DATA from './data/index';
import FlashcardsWrapper from './components/FlashcardsWrapper';

function App() {
  return (
    <div className="App">
      <FlashcardsWrapper
        flashcards={MOCK_DATA}
      />
    </div>
  );
}

export default App;
