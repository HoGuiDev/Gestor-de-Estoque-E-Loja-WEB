import { Fundo, Conteiner, BtnDelet, BtnFechar, BtnSalvar } from "./ModalEditStyled"
import { useEffect } from "react"

export function ModalEdit({ isOpen, isClose, dados }) {

  const api = import.meta.env.VITE_LOCAL

  useEffect(() => {
    if (dados) {
      let Sabor = document.getElementById("Sabor")
      let Quantidade = document.getElementById("Quantidade")
      let Valor = document.getElementById("Valor")
      let Disponivel = document.getElementById("Disponivel")

      Sabor.value = dados.sabor
      Quantidade.value = dados.quantidade
      Valor.value = dados.preço
      Disponivel.checked = dados.disponivel == 1? true: false
    }
  }, [dados])

  async function Delet() {
    const request = await fetch(`http://${api}/api/delet`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: dados.ID
      })
    })

    if (request.status === 401 || request.status === 403) {
      window.alert("Tempo expirado!")
      isClose()
      window.href = "/login"
    }
    else {
      const res = await request.json()
      console.log(res)
      isClose()
    }
  }

  async function Salvar() {
    let Sabor = document.getElementById("Sabor")
    let Quantidade = document.getElementById("Quantidade")
    let Valor = document.getElementById("Valor")
    let Disponivel = document.getElementById("Disponivel")

    let id = dados.ID

    const request = await fetch(`http://${api}/api/atualizar`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sabor: Sabor.value,
        quantidade: Quantidade.value,
        preço: Valor.value,
        disponivel: Disponivel.checked? "1":"false",
        ID: id
      })
    })

    if(request.status === 401 || request.status === 403) {
      window.alert("Tempo expirado!")
      isClose()
      window.href="/login"
    }
    else {
      const res = await request.json()
      console.log(res)
      isClose()
    }
  }

  if (isOpen) {
    return (
      <Fundo>
        <Conteiner>
          <p>Sabor:</p>
          <input id="Sabor"></input>

          <p>quantidade:</p>
          <input id="Quantidade"></input>

          <p>preço R$:</p>
          <input id="Valor"></input>

          <p>disponivel:</p>
          <input id="Disponivel" type="checkbox"></input>

          <BtnSalvar onClick={Salvar}>Salvar</BtnSalvar>
          <BtnDelet onClick={Delet}>🗑️</BtnDelet>
          <BtnFechar onClick={isClose}>❌</BtnFechar>
        </Conteiner>
      </Fundo>
    )
  }
}