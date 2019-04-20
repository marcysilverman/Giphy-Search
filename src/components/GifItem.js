import React from 'react';
import styles from 'styled-components';

const Gifs = styles.li`
  margin: 2em;
  img {
    max-width: 500px;
    max-height: 700px;
    border: 20px solid;
    border-image-source: url('https://cdn.shopify.com/s/files/1/2255/7955/products/rainbow_gradient_paper_2048x.jpg?v=1538150385');
    border-image-slice: 60 30;
  }
`;

const GifItem = (image) => {
  return (
    <Gifs>
      <img src={image.gif.images.downsized.url} alt="gif items" />
    </Gifs>
  )
}

export default GifItem;