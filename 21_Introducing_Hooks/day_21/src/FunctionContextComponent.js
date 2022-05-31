import React, {useContext} from "react"
import { ThemeContext } from "./App"


export default function  FunctionContextComponent(){
    const value = useContext(ThemeContext)
    return(
        <div>
            <p>Function Context Component</p>
            {value ? "true" : "false"}
            </div>
    )
}


