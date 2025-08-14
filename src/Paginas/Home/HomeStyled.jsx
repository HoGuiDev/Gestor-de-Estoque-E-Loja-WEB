import styled from "styled-components"

export const MainCardapio = styled.main `
  display: flex;
  flex-direction: column;
`

export const HeaderCardapio = styled.header `
  background: rgba(252, 157, 255, 0.568);

  height: 10dvh;

  display: flex;

  align-items: center;
  justify-content: center;

  border: 2px solid rgba(253, 182, 255, 0.856);
  border-radius: 10px;

  box-shadow: 0 0 10px rgba(253, 182, 255, 0.856), 0 0 20px rgba(253, 182, 255, 0.856), 0 0 40px rgba(253, 182, 255, 0.856);
`

export const TituloH1 = styled.h1 `
  font-family: 'Arial Narrow', Arial, sans-serif;
`

export const ToolBar = styled.div `
  border: 2px solid cyan;
  margin: 20px 40px;
`

export const BotaoGeral = styled.button `

`

export const Produtos = styled.div `
  border: 2px solid;
  border-color: rgba(224, 183, 204, 0.76);
  border-radius: 10px;

  justify-self: ${a => a.$alinhar? a.$alinhar: "auto"};
  align-content: baseline;

  display: flex;
  flex-wrap: wrap;

  gap: 10px;

  padding: 10px;

  margin: 0px 15px 0px 15px;
`

export const Consumiveis = styled.div `
  border: 3px solid;
  border-radius: 5px;
  border-color: currentColor;

  transition: border-color 0.8s;

  width: 145px;
  height: 100px;

  padding: 5px;
  & > p {
    margin: 2px 0px 3px 0px;

    font-family: "Winky+Sans" ,'Roboto', 'sans-serif' ;
  }
`

export const BtAdd = styled.button `
  position: relative;
  bottom: -5px;
  right: -120px;

  width: 25px;
  height: 25px;

  border: 1px solid transparent;
  border-radius: 10px;

  background-color: #70ee64;

  &:active {
    background: #01d401;
  }
`

export const Menu = styled.div `
  display: flex;
`

//Carrinho
export const Carrinho = styled.aside `
  border: black solid 2px;
  border-radius: 10px;

  display: flex;
  flex-direction: column;

  height: 388px;
  width: 30%;

  margin-right: 15px;

  & > h3 {

    align-self: center;
  }
`

export const DivComanda = styled.div `
  width: 100%;
  height: 90%;
  
`

export const DivC = styled.div `
  display: flex;
  justify-content: space-around;

  &>p {
    flex-basis: 37%;
  }
`

export const ButtonC = styled.button `
  width: 20px;
  height: 20px;

  flex-basis: 11%;

  border-radius: 10px;
  border: black solid 1px;

  background: #fd4c4c;
  &:active {
    background: red;
  }
`

export const DivPreço = styled.div `

  display: flex;

  justify-self: end;
  align-self: flex-start;

  gap: 10px;
`