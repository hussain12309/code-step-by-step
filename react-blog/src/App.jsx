import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import User from './User.jsx'
import Header from './Header.jsx'


function App() {
 const [counter,setCounter]=useState(0)

  return (
    <>
     <Header/>
     <h1>First component</h1>
      <h1>Counter val :{counter}</h1>
      <User/>
      <Fruit/>
      <button onClick={() => setCounter(counter + 1)}>click to increase the count</button>
    </>
  )
}
function Fruit(){
  return <h1>Apple</h1>
}
export default App
