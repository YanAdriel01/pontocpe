import styled from "styled-components";



export const LinkSessaoWrapper = styled.nav`

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  flex: 1;


`

export const LinkSessao = styled.a`

  font-weight: 400;
  font-size: 3rem;
  font-family: 'Roboto', sans-serif;
  color: #000;
  text-decoration: none;
  position: relative;

  transform: translate(0%,-120%);

  &:hover{
    cursor: pointer;
    transform: translate(0%, -120%) translateY(-3px);
    color: #3c3c3c;
  }

`;


export const InformacaoUsuario = styled.div`

  display: flex;
  justify-content: center;
  align-items: left;
  margin: 40px auto 0;
  padding-left: 2%;
  flex-direction: column;
  gap: 16px;

  width: 700px;
  height: 300px;

  border-radius: 20px;
  
  background-color: #696969;
  h2{
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    font-weight: 600;
    background-color: #696969;
    color: #FFE712;
  }
`;