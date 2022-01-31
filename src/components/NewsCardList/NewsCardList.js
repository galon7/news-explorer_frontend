import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { convertDate } from '../../utils/FormatDate';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({ searchResults }) {
  const [threeResults, setThreeResults] = useState(searchResults.slice(0, 3));
  const { pathname } = useLocation();
  let threeFrom = 3;

  function addThreeResults() {
    console.log(threeResults);
    setThreeResults(searchResults.slice(threeFrom, threeFrom + 3));
    threeFrom = threeFrom + 3;
  }

  return (
    <section className="newsCardList">
      {pathname === '/' && <h2 className="newsCardList__title">Search results</h2>}

      <section className="newsCardList__cards">
        {threeResults.map((card, i) => (
          <NewsCard
            key={i}
            cardImage={card.urlToImage}
            cardDate={convertDate(card.publishedAt)}
            cardTitle={card.title}
            cardText={card.description}
            cardSource={card.source.name}
            url={card.url}
          />
        ))}
      </section>
      {pathname === '/' && (
        <button className="newsCardList__button" onClick={addThreeResults}>
          Show more
        </button>
      )}
    </section>
  );
}

export default NewsCardList;
