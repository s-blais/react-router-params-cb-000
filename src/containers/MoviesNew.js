import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMovie } from '../actions';

class MoviesNew extends Component {

  constructor() {
    super();

    this.state = {
      title: ''
    };
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addMovie(this.state);
    this.props.history.push('/movies')
  }

  // This destructuring may be useful in a messier function, but here? Meh. It actually adds more code than it supposedly saves.
  // handleOnSubmit = event => {
  //   event.preventDefault();
  //   const { addMovie, history } = this.props;
  //   addMovie(this.state);
  //   history.push('/movies')
  // }

  handleOnChange = event => {
    this.setState({
      title: event.target.value
    });
  }

  render(){
    return (
      <form style={{ marginTop: '16px' }} onSubmit={this.handleOnSubmit} >
        <input 
          type="text" 
          onChange={this.handleOnChange} 
          placeholder="Add a Movie" />
        <input type="submit" value="Add Movie" />
      </form>
    );
  }
}

export default connect(null, { addMovie })(MoviesNew)