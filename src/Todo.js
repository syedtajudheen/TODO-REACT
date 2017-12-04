import React,{Component} from 'react';
import './App.css';
import Todolist from './Todolist.js'

class Todo extends Component{
    render(){
        return(<div className="container" className="todopad">
                    <label>TODO : </label>
                    <input type="text" name="todo" />
                    <Todolist />
               </div>);
    }
}

export default Todo;