import React from 'react'

const team = (props) => {

  return (
    <div>
      <div className="card">
        <img className="card_image" src={props.img} />
        <h2 className="card_text">{props.title}</h2>
        <p className="card_text">{props.name}</p>
      </div>
    </div>
  )
}

export default team
