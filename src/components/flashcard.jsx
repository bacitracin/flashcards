import React, { Component } from 'react';
import '../stylesheets/index.css';
import FlashcardContent from './FlashcardContent';
import { CONTENT_TYPE } from '../constants/constants'
import FlipIcon from '../assets/FlipIcon';

export default class Flashcard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flipped: false,
    }
    this.flipCard = this.flipCard.bind(this);
  }

  flipCard() {
    this.setState({ flipped: !this.state.flipped });
  }

  render() {
    const { flipped } = this.state;

    return (
      <section className="container">
        <div
          className={`${flipped ? 'card flipped' : 'card'}`}
          onClick={this.flipCard}
        >
          <div className="card__face card__face--front">
            <div>
              <div className="accent-border" />
              <FlipIcon color="rgb(35, 180, 161)" />
            </div>
            <FlashcardContent
              content="Front of card 2. Back is Full Card Image"
              contentType={CONTENT_TYPE.TEXT}
            />
          </div>
          <div className="card__face card__face--back">
            <FlipIcon color="rgb(35, 180, 161)" />
            <FlashcardContent
              content="Goodbye"
              contentType={CONTENT_TYPE.TEXT}
            />
          </div>
        </div>
      </section>
    )
  }
}
