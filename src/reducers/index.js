import { combineReducers } from 'redux';
import reducer_todo from './reducer_todo.js'

const reducer = combineReducers({
    todos: reducer_todo,
});

export default reducer;