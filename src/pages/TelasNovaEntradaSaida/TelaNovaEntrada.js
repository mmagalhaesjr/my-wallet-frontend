import { Container} from "./styled"
import StyledInput from "../../components/StyledInput"
import StyledForm from "../../components/StyledForm"
import StyledButton from "../../components/StyledButton"

export default function TelaNovaEntrada() {

    return (
        <Container>

            <header>
                <h1>Nova Entrada</h1>
            </header>
            <StyledForm>
                <StyledInput
                    name="name"
                    placeholder="Valor"
                    type="text"
                    required>
                </StyledInput>
                <StyledInput
                    name="name"
                    placeholder="Descrição"
                    type="text"
                    required>
                </StyledInput>
                <StyledButton >Salvar Entrada</StyledButton>
            </StyledForm>
        </Container>
    )
}