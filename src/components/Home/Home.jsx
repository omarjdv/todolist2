import React, { Component } from 'react';
import Header from 'components/Header';
import List from 'components/List';
import ButtonFilterHeader from 'components/ButtonFilterHeader';
import todosServices from 'services/todos.services';

class Home extends Component {

  state = {
    items: [],
    filterby: 'ALL'
  }

  async componentDidMount() {
    const mount = await todosServices.getTodos();
    this.setState({ items: mount});
  }

 onAdd = async (text) => {
  const add = await todosServices.addTodos(text);
    this.setState({
      items: [
        {
          text: add.text,
          id: add._id,
          completed: add.completed,
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

  onDelete = async (id) => {
    const { items } = this.state;
    const isdelete = await todosServices.deleteTodos(id);
    if(isdelete){
      const NewList = items.filter(news => news.id !== id);
      this.setState({ items: NewList });
    }
  }

  onChangeTask = async (id, body) => {
    console.log("Modificó");
    const { items } = this.state;
    const itemUpdated = await todosServices.changeTodos(id,body);
    const newItems = items.map(item => {
      if (item.id === id){
        return(itemUpdated);
      }
      return item;
    });
    this.setState({
      items: newItems
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
