import styled, {createGlobalStyle} from "styled-components"

/*   
  primary: "#FA41BA",
  secondary: "#CA94FA",
  blue_1: "#4157FA",
  blue_2: "#6741FA",
  pink_1: "#FA41BA",
  pink_2: "#D907FA" 
*/

//Estilização Global da pagina
export const HomeGlobal = createGlobalStyle`
  body {
    background: #CA94FA;
  }
`

//Elementos personalizados
export const MainCardapio = styled.main `
  display: flex;
  flex-direction: column;
`

export const HeaderCardapio = styled.header `
  background: #FA41BA;

  height: 10dvh;

  display: flex;

  align-items: center;
  justify-content: center;

  //border: 2px solid #E041FA;
  border-radius: 10px;

  filter: drop-shadow( 0px 10px 10px #A441FA);

  //box-shadow: 0 0 10px rgba(253, 182, 255, 0.856), 0 0 20px rgba(253, 182, 255, 0.856), 0 0 40px rgba(253, 182, 255, 0.856);
`

export const TituloH1 = styled.h1 `
  font-family: 'Arial Narrow', Arial, sans-serif;
`

export const ToolBar = styled.div `
  border: 2px solid #FA41BA;
  border-radius: 10px;

  display: flex;

  justify-content: space-around;

  margin: 20px 40px;
`

export const BotaoGeral = styled.button `

`

export const Produtos = styled.div `
  border: 2px solid;
  border-color: #FA41BA;
  border-radius: 10px;

  background: #ec9ef8bd;

  justify-self: ${a => a.$alinhar? a.$alinhar: "auto"};
  align-content: baseline;

  display: flex;
  flex-wrap: wrap;
  flex: 2;

  gap: 10px;

  padding: 10px;

  margin: 0px 15px 0px 15px;
`

export const Consumiveis = styled.div `
  border: 3px solid;
  border-radius: 5px;
  border-color: currentColor;

  transition: border-color 0.8s;

  background: #babbff;

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

  height: 70dvh;
`

//Carrinho
export const Carrinho = styled.aside `
  border: #FA41BA solid 2px;
  border-radius: 10px;

  background: #ec9ef8bd;

  display: flex;
  flex-direction: column;

  flex: 1;

  margin-right: 15px;

  & > h3 {
    align-self: center;
  }
`

export const DivComanda = styled.div `
  width: 100%;
  height: 90%;

  overflow-y: auto;

  scrollbar-color: #FA41BA transparent;
`

export const DivC = styled.div `
  display: flex;
  justify-content: space-around;

  height: 35px;

  &>p {
    flex-basis: 30%;
  }
`

export const ButtonC = styled.button `
  width: 20px;
  height: 20px;

  flex-basis: 10%;

  align-self: center;

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