import React, { Component } from 'react';
import Book from './components/Book';

class Author extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      items: props.items
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      items: props.items
    });
  }

  render() {
    const items = this.state.items.map((value, index) => {
      return (
        <Book
          title={value.trackName}
          description={value.description}
          price={value.price}
          url={value.trackViewUrl}
        />
      );
    });

    return (
      <div className="Author">
        {items}
      </div>
    );
  }
}

Author.propTypes = {
  items: React.PropTypes.array.isRequired
};

export default Author;
