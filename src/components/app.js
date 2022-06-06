import React from 'react';
import '../style.scss';
import Typewriter from 'typewriter-effect';
import Card from './card';

function App(props) {
  return (
    <div>
      <div className="text-8xl p-20 text-center">
        <Typewriter
          options={{
            pauseFor: 100000000,
            strings: ['Welcome to gitDrag'],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className="flex flex-row justify-around">
        <Card download_link="hi" platform="Mac" img_src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png" />
        <Card download_link="hi"
          platform="Windows"
          img_src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Windows_logo_-_2012_derivative.svg/1200px-Windows_logo_-_2012_derivative.svg.png"
        />
        <Card download_link="hi" platform="Linux" img_src="https://cdn.freebiesupply.com/logos/thumbs/2x/linux-tux-1-logo.png" />
      </div>
    </div>
  );
}

export default App;
