import React from 'react';
import { MOCK_DATA } from './data/index';
import './stylesheets/index.css';
import FlashcardWrapper from './components/FlashcardWrapper.jsx';

function App() {
  return (
    <div className="App">
      <FlashcardWrapper
        flashcards={MOCK_DATA}
      />
    </div>
  );
}

export default App;
