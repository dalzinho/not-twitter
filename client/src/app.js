import React from 'react';
import ReactDOM from 'react-dom';
import TweetContainer from './components/TweetContainer';

window.onload = function(){
  ReactDOM.render(
    <TweetContainer/>,
    document.getElementById('app')
  );
}
