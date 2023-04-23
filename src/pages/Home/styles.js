import styled, { keyframes } from "styled-components";

const entrance = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const Container = styled.div`
  width: 100%;
  background: ${props => props.theme.colors.background};
`

export const InputAndFilter = styled.div`
  margin: 20px auto;
  max-width: 1440px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 630px) {
    flex-direction: column;
  }

  .react-select-container {
    box-shadow: 0px 0px 5px 0 #00000080;
    width: 180px;
    font-size: 14px;
    margin-right: 15px;

    @media (max-width: 630px) {
      align-self: flex-start;
      margin-left: 15px;
    }

  }
  
  .react-select__menu {
    background: ${props => props.theme.colors.elements};
    border-radius: 5px;
  }

  .react-select__control {
    background: ${props => props.theme.colors.elements};
    border: none;
    color: ${props => props.theme.colors.text};
    border-radius: 5px;
  }

  .react-select__indicator-separator {
    display: none;
  }

`

export const Input = styled.div`
  background: ${props => props.theme.colors.elements};
  max-width: 350px;
  width: 100%;
  padding: 10px 25px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0 #00000080;
  margin: 15px;

  @media (max-width: 650px) {
    max-width: none;
    width: 91%;
  }

  i {
    margin-right: 20px;
  }

  input {
    border: none;
    outline: none;
    background: transparent;
    width: 80%;
    color: ${props => props.theme.colors.input};
    
  }
`

export const CountriesContainer = styled.ul`
  max-width: 1440px;
  width: 100%;
  margin: 25px auto;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 50px;
  background: ${props => props.theme.colors.background};
  padding: 5px 15px;
`

export const Country = styled.li`
  max-width: 280px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 5px 0 #00000080;
  border-radius: 10px;
  transition: all .2s;
  background: ${props => props.theme.colors.elements};
  transform: scale(0.98);
  animation: ${entrance} .3s linear normal;

  &:hover {
    transform: scale(1);
  }

  a {
    text-decoration: none;
    border-radius: 10px;
    color: ${props => props.theme.colors.text};

    img {
      width: 100%;
      height: 150px;
      object-fit: cover;
      border-radius: 10px 10px 0 0;
    }
  
    .infos {
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 15px;
      margin-bottom: 15px;
    }
  }
`