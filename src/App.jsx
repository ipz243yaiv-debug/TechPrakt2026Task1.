import { useState } from 'react';

function App() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');

    const addTask = () => {
        if (!input.trim()) return;
        setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
        setInput('');
    };

    const toggleTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Мій трекер завдань</h1>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Нове завдання"
            />
            <button onClick={addTask}>Додати</button>
            <ul>
                {tasks.map(task => (
                    <li
                        key={task.id}
                        onClick={() => toggleTask(task.id)}
                        style={{
                            textDecoration: task.completed ? 'line-through' : 'none',
                            cursor: 'pointer'
                        }}
                    >
                        {task.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
