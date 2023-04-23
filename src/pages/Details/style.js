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

export const ContentContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  padding: 0 15px;
  animation: ${entrance} .3s linear normal;

  button {
    padding: 5px 30px;
    background: ${props => props.theme.colors.elements};
    color: ${props => props.theme.colors.text};
    font-size: 14px;
    border: none;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 5px 0px;
    margin: 60px 0;
    cursor: pointer;
    transition: all .3s;

    @media (max-width: 970px) {
      margin: 40px 0;
    }

    &:hover {
      color: ${props => props.theme.colors.input};
    }

    i {
      margin-right: 5px;
    }
  }
`

export const InfosContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 15px;

  @media (max-width: 970px) {
    flex-direction: column;
    align-items: center;
  }
`

export const ImageContainer = styled.div`
  width: 560px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 650px) {
    width: 90%;
  }
  
  img {
    width: 100%;
  }
`

export const Infos = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 25px 5px;

  @media (max-width: 970px) {
    width: 90%;
  }

  h2 {
    font-size: 34px;
  }
  
`

export const InfosDesc = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 30px;
  
  @media (max-width: 970px) {
    flex-direction: column;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 49%;

    @media (max-width: 970px) {
      margin-bottom: 20px;
      width: 100%;
    }

    span {
      font-size: 14px;
    }
  }

`

export const Borders = styled.div`
  margin-top: auto;

  @media (max-width: 450px) {
    span {
      display: block;
      width: 100%;
      margin-bottom: 15px;
    }

    button {
      font-size: 14px;
      padding: 5px 20px;
    }
  }

  button {
    margin: 5px;
  }
`