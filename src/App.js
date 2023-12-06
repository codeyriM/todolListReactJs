import logo from './logo.svg';
import './App.scss';
import { FaRegTrashAlt } from "react-icons/fa";
import { IoMdCheckboxOutline } from "react-icons/io";
import { useState } from 'react';



function App() {
  const [tasks, setTasks] = useState([
    {
      title: "Eggs",
      completed: true
    },
    {
      title: "Milk",
      completed: false
    },
    {
      title: "Cheese",
      completed: false
    },
  ]);
  const [inputNewTask, setInputNewTask] = useState("");
  const [showText, setShowText] = useState('');



  function deleteTask(index) {
    const newTasks = [...tasks]
    newTasks.splice(index, 1);
    setTasks(newTasks)
  }
  function changeStatus(index) {
    const newTasks = [...tasks]
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks)
  }
  function deleteList(index) {
    const newTasks = [...tasks]
    newTasks.splice(index);
    setTasks(newTasks)
  }

  const clickBtn = () => {
    if (!inputNewTask) {
      return;
    }

    const newTasks = [...tasks];
    newTasks.push({
      title: inputNewTask,
      completed: false
    })
    setTasks(newTasks)
    setInputNewTask("");
  };



  return (
    <div className="App">
      <div className='toDoApp'>
        <h2 > Grocery Shopping</h2>
        <div className='list'>
          {tasks.map(function (value, index) {
            return (
              <div className='task' key={index}>
                <p className={value.completed ? 'done' : ''} >{value.title}</p>
                <div className='operations'>
                  <FaRegTrashAlt onClick={() => deleteTask(index)} />
                  <IoMdCheckboxOutline onClick={() => changeStatus(index)} />
                </div>

              </div>
            )
          })}
        </div>

        <div className='inputBox'>

          <input
            value={inputNewTask}
            onChange={(event) => {
              setInputNewTask(event.target.value)
            }}
            placeholder='Add something to your list' />
          <button onClick={clickBtn} >Add</button>
          {showText && <div className='task' >
            <p >{showText}</p>
            <div className='operations'>
              <FaRegTrashAlt />
              <IoMdCheckboxOutline />
            </div>

          </div>}
        </div>
        <button onClick={deleteList} className='deleteBtn'>Delete list</button>
      </div>


    </div>
  );
}

export default App;
