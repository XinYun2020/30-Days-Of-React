import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'


/*
Higher Order Component:
  it allow us to reuse component
  enhance a component with style and functionality
*/ 

const Button = ({ onClick, text, style }) => {
  return (
    <button onClick={onClick} style={style}>
      {text}
    </button>
  )
}

const buttonWithStyles = (CompParam, name = 'default') => {
  // array with 6 objects
  const colors = [
    {
      name: 'default',
      backgroundColor: '#e7e7e7',
      color: '#000000',
    },
    {
      name: 'react',
      backgroundColor: '#61dbfb',
      color: '#ffffff',
    },
    {
      name: 'success',
      backgroundColor: '#4CAF50',
      color: '#ffffff',
    },
    {
      name: 'info',
      backgroundColor: '#2196F3',
      color: '#ffffff',
    },
    {
      name: 'warning',
      backgroundColor: '#ff9800',
      color: '#ffffff',
    },
    {
      name: 'danger',
      backgroundColor: '#f44336',
      color: '#ffffff',
    },
  ]

  // set backgroundColor, color 等于 输入的name的颜色值
  const { backgroundColor, color } = colors.find((c) => c.name === name)

  const buttonStyles = {
    backgroundColor, // backgroundColor: backgroundColor,
    padding: '10px 45px',
    border: 'none',
    borderRadius: 3,
    margin: 3,
    cursor: 'pointer',
    fontSize: '1.25rem',
    color, // color: color,
  }
  return (props) => {
    return <CompParam {...props} style={buttonStyles} />
  }
}

const NewButton = buttonWithStyles(Button)
const ReactButton = buttonWithStyles(Button, 'react')
const InfoButton = buttonWithStyles(Button, 'info')
const SuccessButton = buttonWithStyles(Button, 'success')
const WarningButton = buttonWithStyles(Button, 'warning')
const DangerButton = buttonWithStyles(Button, 'danger')

// class App extends Component {
//   render() {
//     return (
//       <div className='App'>
//         <Button text='No Style' onClick={() => alert('I am not styled yet')} />
//         <NewButton
//           text='Styled Button'
//           onClick={() => alert('I am the default style')}
//         />
//         <ReactButton text='React' onClick={() => alert('I have react color')} />
//         <InfoButton
//           text='Info'
//           onClick={() => alert('I am styled with info color')}
//         />
//         <SuccessButton text='Success' onClick={() => alert('I am successful')} />
//         <WarningButton
//           text='Warning'
//           onClick={() => alert('I warn you many times')}
//         />
//         <DangerButton
//           text='Danger'
//           onClick={() => alert('Oh no, you can not restore it')}
//         />
//       </div>
//     )
//   }
// }

// Another Example
class App extends Component {
  render() {
      const appStyles = {
        backgroundColor: '#F3F0F5',
        textAlign: 'center',

      }
    return (
      <div className='App' style={appStyles}>
        <ClickCounter />
        <HoverCounter />
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)


