import React from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';

function SavedNews({ articles }) {
  return (
    <section className="savedNews">
      <SavedNewsHeader savedArticles={articles} />
    </section>
  );
}

export default SavedNews;
