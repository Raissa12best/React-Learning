import React from "react"

export default function Main() {
    const [todos, setTodos] = React.useState([])

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newTodoText = formData.get("todo")
        
        if (newTodoText.trim() !== "") {
            const newTodo = {
                id: crypto.randomUUID(), // Better than using text as a key
                text: newTodoText,
                isCompleted: false
            }
            setTodos(prev => [...prev, newTodo])
            event.currentTarget.reset()
        }
    }

    function toggleComplete(id) {
        setTodos(prev => prev.map(todo => 
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        ))
    }

    function deleteTodo(id) {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    }

    const todoElements = todos.map(todo => (
        <li key={todo.id} className="todo-item">
            <input 
                type="checkbox" 
                checked={todo.isCompleted}
                onChange={() => toggleComplete(todo.id)}
            />
            <span style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}>
                {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
                🗑️
            </button>
        </li>
    ))

    return (
        <main>
            <form onSubmit={handleSubmit} className="todo-form">
                <div className="input-container">
                    <input name="todo" placeholder="Add todo..." />
                    <button type="submit" className="add-btn">+</button>
                </div>
            </form>
            <ul className="todo-list">{todoElements}</ul>
        </main>
    )
}