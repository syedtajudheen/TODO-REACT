import React,{Component} from 'react';
import './App.css';
import Todolist from './Todolist.js'
import {connect} from 'react-redux'
import { addTodo } from './actions/action_todo.js'

class Todo extends Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.dispatch(addTodo());
    }
    render(){
        return(<div className="container" className="todopad">
                    <label>TODO : </label>
                    <input type="text" name="todo" />
            <button type="submit"  >ADD</button><br />
                    <Todolist />
               </div>);
    }
}


const mapStateToProps = function (state) {
    console.log(state);
}

export default connect(mapStateToProps)(Todo); 