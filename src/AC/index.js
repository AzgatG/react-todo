import {DELETE_TODO, TOGGLE_TODO, CHANGE_FILTER} from '../constants'


export function toggleTodo(id, name) {
  return {
    type: TOGGLE_TODO,
    payload: { id, name }
  }
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: {id}
  }
}

export function changeFilter(filter) {
  return {
    type: CHANGE_FILTER,
    payload: {filter}
  }
}