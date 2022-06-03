// useContext
import React from "react";
import FunctionalContextComponent from "./FunctionContextComponent";
import ThemeProvider from "./ThemeContext";

// export const ThemeContext = React.createContext();

const MainContext = () => {
  // const [darkTheme, setDarkTheme] = useState(true);  

  // const toggleTheme = () => {
  //   setDarkTheme((prevDarkTheme) => !prevDarkTheme); // toggle true false
  // };

  return (
    <>
      <ThemeProvider>
        <FunctionalContextComponent />
      </ThemeProvider>
    </>
  );
};

export default MainContext;