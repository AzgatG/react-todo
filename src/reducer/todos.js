import {todos as defaultTodos} from '../fixtures'
import {DELETE_TODO, TOGGLE_TODO} from '../constants'


export default (todosState = defaultTodos, action) => {
  const {type, payload} = action
  
  switch (type) {
    case DELETE_TODO: return todosState.filter( todo => todo.id !== payload.id);
    case TOGGLE_TODO: 
      const {id, name} = payload;

      return todosState.map(todo => (todo.id === id) ? {...todo, [`${name}`]: !todo[`${name}`]} : todo)
  }

  return todosState
}