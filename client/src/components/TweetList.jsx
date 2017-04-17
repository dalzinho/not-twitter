import React from 'React';
import Tweet from './Tweet';

class TweetList extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    const tweetComponents = this.props.tweets.map((tweet) => {
      return (
        <Tweet key={tweet.id} text={tweet.text} username={tweet.username} realname={tweet.realname} />
        );
    })
    return (
        <div>
          {tweetComponents}
        </div>
      )
  }
}



export default TweetList;