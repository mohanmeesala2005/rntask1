import React,{ useState } from 'react'
import Navbar from './components/navbar' 
import Photo from './components/rnlogo'
import AboutUs from './components/aboutus'
import Events from './components/events'
import Team from './components/teamrn'
import Gallery from './components/gallery'
import ContactUs from './components/contactus'

function App() {
  return (
    <div>
      <Navbar/>
      <Photo />
      <AboutUs />
      <Events/>
      <div>
        <p className="team_head">Team RN</p>
       <Team />
      </div>
      <Gallery />
      <ContactUs />
    </div>
  )
}

export default App
