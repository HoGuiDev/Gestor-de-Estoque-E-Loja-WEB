import { Main, Bloco, Input, Label, Form, Button, Borda, Item, BtnEdit, Img } from "./GerenciamentoStyled"
import { ModelEdit } from "../../../Componentes/Models/ModelEdit"
import { useState, useEffect } from "react"

import check from "../../../assets/check.svg"
import xis from "../../../assets/xis.svg"

export default function Gerenciamento() {

  const [DB, setDB] = useState([])
  const [ModalEdit, setModalEdit] = useState(false)
  const [ItemSelecionado, setItemSelecionado] = useState()

  useEffect(() => {
    const requisicao = async () => {
      try {
        const token = localStorage.getItem("Token")
        fetch("http://192.168.1.8:3000/api/get_gerenciador", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        })
        .then((res) => res.json()).then((res) => (setDB(res)))
      }
      catch (error) {
        console.log("Algo não está funcionando direito: " + error)
      }
    }

    requisicao()
  }, [])

  function Pegar_Produtos() {
    const requisicao = async () => {
      try {
        const token = localStorage.getItem("Token")
        fetch("http://192.168.1.8:3000/api/get_gerenciador", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        })
        .then((res) => res.json()).then((res) => (setDB(res)))
      }
      catch (error) {
        console.log("Algo não está funcionando direito: " + error)
      }
    }

    requisicao()
  }

  async function Add_Produtos() {
    let dbsabor = document.getElementById("sabor")
    let dbquantidade = document.getElementById("quantidade")
    let dbvalor = document.getElementById("valor")
    let dbdisponivel = document.getElementById("disponivel")

    if (dbsabor.value != "" && dbquantidade.value != "" && dbvalor.value != "") {

      try {
        const token = localStorage.getItem("Token")
        const request = await fetch("http://192.168.1.8:3000/api/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify({
            sabor: dbsabor.value,
            quantidade: dbquantidade.value,
            valor: dbvalor.value,
            disponivel: dbdisponivel.checked == true ? "1" : "0"
          })
        })
        
        if(request.status === 401 || request.status === 403) {
          localStorage.removeItem("Token")
          window.alert("Tempo expirado!")
          window.href="/login"
        }
        else {
          const res = await request.json()
        }
      }
      catch (err) { console.log(err) }
    }
    else {
      alert("Preencha os campos!")
    }

    dbsabor.value = ""
    dbquantidade.value = ""
    dbvalor.value = ""

    Pegar_Produtos()
  }


  if(localStorage.getItem("Token")) {
    return (
      <>
        <ModelEdit isOpen={ModalEdit} dados={ItemSelecionado} isClose={() => { setModalEdit(!ModalEdit); Pegar_Produtos() }} />
        <Main>
          <Bloco>
            <Label>Registro de Podutos</Label>
  
            <Form>
              <Label>Nome do produto:</Label>
              <Input
                id="sabor"
                placeholder="Nome do produto" />
  
              <Label>Quantidade:</Label>
              <Input
                id="quantidade"
                placeholder="Ex: 10" />
  
              <Label>Valor:</Label>
              <Input
                id="valor"
                placeholder="Ex: 3,00" />
  
              <input id="disponivel" type="checkbox"></input>
  
            </Form>
  
            <Button type="submit" onClick={Add_Produtos}>Adicionar</Button>
  
          </Bloco>
  
          <Bloco>
            <Borda key={"b1"} $mBottom>
              <Label $borda>Produtos Registrados</Label>
            </Borda>
            <Borda>
              <Item key={"yek"}>
                <p>Sabor</p>
                <p>Preço R$</p>
                <p>Quantidade</p>
                <p>Disponivel</p>
              </Item>
              {
                DB.map((item) =>
                  <Item key={item.ID}>
                    <p>{item.sabor}</p>
                    <p>{item.preço}</p>
                    <p>{item.quantidade}</p>
                    <Img $Shadow={item.disponivel} src={item.disponivel == 1 ? check : xis}></Img>
                    <BtnEdit onClick={() => { setModalEdit(true); setItemSelecionado(item) }}>✏️</BtnEdit>
                  </Item>
                )
              }
            </Borda>
          </Bloco>
        </Main>
      </>
    )
  }
  else {
    return (
      window.location.href = "/login"
    )
  }
}
