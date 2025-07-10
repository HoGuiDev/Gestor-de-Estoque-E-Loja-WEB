import styled from "styled-components";

export const Fundo = styled.div `
  position: absolute;

  background-color: #0000009b;

  width: 100dvw;
  height: 100%;
`

export const Conteiner = styled.div `
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 40px;

  background-color: #8b8b8b;
  width: 85%;
  height: 80%;

  border: black solid 2px;
  border-radius: 25px;

  z-index: 100;
`

export const BtnDelet = styled.button `
  background-color: crimson;

  position: absolute;

  bottom: 20px;
  right: 20px;

  width: 100px;
  height: 50px;

  border-radius: 1cap;
  border: none;

  box-shadow: #00000078 0px 0px 5px;

  &:active {
    background-color: darkred;
  }
`

export const BtnFechar = styled.button `
  background-color: transparent;
  
  border: none;

  position: absolute;

  top: 20px;
  right: 20px;

  font-size: larger;

  text-shadow: #00000068 0px 0px 5px;
  
`

export const BtnSalvar = styled.button `
  position: absolute;

  bottom: 20px;
  right: 140px;

  width: 100px;
  height: 50px;

  border-radius: 1cap;
  border: none;

  background-color: forestgreen;

  &:active {
    background-color: #33d433;
  }
`