import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import Todo from '../Todo';
import Toggle from '../Toggle';
import React from 'react';

const todos = [
  {
    title: "task1",
    status: false,
  },
  {
    title: "task2",
    status: false,
  },
  {
    title: "task3",
    status: false,
  },

]


function App() {
  const [toggled, setToggled] = React.useState(false);
  const handleClick = () => {
    setToggled((s) => !s);
  }
  
  return (
    <div className="app">
      <div className="row justify-content-center">
        <div className="">
          <Todo todos={todos} />
          <Toggle toggled={toggled} onClick={handleClick}/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
