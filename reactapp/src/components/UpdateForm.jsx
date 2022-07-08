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
                <div className='' >
                    <button
                        onClick={updateTask}
                        className=''

                    >update</button>
                    <button
                        onClick={cancelUpdate}

                        className=''
                    >cancel</button>
                </div>

            </div>
        </>
    )
}

