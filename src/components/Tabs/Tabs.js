import React, { Component } from 'react';
import './Tabs.css';

class Tabs extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      items: props.items,
      activeItem: props.items ? props.items[0] : null
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      items: props.items,
      activeItem: props.items[0]
    });
  }

  onItemClick(index, evt) {
    evt.preventDefault();

    if (!this.state.items[index]) {
      return;
    }

    this.setState({
      activeItem: this.state.items[index]
    });
  }
  
  render() {
    const tabItems = this.state.items.map((value, index) => {
      return (
        <li role="presentation" className={this.state.activeItem === value ? 'active' : ''}>
          <a href="#" onClick={this.onItemClick.bind(this, index)}>{value.title}</a>
        </li>
      );
    });

    return (
      <div className="Tabs">
        <ul className="nav nav-tabs">
          {tabItems}
        </ul>
        <div className="TabContent">
          {this.state.activeItem ? this.state.activeItem.content : 'Loading...'}
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  items: React.PropTypes.array.isRequired
};

export default Tabs;
