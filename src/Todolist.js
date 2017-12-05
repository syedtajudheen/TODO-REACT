import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class Todolist extends Component {

        renderList() {
        return( this.props.todo.map((todos) => {
            return (<li className="list-group-item" key={todos.id}><input type="checkbox" value={todos.completed} /> &nbsp; {todos.title}</li>);
        }));
        }  
        
            render(){
                    return(<div>
                                <ul>{this.renderList}</ul>   
                            </div>)
            }
        }


function mapStateToProps(state) {
    return {
       todo: state.todos
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