import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const now = new Date();
ReactDOM.render(
  <>
    <h1>Anas Shaikh Netflix picks</h1>
    <p>Here is my top 5 Netflix shows of all time!</p>
    <ol>
      <li>Stranger Things</li>
      <li>Money Heist</li>
      <li>Sacred Games</li>
      <li>Mirzapur</li>
      <li>Braking Bad</li>
    </ol>
    <p>
      {`Today is ${now.toLocaleDateString()}`}
    </p>
    <p>
      {`Time is ${now.toLocaleTimeString()}`}
    </p>
  </>,
  document.getElementById('root')
);

