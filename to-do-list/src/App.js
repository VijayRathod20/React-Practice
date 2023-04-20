import './App.css';
import {useState} from 'react';
import {Task} from './task';

function App() {
  const [taskList, setTaskList] = useState([]);
  const [newTask, setTask] = useState('');
  const handleChange = (event) =>{
    setTask(event.target.value);
  }
  const addTask = () =>{
    const task = {
      id:taskList.length === 0 ? 1 : taskList[taskList.length-1].id+1,
      taskName:newTask,
      completed:false
    }
    setTaskList([...taskList,task]);
  }
  const deleteTask = (id) =>{
    setTaskList(taskList.filter((task)=>task.id !== id));
  }
  const completeTask = (id) =>{
    setTaskList(taskList.map((task)=>{
      if(task.id === id){
        task.completed = !task.completed;
      }
      return task;
    }))
  }
  return (
    <div className="App">
     <div className="addTask">
        <input type="text" placeholder="Add Task" onChange={handleChange}/>
        <button onClick={addTask}>Add</button>
     </div>

     <div className="taskList"></div>
        {
          taskList.map((task)=>{
            return <Task key={task.id}
             taskName={task.taskName} 
             id={task.id}
             deleteTask={deleteTask}
            completeTask={completeTask}
            completed={task.completed}
            />
          })
        }
    </div>
  );
}

export default App;
