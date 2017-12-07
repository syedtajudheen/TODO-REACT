import types from './actionTypes';
import axios from 'axios'; 

//API_URL
const URL = 'https://jsonprovider.herokuapp.com/todos?sort=createdAt%20DESC&limit=15';

//FETCH_TODOS_LIST_ACTION
export function fetchtodo(){
    const request = axios.get(URL)
    return{
        type : types.FETCH_TODO,
        payload: request
    }
}

//ADD_TODO_LIST_ACTION
export function addtodo(data){
    console.log(data)
    const postrequest = axios.post(URL, 
        {
        userID: 1,
        title: data.title,
        completed: data.completed
    })
    return{
        type : types.ADD_TODO,
        payload : postrequest
    }
}