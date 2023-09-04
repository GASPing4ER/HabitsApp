import React, { useState } from "react"
import "../styles/AddHabit.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import HabitForm from './HabitForm';

const AddHabit = () => {
    const [showForm, setShowForm] = useState(false);

    const toggleShowForm = () => {
        setShowForm((prevShowForm) => !prevShowForm)
    }

    console.log("Render AddHabit")

    return(
        <div className="content__icon">
            <FontAwesomeIcon onClick={() => toggleShowForm()} className='content__icon-fa' icon={faPlus} />
            {showForm ? <HabitForm toggleForm={toggleShowForm}/> : "" }
        </div>
    )
}

export default AddHabit