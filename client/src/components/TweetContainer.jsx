import React from 'React';
import TweetList from './TweetList';

var tweets = [{
  id: 1,
  username: 'jaspercarrot',
  realname: 'Jasper Carrot',
  text: 'has anyone got any biscuits?'
  },
  {
  id: 2,
  username: 'lennyhenry',
  realname: 'Leonard Henry',
  text: "man, i'd love a biscuit"
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
      <div>
      <h1>This is Not Twitter</h1>
      <TweetList tweets={this.state.data}/>
      </div>
      )
  }
}

export default TweetContainer;