import React from 'react'
import './UpdateForm.css'

export const UpdateForm = ({ updateData, updateTask, changeTask, cancelUpdate }) => {
    return (
        <>
            <div className='form' >
                <div className='' >
                    <input type="text"
                        value={updateData && updateData.title}
                        onChange={(e) => changeTask(e)}
                        className=''
                    />
                </div>
                <div className='task' >
                    <button
                        onClick={updateTask}
                    >update</button>
                    <button
                        onClick={cancelUpdate}

                    >cancel</button>
                </div>

            </div>
        </>
    )
}

