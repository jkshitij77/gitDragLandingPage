// import $ from 'jquery';
// import './style.scss';
// // const $ = require('jquery');

// let num = 0;

// setInterval(() => {
//   num += 1;
//   // console.log(`hello ${num}`);
//   $('#main').html(`You have been here for ${num} seconds`);
// }, 1000);

import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';

// function App() {
//   return <div className="test">All the REACT are belong to us!</div>;
// }

function App() {
  return <div className="test">All the REACT are belong to us!</div>;
}

const root = createRoot(document.getElementById('main'));
root.render(<App />);
