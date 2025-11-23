import styled from "styled-components";



export const LinkSessaoWrapper = styled.nav`

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;

  //menor tamanho: até 320px
  @media (max-width: 320px){

    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;
    gap: 3px;
    padding-right: 20px; 

  }
  //celulares: 321 - 480px
  @media (min-width: 321px) and (max-width: 480px){
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column ;
    gap: 5px;
    padding-right: 20px;
  }
  //celulares: 481 – 768px
  @media (min-width: 481px) and (max-width: 768px){
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: row;
    gap: 15px;
    padding-right: 20px; 

  }
  //celulares: 769 - 1024px
  @media (min-width: 769px) and (max-width: 1024px){
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: row ;
    gap: 25px;
    padding-right: 20px; 

  }

  //Tablet/Laptop pequeno: 1025 - 1366px
  @media (min-width: 1025px) and (max-width: 1366px){
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: row ;
    gap: 25px;
    padding-right: 20px; 
    
  }
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

  //menor tamanho: até 320px
  @media (max-width: 320px) {
    font-size: 0.8rem;
    transform: translate(0%, 90%);
    &:hover{
      
      transform: translate(0%, 100%);
    }
  }
    
  //celulares: 321 - 480px
  @media (min-width: 321px) and (max-width: 480px){

    font-size: 0.8rem;
    transform: translate(0%, -370%);

    &:hover{
      
      transform: translate(0%, 100%);
    }
  }

  //Celular médio/grande: 481 - 768px
  @media (min-width: 481px) and (max-width: 768px){

    font-size: 1.3rem;
    transform: translate(0%, -130%);
    &:hover{
      
      transform: translate(0%, 100%);
    }
  }

  //Tablet pequeno: 769 - 1024px
  @media (min-width: 769px) and (max-width: 1024px){

    font-size: 1.7rem;
    transform: translate(0%, -190%);
    &:hover{
      
      transform: translate(0%, -200%);
    }
  }

  //Tablet/Laptop pequeno: 1025 - 1366px
  @media (min-width: 1025px) and (max-width: 1366px){

    font-size: 2.1rem;
    transform: translate(0%, -150%);
    &:hover{
      
      transform: translate(0%, -170%);
    }
  }
`;

export const TabelaWrapper = styled.div`

  background-color: blue;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  max-width: 80%;
  height: 700px;

  table{
    width: 90%;
    height: 59px;
    border-radius: 15px;
    background-color: none;
    margin: auto;
  }
  th{
    background-color: #FFE712;
    border-radius: 16px;
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    color: #000000;
  }


`




