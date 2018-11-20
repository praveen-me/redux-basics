import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import {addTopic, submitComment} from './actions/actions';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic : '', 
      comment : ''
    }
  }
  
  handleChange = e => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(addTopic(this.state.topic));
  }

  handleSubmitComment = e => {
    e.preventDefault();
    const id = e.target.id;
    this.props.dispatch(submitComment({
      id,
      comment : this.state.comment
    }))
  }

  render() {
    const {topics} = this.props;
    console.log(topics);
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>Input Topic</label>
          <input type="text" id="topic" onChange={this.handleChange}/>
        </form>
        <div className="topic-container">
          {
            topics && topics.map(topic => (
              <div className="topic-block" id={topic.id}>
                <h1>{topic.name}</h1>
                <form onSubmit={this.handleSubmitComment} id={topic.id}>
                  <input type="text" id="comment" className="comment" onChange={this.handleChange}/>
                </form>
                <div className="comment-box">
                  {
                    topic.comments && topic.comments.map(comment => (
                      <h3>{comment}</h3>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    topics : state.topics
  }
}

export default connect(mapStateToProps)(App);
