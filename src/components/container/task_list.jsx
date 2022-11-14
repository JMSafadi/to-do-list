import React, { useState, useEffect } from 'react';
import { Task } from '../../models/task.class';
import { levels } from '../../models/levels.enum';
import TaskComponent from '../pure/task';
// import '../../styles/task.scss'
import TaskForm from '../pure/taskForm';
import '../../styles/index.scss'


const TaskListComponent = () => {
    
    const defaultTask1 = new Task('Example1','description1', true, levels.NORMAL)
    const defaultTask2 = new Task('Example2','description2', false, levels.URGENT)
    const defaultTask3 = new Task('Example3','description3', false, levels.BLOCKING)
    
    // Estado del componente
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500);
        return () => {
        };
    }, [tasks]);

    function completeTask(task) {
        const index = tasks.indexOf(task)
        const tempTasks = [...tasks]
        tempTasks[index].completed = !tempTasks[index].completed
        setTasks(tempTasks)
    }

    function deleteTask(task) {
        const index = tasks.indexOf(task)
        const tempTasks = [...tasks]
        tempTasks.splice(index, 1)
        setTasks(tempTasks)
    }

    function addTask(task) {
        const tempTasks = [...tasks]
        tempTasks.push(task)
        setTasks(tempTasks)
    }

   function Table() {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>Title</th>
                        <th scope='col'>Description</th>
                        <th scope='col'>Priority</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => {
                        return (
                            <TaskComponent 
                                key={index} 
                                task={task}
                                complete={completeTask}
                                remove={deleteTask}>
                            </TaskComponent>
                        )
                    })}
                </tbody>
        </table>
        )
   }

   let tasksTable = <Table></Table>

   if(tasks.length > 0) {
        tasksTable = <Table></Table>
   } else {
        tasksTable = (
        <div>
            <h3>There are no tasks to show</h3>
            <h4>Please, create one!</h4>
        </div>)
   }

    return (
        <div className='task__list-container'>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h1>
                            Your tasks
                        </h1>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true'>
                        { loading ? <p>Loading tasks...</p> : tasksTable}
                    </div>
                </div>
            </div>
            <TaskForm add={addTask} length={tasks.length}></TaskForm>
        </div>
    );
};



export default TaskListComponent;
