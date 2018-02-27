import React from 'react';
import ToDoListItem from './ToDoListItem';
import {ToDo} from '../store/todoModel';

interface ToDoListProps {
    todos: ToDo[],
    onRemoveToDo: (todo) => void
}
const ToDoList: React.StatelessComponent<ToDoListProps> = ({todos, onRemoveToDo}) => (
    <ul id="todo-list" className="todo-list">
        {
            todos.map(t => (
                <ToDoListItem key={t.id} todo={t} onRemoveToDo={onRemoveToDo}/>
            ))
        }
    </ul>
);

export default ToDoList;
