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
                    name="name"
                    placeholder="Nome"
                    type="text"
                    required
                />
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
                
                <StyledInput
                    name="confirmPassword"
                    placeholder="Confirme a senha"
                    type="password"
                    required
                />
                <StyledButton type="submit">Cadastrar</StyledButton>
            </StyledForm>

            <a href="www">Já tem uma conta? Entre agora!</a>
        </Container>
    )
}