import types from '../actions/actionTypes';



const initialState = [
    {
        id: 0,
        title: 'This is a todo',
        completed: false,
    },
];

export default (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TODO: 
            return ( action.payload);
    
       
     
          default:
                return state;
        }
    }