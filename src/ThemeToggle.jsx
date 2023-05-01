import React from 'react'
import { useGlobalContext } from './context'
import { BsFillSunFill, BsMoonStarsFill } from 'react-icons/bs'

const ThemeToggle = ({}) => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext()
  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <BsFillSunFill className="toggle-icon" />
        ) : (
          <BsMoonStarsFill className="toggle-icon" />
        )}
      </button>
    </section>
  )
}

export default ThemeToggle
