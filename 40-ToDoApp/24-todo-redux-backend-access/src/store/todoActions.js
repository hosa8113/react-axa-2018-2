import {ADD_TODO, REMOVE_TODO, LOADED_TODOS} from './todoReducer';
import * as api from '../api';

export function loadedToDos(todos){
    return {type: LOADED_TODOS, payload: todos};
}

export function addedToDo(newToDo) {
    return { type: ADD_TODO, payload: newToDo };
}

export function removedToDo(toDo) {
    return { type: REMOVE_TODO, payload: toDo };
}

export function addToDo(newToDo) {
    return (dispatch) => {
        api.saveToDo(newToDo)
            .then((todo) => dispatch(addedToDo(todo)));
    };
}

export function removeToDo(toDo) {
    return (dispatch) => {
        api.deleteToDo(toDo)
            .then(() => dispatch(removedToDo(toDo)));
    }
}

export function loadToDos() {
    return (dispatch) => {
        api.loadToDos()
            .then((todos) => dispatch(loadedToDos(todos)));
    }
}
