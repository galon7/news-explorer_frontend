import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './SavedNewsHeader.css';

function SavedNewsHeader({ savedArticles }) {
  const currentUser = React.useContext(CurrentUserContext);

  function getKeywords() {
    const countKeywords = savedArticles.reduce((acc, item) => {
      if (item.owner !== currentUser._id) {
        return acc;
      }

      if (!acc[item.keyword]) {
        acc[item.keyword] = 0;
      }

      acc[item.keyword]++;

      return acc;
    }, {});

    function calculateHighest() {
      const highest = Math.max(...Object.values(countKeywords));
      const nameOfHighest = Object.keys(countKeywords).find(
        (key) => countKeywords[key] === highest
      );
      delete countKeywords[nameOfHighest];
      return nameOfHighest;
    }

    const keywordsFirst = calculateHighest();
    const keywordsSecond = calculateHighest();
    const keywordsThird = calculateHighest();

    const remaining = Object.keys(countKeywords).length + 1;

    return { keywordsFirst, keywordsSecond, keywordsThird, remaining };
  }

  const byKeywordsFirstText = getKeywords().keywordsFirst && `${getKeywords().keywordsFirst}`;
  const byKeywordsSecondText = getKeywords().keywordsSecond && `, ${getKeywords().keywordsSecond}`;
  const byKeywordsThirdText =
    getKeywords().keywordsThird && getKeywords().remaining === 1
      ? `, and ${getKeywords().keywordsThird}`
      : `, and ${getKeywords().remaining} other`;

  return (
    <section className="savedNewsHeader">
      <h1 className="savedNewsHeader__title">Saved articles</h1>
      <h2 className="savedNewsHeader__subtitle">
        {currentUser.name}, you have {savedArticles.length} saved articles
      </h2>
      <p className="savedNewsHeader__keywords">
        By keywords:{' '}
        <span className="savedNewsHeader__keyword">
          {byKeywordsFirstText}
          {byKeywordsSecondText}
          {getKeywords().keywordsThird ? byKeywordsThirdText : ''}
        </span>
      </p>
    </section>
  );
}

export default SavedNewsHeader;
