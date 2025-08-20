import { RegistroGlobal } from "./RegistroStyled"


export default function Registro() {

  async function Registrar() {
    let usuario = document.getElementById("Usuario")
    let senha = document.getElementById("Senha")

    if (usuario.value !== "") {
      if (senha.value !== "") {

        try {
          const token = localStorage.getItem("Token")
          const request = await fetch("http://192.168.1.8:3000/api/addWorker", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
              Usuario: usuario.value,
              Senha: senha.value
            })
          })
          const res = await request.json()
          console.log(res)
        }
        catch (err) {
          console.log(err)
        }
      }
      else {
        console.log("Preencha todos os campos")
      }
    }
    else {
      console.log("Preencha todos os campos")
    }

  }

  return (
    <>
      <RegistroGlobal />
      <form>

        <label>Usuario</label>
        <input id="Usuario" placeholder="Usuario" />

        <label>Senha</label>
        <input id="Senha" placeholder="Senha" />
      </form>

      <button onClick={Registrar}>Enviar</button>
    </>
  )
}