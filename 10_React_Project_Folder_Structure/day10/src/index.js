// src/index.js
// index.js
import React from 'react'
import ReactDOM from 'react-dom'
// import { App } from './App' 
import App from './App' // if component default, we do not need curly bracket

// const App = () => <h1>Welcome to 30 Days Of React</h1>


const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

