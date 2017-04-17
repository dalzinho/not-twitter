import React from 'react';

class Tweet extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div id="comment">
        {this.props.text}
        <ul id="tweet-info">
          <li>{this.props.username}</li>
          <li>{this.props.realname}</li>
        </ul>
      </div>
      )
  }
}

export default Tweet;