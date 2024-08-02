import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Card username="Yash" post="SDE" url="https://tailwindcss.com/_next/static/media/sarah-dayan.de9b3815.jpg"/>
    <Card username="Mukta" post="Crew" url="https://tailwindcss.com/_next/static/media/sarah-dayan.de9b3815.jpg"/>
    <Card username="Aditya" post="CA" url="https://tailwindcss.com/_next/static/media/sarah-dayan.de9b3815.jpg"/>
    </>
  )
}

export default App
