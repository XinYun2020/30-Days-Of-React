// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// class App extends Component {
//   // 1
//   constructor(props) {
//     super(props)
//     console.log('I am  the constructor and  I will be the first to run.')
//     this.state = {
//       firstName: 'Alice',
//       data: [],
//     }
//     // console.log(this.state.firstName)
//   }

//   // 2
//   static getDerivedStateFromProps(props, state) {
//     console.log(
//       'I am getDerivedStateFromProps and I will be the second to run.'
//     )
//     // return null
// 		return { firstName: props.firstName }
//   }

//   // 4
//   componentDidMount() {
//     console.log('I am componentDidMount and I will be last to run.')
//     // after 3 seconds it resets the state
//     setTimeout(() => {
//       this.setState({
//         firstName: 'Xinyun',
//       })
//     }, 3000)
//     console.log(this.state.firstName)

//     const API_URL = 'https://restcountries.eu/rest/v2/all'
//     fetch(API_URL)
//       .then((response) => {
//         return response.json()
//       })
//       .then((data) => {
//         console.log(data)
//         this.setState({
//           data,
//         })
//       })
//       .catch((error) => {
//         console.log(error)
//       })
//   }

//   renderCountries = () => {
//     return this.state.data.map((country) => {
//       return (
//         <div>
//           <div>
//             {' '}
//             <img src={country.flag} alt={country.name} />{' '}
//           </div>
//           <div>
//             <h1>{country.name}</h1>
//             <p>Population: {country.population}</p>
//           </div>
//         </div>
//       )
//     })
//   }


//   // 3
//   render() {
//     console.log('I am render and I will be the third to run.')
//     // Never do this
//     // Do not reset inside the render method, create a method to reset the state
//     return (
//       <div className='App'>
//         <h1>React Component Life Cycle</h1>
//         <h1>Calling API</h1>
//         <div>
//           <p>There are {this.state.data.length} countries in the api</p>
//           <div className='countries-wrapper'>{this.renderCountries()}</div>
//         </div>
//       </div>
//     )
//   }
// }

// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)

// ######################################################################################################################################################

// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// class App extends Component {
//   constructor(props) {
//     super(props)
//     console.log('I am  the constructor and  I will be the first to run.')
//     this.state = {
//       firstName: 'John',
//       day: 1,
//     }
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     console.log(nextProps, nextState)
//     console.log(nextState.day)
//     if (nextState.day > 31) {
//       return false
//     } else {
//       return true
//     }
//   }
//   // the doChallenge increment the day by one
//   doChallenge = () => {
//     this.setState({
//       day: this.state.day + 1,
//     })
//   }
//   render() {
//     return (
//       <div className='App'>
//         <h1>React Component Life Cycle</h1>
//         <button onClick={this.doChallenge}>Do Challenge</button>
//         <p>Challenge: Day {this.state.day}</p>
//         {this.state.congratulate && <h2>{this.state.congratulate}</h2>}
//       </div>
//     )
//   }
// }

// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)

// ######################################################################################################################################################

import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  constructor(props) {
    super(props)
    console.log('I am  the constructor and  I will be the first to run.')
    this.state = {
      day: 1,
      congratulate: '',
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState)
    console.log(nextState.day)
    if (nextState.day > 31) {
      return false
    } else {
      return true
    }
  }

  doChallenge = () => {
    this.setState({
      day: this.state.day + 1,
    })
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.day == 30) {
      this.setState({
        congratulate: 'Congratulations,Challenge has been completed',
      })
    }
    console.log(prevState, prevProps)
  }

  render() {
    return (
      <div className='App'>
        <h1>React Component Life Cycle</h1>
        <h1>Calling API</h1>
        <button onClick={this.doChallenge}>Do Challenge</button>
        <p>Challenge: Day {this.state.day}</p>
        {this.state.congratulate && <h2>{this.state.congratulate}</h2>}
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

// ######################################################################################################################################################

// import React, { Component } from 'react'
// // axios is a package which
// // send requests to a server to fetch data
// import axios from 'axios'
// import ReactDOM from 'react-dom'

// class App extends Component {
//   state = {
//     data: [],
//   }
//   componentDidMount() {
//     const API_URL = 'https://restcountries.eu/rest/v2/all'
//     axios
//       .get(API_URL)
//       .then((response) => {
//         this.setState({
//           data: response.data,
//         })
//       })
//       .catch((error) => {
//         console.log(error)
//       })
//   }

//   renderCountries = () => {
//     return this.state.data.map((country) => {
//       const languageOrLanguages =
//         country.languages.length > 1 ? 'Langauges' : 'Language'
//       const formatLanguages = country.languages
//         .map(({ name }) => name)
//         .join(', ')
//       return (
//         <div>
//           <div>
//             {' '}
//             <img src={country.flag} alt={country.name} />{' '}
//           </div>
//           <div>
//             <h1>{country.name}</h1>
//             <p>Capital: {country.capital}</p>
//             <p>
//               {languageOrLanguages}: {formatLanguages}
//             </p>
//             <p>Population: {country.population}</p>
//           </div>
//         </div>
//       )
//     })
//   }
//   render() {
//     return (
//       <div className='App'>
//         <h1>Fetching Data Using Axios</h1>
//         <div>
//           <p>There are {this.state.data.length} countries in the api</p>
//           <div className='countries-wrapper'>{this.renderCountries()}</div>
//         </div>
//       </div>
//     )
//   }
// }

// const rootElement = document.getElementById('root')
// ReactDOM.render(<App />, rootElement)
