import React, { Component } from 'react';
import Header from 'components/Header';
import List from 'components/List';

class Home extends Component {
  state = {
    items: []
  }

  onAdd = text => {
    this.setState({
      items: [
        {
          id: this.state.items.length + 1,
          text,
          completed: false
        },
        ...this.state.items,
      ]
    });
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <Header onAdd={this.onAdd} />
        <List items= {items}/>
      </div>
    );
  }
}

export default Home;
