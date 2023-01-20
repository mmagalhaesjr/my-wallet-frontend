import { Container, StyledButton } from "./styled"
import sair from "../../assets/exit.png"
import Transacoes from "../../components/Transacoes/Transacoes"
export default function TelaHome() {

    return (
        <Container>
            
            <header>
                <h1>Olá, Fulano</h1>
                < img src={sair} alt="imagem logo" />
            </header>
                <Transacoes/>
            <footer>
                <StyledButton>
                    <div>+</div>
                    <h2>Nova <br />entrada</h2>
                </StyledButton>
                <StyledButton>
                    <div>-</div>
                    <h2>Nova <br />saída</h2>

                </StyledButton>
            </footer>
        </Container>
    )
}