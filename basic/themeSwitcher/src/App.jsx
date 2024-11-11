import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import ToggleBtn from './components/ToggleBtn'
import { ThemeProvider } from './context/Theme'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  function lightTheme() {
    setThemeMode("light")
  }
  function darkTheme() {
    setThemeMode("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{ lightTheme, darkTheme }}>
      <div className="wrap">
        <div className="toggleBtnBox">
          <ToggleBtn />
        </div>
        <div className="cardBox">
          <Card />
        </div>
      </div>
    </ThemeProvider>

  )
}

export default App