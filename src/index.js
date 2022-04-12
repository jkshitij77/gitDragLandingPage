import $ from 'jquery';
import './style.scss';
// const $ = require('jquery');

let num = 0;

setInterval(() => {
  num += 1;
  // console.log(`hello ${num}`);
  $('#main').html(`You have been here for ${num} seconds`);
}, 1000);
