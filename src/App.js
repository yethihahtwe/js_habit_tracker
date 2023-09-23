import React, { useState } from 'react';
import './App.css';

function App() {
  const sampleHabits = [
    { id: 1, name: 'Run' , completed: false },
    { id: 2, name: 'Read', completed: true },
    { id: 3, name: 'Code', completed: false },
  ];

  const [habits, setHabits] = useState(sampleHabits);

  return(
    <div className = "App">
      <header className="bg-blue-500 text-white py-2 pl-4">
        <h1>Personal Habit Tracker</h1>
      </header>
      <main>
        <section className="habit-list">
          <h2>Today's Habits</h2>
          <ul>
            {habits.map((habit) => (
              <li key={habit.id}>
                <input
                  type="checkbox"
                  checked={habit.completed}
                  onChange={() => {
                    const updatedHabits = habits.map((h) =>
                      h.id === habit.id
                      ? { ...h, completed: !h.completed }
                      : h
                    );
                    setHabits(updatedHabits);
                  }}/>
                    <span className={habit.completed ? 'completed' : ''}>
                      {habit.name}
                    </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="add-habit">
          <h2>Add a new habit</h2>
          <form>
            <input type="text" placeholder="Enter habit name"></input>
            <button type="submit">Add</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;