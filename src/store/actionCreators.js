import {Change_ITEM_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_TODO_LIST, GET_TODO_LIST} from './actionTypes';
import axios from 'axios';

export const getChangeItemValueAction = (value) => {
  return {
    type: Change_ITEM_VALUE,
    value
  }
}
export const getAddTodoItemAction = () => {
  return {
    type: ADD_TODO_ITEM
  }
}
export const getDeleteTodoItemAction = (index) => {
  return {
    type: DELETE_TODO_ITEM,
    index
  }
}
export const initListAction = (value) => {
  return {
    type: INIT_TODO_LIST,
    value
  }
}
export const getTodoListAction = () => {
  return {
    type: GET_TODO_LIST
  }
}