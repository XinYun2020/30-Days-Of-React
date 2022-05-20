import React, { Component } from 'react'
import withCounter from './withCounter'

// import ReactDOM from 'react-dom'

class ClickCounter extends Component {
  // // 1
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     count: 0,
  //   }
  // }

  // // handler
  // incrementCount = () => {
  //     this.setState( prevState => {
  //         return {count: prevState.count + 1}
  //     })
  // }

  // 3
  render() {
    // const {count} = this.state 

    // destructure count and increament count from HOC from here
    const {name, count, incrementCount} = this.props 

    // Never do this
    // Do not reset inside the render method, create a method to reset the state
    return (
      <div className='ClickCounter'>
        <button onClick={incrementCount}>
          {name} Clicked {count} times
          </button>
      </div>
    )
  }
}

export default withCounter(ClickCounter)