import { StyledTransacoes, StyledTransacao, StyledData, StyledValor, StyledDescricao } from "./styled"



export default function Transacoes({ listaTransacoes }) {
    console.log(listaTransacoes)
    
    let saldo = 0

    if (listaTransacoes.length > 0) {
        for(let i = 0; i < listaTransacoes.length; i++){
            if(listaTransacoes[i].tipo === "entrada"){
                saldo = saldo + parseFloat(listaTransacoes[i].valor)
            } else{
                saldo = saldo - parseFloat(listaTransacoes[i].valor)
            }
           
        }
    }

    console.log(listaTransacoes)

    return (

        <StyledTransacoes>
            {listaTransacoes.length > 0 ?
                <div className="registros">

                    {listaTransacoes.map(l => (
                        <StyledTransacao>
                            <StyledData>{l.data}</StyledData>
                            <StyledDescricao>{l.descricao}</StyledDescricao>
                            <StyledValor tipo={l.tipo}>{l.valor}</StyledValor>
                        </StyledTransacao>
                    ))}
                </div>
                :
                <p>Não há registros de entrada ou saída</p>
            }


            {listaTransacoes.length > 0 &&
                <div className="saldo">
                    <p>SALDO</p>
                    <p>{saldo}</p>
                </div>
                }


        </StyledTransacoes>


    )
}