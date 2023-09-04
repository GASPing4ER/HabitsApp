/* eslint-disable no-unused-vars */
import { useState } from 'react';
import "../styles/HabitForm.css"
import { useHabitsContext } from '../hooks/useHabitsContext'
import { useAuthContext } from "../hooks/useAuthContext"
import { useDateContext } from "../hooks/useDateContext"

const HabitForm = ({ toggleForm }) => {
  const { dispatch } = useHabitsContext()
  const { user } = useAuthContext() 
  const { selectedDate } = useDateContext()

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);
  selectedDate.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0
  const formattedDate = selectedDate.toISOString().split('T')[0];
  const date = formattedDate

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in")
      return
    }

    const habit = {title, description, status: false, date: date};

    const response = await fetch("/api/habits", {
      method : "POST",
      body : JSON.stringify(habit),
      headers: {
        "Content-Type" : "application/json",
        'Authorization': `Bearer ${user.token}`
      }
    })

    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }

    if (response.ok) {
      setError(null)
      setTitle('');
      setDescription('');
      dispatch({type: 'CREATE_HABIT', payload: json})
    }

    toggleForm()
  };

  console.log("Render HabitForm")

  return (
    <form className="habit-form" onSubmit={handleSubmit}>
      <h3 className='habit-form__title'>Add New Habit</h3>
      <div className='habit-form__field'>
        <label className='habit-form__field-label' htmlFor="title">Title:</label>
        <input
          className="habit-form__field-input"
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='habit-form__field'>
        <label className='habit-form__field-label' htmlFor="description">Description:</label>
        <input
          className='habit-form__field-input'
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button className='habit-form__submit-button' type="submit">Add Habit</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default HabitForm;