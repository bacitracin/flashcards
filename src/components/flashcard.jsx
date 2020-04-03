import React, { Component } from 'react';
import '../stylesheets/index.css';
import FlashcardContent from './FlashcardContent';
import FlipButton from './FlipButton';;

export default class Flashcard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstFlip: false,
      flipped: false,
    }
    this.flipCard = this.flipCard.bind(this);
  }

  flipCard() {
    if (!this.state.firstFlip) {
      this.setState({ firstFlip: true, flipped: !this.state.flipped })
    } else {
      this.setState({ flipped: !this.state.flipped });
    }
  }

  render() {
    const {
      contentFront,
      contentFrontType,
      contentBack,
      contentBackType,
      isFirstCard
    } = this.props;

    const { firstFlip, flipped } = this.state;
    const showFlipText = isFirstCard && !firstFlip;

    return (
      <section className="card__container">
        <div
          className={`${flipped ? 'card flipped' : 'card'}`}
          onClick={this.flipCard}
        >
          <div className={`card__face card__face__front--${contentFrontType}`}>
            <FlipButton
              cardSide="front"
              contentType={contentFrontType}
              showFlipText={showFlipText}
            />
            <FlashcardContent
              content={contentFront}
              contentType={contentFrontType}
            />
          </div>
          <div className="card__face card__face__back">
            <FlipButton
              cardSide="back"
              contentType={contentBackType}
              showFlipText={false}
            />
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
