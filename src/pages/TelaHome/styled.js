import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(140, 16, 190);

  h1 {
    font-size: 26px;
    color: #FFFFFF;
    font-weight: 700;
  }
  h2{
    font-size: 17px;
  }

  footer,  header{
    display: flex;
    width: 326px;
    margin: 13px;
    justify-content: space-between;
  }


`



export const StyledButton = styled.button`
  width: 155px;
  height: 114px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 700;
  text-align: left;
  background: #A328D6;
  color: #FFFFFF;
  padding: 9px;

  div{
    width: 21px;
    height: 21px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 2px solid #FFFFFF;
    font-size: 25px;
    font-weight: 400;
  }
`