import React from 'react';
import './stylesheets/index.css';
import Flashcard from './components/Flashcard.jsx';

function App() {
  return (
    <div className="App">
      <Flashcard
        content={'hello'}
        contentType={'text'}
        isFullCard={false}
      />
    </div>
  );
}

export default App;
