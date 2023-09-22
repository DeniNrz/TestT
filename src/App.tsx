import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'

import './App.css'
import { Slider } from './components/Slider/Slider'
import { AudioComponent } from './components/Audio/Audio'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <div className="header">
        <ArrowBackIosIcon />
        <p>texttextt</p>
      </div>
      <div className="middle">
        <Slider />
        <div className="reproduce">
          <AudioComponent />
        </div>
      </div>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  )
}

export default App
