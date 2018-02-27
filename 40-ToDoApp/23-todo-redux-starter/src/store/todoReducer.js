export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export default (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {...state,  todos: state.todos.concat(action.payload)};
        default:
            return state;
    }
};
