import React, { Component } from 'react';
import './Book.css';

class Book extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      description: props.description,
      price: props.price,
      url: props.url
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      title: props.title,
      description: props.description,
      price: props.price,
      url: props.url
    });
  }

  render() {
    return (
      <div className="Book">
        <div className="panel panel-default">
          <div className="panel-body">
            <h2>
              <a href={this.state.url} target="_blank">{this.state.title}</a>
            </h2>
            <p
              dangerouslySetInnerHTML={{'__html': this.state.description}}
            />
            <span className="label label-info">
              {this.state.price ? `$${this.state.price}` : 'FREE'}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

Book.propTypes = {
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  price: React.PropTypes.number.isRequired,
  url: React.PropTypes.string.isRequired
};

export default Book;
