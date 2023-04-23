import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../styles/GlobalStyle";
import Home from "../Home";
import light from "../../styles/themes/light";
import dark from "../../styles/themes/dark";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "../Details";

function Main() {
  const [theme, setTheme] = useState(light)

  function toggleTheme(setIcon) {
    setTheme(theme.title === 'light' ? dark : light)
    theme.title === 'light' ? setIcon('light') : setIcon('dark')
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home toggleTheme={toggleTheme} />} />
          <Route path="/:alphaCode" element={<Details toggleTheme={toggleTheme} />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default Main