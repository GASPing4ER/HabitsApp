import React, { useState } from 'react';
import { useDateContext } from "../hooks/useDateContext"
import '../styles/DatesGrid.css'

const Square = ({ day, date, isActive, onClick }) => {
  return (
    <div className={`dates-grid__square ${isActive ? 'active' : ''}`} onClick={onClick}>
      <div className="dates-grid__square__day-name">{day}</div>
      <div className="dates-grid__square__day-num">{date}</div>
    </div>
  );
};

const DatesGrid = () => {

  // eslint-disable-next-line no-unused-vars
  const { selectedDate, setSelectedDate } = useDateContext()

  const [activeSquare, setActiveSquare] = useState(0);

  const handleClick = (index) => {
    setActiveSquare(index);
  };

  const handleSquareClick = (date, index) => {
    setSelectedDate(date);
    handleClick(index);
  };

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today = new Date();
  const dates = [];
  
  // Generate the next 6 dates
  for (let i = 0; i < 7; i++) {
    const date = new Date();
    date.setDate(today.getDate() + i);
    dates.push(date);
  }

  console.log("Render DatesGrid")
  
  return (
    <div className="dates-grid">
      {dates.map((date, index) => (
        <Square
          key={index}
          day={daysOfWeek[date.getDay()]}
          date={date.getDate()}
          isActive={index === activeSquare}
          onClick={() => handleSquareClick(date, index)}
        />
      ))}
    </div>
  );
};

export default DatesGrid;