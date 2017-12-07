import types from './actionTypes';
import axios from 'axios'; 

const URL = 'https://jsonprovider.herokuapp.com/todos?sort=createdAt%20DESC&limit=15';



export function fetchtodo(){
    const request = axios.get(URL)
    return{
        type : types.FETCH_TODO,
        payload: request
    }
}

export function addtodo(data){
    console.log(data)
    const postrequest = axios.post(URL, 
        {
        userID: 1,
        title: data.title,
        completed: true
    })
  return{
      type : types.ADD_TODO,
      payload : postrequest
  }
}
// export function toggletodo(checkbox){
//     console.log(checkbox)
//     const postcompleted = axios.post(URL,
//         {
//             userID: 1,
//             title: title,
//             completed: false
//         })
//     return {
//         type: types.ADD_TODO,
//         payload: postcompleted
//     }
// }






















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