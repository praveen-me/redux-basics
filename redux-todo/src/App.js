import React, { Component } from 'react';
import './App.css';
import {addTodo, deleteTodo} from './actions/index';
import {connect} from 'react-redux';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo : ''
    }
  }
  
  handleChange = e => {
    this.setState({
      todo : e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.dispatch(addTodo(this.state.todo))
        }}>
          <input type="text" onChange={this.handleChange} />
          <button>Submit</button>
        </form>
        {
          this.props.array.map(todo => 
          <li id={todo.id} onClick={() => this.props.dispatch(deleteTodo(todo.id))}>{todo.text}</li>
          )
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {array : state.todoArray}
}

export default connect(mapStateToProps)(App);
