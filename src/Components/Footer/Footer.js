import React from 'react'
import './Footer.css'
import icon1 from './icon1.png'
import icon2 from './icon2.png'

function footer() {

  return (
    <div className="footerContainer">
      <div className="ftLeft">
      <ul>
          <li>Prompt Generator</li>
          <li>Dweep Daily</li>
          <li>All Contributors</li>
          <li>Your data on Dweep.io</li>
          <li>Contribute to Dweep</li>
      </ul>
      </div>
      <div className="ftRight">
          <ul className="list1">
              <li> Dweep.io</li>
              <li>Made with love in India</li>
                  <div className="icon">
                      <img src={icon1} alt="linkedin" />
                      <img src={icon2} alt="instagram" />
                  </div>
                  <br/>
              <li>hello@dweep.io</li>
          </ul>
      </div>
</div>
  )
}

export default footer