import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';

function SavedNews({ articles, isLoggedIn, handleSaveBookmark, handleDeleteBookmark }) {
  const currentUser = React.useContext(CurrentUserContext);

  function getUserArticles() {
    const currentUserArticles = [];
    articles.forEach((article) => {
      if (article.owner === currentUser._id) {
        currentUserArticles.push(article);
      }
    });
    return currentUserArticles;
  }

  return (
    <section className="savedNews">
      <SavedNewsHeader savedArticles={getUserArticles()} />
      <NewsCardList
        searchResults={getUserArticles()}
        isLoggedIn={isLoggedIn}
        handleSaveBookmark={handleSaveBookmark}
        handleDeleteBookmark={handleDeleteBookmark}
      />
    </section>
  );
}

export default SavedNews;
