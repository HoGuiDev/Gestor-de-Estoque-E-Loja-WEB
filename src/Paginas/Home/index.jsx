import { useEffect, useState } from "react";
import {
  Produtos,
  MainCardapio, TituloH1, Consumiveis, HeaderCardapio, ToolBar, BotaoGeral,
  BtAdd, Menu, Carrinho, DivC, ButtonC, DivPreço, DivComanda
} from "./HomeStyled"
import { HomeGlobal } from "./HomeStyled";


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

    setComanda(prev => {
      let index = prev.findIndex(i => i.ID === item.ID)

      if (index !== -1) {
        return prev.map((p, i) =>
          i === index ? { ...p, quantidade: (p.quantidade || 0) + 1 } : p
        )
      }
      return [...prev, { ID: item.ID, sabor: item.sabor, quantidade: 1, preço: item.preço }]
    })
  }

  function RemoverCarrinho(item) {
    setComanda(prev => {
      let index = prev.findIndex(i => i.ID === item.ID)
      
      if(index !== -1) {

        let quanti = item.quantidade
        
        if(quanti <= 1) {
          return prev.filter(i => i.ID !== item.ID)
        }

        return prev.map((p, i) => 
          i === index ? { ...p, quantidade: (p.quantidade || 0) - 1 } : p
        )
      }
    })
  }


  if (Carregando) {
    return (
      <h1>Carregando...</h1>
    )
  }
  else {

    return (
      <>
        <HomeGlobal />
        <MainCardapio>

          <HeaderCardapio>
            <TituloH1>Cardapio</TituloH1>
          </HeaderCardapio>

          <ToolBar>
            <BotaoGeral>Escolher Aleatorio</BotaoGeral>
            <BotaoGeral>Filtro</BotaoGeral>
            <BotaoGeral>Contato</BotaoGeral>
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
              <h3>Carrinho</h3>
              <DivComanda>
                {
                  Comanda.map((item) =>
                    <DivC key={item.ID}>
                      <p>{item.sabor}</p>
                      <p>{item.quantidade}</p>
                      <ButtonC onClick={() => RemoverCarrinho(item)}>-1</ButtonC>
                    </DivC>
                  )
                }
              </DivComanda>

              <DivPreço>
                <p>Total:</p>
                <p>R${() => calculaPreço()}</p>
              </DivPreço>
            </Carrinho>

          </Menu>

        </MainCardapio>
      
      </>
    )
  }
}