
import React from 'react';
import GifItem from './GifItem';
import styles from 'styled-components';

const GifUl = styles.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
`;
const GifList = (props) => {
  const gifItems = props.gifs.map((image) => {
    return <GifItem key={image.id} gif={image} />
  });
    return (
      <GifUl> {gifItems} </GifUl>
    )
}

export default GifList;