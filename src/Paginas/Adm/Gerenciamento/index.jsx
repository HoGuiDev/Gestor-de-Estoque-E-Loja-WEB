import { Main, Bloco, Input, Label, Form, Button, Borda, Item, BtnEdit, Img, DivInput, GerenciamentoGlobal } from "./GerenciamentoStyled"
import { ModalEdit } from "../../../Componentes/Modals/ModalEdit"
import { useState, useEffect } from "react"

import check from "../../../assets/check.svg"
import xis from "../../../assets/xis.svg"

export default function Gerenciamento() {

  const [Auth, setAuth] = useState(false)

  const [DB, setDB] = useState([])
  const [ModalEditar, setModalEditar] = useState(false)
  const [ItemSelecionado, setItemSelecionado] = useState()

  const api = import.meta.env.VITE_LOCAL

  useEffect(() => {

    const requisicao = async () => {
      try {

        fetch(`http://${api}/api/get_gerenciador`, {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          }
        })
          .then((res) => res.json())
          .then((res) => (setDB(res)))
      }
      catch (error) {
        console.log("Algo não está funcionando direito: " + error)
      }
    }

    requisicao()
  }, [])

  async function Pegar_Produtos() {

    try {
      const requisicao = await fetch(`http://${api}/api/get_gerenciador`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        }
      })

        if(requisicao.status === 401 || requisicao.status === 403) {
          window.href = "/login"
        }
        else{
          const res = await requisicao.json()
          setDB(res)
        }
    }
    catch (error) {
      console.log("Algo não está funcionando direito: " + error)
    }
  }


  async function Add_Produtos() {
    let dbsabor = document.getElementById("sabor")
    let dbquantidade = document.getElementById("quantidade")
    let dbpreco = document.getElementById("preco")
    let dbdisponivel = document.getElementById("disponivel")

    if (dbsabor.value != "" && dbquantidade.value != "" && dbpreco.value != "") {

      try {

        const request = await fetch(`http://${api}/api/add`, {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sabor: dbsabor.value,
            quantidade: dbquantidade.value,
            preco: dbpreco.value,
            disponivel: dbdisponivel.checked == true ? "1" : "0"
          })
        })

        if (request.status === 401 || request.status === 403) {
          window.alert("Tempo expirado!")
          window.href = "/login"
        }
        else {
          const res = await request.json()
          console.log(res)
        }
      }
      catch (err) { console.log(err) }
    }
    else {
      alert("Preencha os campos!")
    }

    dbsabor.value = ""
    dbquantidade.value = ""
    dbpreco.value = ""

    Pegar_Produtos()
  }

  return (
    <>
      <GerenciamentoGlobal />
      <ModalEdit isOpen={ModalEditar} dados={ItemSelecionado} isClose={() => { setModalEditar(!ModalEditar); Pegar_Produtos() }} />
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

            <Label>preco:</Label>
            <Input
              id="preco"
              placeholder="Ex: 3,00" />


            <DivInput>
              <Label>Disponivel</Label>
              <input id="disponivel" type="checkbox" />
            </DivInput>

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
                  <BtnEdit onClick={() => { setModalEditar(true); setItemSelecionado(item) }}>✏️</BtnEdit>
                </Item>
              )
            }
          </Borda>
        </Bloco>
      </Main>
    </>
  )
}
