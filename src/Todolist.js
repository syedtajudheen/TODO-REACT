import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class Todolist extends Component {
    constructor(props){
        super(props);

        this.state={
            todos: []
        };
    }
    componentWillMount(){
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((response) => {
                console.log(response.data);
                const todo = response.data.map((item, i) =>{
                    return(<div className="list">
                        <li key={item.id}><input type="checkbox" value={item.completed} />{item.title}</li>
                    </div>
                    );
                })
                this.setState({ todos: todo });
            })
            .catch( (error) => {
                console.log(error);
            });

    }
    render(){
            return(<div>
                        {this.state.todos}
                    </div>)
    }
}

export default Todolist;