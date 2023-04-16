import React from 'react'
import Home from '../components/Home'
import Nav from '../components/Nav'
const HomeScreen = ({setData}) => {
  return (
    <div>
    <Nav/>
      <Home setData={setData}/>
    </div>
  )
}

export default HomeScreen
