import React, { useState } from 'react';

function Todos() {

    //STATE TO STORE INPUT FIELD VALUE 
    const [task, setTask] = useState("")
    //STATE TO STORE MANAGE TASK LIST FIELD VALUE 
    const [tasklist, setTasklist] = useState([])
    // on change target value
    const handleChange = (e) => {
        
        setTask(e.target.value);
        
       
        
       
    }
    //add task on add button log task state
    const Addtask = () => {
        
       
        // console.log(task)
        //if task is not empty string then we r going to create task object
        if(task !== ""){
            const taskDetails ={
                id:Math.floor(Math.random()*1000),
                value:task,
                isCompleted:false,
                
            }
            
           
            //first we r storing previous state value using spread operator and after that we append our task detail object
            setTasklist([...tasklist,taskDetails])
           
            // console.log("tasklist",tasklist)
            
        } 
       

    }
    
  // console.log("tasklist",tasklist)

//we r passing e to prevent any default event and id
  const deletetask = (e,id)=>{
      e.preventDefault();
      //to delete any task set task list by using filter keyword => for each task its id must not equal to the id which we want to delte
      //in simple words we r filtering our task by not storing the task we want to delte
      setTasklist(tasklist.filter((t)=>t.id !=id))
  }

  const taskCompleted =(e,id)=>{
      e.preventDefault();
      const element = tasklist.findIndex(elem=>elem.id == id);
      //copy array of object in the new task variable using spread
      const newTaskList = [...tasklist];

      //edit our element
      newTaskList[element] = {
          ...newTaskList[element],
      }
      setTasklist(newTaskList)
  }
 

    return <div className='todo'>

<h1>TODO LIST USING FUNCTIONAL COMPONENT (REACT JS) </h1>
        <input type="text" name="text"  id="text" onChange={(e) => handleChange(e)} placeholder='Add task here...' />
        <button onClick={Addtask} className="addbtn">Add</button> 

        <br/>
        {tasklist !== [] ?

        <ul>
            {tasklist.map(t=>
                <li className={t.isCompleted ? "crossText" : "listitem"}>{t.value}
                <br></br>
                <button onClick={e=>deletetask(e,t.id)} className='delete'>Delete</button>
                <button onClick={e=>taskCompleted(e,t.id)} className='complete'>Completed</button>

                    </li>)}

        </ul>

        :null}
        
    
    
    



    </div>
}

export default Todos




// https://www.youtube.com/watch?v=9zcMnJI3B7M