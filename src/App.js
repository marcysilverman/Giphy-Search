import React from 'react';
import SearchBar from './components/SearchBar';
import GiftList from './components/GifList';
import request from 'superagent';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
          gifs: [
    
        ]
      }
    };

  handleTermChange = (term) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&key=ZSH6eZC3KxMwJPfA9EVEN6gEfIm5KB48&limit=10`
    request.get(url, (err, res) => {
      this.setState({ gifs: res.body.data })
    });
  }

  render() {
    return (  
      <div>
        <SearchBar onChange={this.handleTermChange} />
        <GiftList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default App;
