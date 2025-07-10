import styled from 'styled-components'

export const Conteiner = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  border: 1px solid transparent;
  border-radius: 10px;

  background: #5a75797a;
  box-shadow: 0px 0px 5px gray;

  width: 30dvw;
  height: 60dvh;

  padding: 10px;

  @media screen and (max-width: 768px){
    width: 40dvw;
    height: 55dvw;
  }

  @media screen and (max-width: 425px){
    width: 55dvw;
    height: 80dvw;
  }
`

export const Div1 = styled.form`
  display: flex;
  flex-direction: column;

  justify-content: center;

  gap: 3%;

  & > .User {
    align-self: center;
    margin-bottom: 10px;
    width: 90%;
  }

  & > .Senha {
    align-self: center;
    width: 90%;
  }

  height: 70%;
`

export const InputCtn = styled.input`
  width: 100%;
  height: 25px;

  border: 1px solid transparent;
  border-radius: 5px;
`

export const Btn = styled.button `
  width: 200px;
  height: 35px;

  border: 1px solid transparent;
  border-radius: 5px;

  box-shadow: 0px 0px 5px #00000067;

  align-self: center;

  &:active {
    background-color: #99fa9975;
  }
`