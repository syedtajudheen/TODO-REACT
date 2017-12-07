import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchtodo, addtodo } from './actions/action_todo.js'

//TODOLIST CONTAINER
class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state={
                    term:[],
                    checkbox: true
        }
        //BINDING EVENT_HANDLER_FUNCTIONS
        this.Onformhandler=this.Onformhandler.bind(this);
        this.Onchangehandler=this.Onchangehandler.bind(this);
        this.togglecheckbox = this.togglecheckbox.bind(this);
    }
    
    //MOUNT LIFECYCLE COMPONENT  
    componentDidMount() {
        this.props.dispatch(fetchtodo());
    }

    //EVENT HANDLER FUNCTIONS
    Onchangehandler(event){
        event.preventDefault();
        this.setState({term: event.target.value})
    }
    //FORM_HANDLER
    Onformhandler(event){
        let complete = prompt("enter your TODO STATUS:");
        if (complete) {
            console.log("Ok is true");
        }
        else {
            console.log("cancel is false");
        }
        const data = {
            title: this.state.term,
            completed: complete
        }
        event.preventDefault();
        this.props.dispatch(addtodo(data))
    }
    togglecheckbox(event){
        event.preventDefault();
        this.setState({ checkbox : !this.state.checkbox}) 
        console.log(this.state.checkbox)  
    }

    //RENDERS TODO_LISTS
    renderList(data,index) {    
        return (<li className="list-group-item" key={data.id}> 
                <input type="checkbox" checked={data.completed} onChange={this.togglecheckbox} /> &nbsp; {data.title}
                </li>); 
    }  
    
    //RENDER FUNCTION   
    render(){
            return(<div>
                        <form onSubmit={this.Onformhandler}>
                            <div className="list-group-item">
                                <label >TODO : </label>
                                <input  value={this.state.term} onChange={this.Onchangehandler} type="text"  />
                                <button type="submit"  >ADD</button><br />  
                            </div>
                        </form>
                        <ul>
                            {this.props.todos.map(this.renderList, this)}
                        </ul>
                            
                    </div>)
    }
}
    //MAP_STATE_TO_PROPS
    function mapStateToProps(state) {
        console.log(state);
        return {
        todos: state.todos
        };
    }
    //EXPORT USING CONNECT()
    export default connect(mapStateToProps)(Todolist);