import { useEffect, useState } from "react";
import {
  Produtos,
  MainCardapio, TituloH1, Consumiveis, HeaderCardapio, ToolBar, BotaoGeral,
  BtAdd, Menu, Carrinho
} from "./HomeStyled"

export default function Home() {

  const [DB, setDB] = useState([])
  const [Carregando, setCarregando] = useState(true)

  const [Comanda, setComanda] = useState([])



  useEffect(() => {
    const requisicao = async () => {
      try {
        fetch("http://192.168.1.8:3000/api/produtos")
          .then((res) => {
            return res.json()
          })
          .then((res) => (setDB(res)))
      }
      catch (error) {
        console.log("Algo não está funcionando direito: " + error)
      }
      finally { setCarregando(false) }
    }

    requisicao()
  }, [])

  function CorAleatoria() {
    const hexa = "0123456789ABCDEF"
    let cor = "#"
    for (let i = 0; i < 6; i++) {
      cor += hexa[Math.floor(Math.random() * 16)]
    }

    return cor
  }

  function BordaCorAleatoria() {
    document.querySelectorAll(".Borda").forEach(element => {
      element.style.borderColor = CorAleatoria()
    });
  }

  setTimeout(BordaCorAleatoria, 100)
  setInterval(BordaCorAleatoria, 1500)

  function AddCarrinho(item) {

    let dados = []
    dados.push(item, Comanda)

    let contagem = {}

    dados.forEach(x => {
      contagem[x] = ( contagem[x] || 0 ) + 1
    })

    console.log(contagem)
    console.log(dados)

    setComanda(contagem)
  }

  if (Carregando) {
    return (
      <h1>Carregando...</h1>
    )
  }

  return (
    <>
      <MainCardapio>

        <HeaderCardapio>
          <TituloH1>Cardapio</TituloH1>
        </HeaderCardapio>

        <ToolBar>
          <BotaoGeral>Escolher Aleatorio</BotaoGeral>
          <BotaoGeral>Sacola</BotaoGeral>
          <BotaoGeral>Mais</BotaoGeral>
        </ToolBar>

        <Menu>

          <Produtos $alinhar="center">
            {
              DB.map((item) =>
                <Consumiveis key={item.ID} className="Borda">
                  <p>Sabor: {item.sabor}</p>
                  <p>Quantidade: {item.quantidade}</p>
                  <p>Preço: {item.preço}</p>
                  <BtAdd onClick={() => AddCarrinho(item)}>+</BtAdd>
                </Consumiveis>
              )
            }
          </Produtos>

          <Carrinho>
            <h3>teste</h3>
          </Carrinho>

        </Menu>

      </MainCardapio>

    </>
  )
}