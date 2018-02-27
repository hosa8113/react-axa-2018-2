import {state, changeState, ADD_TODO, REMOVE_TODO} from './state';

test('manipulate the state', () => {
    expect(state.todos.length).toBe(3);

    state.todos.push({id: Math.random(), title:'Learn functional JavaScript'});
    expect(state.todos.length).toBe(4);

    state.todos.splice(2,1);
    expect(state.todos.length).toBe(3);

});

test('change state in a functional way', () => {
    expect(state.todos.length).toBe(3);

    const newToDo = {id: Math.random(), title:'Learn functional JavaScript'};
    let action = {type: ADD_TODO, payload: newToDo};
    let newState = changeState(state, action);

    expect(newState.todos.length).toBe(4);

    action = {type: REMOVE_TODO, payload: newState.todos[2]};
    newState = changeState(newState, action);

    expect(newState.todos.length).toBe(3);
});
