import { Container } from "./styled"
import StyledInput from "../../components/StyledInput"
import StyledForm from "../../components/StyledForm"
import StyledButton from "../../components/StyledButton"
import TokenContext from "../../contexts/TokenContext"
import { useContext, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function TelaNovaEntrada() {
    const navigate = useNavigate()
    const [descricao, setDescricao] = useState('')
    const [valor, setValor] = useState('')
    const { token } = useContext(TokenContext)
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    function salvarEntrada(e) {
        e.preventDefault()

        const body = {
            valor: valor,
            descricao: descricao,
            tipo: "entrada"
        }
        const url = `${process.env.REACT_APP_API_URL}/nova-transacao`
        const promise = axios.post(url, body, config)
        promise.then(() => { navigate("/home") })
        promise.catch(err => { alert(err.response.data) })
    }

    return (
         <Container>
            <header>
                <h1>Nova Entrada</h1>
            </header>
            <StyledForm onSubmit={salvarEntrada}>
                <StyledInput name="valor" placeholder="Valor" type="text" value={valor} onChange={e => setValor(e.target.value)} required></StyledInput>

                <StyledInput name="descricao" placeholder="Descrição" type="text" value={descricao} onChange={e => setDescricao(e.target.value)} required></StyledInput>

                <StyledButton>Salvar entrada</StyledButton>
            </StyledForm>
        </Container>
    )
}