import React, { Component } from 'react';
import Header from 'components/Header';
import List from 'components/List';
import ButtonFilterHeader from 'components/ButtonFilterHeader';

const url = 'http://localhost:3001';

class Home extends Component {

  state = {
    items: [],
    filterby: 'ALL'
  }

  componentDidMount() {
    fetch(url+'/')
      .then(response => response.json())
      .then(json => {
        const jsonParsed = json.map(item => ({
          text: item.text,
          completed: item.completed,
          id: item._id
        }));

        this.setState({ items: jsonParsed});
      });
  }


  onAdd = text => {
    fetch(url+'/', {
      method: 'POST',
      body: JSON.stringify({
        text,
        completed: false,
      }), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      this.setState({
        items: [
         {
           text: response.text,
           id: response._id,
           completed: response.completed,
          },
          ...this.state.items,
        ]
      });
    });

  }

  onChangeFilter = (filterby) => {
    this.setState({
        filterby,
    });
  }

  onDelete = (id) => {
    const { items } = this.state;


    fetch(url + '/' + id, {
      method: 'DELETE',
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
      const NewList = items.filter(news => news.id !== id);
      this.setState({ items: NewList });
    });
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
