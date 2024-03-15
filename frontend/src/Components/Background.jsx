import React from 'react'
import Info from './Info'
import Feed from './Feed'

const Background = () => {
  return (
    <div className=' h-screen w-full flex  bg-black'>
        <Info/>
        <Feed/>
    </div>
  )
}

export default Background