import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { convertDate } from '../../utils/FormatDate';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({
  searchResults,
  isLoggedIn,
  handleSaveBookmark,
  handleDeleteBookmark,
  bookmarkedCardId,
}) {
  const [cardIndex, setCardIndex] = useState(3);
  const { pathname } = useLocation();
  function updateIndex() {
    setCardIndex(cardIndex + 3);
  }
  return (
    <section className="newsCardList">
      {pathname === '/' && <h2 className="newsCardList__title">Search results</h2>}
      <section className="newsCardList__cards">
        {searchResults
          .slice(0, pathname === '/' ? cardIndex : searchResults.length)
          .map((card, i) => (
            <NewsCard
              key={i}
              keyword={card.keyword}
              cardImage={pathname === '/' ? card.urlToImage : card.image}
              cardDate={pathname === '/' ? convertDate(card.publishedAt) : card.date}
              cardTitle={card.title}
              cardText={pathname === '/' ? card.description : card.text}
              cardSource={pathname === '/' ? card.source.name : card.source}
              url={pathname === '/' ? card.url : card.link}
              isLoggedIn={isLoggedIn}
              handleSaveBookmark={handleSaveBookmark}
              handleDeleteBookmark={handleDeleteBookmark}
              articleCardId={card._id}
              bookmarkedCardId={bookmarkedCardId}
            />
          ))}
      </section>
      {pathname === '/' && cardIndex < searchResults.length && (
        <button className="newsCardList__button" onClick={updateIndex}>
          Show more
        </button>
      )}
    </section>
  );
}

export default NewsCardList;
