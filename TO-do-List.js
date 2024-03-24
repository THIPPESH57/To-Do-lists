import React, { Component } from "react";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todo: ""
    };
  }

  handleChange = (e) => {
    this.setState({ todo: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { todo, todos } = this.state;
    if (todo.trim() !== '') {
      const newTodos = [...todos, { text: todo, id: Date.now() }];
      this.setState({ todos: newTodos, todo: '' });
    }
  };

handleEdit =(id) => {
    let editedText = prompt('enter the new item')
    if( editedText !== null){
        let updatedToDos = this.state.todos.map(todo => {
            if(todo.id === id){
                return{...todo, text: editedText}
            }
            return todo;
        })
        this.setState({todos : updatedToDos})
    }
}


handleRemove = (id) => {
    let updatedTodos = this.state.todos.filter(todo => (todo.id !== id))
    this.setState({todos : updatedTodos})
}




  render() {
    const { todos, todo } = this.state;
    return (
      <div className=" container mt-5">
        <div>
          <h1 className="d-flex justify-content-center">TO-DO LIST</h1>
        </div>
        <form  className="row  d-flex justify-content-center" onSubmit={this.handleSubmit}>
        <div className="col-6">
          <input className="form-control"
            type="text"
            value={todo}
            onChange={this.handleChange}
            placeholder="ADD TO-DO"
          />
          </div>
          <div className="d-flex justify-content-center">
          <button className="btn btn-primary btn-sm mt-2 col-4 " type="submit">ADD</button>
          </div>
        </form>
        <div className="d-flex  mt-2 justify-content-center">
            
        <ol className=" list-group = col-6">
          {todos.map(todo => (
            <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">{todo.text}

            <div>
            <button  className=" btn btn-sm btn-success me-2 " onClick={() =>this.handleEdit(todo.id)}>Edit</button>
            <button className="btn btn-danger btn-sm" onClick={() =>this.handleRemove(todo.id)}>Remove</button>
            </div>

            
            </li>

          ))}
        </ol>
        </div>
      </div>
    );
  }
}

export default ToDoList;
