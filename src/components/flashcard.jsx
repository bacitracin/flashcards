import React, { Component } from 'react';
import FlashcardContent from './FlashcardContent';
import FlipButton from './FlipButton';
import FlipIcon from '../assets/FlipIcon';
import '../stylesheets/index.css';

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
    const { contentFront, contentFrontType, contentBack, contentBackType, isFirst } = this.props;
    const { flipped } = this.state;

    return (
      <section className="card__container">
        <div
          className={`${flipped ? 'card flipped' : 'card'}`}
          onClick={this.flipCard}
        >
          <div className={`card__face card__face__front--${contentFrontType}`}>
            <FlipButton cardSide="front" isFirst={true} contentType={contentFrontType} />
            <FlashcardContent
              content={contentFront}
              contentType={contentFrontType}
            />
          </div>
          <div className="card__face card__face__back">
            <FlipButton cardSide="back" isFirst={true} contentType={contentBackType} />
            <FlashcardContent
              content={contentBack}
              contentType={contentBackType}
            />
          </div>
        </div>
      </section>
    )
  }
}
