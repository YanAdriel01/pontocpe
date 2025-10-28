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