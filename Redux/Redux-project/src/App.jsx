import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask } from './components/taskslice';
import { useTheme } from './components/ThemeContext';

function App() {
  const [input, setInput] = useState('');
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div style={{ padding: '20px' }}>
      <h1>{darkMode ? 'Dark Mode' : 'Light Mode'} Tasker</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      
      <div style={{ marginTop: '20px' }}>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={() => { dispatch(addTask(input)); setInput(''); }}>Add Task</button>
      </div>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.text} 
            <button onClick={() => dispatch(deleteTask(task.id))}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;