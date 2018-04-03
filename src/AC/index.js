import {
  DELETE_TODO,
  TOGGLE_TODO,
  CHANGE_FILTER,
  ADD_TODO,
  EDIT_TODO,
} from '../constants';


export function toggleTodo(id, name) {
  return {
    type: TOGGLE_TODO,
    payload: { id, name }
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: {id}
  };
}

export function changeFilter(filter) {
  return {
    type: CHANGE_FILTER,
    payload: {filter}
  };
}

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: {todo},
    generateId: true,
  };
}

export function editTodo(todo) {
  return {
    type: EDIT_TODO,
    payload: {todo}
  };
}