import React from 'react';
import '../style.scss';

function Card(props) {
  return (
    <div className="max-w-sm w-64 bg-white rounded-lg border  border-gray-200 shadow-md dark:bg-gray-500 dark:border-gray-400">
      <a href={props.download_link} target="_blank" rel="noreferrer">
        <img className="rounded-t-lg h-56 p-8" src={props.img_src} alt="Bro where" />
      </a>
      <div className="p-5">
        <a href={props.download_link} target="_blank" rel="noreferrer">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.platform}</h5>
        </a>
        <a href={props.download_link}
          target="_blank"
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none
        focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          rel="noreferrer"
        >
          Download
        </a>
      </div>
    </div>
  );
}

export default Card;
