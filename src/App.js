import React, { Component } from 'react';
import Tabs from './components/Tabs';
import Author from './components/Author';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      authorData: [],
      error: false
    };
  }

  componentDidMount() {
    this.fetchAuthorData('heminway', 'Ernest Heminway');
    this.fetchAuthorData('dickens', 'Charles Dickens');
    this.fetchAuthorData('shakespeare', 'William Shakespeare');
  }

  fetchAuthorData(query, author, cb) {
    fetch(this.getURL(query)).then((response) => {
      return response.json();
    }).then((json) => {
      const authorData = [...this.state.authorData];
      authorData.push({'author': author, 'data': json.results});

      this.setState({
        authorData: authorData,
        error: false
      });
    }).catch((error) => {
      console.log(`Failed to fetch data for ${query}`, error);

      this.setState({
        error: true
      });
    })
  }

  getURL(query) {
    return `http://localhost:3090?url=${encodeURIComponent(`https://itunes.apple.com/search?country=gb&term=${query}&media=ebook&limit=10`)}`;
  }

  render() {
    const tabItems = this.state.authorData.map((value, index) => {
      return {
        'title': value.author,
        'content': (
          <Author items={value.data} />
        )
      };
    });

    const content = this.state.error ? (
      <div className="alert alert-danger">
        Something went wrong. We couldn't fetch author data :(
      </div>
    ) : (
      <Tabs items={tabItems} />
    );

    return (
      <div className="App">
        {content}
      </div>
    );
  }
}

export default App;
