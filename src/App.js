import React from 'react';
import './stylesheets/index.css';
import { MOCK_DATA } from './data/index';
import Flashcard from './components/Flashcard';

function App() {
  return (
    <div className="App">
      <Flashcard
        contentFront={MOCK_DATA[0].contentFront}
        contentFrontType={MOCK_DATA[0].contentFrontType}
        contentBack={MOCK_DATA[0].contentBack}
        contentBackType={MOCK_DATA[0].contentBackType}
        isFirst={true}
      />
      <Flashcard
        contentFront={MOCK_DATA[1].contentFront}
        contentFrontType={MOCK_DATA[1].contentFrontType}
        contentBack={MOCK_DATA[1].contentBack}
        contentBackType={MOCK_DATA[1].contentBackType}
      />
      <Flashcard
        contentFront={MOCK_DATA[2].contentFront}
        contentFrontType={MOCK_DATA[2].contentFrontType}
        contentBack={MOCK_DATA[2].contentBack}
        contentBackType={MOCK_DATA[2].contentBackType}
      />
    </div>
  );
}

export default App;
