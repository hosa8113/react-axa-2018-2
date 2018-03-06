import React, {Component} from 'react';
import ToDoList from './ToDoList';
import {inject, observer} from 'mobx-react/index';

@inject('toDoStore') @observer
class DoneToDos extends Component {

    render() {
        return (
            <div>
                <div className="main">
                    <ToDoList todos={this.props.toDoStore.loadedToDos} onRemoveToDo={this.removeToDo}/>
                </div>
            </div>
        );
    }

    componentDidMount(){
      this.props.toDoStore.fetchToDos(1)
    }

    removeToDo = (toDo) => {
        this.props.toDoStore.removeToDo(toDo);
    };
}

export default DoneToDos;