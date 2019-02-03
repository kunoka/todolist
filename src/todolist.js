import React, {Component} from 'react';
import 'antd/dist/antd.css';
import store from './store';
import axios from 'axios';
import {getChangeItemValueAction, getAddTodoItemAction,getDeleteTodoItemAction, getTodoListAction} from './store/actionCreators';
import TodolistUI from './TodolistUI';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  componentDidMount() {
    const action = getTodoListAction();
    console.log(action);
    store.dispatch(action);


  }
  render() {
    const {inputValue, list} = this.state;
    return (
      <TodolistUI
        inputValue={inputValue}
        list={list}
        handleChange = {this.handleChange}
        handleSubmit = {this.handleSubmit}
        handleDelete = {this.handleDelete}
      />
    )
  }

  handleChange(e) {
    const action = getChangeItemValueAction(e.target.value);
    store.dispatch(action);
  }

  handleSubmit() {
    const action = getAddTodoItemAction();
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleDelete(index) {
    const action = getDeleteTodoItemAction(index);
    store.dispatch(action);
  }
}

export default TodoList;