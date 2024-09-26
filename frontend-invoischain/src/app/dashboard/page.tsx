import React from 'react'
import DashNavBar from '../components/DashNavBar'
import DashTab from '../components/DashTab'

export default function Dashboard() {
  return (
    <div>
        <div className="sticky top-0 transition-transform duration-300 ease-in-out" id="navbar-container">
          <DashNavBar />
        </div>
        <DashTab />
    </div>
  )
}
