import { Container } from "./styled"
import StyledForm from "../../components/StyledForm"
import StyledInput from "../../components/StyledInput"
import StyledButton from "../../components/StyledButton"

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

            <a href="www">Primeira vez? Cadastre-se!</a>
        </Container>
    )
}