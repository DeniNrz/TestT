import React from 'react'
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined'

import Audio from '../img/audio.png'

import './Audio.css'

export const AudioComponent: React.FC = () => {
  return (
    <>
      <div className="audio">
        <div className="audioVos">
          <h3>texttexttexttext</h3>
          <img src={Audio} alt="Audio" />
          <div className="buttonText">
            <div>
              <button className="buttonOne">texttexttext</button>
            </div>
            <div>
              <button className="buttonTwo">text</button>
            </div>
          </div>
        </div>
        <div className="blockText">
          <p>
            texttexttexttexttexttexttexttexttexttex
            <br />
            texttexttexttexttexttexttexttexttext
          </p>
        </div>
      </div>
      <div className="audioList">
        <h2>texttexttexttext</h2>
        <div className="list">
          <ul>
            <li>
              <VolumeUpOutlinedIcon />
              text
            </li>
            <li>
              <VolumeUpOutlinedIcon />
              texttexttexttext
            </li>
            <li>
              <VolumeUpOutlinedIcon />
              texttexttexttext
            </li>
            <li>
              <VolumeUpOutlinedIcon />
              texttexttexttext
            </li>
            <li>
              <VolumeUpOutlinedIcon />
              texttexttexttext
            </li>
            <li>
              <VolumeUpOutlinedIcon />
              texttexttexttext
            </li>
            <li>
              <VolumeUpOutlinedIcon />
              texttexttexttext
            </li>
          </ul>
          <div className='borderList'></div>
          <ul>
            <li>
              <VolumeUpOutlinedIcon />
              text
            </li>
            <li>
              <VolumeUpOutlinedIcon />
              texttexttexttext
            </li>
            <li>
              <VolumeUpOutlinedIcon />
              texttexttexttext
            </li>
            <li>
              <VolumeUpOutlinedIcon />
              texttexttexttext
              <VolumeUpOutlinedIcon />
            </li>
            <li>
              <VolumeUpOutlinedIcon />
              texttexttexttext
              <VolumeUpOutlinedIcon />
            </li>
            <li>
              <VolumeUpOutlinedIcon />
              texttexttexttext
              <VolumeUpOutlinedIcon />
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
