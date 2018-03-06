import React, {Component} from 'react';
import NewToDoForm from './NewToDoForm';
import ToDoList from './ToDoList';
import {loadToDos, saveToDo, updateToDo} from '../persistence';


class PendingToDos extends Component {

  state = {
    loadingMessage: 'Loading ...',
    todos: []
  };

  render() {

    let loadingIndicator = this.state.loadingMessage ? <div>{this.state.loadingMessage}</div> : null;

    return (
      <div>
        {loadingIndicator}
        <NewToDoForm onAddToDo={this.addToDo}/>

        <div className="main">
          <ToDoList todos={this.state.todos} onRemoveToDo={this.completeToDo}/>
        </div>
      </div>
    );
  }

  async componentDidMount() {
    // loadToDos().then(
    //     (todos) => this.setState({todos: todos, loadingMessage: null})
    // );
    const todos = await loadToDos();
    this.setState({todos: todos, loadingMessage: null});

  }

  addToDo = async (title) => {
    const newToDo = {title: title, completed: false};
    const newToDos = [...this.state.todos, newToDo];

    // "OPTIMISTIC UI"
    this.setState({todos: newToDos, loadingMessage: 'Saving ...'});
    // this.setState({ loadingMessage: 'Saving ...'});

    saveToDo(newToDo)
      .then(todo => {
        const updatedToDos = this.state.todos.map(t => t !== newToDo ? t : todo);
        // const updatedToDos = [...this.state.todos, todo];
        this.setState({todos: updatedToDos, loadingMessage: null});
      });

    // USING ASYNC FUNC
    // const persistedToDo = await saveToDo(newToDo);
    // const updatedToDos = this.state.todos.map(t => t !== newToDo ? t : persistedToDo);
    // this.setState({todos: updatedToDos, loadingMessage: null});

  };

  completeToDo = (toDo) => {
    toDo.completed = true;

    // "OPTIMISTIC UI"
    const updatedToDos = this.state.todos.filter(t => t.id !== toDo.id);
    this.setState({todos: updatedToDos, loadingMessage: 'Saving ...'})

    updateToDo(toDo)
      .then(todo => {
        this.setState({loadingMessage: null});
      });

  };


}

export default PendingToDos;