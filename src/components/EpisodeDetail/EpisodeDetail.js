import React from 'react'
import SideBar from '../SideBar/SideBar'
import EpisodeView from '../EpisodeView/EpisodeView'
import Header from '../Header'

const EpisodeDetail = () => {
  return (
    <div>
        <Header />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <SideBar />
        <EpisodeView />
        </div>
    </div>
    
  )
}

export default EpisodeDetail