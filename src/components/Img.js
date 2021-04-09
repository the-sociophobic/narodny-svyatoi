import React from 'react'


class Img extends React.Component {
  state = {
    loaded: false,
    verticalAlign: false,
  }
  imgRef = React.createRef()

  componentDidMount = () =>
    document.addEventListener("resize", this.onLoad)

  componentWillUnmount = () =>
    document.removeEventListener("resize", this.onLoad)

  onLoad = e => {
    if (!this.imgRef.current)
      return

    const { clientWidth, clientHeight } = this.imgRef.current

    this.setState({
      loaded: true,
      verticalAlign: window.innerWidth / window.innerHeight > clientWidth / clientHeight
    })
  }

  render = () =>
    <img
      ref={this.imgRef}
      src={this.props.src}
      onLoad={this.onLoad}
      className={`custom-img custom-img--${this.state.verticalAlign ? "vertical" : "horizontal"}`}
      alt={this.props.alt || ""}
    />
}


export default Img