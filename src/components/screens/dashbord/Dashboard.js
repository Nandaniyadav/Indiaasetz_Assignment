// Dashboard.js

import React, { useState } from 'react';
import Navigation from '../../common/Navigationbar/Navigation';
import Profile from '../profiledetails/profile';
import DataTable from '../../common/Dashboard-table/DataTable';

export default function Dashboard() {
  const [showProfile, setShowProfile] = useState(false);

  const handleRowClick = () => {
    setShowProfile(!showProfile);
  };

  return (
    <div className='main-container'>
      <br></br>
      <Navigation />
     {!showProfile && <DataTable handleClick={handleRowClick} />} 
      {showProfile && <Profile />}
    </div>
  );
}
