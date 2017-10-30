import React, { Component } from 'react';

class UserInput extends Component {

  state = {
    username: '',
    hometown: ''
  }

  handleUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handleHometown = (event) => {
    this.setState({
      hometown: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown
      }
    })
    this.setState({
      username: '',
      hometown: ''
    })
  }


  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>

          <input
            type='text'
            onChange={this.handleUsername}
            value={this.state.value}
            id='username'
          />
          <input
            type='text'
            onChange={this.handleHometown}
            value={this.state.value}
            id='hometown'
          />

          <input type='submit' />

        </form>
      </div>
    );
  }
};

export default UserInput;
