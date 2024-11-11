// import './App.css'
// import Login from './components/Login'
// import Profile from './components/Profile'
// import UserContextProvider from './context/userContextProvider'

// function App() {  
//   return (
//     <UserContextProvider>
//       <h1>React and Chai</h1>
//       <Login />
//       <Profile />
//     </UserContextProvider>
//   )
// }

// without using external userContextProvider
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import { useState } from 'react'
import UserContext from './context/UserContext'

function App() {
  const [user, setUser] = useState(null)

  return (
    <UserContext.Provider value={{user, setUser}}>
      <h1>React and Chai</h1>
      <Login />
      <Profile />
    </UserContext.Provider>
  )
}

export default App