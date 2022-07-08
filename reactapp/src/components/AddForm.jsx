import React from 'react'
import './AddForm.css'


export const AddForm = ({ newTask, setNewTask, addTask }) => {
    return (
        <>
            <div className='NewTodoForm' >

                <div>
                    <input type="text"
                        placeholder='Add task'
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        className='' />
                </div>
                <div>
                    <button
                        onClick={addTask}
                        className='button'
                    >
                        Add task
                    </button>
                </div>
            </div>
        </>
    )
}
