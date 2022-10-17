import React from 'react'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import Homepage from '../components/homepage'

const Home = () => {
  return (
    <>
        <Sidebar/>
        <Navbar/>
        <Homepage/>
    </>
  )
}

export default Home