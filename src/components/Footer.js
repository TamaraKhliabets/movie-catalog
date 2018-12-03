import React from 'react';

function Footer() {
  const url = 'https://developers.themoviedb.org/3';
  return (
    <div className="footer">
      <a href={url}>The Movie Database API</a>
    </div>);
}

export default Footer;
