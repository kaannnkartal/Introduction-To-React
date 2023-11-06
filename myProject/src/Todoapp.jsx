import React, { useState } from 'react'

export default function Todoapp() {

    const [todo, setTodo] = useState("")

    const [todos, setTodos] = useState([]);


    const addTodos = () => {
        setTodos(todos => [...todos, todo])
        setTodo('')
    }

    const removeTodo = (td) =>{

        const updatedTodos = todos.filter((todo) =>(
            todo !== td
        ))

        setTodos(updatedTodos)

    }


    console.log("TODOS : ", todos);
    return (
        <>
            <input type="text" placeholder='ekle' value={todo} onChange={(e) => {
                setTodo(e.target.value)
            }} />

            <button onClick={addTodos}>ekle</button>


            {
                todos?.map((td, i) => (
                    <div key={i}>
                        {td} <button onClick={() => removeTodo(td)}>X</button>
                        </div>
                ))
            }

        </>
    )
}
