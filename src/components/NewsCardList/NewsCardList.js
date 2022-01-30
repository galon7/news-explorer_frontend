import React from 'react';
import { useLocation } from 'react-router-dom';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({ searchResults }) {
  const { pathname } = useLocation();
  console.log(searchResults);
  return (
    <section className="newsCardList">
      {pathname === '/' && <h2 className="newsCardList__title">Search results</h2>}

      <section className="newsCardList__cards">
        {searchResults.map((card, i) => (
          <NewsCard
            key={i}
            cardImage={card.urlToImage}
            cardDate={card.publishedAt}
            cardTitle={card.title}
            cardText={card.description}
            cardSource={card.source.name}
          />
        ))}
      </section>
      {pathname === '/' && <button className="newsCardList__button">Show more</button>}
    </section>
  );
}

export default NewsCardList;
