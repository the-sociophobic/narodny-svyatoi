import React from 'react'

import Img from 'components/Img'
import background from 'styles/img/background.jpg'


export default props =>
  <div className="Header">
    <Img src={background} />
    <div className="container">
      <h1>Народный Святой</h1>
    </div>
  </div>
