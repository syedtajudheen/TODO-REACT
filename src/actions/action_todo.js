import types from './actionTypes';
import axios from 'axios';
import {connect} from 'react-redux'

const URL = 'https://jsonplaceholder.typicode.com/todos';

export function addTodo(dispatch) {
    const request = axios({
        method: 'GET',
        url: URL,
        headers: []
    });

    request.then((response) => {
        dispatch(addTodoSucess(response));
        console.log("sucess")
    })
        .catch((err) => {
            console.log("error")
        })

    return {
        type: types.ADD_TODO,
        payload: request
    };
}
export function addTodoSucess(todos) {
    return {
        type: types.ADD_TODO,
        payload: todos
    };
}



// export const addTodo = (request) => { 
//     return {
//         type: types.ADD_TODO ,
//          request
//     }

// }



// export const fetchtodos = () => {
  
//     return (dispatch) => {
     
//         return axios.get(URL)
//             .then(response => {
//                 var request= response.data;
//                 dispatch(addTodo(request))
//             })
//             .catch(error => {
//                 throw (error);
//             });
//     };
// };