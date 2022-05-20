// HOC Higher Order Components
// rce
import React, { Component } from 'react'

const withCounter = (WrappedComponent) => {
    class WithCounter extends Component {
        // 1 incrementCount is the functionality we want to share
        constructor(props) {
            super(props)
            this.state = {
            count: 0,
            }
        }

        // handler
        incrementCount = () => {
            this.setState( prevState => {
                return {count: prevState.count + 1}
            })
        }

        render() {
            return <WrappedComponent 
            name = 'Alice' 
            count = {this.state.count} 
            incrementCount = {this.incrementCount} 
            />
        }
    }
    return WithCounter
}

export default withCounter

