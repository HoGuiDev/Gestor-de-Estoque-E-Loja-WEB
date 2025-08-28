import { Conteiner, Div1, InputCtn, Btn, LoginGlobal } from "./LoginStyled"


export default function Login() {

  async function logar() {
  
    let user = document.getElementById("user")
    let pass = document.getElementById("pass")
  
    const api = import.meta.env.VITE_LOCAL
  
    if (user.value !== "") {
      if (pass.value !== "") {
  
        try {
          const request = await fetch(`http://${api}/api/loginadm`, {
            method: "POST",
            credentials: 'include',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              Usuario: user.value,
              Senha: pass.value
            })
          })
  
          if(request.status === 401 || request.status === 403) {
            const res = await request.json()
            console.log(res)
          }
          else {
            const res = await request.json()
            console.log(res)
            localStorage.setItem("Token", res.token)
    
            window.location.href = "/gerenciamento"
          }
  
        }
        catch (erro) {  }
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


  return (
    <>
      <LoginGlobal />
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