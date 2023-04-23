import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0 10px;
  box-shadow: 0px 0px 5px 0 #00000080;
  background: ${props => props.theme.colors.elements};
`

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  padding: 20px 0;
  margin: auto;

  h1 {
    font-size: 24px;
    color: ${props => props.theme.colors.text};
    
    @media (max-width: 970px) {
      font-size: 18px;
    }

  }
  
  button {
    cursor: pointer;
    color: ${props => props.theme.colors.text};
    font-weight: 600;
    border: none;
    background: none;
    transition: all .2s;
    /* text-align: center; */
    display: flex;
    justify-content: center;
    align-items: center;


    i {
      margin-right: 10px;
      font-size: 16px;
    }

    &:hover {
      opacity: 0.7;
    }
  }
`