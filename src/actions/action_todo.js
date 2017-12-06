import types from './actionTypes';
import axios from 'axios';
import {connect} from 'react-redux'
import $ from 'jquery'; 

const URL = 'https://jsonplaceholder.typicode.com/todos';



export function fetchtodo(){
    const request = axios.get(URL)
  
    return{
        type : types.ADD_TODO,
        payload: request
    }
}






















// export const fetchrec = (json) =>{
//     type: types.ADD_TODO,
//    json
// }

// export const fetchtodo=(dispatch)=>{

//     return $.getJSON('https://jsonplaceholder.typicode.com/todos/1',)
//         .then(json => dispatch(fetchrec(json)))
// }

// export const fetchneeded = () => (dispatch, getState) => {
//     return dispatch(fetchtodo())
// } 

// export function addTodo(dispatch) {

    
//     const request = axios({
//         method: 'GET',
//         url: URL,
//         headers: []
//     });

//     request.then((response,data) => {
       
//         const todos =response.data;
//         console.log(todos)
//  dispatch(addTodoSucess(todos));
//     })
//         .catch((err) => {
//             console.log("error")
//         })

//     // return {
//     //     type: types.ADD_TODO,
//     //     payload: request
//     // };
// }



// export function addTodoSucess(todos) {
//     return {
//         type: types.ADD_TODO,
//         payload: todos
//     };
// }



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