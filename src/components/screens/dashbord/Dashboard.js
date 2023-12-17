import Navigation from '../../common/Navigationbar/Navigation'
import React from 'react'
import Profile from '../profiledetails/profile'


export default function Dashboard() {
  return (
    <div className='main-container'>
        <br></br>
       <Navigation/>
      
       {/* <Datatable/> */}
       <Profile/>
    </div>

  )
}
