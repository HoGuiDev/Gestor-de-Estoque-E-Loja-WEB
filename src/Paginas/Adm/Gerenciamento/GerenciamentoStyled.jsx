import styled, {createGlobalStyle} from "styled-components";

export const GerenciamentoGlobal = createGlobalStyle`
  body {
    background: #9299ac;
  }
`

export const Main = styled.main `
  width: auto;
  height: auto;

  padding: 25px;

  overflow-y: hidden;
`

export const Bloco = styled.div `
  background-color: rgb(156, 156, 156);
  width: 90dvw;

  align-self: center;

  border: 2px solid black;
  border-radius: 10px;

  padding: 15px;

  box-shadow: #0000004c 5px 5px 10px;

  margin-bottom: 25px;
`

export const Form = styled.form `
  display: flex;
  flex-direction: column;

  padding: 5px 10px;
  gap: 10px;
  
  height: auto;
`

export const Label = styled.label `
`

export const Input = styled.input `
  width: 250px;
  height: 20px;

  border-radius: 5px;
  border: none;
`

export const DivInput = styled.div `
  display: flex;
  width: 20%;
  justify-content: space-around;
`

export const Button = styled.button `
  width: 250px;
  height: 50px;

  background-color: green;

  border: none;
  border-radius: 10px;

  box-shadow: #00000058 2px 2px 5px;

  &:active {
    background-color: #02aa02;
    box-shadow: none;
  }
`

export const Borda = styled.div `
  border: black 2px solid;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  gap: 5px 5px;

  padding: 10px;

  margin-bottom: ${a => a.$mBottom? "5px": "auto"};

  align-items: center;
`

export const Item = styled.div`
  border: black 1px solid;
  border-radius: 5px;

  display: flex;

  padding: 6px;

  width: 95%;

  justify-content: space-around;

  & > p {
    width: max-content;
    flex-basis: 16%;
  }
`

export const Img = styled.img `
  width: 25px;
  height: 25px;

  filter: ${a => a.$Shadow == 1? "drop-shadow( green 0px 0px 5px )": "drop-shadow( red 0px 0px 5px )"};
`

export const BtnEdit = styled.button `
  border-radius: 10px;
  background-color: chartreuse;
  border: none;
  width: 25px;
  height: 25px;

  &:active {
    background-color: #adfc5f;
  }
`