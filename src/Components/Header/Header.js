import React from 'react'
import './Header.css'
import man from  './Vector.png'

function header() {

  return (
    <div className="headerContainer">
            <div className="left">
            <h1 className="text1">An inspiring design delivered to your inbox every morning</h1>
            <p className="text2">
                Our team scouts the internet for the best designs, illustrations and
                art and delivers a truly inspiring one every day to your inbox
            </p>
            <b className="text3">Show me how it looks</b><br/><br/>
                <div className="form">
                    <input type="text" placeholder="Your e-mail address" />
                    <button>Register Now</button>
                </div>
            <p>Free - No Spam - No Data Sharing</p>
            </div>

            <div className="right">
                <img className="ig1" src={man} alt="man" />
            </div>
        </div>
  )
}

export default header
