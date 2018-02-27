import React, {Component} from 'react';
import NewToDoForm from './NewToDoForm';
import ToDoList from './ToDoList';
import {inject, observer} from 'mobx-react';

@inject('toDoStore') @observer
class PendingToDos extends Component {

  render() {
    console.log("rendering");

    const todos = this.props.toDoStore.pendingToDos;

    console.log(todos);

    return (
      <div>
        <NewToDoForm onAddToDo={this.addToDo}/>

        <div className="main">
          <ToDoList todos={todos} onRemoveToDo={this.completeToDo}/>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.toDoStore.fetchToDos()
  }

  addToDo = (title) => {
    let newToDo = {id: null, title: title, completed: false};
    this.props.toDoStore.addToDo(newToDo);
  };

  completeToDo = (toDo) => {
    toDo.completed = true;
    this.props.toDoStore.updateToDo(toDo);
  };

}

export default PendingToDos;