// function sayHello(){
//     return  function (){
//         return "Hello world"
//     }
// }
// let fn = sayHello();// function can be treated like variables to meam they are  first class citizens
// let message = fn()
import { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div style={{ 
        background: darkMode ? '#333' : '#fff', 
        color: darkMode ? '#fff' : '#000', 
        minHeight: '100vh' 
      }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);