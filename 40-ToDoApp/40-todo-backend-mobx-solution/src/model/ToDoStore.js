import {computed, observable, runInAction} from 'mobx';
import axios from 'axios/index';

const API_URL = 'http://localhost:3456/todos';

class ToDoStore {

  @observable loadedToDos = [];
  @computed get pendingToDos() {
    return this.loadedToDos.filter(t => !t.completed);
  }

  fetchToDos = async (completed = 0) => {
    try {
      const response = await axios.get(API_URL, {params: {completed}});
      this.loadedToDos = response.data.result
    }
    catch (error) {
      console.error("fetching failed");
    }
  };

  addToDo = async (toDo) => {
    const o = observable(toDo);
    this.loadedToDos.push(o);
    const response = await axios.post(API_URL, toDo);
    o.id = response.data.result.id;
  };

  updateToDo = (toDo) => {
    axios.put(`${API_URL}/${toDo.id}`, toDo)
  };

  removeToDo = (toDo) => {
    this.loadedToDos.remove(toDo);
    axios.delete(`${API_URL}/${toDo.id}`)
  };

}

export default ToDoStore;