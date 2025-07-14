import { Fundo, Conteiner, BtnDelet, BtnFechar, BtnSalvar } from "./ModelEditStyled"
import { useEffect } from "react"

export function ModelEdit({ isOpen, isClose, dados }) {

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
    const token = localStorage.getItem("Token")
    const request = await fetch("http://192.168.1.8:3000/api/delet", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        id: dados.ID
      })
    })

    if (request.status === 401 || request.status === 403) {
      localStorage.removeItem("Token")
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

    const token = localStorage.getItem("Token")
    const request = await fetch("http://192.168.1.8:3000/api/atualizar", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
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
      localStorage.removeItem("Token")
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