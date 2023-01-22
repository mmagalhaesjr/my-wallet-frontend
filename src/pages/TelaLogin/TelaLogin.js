import { Container } from "./styled"
import StyledForm from "../../components/StyledForm"
import StyledInput from "../../components/StyledInput"
import StyledButton from "../../components/StyledButton"
import { Link } from "react-router-dom"

export default function TelaCadastro(){

    return (
        <Container>
            <h1>MyWallet</h1>
            <StyledForm>
                <StyledInput
                    name="email"
                    placeholder="E-mail"
                    type="email"
                    required
                />
                <StyledInput
                    name="password"
                    placeholder="Senha"
                    type="password"
                    required
                />                
                <StyledButton type="submit">Entrar</StyledButton>
            </StyledForm>

            <Link to="/cadastro">Primeira vez? Cadastre-se!</Link>
        </Container>
    )
}