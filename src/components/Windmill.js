import React from 'react'

import isTouchDevice from 'libs/utils/isTouchDevice'

import Img from 'components/Img'
import background from 'styles/img/background.jpg'


class Windmill extends React.Component {
  state = {
    posX: 0,
    posY: 0,
    clicked: false,
    speed: .1,
  }

  componentDidMount = () =>
    window.addEventListener("mousemove", this.updateMouse)
  
  componentWillUnmount = () =>
    window.removeEventListener("mousemove", this.updateMouse)

  updateMouse = e =>
    this.setState({
      posX: e.clientX,
      posY: e.clientY,
    })

  updateTouch = e => {}

  calcAnimDuration = () =>
    isTouchDevice() ?
      this.state.clicked ?
        1
        :
        7
      :
      ((window.innerWidth / 2 - this.state.posX) ** 2 + (window.innerHeight / 2 - this.state.posY) ** 2) ** .5 / 5

  render = () =>
    <div className="Header">
      <Img src={background} />
      <div className="container">
        <h1>Народный Святой</h1>
      </div>
    </div>
}


export default Windmill
