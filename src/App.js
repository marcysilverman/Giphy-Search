import React from 'react';
import SearchBar from './components/SearchBar';
import request from 'superagent';
import GifList from './components/GifList';
import styles from 'styled-components';
import 'normalize.css';

const HeaderStyle = styles.h1`
  color: white;
  padding: .5em;
  font-size: 50px;

`;


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gifs: []
    }
  };

  handleChange = (term) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term}&key=ZSH6eZC3KxMwJPfA9EVEN6gEfIm5KB48&limit=5`;
    request.get(url, (err, res) => {
      this.setState({ gifs: res.body.data });
    })
    
  }

  render() {
    return (  
      <>
          <HeaderStyle> GIPHY SEARCH</HeaderStyle>
          <SearchBar onChange={this.handleChange} />
          <GifList gifs={this.state.gifs} />
      </>
    );
  }
}

export default App;
