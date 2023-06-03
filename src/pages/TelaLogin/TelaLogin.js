import { Container } from "./styled"
import StyledForm from "../../components/StyledForm"
import StyledInput from "../../components/StyledInput"
import StyledButton from "../../components/StyledButton"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import axios from "axios"
import TokenContext from "../../contexts/TokenContext"

export default function TelaLogin(){
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { setToken } = useContext(TokenContext)
  
    function logarUsuario(e) {
      e.preventDefault()
  
      const body = {
        email: email,
        password: password
      }
  
      const url = `${process.env.REACT_APP_API_URL}/login`
      const promise = axios.post(url, body)
      promise.then((res) => { setToken(res.data.token); navigate('/home')})
      promise.catch(err => {alert(err.response.data)})

    }
    return (
        <Container>
            <h1>MyWallet</h1>
            <StyledForm onSubmit={logarUsuario}>
                <StyledInput
                    name="email"
                    placeholder="E-mail"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <StyledInput
                    name="password"
                    placeholder="Senha"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />                
                <StyledButton type="submit">Entrar</StyledButton>
            </StyledForm>

            <Link to="/cadastro">Primeira vez? Cadastre-se!</Link>
        </Container>
    )
}