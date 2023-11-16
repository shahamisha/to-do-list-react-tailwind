import { useState } from "react";

const App = () => {

  const [tasks,setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTasks = () => {
    if(task!==""){
      setTasks([...tasks,task])
      setTask("");
      console.log(tasks);
   }
  }

  return(
   <div className="flex flex-col items-center">
    <h1 className="text-4xl m-16 font-bold">Simple TODO App</h1> 
    <div className="p-6">
      <input className="bg-slate-100 rounded-md p-4 m-4"
      type="text"
      value={task}
      onClick={(e)=>{
        setTask(e.target.value);
      }}
      placeholder="create a new todo"
      />
      <button onChange={addTasks}
      className="bg-green-500 text-white p-3 m-3 rounded-md font-bold hover:bg-green-600" >Add Tasks</button>
    </div>
    <div>
      
    </div>
    </div>
  );
}

export default App