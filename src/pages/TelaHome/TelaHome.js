import { Container, StyledButton } from "./styled"
import sair from "../../assets/exit.png"
import Transacoes from "../../components/Transacoes/Transacoes"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import TokenContext from "../../contexts/TokenContext"
import axios from "axios"

export default function TelaHome() {
    const navigate = useNavigate()
    const [listaTransacoes, setListaTransacoes] = useState([])
    const { token, user } = useContext(TokenContext )
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
 
    useEffect(() => listarTransacoes(), []) 
    
    function listarTransacoes(){
        const url = `${process.env.REACT_APP_API_URL}/transacoes`
        const promise = axios.get(url, config)
        promise.then(res => setListaTransacoes(res.data))
        promise.catch(err => console.log(err))
    }

    function logout() {
        const url = `${process.env.REACT_APP_API_URL}/logout`
        const promise = axios.delete(url, config)
        promise.then(() => {navigate("/") })
        promise.catch(err => { alert(err.response.data) })
    }

    return (
        <Container>
            
            <header>
                <h1>Olá, {user.split(" ")[0]}</h1>
                < img src={sair} alt="imagem logo" onClick={logout} />
            </header>
                <Transacoes listaTransacoes={listaTransacoes}/>
            <footer>
            <Link to="/nova-entrada">
                <StyledButton>
                    <div>+</div>
                    <h2>Nova <br />entrada</h2>
                </StyledButton>
             </Link> 
             <Link to="/nova-saida">
                <StyledButton>
                    <div>-</div>
                    <h2>Nova <br />saída</h2>
                </StyledButton>
            </Link>  
            </footer>
        </Container>
    )
}