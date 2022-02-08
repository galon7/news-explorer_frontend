import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { convertDate } from '../../utils/FormatDate';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({ searchResults, isLoggedIn, handleSaveBookmark }) {
  const [cardIndex, setCardIndex] = useState(3);
  const { pathname } = useLocation();
  function updateIndex() {
    setCardIndex(cardIndex + 3);
  }

  return (
    <section className="newsCardList">
      {pathname === '/' && <h2 className="newsCardList__title">Search results</h2>}
      <section className="newsCardList__cards">
        {searchResults.slice(0, cardIndex).map((card, i) => (
          <NewsCard
            key={i}
            keyword={card.keyword}
            cardImage={card.urlToImage}
            cardDate={convertDate(card.publishedAt)}
            cardTitle={card.title}
            cardText={card.description}
            cardSource={card.source.name}
            url={card.url}
            isLoggedIn={isLoggedIn}
            handleSaveBookmark={handleSaveBookmark}
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
