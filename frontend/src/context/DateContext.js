import { createContext, useState } from 'react'

export const DateContext = createContext()

export const DateContextProvider = ({ children }) => {
  const today = new Date();

  const [selectedDate, setSelectedDate] = useState(today)
  
  return (
    <DateContext.Provider value={{ selectedDate, setSelectedDate }}>
      { children }
    </DateContext.Provider>
  )
}