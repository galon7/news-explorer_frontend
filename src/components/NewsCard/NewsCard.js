import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './NewsCard.css';
import bookmark from '../../images/bookmark.svg';
import bookmarkMarked from '../../images/bookmark_marked.svg';
import bookmarkHover from '../../images/bookmark_hover.svg';
import trash from '../../images/trash.svg';
import trashHover from '../../images/trash_hover.svg';

function NewsCard({
  cardImage,
  cardDate,
  cardTitle,
  cardText,
  cardSource,
  url,
  isLoggedIn,
  handleSaveBookmark,
  keyword,
}) {
  const [isShown, setIsShown] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const { pathname } = useLocation();
  const currentUser = React.useContext(CurrentUserContext);

  function saveBookmark() {
    setIsBookmarked(true);
    const newsCard = {};
    newsCard.keyword = keyword;
    newsCard.title = cardTitle;
    newsCard.text = cardText;
    newsCard.date = cardDate;
    newsCard.source = cardSource;
    newsCard.link = url;
    newsCard.image = cardImage;
    newsCard.owner = currentUser._id;
    handleSaveBookmark(newsCard);
  }

  function handleBookmarked() {
    isBookmarked ? setIsBookmarked(false) : saveBookmark();
  }

  return (
    <div className="newsCard">
      <img className="newsCard__image" src={cardImage} alt={cardTitle} />
      {pathname !== '/' && <div className="newsCard__category">Yellowstone</div>}
      {isShown && (
        <div className="newsCard__message">
          {pathname === '/' ? 'Sign in to save articles' : 'Remove from saved'}
        </div>
      )}
      {pathname === '/' ? (
        <button
          className="newsCard__action-button"
          onMouseEnter={() => !isLoggedIn && setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
          onClick={isLoggedIn ? handleBookmarked : () => {}}
        >
          {isBookmarked ? (
            <img src={bookmarkMarked} alt="bookmark" />
          ) : (
            <img src={isShown ? bookmarkHover : bookmark} alt="bookmark" />
          )}
        </button>
      ) : (
        <button
          className="newsCard__action-button"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          <img src={isShown ? trashHover : trash} alt="bookmark" />
        </button>
      )}
      <article className="newsCard__article" onClick={() => window.open(url, '_blank')}>
        <p className="newsCard__date">{cardDate}</p>
        <h3 className="newsCard__title">{cardTitle}</h3>
        <p className="newsCard__text">{cardText}</p>
        <p className="newsCard__source">{cardSource}</p>
      </article>
    </div>
  );
}

export default NewsCard;
