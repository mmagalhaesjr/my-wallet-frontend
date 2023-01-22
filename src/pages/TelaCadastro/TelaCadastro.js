import { Container } from "./styled"
import StyledForm from "../../components/StyledForm"
import StyledInput from "../../components/StyledInput"
import StyledButton from "../../components/StyledButton"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"


export default function TelaCadastro() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate()

    function cadastrarUsuario(e) {
        e.preventDefault()

        const body = {
            email: email,
            name: name,
            password: password,
            confirmPassword: confirmPassword
        }
 
        const url = `${process.env.REACT_APP_API_URL}/cadastro`
        console.log(url)
        const promise = axios.post(url, body)

        promise.then(() => { navigate("/") })
        promise.catch(err => { alert(err.response.data) })
    }
    return (
        <Container>
            <h1>MyWallet</h1>
            <StyledForm  onSubmit={cadastrarUsuario}>
    
                    <StyledInput name="name" placeholder="Nome" type="text" value={name} onChange={e => setName(e.target.value)} required />

                    <StyledInput name="email" placeholder="E-mail" type="email" value={email} onChange={e => setEmail(e.target.value)} required />

                    <StyledInput name="password" placeholder="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)} required />

                    <StyledInput name="confirmPassword" placeholder="Confirme a senha" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />

                    <StyledButton type="submit">Cadastrar</StyledButton>
                
            </StyledForm>
            
                    <Link to="/">Já tem uma conta? Entre agora! </Link> 
        </Container >
    )
}