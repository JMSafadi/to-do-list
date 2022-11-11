import React, { useEffect } from 'react'
import { Task } from '../../models/task.class';
import '../../styles/task.scss'
import { levels } from '../../models/levels.enum';


const TaskComponent = ({ task, complete, remove }) => {


    function taskLevelBadge() {
        switch (task.level) {
            case levels.NORMAL:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-primary'>
                        {task.level}
                    </span>
                </h6>)

            case levels.BLOCKING:
                return(
                <h6 className='mb-0'>
                    <span class="badge text-bg-warning">
                        {task.level}
                    </span>
                </h6>)

            case levels.URGENT:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-danger'>
                        {task.level}
                    </span>
                </h6>)
            default:
                break;
        }
    }

    function taskCompletedIcon() {
        if(task.completed) {
            return (<i onClick={() => complete(task)} className="bi bi-toggle-on task-action" style={{color: 'green'}}></i>)
        } else {
            return (<i onClick={() => complete(task)} className="bi bi-toggle-off task-action" style={{color: 'grey'}}></i>)
        }
    }

    const taskCompletedStyle = {
        color: 'grey',
        textDecoration: 'line-through'
    }
    const taskPendingStyle = {
        color: 'mediumpurple',
        fontWeight: 'bold'
    }


    return (
        <tr className='fw-normal' style={task.completed ? taskCompletedStyle : taskPendingStyle}>
            <th style={{color: 'black'}}>
               <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle' style={{color: 'black'}}>
                <span>{task.description}</span>
            </td>
            <td className='align-middle'>
            {taskLevelBadge()}
            </td>
            <td className='align-middle'>
                { taskCompletedIcon() }
                <i onClick={() => remove(task)} className="bi bi-trash task-action p-3" style={{color: 'grey'}}></i>   
            </td>
        </tr>
    );
};


export default TaskComponent;
