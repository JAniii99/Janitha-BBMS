import React from 'react'
import Card from '../component/card'
import Navbar from '../component/navbar.jsx'

function home() {
  return (
    <>
      <Navbar />
      <div className="grid gap-4 pt-5 sm:grid-cols-3 sm:gap-6">
        <Card id='1'/>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

    </>
  )
}

export default home
