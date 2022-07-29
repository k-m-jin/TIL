import React, { Component } from 'react'

class Comp extends Component {
  state = {
    num: 0,
  }

  countUp = () => {
    this.setState({
      num: this.state.num + 1,
    })
  }
  render() {
    // render() 를 붙여줘야만 렌더가 됨
    const { name } = this.props

    return (
      <div>
        <h1>{name}</h1>
        {this.state.num}
      </div>
    )
  }
}

export default Comp
