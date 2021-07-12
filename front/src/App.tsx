import React, {useState} from 'react';
import './App.css';

// component imports
import Form from './components/Form';
import ToDoList from './components/ToDoList';

type Task = {
  text: string, 
  completed: boolean,
  id: string
};

type ShowStatus = "All" | "Completed" | "Uncompleted";
// enum ShowStatus {
  // All,
  // Completed,
  // Uncompleted
// };

export type {Task, ShowStatus};


function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState<Task[]>([]);
  const [showStatus, setShowStatus] = useState<ShowStatus>("All");

  const deleteTaskHandler = (id: string) => {
    setTodos(todos.filter((task) => task.id !== id));
  };

  const onFormButtonSubmit = () => {
    setTodos([
      ...todos,
      {text: inputText, completed: false, id: Math.random().toString(36).substr(2, 9)}
    ]);
  };
  const completeTaskHandler = (id: string) => {
    setTodos(todos.map((task) => {
      if (task.id == id) {
        return {...task, completed: !task.completed};
      }
      return task;
    }));
  };

  const onChangeSelectHandler = (status: ShowStatus) => {
    setShowStatus(status);
  };

  return (
    <div className="App">
      <h1>Hello React {inputText}</h1>
      <Form onSelectChange={onChangeSelectHandler} inputText={inputText} onInputChange={setInputText} onButtonClick={onFormButtonSubmit}/>
      <ToDoList tasks={todos} showStatus={showStatus} deleteHandler={deleteTaskHandler} completeHandler={completeTaskHandler}/>
    </div>
  );
}

export default App;
