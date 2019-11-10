import React, { Component } from 'react';
import Header from 'components/Header';
import List from 'components/List';
import ButtonFilterHeader from 'components/ButtonFilterHeader';

class Home extends Component {

  state = {
    items: [],
    filterby: 'ALL'
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

  onChangeFilter = (filterby) => {
    this.setState({
        filterby,
    });
  }

  onDelete = (id) => {
    const { items } = this.state;
    const NewList = items.filter(news => news.id !== id);
    this.setState({ items: NewList });
   }
  onChangeTask = (id) => {
    console.log('hola', id);
    const { items } = this.state;
    const newItem = items.map(item => {
        if (item.id === id){
          return({
              ...item,
              completed: !item.completed
          });
        }
        return item;
    });
    this.setState({
      items: newItem
    });
  }


  render() {
    const { items, filterby } = this.state;

    let itemsToRender = items;

    if (filterby === 'COMPLETED'){
      itemsToRender = items.filter(item => item.completed)
    }

    if (filterby === 'NOT COMPLETED'){
      itemsToRender = items.filter(item => !item.completed)
    }


    return (
      <div>
        <Header onAdd={this.onAdd} />
        <ButtonFilterHeader onChangeFilter={this.onChangeFilter} filterby={filterby} />
        <List items={itemsToRender} onChange={this.onChangeTask} onDelete={this.onDelete} onCompleted={this.onCompleted}/>
      </div>
    );
  }
}


export default Home;
