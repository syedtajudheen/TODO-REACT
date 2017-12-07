import { combineReducers } from 'redux';
import reducer_todo from './reducer_todo.js'

//USED_TO_COMBINE_REDUCERS
const reducer = combineReducers({
    todos: reducer_todo,
});

export default reducer;