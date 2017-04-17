import React from 'react';
import TweetModel from '../models/TweetModel'
import TweetContainer from './TweetContainer'

class TweetInput extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div id='tweet-input-container'>
        <textarea id="tweet-input"></textarea>
        <button onClick={() => {this.handleClick()}}>Share your thoughts...</button>
      </div>
      )
  }

  handleClick(){
   console.log('cleeeeeeek')
   var text = document.querySelector('#tweet-input').value;
   var tweet = new TweetModel(text);
   console.log(tweet);
  }
}

export default TweetInput;