import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ToDoStore from './model/ToDoStore';
import {Provider} from 'mobx-react';

const toDoStore = new ToDoStore();

ReactDOM.render(
  <Provider toDoStore={toDoStore}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
