import React from 'react'
import trual1 from '../images/trual1.png'

export default function Footer(props) {
  return (
    <div>
        <hr className='endLine'></hr>
        <div className='footerMain'>
      <img className='ninjaIcon2' src={trual1} alt='no img'></img>
      <h3 style={{color: props.mode ? "#3c3e41" : "#54585f"}}>SUFI STUDIO</h3>
      <h5 style={{color: props.mode ? "#3c3e41" : "#54585f"}}>© 2024. All rights reserved by SUFI STUDIO</h5>
      </div>
    </div>
  )
}
