import React from 'react';
import axios from 'axios';

export default class PersonEdit extends React.Component {
  state = {
    name: ''
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      title: this.state.title
    };

    axios.put(`https://reqres.in/api/articles/${this.state.id}`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(error=>
      {

      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>
            Person ID:
            <input type="number" name="id" onChange={this.handleChange} />
          </label>
     
          <label>
            Person Name:
            <input type="text" name="title" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}
