import styled from "styled-components"

export const MainCardapio = styled.main `
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

  display: flex;
  flex-wrap: wrap;

  gap: 10px;

  padding: 10px;

  margin: 15px;

  width: 90dvw;
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
`