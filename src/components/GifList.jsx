import React from 'react';
import Gif from './Gif';

const GifList = (props) => {
  return (
    <div className="gif-list">
      {props.gifs.map((gif) => (
        <Gif
          Gifid={gif.id}
          key={gif.id}
          changeCurrent={props.changeCurrent}
        />
      ))}
    </div>
  );
};

export default GifList;
