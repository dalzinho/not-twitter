import React from 'react';
import TweetList from './TweetList';
import TweetInput from './TweetInput';

var tweets = [{
  id: 1,
  username: '@jasper',
  realname: 'Jasper Carrot',
  text: 'has anyone got any biscuits?'
  },
  {
  id: 2,
  username: '@lennyhenry',
  realname: 'Leonard Henry',
  text: "man, i'd love a biscuit"
  },
  {
    id: 3,
    username: '@deslennis',
    realname: 'Les Dennis',
    text: "What's happened to all the biscuits?"
  },
  {
    id: 4,
    username: '@davros',
    realname: 'Robert M. Davro III',
    text: "I could murder a Hobnob"
  }]
  
class TweetContainer extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      data: tweets
    }
  }

  render(){
    return (
      <div id="container">
      <h1>This is <strong>Not</strong> Twitter</h1>
      <TweetInput />
      <TweetList tweets={this.state.data}/>
      </div>
      )
  }

  addtweet(tweet){
    var id = tweets.length + 1
    tweet.setId(id);
    tweets.push(tweet);
  }
}

export default TweetContainer;