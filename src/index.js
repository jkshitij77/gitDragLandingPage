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
import {
  BrowserRouter, Routes, Route, NavLink, useParams,
} from 'react-router-dom';

// function App() {
//   return <div className="test">All the REACT are belong to us!</div>;
// }
function About(props) {
  return <div> All there is to know about me </div>;
}
function Welcome(props) {
  return <div>Welcome</div>;
}
function Nav(props) {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/test/id1">test id1</NavLink></li>
        <li><NavLink to="/test/id2">test id2</NavLink></li>
      </ul>
    </nav>
  );
}
function Test(props) {
  const { id } = useParams();
  return <div> ID: {id} </div>;
}
function FallBack(props) {
  return <div>URL Not Found</div>;
}

function App(props) {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/about" element={<About />} />
          <Route path="/test/:id" element={<Test />} />
          <Route path="*" element={<FallBack />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// function App() {
//   return <div className="test">All the REACT are belong to us!</div>;
// }

const root = createRoot(document.getElementById('main'));
root.render(<App />);
