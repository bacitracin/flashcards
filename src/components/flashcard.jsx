import React, { Component } from 'react';
import '../stylesheets/index.css';
import FlashcardContent from './FlashcardContent';
import { CONTENT_TYPE } from '../constants/constants'

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
        <div className={`${flipped ? 'card flipped' : 'card'}`} onClick={this.flipCard}>
          <div className="card__face card__face--front">
            <div className="accent-border">
              <FlashcardContent
                content="Hello there"
                contentType={CONTENT_TYPE.TEXT}
              />
            </div>
          </div>
          <div className="card__face card__face--back">
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
