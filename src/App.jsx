import { useState } from 'react'
import './App.css'
import data from './assets/projects.json'
import NavBar from './components/NavBar'

function App() {

  const [projects] = useState(data.projects)

  return (
    <>
      <NavBar />
    </>
  )
}

export default App
