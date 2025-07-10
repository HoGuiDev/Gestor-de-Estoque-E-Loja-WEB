import { Conteiner, Div1, InputCtn, Btn } from "./LoginStyled"
import { jwtDecode } from "jwt-decode"


async function logar() {

  let user = document.getElementById("user")
  let pass = document.getElementById("pass")

  if (user.value !== "") {
    if (pass.value !== "") {

      try {
        const request = await fetch("http://192.168.1.8:3000/loginadm", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            Usuario: user.value,
            Senha: pass.value
          })
        })
        const res = await request.json()

        let detoken = jwtDecode(res.Token)

        localStorage.setItem("tempo1", detoken.exp)
        localStorage.setItem("tempo2", detoken.iat)
        localStorage.setItem("Token", detoken)

        window.location.href = "/gerenciamento"
      }
      catch (erro) { console.log(erro) }
    }
    else {
      //Criar uma caixa de alerta Melhorzinha
      alert("Preencha os campos adequadamente!")
    }

  }
  else {
    alert("Preencha os campos adequadamente!")
  }

}



export default function Login() {
  return (
    <>
      <Conteiner>
        <Div1>
          <div className="User">
            <p>Usuario: </p>
            <InputCtn name="username" id="user" placeholder="Usuario" autoComplete="username"></InputCtn>
          </div>

          <div className="Senha">
            <label>Senha: </label>
            <InputCtn name="password" type="password" id="pass" placeholder="Senha" autoComplete="current-password"></InputCtn>
          </div>
        </Div1>

        <Btn onClick={logar}>Login</Btn>

      </Conteiner>
    </>
  )
}