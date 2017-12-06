import React,{Component} from 'react';
import './App.css';
import Todolist from './Todolist.js'
import {connect} from 'react-redux'
import { fetchtodo } from './actions/action_todo.js'

class Todo extends Component{
    
    render(){
        return(<div className="container" className="todopad">
                    <Todolist />
               </div>);
    }
}




export default Todo; 