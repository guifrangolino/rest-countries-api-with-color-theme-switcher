import { useState } from "react"
import { Container, HeaderContainer } from "./styles"

function Header({toggleTheme}) {

  const [darkMode, setDarkMode] = useState('dark')

  return (
    <Container>
      <HeaderContainer>
        <h1>Where in the world?</h1>
        <button onClick={() => toggleTheme(setDarkMode)}><i className={`fa-${darkMode === 'dark' ? 'regular' : 'solid'} fa-moon`}></i>Dark Mode</button>
      </HeaderContainer>
    </Container>
  )
}

export default Header