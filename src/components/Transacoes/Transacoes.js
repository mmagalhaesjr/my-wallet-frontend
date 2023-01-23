import Transacao from "../Transacao/Transacao"
import { StyledTransacoes } from "./styled"

export default function Transacoes({listaTransacoes}) {
console.log(listaTransacoes)
    return (

        <StyledTransacoes>
            {/* <p>Não há registros de entrada ou saída</p> */}

            <div className="registros">
                
                <Transacao />
                <Transacao />
                <Transacao />
                <Transacao />
            </div>
            <div className="saldo">
                <p>SALDO</p>
                <p>2849,00</p>
            </div>

        </StyledTransacoes>


    )
}