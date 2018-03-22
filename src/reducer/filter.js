import {CHANGE_FILTER, SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from '../constants'


export default (filterState = SHOW_ALL, action) => {
  const {type, payload} = action
  
  switch (type) {
    case CHANGE_FILTER: return payload.filter;
  }

  return filterState
}