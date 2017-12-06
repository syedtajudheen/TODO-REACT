import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from'redux';
import { fetchtodo } from './actions/action_todo.js'

class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state={
            term:[]
        }
        this.formhandler=this.formhandler.bind(this);
        this.changehandler=this.changehandler.bind(this);
    }
    componentDidMount() {
        this.props.dispatch(fetchtodo());
    }
    changehandler(event){
        event.preventDefault();
        this.setState({term: event.target.value})
    }

    formhandler(event){
         event.preventDefault();
    }

  
        renderList(data) {
        
            return (<li className="list-group-item" key={data.id}> &nbsp; {data.title}</li>);
        
        }  
        
            render(){
                    return(<div>
                                <form onSubmit={this.formhandler}>
                                    <label>TODO : </label>
                                    <input value={this.state.term} onChange={this.changehandler} type="text"  />
                                    <button type="submit"  >ADD</button><br />
                                    <ul>
                                        {this.props.todos.map(this.renderList)}
                                    </ul>  
                                </form>
                                 
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