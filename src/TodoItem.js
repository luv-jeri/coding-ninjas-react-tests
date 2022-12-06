import React from 'react';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      text: this.props.text,
      completed: this.props.completed,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    this.setState((prevState) => {
      return { completed: !prevState.completed };
    });
  }

  render() {
    return (
      <div className='todo-item'>
        <input
          type='checkbox'
          checked={this.state.completed}
          onChange={this.handleChange}
        />
        <label> {this.state.text} </label>
      </div>
    );
  }
}

export default TodoItem;
