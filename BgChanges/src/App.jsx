import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Maincompt from './component/Maincompt'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Maincompt/>
    </>
  )
}

export default App
