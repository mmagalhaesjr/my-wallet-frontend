import { StyledTransacao, StyledData, StyledDescricao, StyledValor } from "./styled"

export default function Transacao() {

    return (
        
        <StyledTransacao>
            <StyledData>30/11</StyledData>
            <StyledDescricao>Almoço mãe</StyledDescricao>
            <StyledValor>39,90</StyledValor>
        </StyledTransacao>
    )
}