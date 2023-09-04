/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import '../styles/HabitsGrid.css';
import HabitDetail from './HabitDetail';
import ProgressBar from './ProgressBar';
import { useHabitsContext } from '../hooks/useHabitsContext';
import { useAuthContext } from "../hooks/useAuthContext"
import { useDateContext } from "../hooks/useDateContext"

const HabitsGrid = () => {

  const { habits, dispatch } = useHabitsContext()
  const [ progress, setProgress ] = useState(0)
  const { user } = useAuthContext()
  const { selectedDate } = useDateContext() 
  selectedDate.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0
  const formattedDate = selectedDate.toISOString().split('T')[0];

  useEffect(() => {
    const fetchHabits = async() => {
      const response = await fetch("/api/habits", {
        headers: {'Authorization': `Bearer ${user.token}`},
      })
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_HABITS', payload: json})
      }
    }

    if (user) {
      fetchHabits()
    }
  }, [dispatch, user])

  useEffect(() => {
  const filteredHabits = habits.filter((habit) => habit.date === formattedDate)
    const falseHabitsCount = filteredHabits.length ? Math.round(
      (filteredHabits.filter(habit => habit.status === true).length / filteredHabits.length) * 100,
      1
    ) : 0;
    setProgress(falseHabitsCount);
  }, [habits, selectedDate]);

  console.log("Render HabitsGrid")


  return(
      <div className="habits-grid">
          <ProgressBar progress={progress}/>
          <div className="habits">
          {habits.filter((habit) => habit.date === formattedDate).map((filteredHabit) => (
            <HabitDetail key={filteredHabit._id} habit={filteredHabit} />
          ))}
          </div>
      </div>
  )
}

export default HabitsGrid;