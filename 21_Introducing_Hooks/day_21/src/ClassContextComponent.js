import React from "react";
import { ThemeContext } from "./App";


export default class ClassContextComponent extends React.Component {
    render() {
      return (
          <div>
              <p>Class Context Component</p>
          <ThemeContext.Consumer>
              {value => {if(value){
                  return "false"
              } else {
                  return "true"
              }}}
          </ThemeContext.Consumer>
          </div>
      );
    }
  }