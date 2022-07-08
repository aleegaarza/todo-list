import React from 'react'
import { useState } from 'react'
import { Todo } from './Todo';

export const TodoList = () => {

    const [inputTodo, setInputTodo] = useState('');
    const [saveData, setSaveData] = useState(false);

    const handleInputChange = (e) => {
        const todo = e.target.value
        setInputTodo(todo);
        console.log(inputTodo);
    }

    const setData = () => {
        localStorage.setItem('task', inputTodo);
        setSaveData(true);

    }
    return (
        <div>
            <input
                className=''
                type="text"
                placeholder='Task to do'
                onChange={handleInputChange}
            />
            <button
                className=''
                onClick={setData}
            >submit</button>

            {saveData && (<Todo />)}
        </div>
    )
}
