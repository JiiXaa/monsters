import React from 'react';
import './card.styles.css';

export const Card = props => (
  <div className='card-container'>
    <img
      alt='cat'
      src={`https://robohash.org/${props.monster.id}?set=set4&size=180x240`}
    />
    <h2> {props.monster.name} </h2>
    <p> {props.monster.email} </p>
  </div>
);
