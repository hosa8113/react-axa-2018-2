import React from 'react';
import {Link} from 'react-router-dom';
import {ToDo} from '../store/todoModel';

interface ToDoListItemProps {todo: ToDo, onRemoveToDo: (todo: ToDo) => void};

const ToDoListItem: React.StatelessComponent<ToDoListItemProps> = ({todo, onRemoveToDo}) => (
    <li key={todo.id}>
        <Link to={`todos/${todo.id}`}>
            {todo.title}
        </Link>
        <button onClick={() => onRemoveToDo(todo)}>X</button>
    </li>
);


export default ToDoListItem;
