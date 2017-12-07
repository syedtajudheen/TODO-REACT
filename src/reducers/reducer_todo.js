import types from '../actions/actionTypes';

// const initialState = [
//     {
//         id: 0,
//         title: 'This is a todo',
//         completed: false,
//     },
// ];

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