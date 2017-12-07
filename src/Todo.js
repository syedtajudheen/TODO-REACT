import React,{Component} from 'react';
import './App.css';
import Todolist from './Todolist.js'


class Todo extends Component{
    
    render(){
        return(<div className="container" >
                    <div className="todopad">
                        <Todolist />
                    </div> 
               </div>);
    }
}




export default Todo; 