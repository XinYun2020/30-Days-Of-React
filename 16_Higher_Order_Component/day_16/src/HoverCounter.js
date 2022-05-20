// rce to create a class component
import React, { Component } from 'react'
import withCounter from './withCounter'


class HoverCounter extends Component {
//   // 1
//   constructor(props) {
//     super(props)
//     this.state = {
//       count: 0,
//     }
//   }

//   // handler
//   incrementCount = () => {
//       this.setState( prevState => {
//           return {count: prevState.count + 1}
//       })
//   }

  render() {
    // const {count} = this.state 

    // destructure count and increament count from HOC from here
    const {name, count, incrementCount} = this.props 

    // Never do this
    // Do not reset inside the render method, create a method to reset the state
    return (
      <div className='ClickCounter'>
        <h2 onMouseOver={incrementCount}>
          {name} Hovered {count} times
        </h2>
      </div>
    )
  }
}

export default withCounter(HoverCounter)