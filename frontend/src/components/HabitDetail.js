/* eslint-disable no-unused-vars */
import { useHabitsContext } from '../hooks/useHabitsContext'
import '../styles/Habit.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useAuthContext } from "../hooks/useAuthContext"

const HabitDetail = ({ habit }) => {

    const { dispatch } = useHabitsContext()
    const { user } = useAuthContext() 

    const handleClick = async () => {
        if (!user) {
            return
        }

        const response = await fetch("/api/habits/" + habit._id, {
            method : "DELETE",
            headers: {
                "Authorization" : `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_HABIT', payload: json})
        }
    }

    const toggleComplete = async() => {

        const updatedHabit = { ...habit, status: !habit.status };
        
        const response = await fetch("/api/habits/" + habit._id, {
            method : "PATCH",
            body: JSON.stringify({ ...updatedHabit }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
              }
        })

        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'UPDATE_HABIT', payload: json})
        }
    }

    console.log("Render HabitDetail")

    return(
        <div className="habit">
            <div onClick={toggleComplete} className={`habit__icon ${habit.status ? 'active' : ''}`}>
                { habit.status && <FontAwesomeIcon className="habit__icon_fa" icon={faCheck} /> }
            </div>
            <div className="habit__content">
                <h1 className="habit__content-h1">{habit.title}</h1>
                <p className="habit__content-p">{habit.status ? "1-day streak" : habit.description}</p>
            </div>
            <div onClick={handleClick} className="habit__delete"><FontAwesomeIcon className="habit__icon_fa-green" icon={faTrash} /></div>
        </div>
    )
}

export default HabitDetail