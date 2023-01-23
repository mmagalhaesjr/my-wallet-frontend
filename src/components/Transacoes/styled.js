import styled from "styled-components"


export const StyledTransacoes = styled.div`
  display: flex;
  width: 326px;
  height: 446px;
  border-radius: 5px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;

  p {
    width: 180px;
    height: 46px;
    text-align: center;
    font-size: 20px;
    color: #868686;
  }

  .registros{
    height: 90%;
  }

  .saldo{
    color: blue;   
    width: 100%;
    height: 20px;
    line-height: 20px;
    display: flex;
    justify-content: space-between;
    
    p{
        width: 90px;
        color: #000000;
        font-size: 17px;
        font-weight: 700;
    }
   
}
`

export const StyledTransacao = styled.div`
  width: 300px;
  height: 30px;
  display: flex; 
  font-size: 16px;

  div{
    display: flex;
    align-items: center;
  }
`
export const StyledData = styled.div`
width: 54px;
  color: #C6C6C6;
`
export const StyledDescricao = styled.div`
width: 210px;
  color: #000000;
`
export const StyledValor = styled.div`
min-width: 62px;
display: flex;
justify-content: right;
color:  ${props => props.tipo === "entrada" ? "#03AC00" : "#C70000"};
`