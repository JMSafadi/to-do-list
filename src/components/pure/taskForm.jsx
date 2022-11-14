import React, { useRef } from 'react';
import { levels } from '../../models/levels.enum';
import { Task } from '../../models/task.class';

const TaskForm = ({add, length}) => {

    const nameRef = useRef('')
    const descriptionRef = useRef('')
    const levelRef = useRef(levels.NORMAL)

    function addTask(e) {
        e.preventDefault()
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
            )
            add(newTask)
    }

    return (
        <form onSubmit={addTask} className='form__container d-flex justify-content align-items-center pt-2' autoComplete="off">
            <div className='form-outline flex-fill'>
                <input className='form-control form-control-lg m-2 form__input' ref={nameRef} id='inputName' type='text' required autoFocus placeholder='Task name' autoComplete="false" name="hidden"></input>
                <input className='form-control form-control-lg m-2 form__input' ref={descriptionRef} id='descriptionName' type='text' required placeholder='Task Description' autoComplete="false" name="hidden"></input>
                <label className='sr-only form__input' htmlFor='selectLevel'><p style={{color: 'black'}}>Choose Priority:</p></label>
                <select className='form-control form-control-lg' ref={levelRef} defaultValue={levels.NORMAL} id='selectLevel'>
                    <option value={levels.NORMAL}>
                        Normal
                    </option>
                    <option value={levels.URGENT}>
                        Urgent
                    </option>
                    <option value={levels.BLOCKING}>
                        Blocking
                    </option>
                </select>
                <button type='submit' className='btn btn-success btn-lg ms-5 m-2' style={{color: 'white', backgroundColor:'#292840', border:'none'}}>
                    {length > 0 ? 'Add New Task' : 'Create your first task'}
                </button>
            </div>
        </form>
    );
}


export default TaskForm;
