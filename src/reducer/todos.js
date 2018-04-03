import {todos as defaultState} from '../fixtures';
import {
  DELETE_TODO,
  TOGGLE_TODO,
  ADD_TODO,
  EDIT_TODO,
} from '../constants';


export default (todosState = defaultState, action) => {
  const {type, payload, randomId} = action;
  
  switch (type) {
  case DELETE_TODO: return todosState.filter( todo => todo.id !== payload.id);

  case TOGGLE_TODO: 
    const {id, name} = payload;
    return todosState.map(todo => (todo.id === id) ? {...todo, [`${name}`]: !todo[`${name}`]} : todo);

  case ADD_TODO: return [...todosState, {title: payload.todo, description: '', closed: false, id: randomId}];    
  case EDIT_TODO: return todosState.map( item => item.id === payload.todo.id ? {...item, title: payload.todo.title, editingMode: false} : item);
  }

  return todosState;
};