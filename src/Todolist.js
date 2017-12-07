import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
// import { bindActionCreators } from'redux';
import { fetchtodo, addtodo } from './actions/action_todo.js'

class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state={
                    term:[],
                    checkbox: true
        }
           

        this.Onformhandler=this.Onformhandler.bind(this);
        this.Onchangehandler=this.Onchangehandler.bind(this);
        this.togglecheckbox = this.togglecheckbox.bind(this);
    }
    

    
    componentDidMount() {
        this.props.dispatch(fetchtodo());
    }
    Onchangehandler(event){
        event.preventDefault();
        this.setState({term: event.target.value})
    }
    Onformhandler(event){
        var complete = prompt("enter your TODO STATUS:");
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
        // alert("sucess")
        this.setState({ checkbox : !this.state.checkbox}) 
        console.log(this.state.checkbox)
      
    }

 
    renderList(data,index) {  
        
        return (<li className="list-group-item" key={data.id}> <input type="checkbox" checked={data.completed} onChange={this.togglecheckbox} /> &nbsp; {data.title}</li>); 
    }  
        
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


    function mapStateToProps(state) {
        console.log(state);
        return {
        todos: state.todos
        };
    }

export default connect(mapStateToProps)(Todolist);















  // constructor(props){
    //     super(props);

    //     this.state={
    //         todos: []
    //     };
    // }
    // componentWillMount(){
    //     axios.get('https://jsonplaceholder.typicode.com/todos')
    //         .then((response) => {
    //             console.log(response.data);
    //             const todo = response.data.map(item =>{
    //                 return(<div className="container">
    //                     <ul className="list-group"  >
    //                         <li className="list-group-item" key={item.id}><input type="checkbox" value={item.completed} /> &nbsp; {item.title}</li>
    //                     </ul>
    //                 </div>
    //                 );
    //             })
    //             this.setState({ todos: todo });
    //         })
    //         .catch( (error) => {
    //             console.log(error);
    //         });

    // }