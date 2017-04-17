var Tweet = function(text){
  this.text = text;
  this.username = 'jdaly';
  this.realname = 'John Daly';
  this.timeStamp = Date.now();
}

Tweet.prototype = {
  setId: function(int){
    this.id = int;
  }
}

module.exports = Tweet;