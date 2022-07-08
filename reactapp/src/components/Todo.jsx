import React from 'react'
import './ToDo.css'

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

                                    ><div className='iconDone'><img className='img' src="https://cdn-icons-png.flaticon.com/512/70/70199.png" alt="done" /></div></span>

                                    {task.status ? null : (
                                        <span title='Edit'
                                            onClick={() => setUpdateData({

                                                id: task.id,
                                                title: task.title,
                                                status: task.status ? true : false
                                            })}>
                                            <div className='iconEdit' ><img className='img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg/480px-Edit_icon_%28the_Noun_Project_30184%29.svg.png" alt="edit" />
                                            </div>
                                        </span>
                                    )}
                                    <span

                                        title='Delete'
                                        onClick={() => deleteTask(task.id)}>
                                        <div className='iconDelete'><img className='img' src="https://www.iconpacks.net/icons/1/free-trash-icon-347-thumb.png" alt="trash" /></div>
                                    </span>
                                </div>

                            </div>
                        </React.Fragment>
                    )
                })}


        </>
    )
}

