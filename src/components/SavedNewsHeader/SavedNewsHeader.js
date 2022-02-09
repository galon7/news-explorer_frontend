import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './SavedNewsHeader.css';

function SavedNewsHeader({ savedArticles }) {
  const currentUser = React.useContext(CurrentUserContext);

  function getNumberOfArticles() {
    let count = 0;
    savedArticles.forEach((article) => {
      if (article.owner === currentUser._id) count++;
    });
    return count;
  }

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

    console.log(countKeywords);

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

    const remaining = Object.keys(countKeywords).length;

    return { keywordsFirst, keywordsSecond, keywordsThird, remaining };
  }

  const byKeywordsFirstText = `${getKeywords().keywordsFirst}`;
  const byKeywordsSecondText = getKeywords().keywordsSecond && `, ${getKeywords().keywordsSecond}`;
  const byKeywordsThirdText = `, and ${getKeywords().remaining} other`;

  // if (!keywordsSecond) return '';
  //   else if (keywordsThird && remaining === 0) return `and ${getKeywords().keywordsThird}`;
  //   return `, and ${getKeywords().remaining} other`;
  // }

  return (
    <section className="savedNewsHeader">
      <h1 className="savedNewsHeader__title">Saved articles</h1>
      <h2 className="savedNewsHeader__subtitle">
        {currentUser.name}, you have {getNumberOfArticles()} saved articles
      </h2>
      <p className="savedNewsHeader__keywords">
        By keywords:{' '}
        <span className="savedNewsHeader__keyword">
          {byKeywordsFirstText}
          {byKeywordsSecondText}
          {getKeywords().keywordsThird ? byKeywordsThirdText : 'hello'}
        </span>
      </p>
    </section>
  );
}

export default SavedNewsHeader;
