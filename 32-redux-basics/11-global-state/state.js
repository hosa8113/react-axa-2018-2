
export const state = {
    todos: [
        {id: 1, title: 'Learn React'},
        {id: 2, title: 'Learn Redux'},
        {id: 3, title: 'Learn Angular'}
    ]
};

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

// change the state in a functional way
export function changeState(state, action){
    switch (action.type) {
        case ADD_TODO:
            return {...state,  todos: state.todos.concat(action.payload)};
            break;
        case REMOVE_TODO:
            return {...state,  todos: state.todos.filter(t => t != action.payload)};
            break;
        default:
            return state;
    }
}

