import React from 'react'

const rnlogo = () => {
  return (
    <div>
      <img className="rnlogo" src="../src/assets/rnlogo.jpg" alt="logo"/>

      <div>
        <ul className="rnlogo_list">
            <li className="rnlogo_item">
                <img className="rnlogo_img" src="./src/assets/facebook.png" alt="logo" />
            </li>
            <li className="rnlogo_item">
                <img className="rnlogo_img" src="./src/assets/instagram.png" alt="logo" />
            </li>
            <li className="rnlogo_item">
                <img className="rnlogo_img" src="./src/assets/youtube.png" alt="logo" />
            </li>
            <li className="rnlogo_item">
                <img className="rnlogo_img" src="./src/assets/gmail.png" alt="logo" />
            </li>
        </ul>
      </div>
    </div>
  )
}

export default rnlogo
