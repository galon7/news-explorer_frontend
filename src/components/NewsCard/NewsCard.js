import React from 'react';
import './NewsCard.css';
import bookmark from '../../images/bookmark.svg';

function NewsCard({ cardImage, cardDate, cardTitle, cardText, cardSource }) {
  return (
    <div className="newsCard">
      <img className="newsCard__image" src={cardImage} alt={cardTitle} />
      <div className="newsCard__category">Yellowstone</div>
      <div className="newsCard__message">Remove from saved</div>
      <button className="newsCard__action-button">
        <img src={bookmark} alt="bookmark" />
      </button>
      <article className="newsCard__article">
        <p className="newsCard__date">{cardDate}</p>
        <h3 className="newsCard__title">{cardTitle}</h3>
        <p className="newsCard__text">{cardText}</p>
        <p className="newsCard__source">{cardSource}</p>
      </article>
    </div>
  );
}

export default NewsCard;
