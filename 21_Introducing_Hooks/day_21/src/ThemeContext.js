import React, { useContext, useState} from 'react'

// https://www.youtube.com/watch?v=5LrDIWkK_Bc&list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h&index=6&ab_channel=WebDevSimplified

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

// custom hook
export function useTheme() {
  return (
    useContext(ThemeContext)
  )
}

export function useThemeUpdate() {
    return (
      useContext(ThemeUpdateContext)
    )
  }

export default function ThemeProvider({ children }) {
    const [darkTheme, setDarkTheme] = useState(true);  

    function toggleTheme() {
        setDarkTheme((prevDarkTheme) => !prevDarkTheme); // toggle true false
    };

    return(
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
            { children }
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}
