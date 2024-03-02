import React from 'react'
import './form.css'

const contactus = () => {
  return (
    <div>
      <div>
        <h1 className="contact">Contact Us</h1>
      </div>
      <div className="form_container">
      <form className="form">
        <div>
          <input className="from_input"
            type="text"
            id="firstName"
            placeholder="firstName"
          />
        </div>
        <div>
          <input
            type="text"
            id="lastName"
            placeholder="lastName"
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            placeholder="email"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  )
}

export default contactus
