// src/App.js
import React, { Fragment } from 'react'

// Named export in arrow function 
// enf: export const functionName = (params) => { }
// export const App = () => <h1>Welcome to 30 Days Of React</h1>

// Regular function
// export function App () {
//   return <h1>Welcome to 30 Days Of React</h1>
//   }


// export default function App () {
//   return <h1>Welcome to 30 Days Of React</h1>
// }

// Recommended

const Skills = () => {
  return (
    <Fragment>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </Fragment>
  )
  // return (
  //   <React.Fragment>
  //     <li>HTML</li>
  //     <li>CSS</li>
  //     <li>JavaScript</li>
  //   </React.Fragment>
  // )
}
const RequiredSkills = () => {
  return (
    <ul>
      <Skills />
    </ul>
  )
}

const App = () => (
  <header>
    <div className='header-wrapper'>
    < h1>Welcome to 30 Days Of React</h1>
      <RequiredSkills/> 
    </div>
  </header>
)

export default App

