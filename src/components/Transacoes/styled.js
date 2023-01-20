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
