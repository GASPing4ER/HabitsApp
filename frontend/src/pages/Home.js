import React from "react";
import '../styles/App.css'
import DatesGrid from '../components/DatesGrid';
import HabitsGrid from '../components/HabitsGrid';
import AddHabit from "../components/AddHabit";
import LowerMenu from '../components/LowerMenu';

function App() {

  return (
    <div className="Home">
      <div className="content">
        <DatesGrid />
        <HabitsGrid />
        <AddHabit />
        <LowerMenu />
      </div>
    </div>
  );
}

export default App;
