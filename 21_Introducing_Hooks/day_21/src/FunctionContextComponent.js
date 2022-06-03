import { useTheme, useThemeUpdate } from "./ThemeContext"
import React from "react"
// import { ThemeContext } from "./App"

export default function  FunctionContextComponent(){
    const darkTheme = useTheme() // pass the context to the useContext
    const toggleTheme = useThemeUpdate() // pass the context to the useContext
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem',
    }
    return(
        <>
            <button onMouseEnter={toggleTheme}> Toggle Theme</button>
            <div style={themeStyles}>
                <p>Function Context Component Function Theme</p>
                {darkTheme ? "true" : "false"}
            </div>
        </>         
    )
}


