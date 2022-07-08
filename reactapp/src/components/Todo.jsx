import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export const Todo = () => {

    const [task, setTask] = useState('');

    const getData = () => {
        return localStorage.getItem('task');

    }
    useEffect(() => {

        setTask(getData());

    }, []);


    return (
        <div>
            <h2> To do {task} </h2>
        </div>
    )
}
