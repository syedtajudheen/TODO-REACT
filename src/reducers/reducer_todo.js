import types from '../actions/actionTypes';

//REDUCERS_TO_FETCH_&_ADD_TODOS
export default (state = [], action) => {
    switch (action.type) {
        case types.FETCH_TODO: 
            return state.concat(action.payload.data)
            // return [action.payload.data, ...state]
            case types.ADD_TODO:
            return [action.payload.data, ...state]
          default:
                return state;
    }
}