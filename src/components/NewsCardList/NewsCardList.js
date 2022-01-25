import React from 'react';
import { useLocation } from 'react-router-dom';
import './NewsCardList.css';
import img1 from '../../images/img1.png';
import img2 from '../../images/img2.png';
import img3 from '../../images/img3.png';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList() {
  const { pathname } = useLocation();

  return (
    <section className="newsCardList">
      {pathname === '/' && <h2 className="newsCardList__title">Search results</h2>}

      <section className="newsCardList__cards">
        <NewsCard
          cardImage={img1}
          cardDate="November 4, 2020"
          cardTitle="Everyone Needs a Special 'Sit Spot' in Nature"
          cardText={
            'Ever since I read Richard Louv\'s influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find'
          }
          cardSource="treehugger"
        />
        <NewsCard
          cardImage={img2}
          cardDate="February 19, 2019"
          cardTitle="Nature makes you better"
          cardText={
            'We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.'
          }
          cardSource="national geographic"
        />
        <NewsCard
          cardImage={img3}
          cardDate="October 19, 2020"
          cardTitle="Nostalgic Photos of Tourists in U.S. National Parks"
          cardText={
            '“The linking together of the Cascade and Death Canyon trails, at their heads, took place on October 1, 1933, and marked the first step in the realization of a plan whereby the hiker will be'
          }
          cardSource="National parks traveler"
        />
        <NewsCard
          cardImage={img3}
          cardDate="October 19, 2020"
          cardTitle="Nostalgic Photos of Tourists in U.S. National Parks"
          cardText={
            '“The linking together of the Cascade and Death Canyon trails, at their heads, took place on October 1, 1933, and marked the first step in the realization of a plan whereby the hiker will be'
          }
          cardSource="National parks traveler"
        />
      </section>
      {pathname === '/' && <button className="newsCardList__button">Show more</button>}
    </section>
  );
}

export default NewsCardList;
