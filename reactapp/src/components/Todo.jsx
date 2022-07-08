import React from 'react'
import './ToDo.css'
import './delete.png'

export const ToDo = ({ toDo, markDone, setUpdateData, deleteTask }) => {
    return (
        <>
            {toDo && toDo
                .sort((a, b) => a.id > b.id ? 1 : -1)
                .map((task, index) => {

                    return (
                        <React.Fragment key={task.id} >
                            <div className='toDo' >
                                <div className={task.status ? 'done' : ''}>
                                    <span className='toDoList'> {task.title} </span>
                                </div>
                                <div className=''>
                                    <span title='Completed/ Not completed'
                                        onClick={(e) => markDone(task.id)}

                                    ><div><img src="./work-done.png" alt="done" /></div></span>

                                    {task.status ? null : (
                                        <span title='Edit'
                                            onClick={() => setUpdateData({

                                                id: task.id,
                                                title: task.title,
                                                status: task.status ? true : false
                                            })}>
                                            <div><img src="./pencil.png" alt="edit" /></div>

                                        </span>
                                    )}
                                    <span

                                        title='Delete'
                                        onClick={() => deleteTask(task.id)}>
                                        <div><img className='img' src="./delete.png" alt="trash" /></div>
                                    </span>
                                </div>

                            </div>
                        </React.Fragment>
                    )
                })}


        </>
    )
}

