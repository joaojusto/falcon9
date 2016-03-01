import React from 'react';

export const Layout = ({ content }) => (
  <div>
    <h1>Falcon 9</h1>
    <hr></hr>
    <div>{ content }</div>
  </div>
);

export const Welcome = ({ name }) => (
  <div>
    Hello, { name }.
  </div>
);
