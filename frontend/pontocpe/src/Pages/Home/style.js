import styled from "styled-components";

export const LinkSessaoWrapper = styled.nav`

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  background-color: transparent;

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

  /* transform: translate(0%,-120%); */

  &:hover{
    cursor: pointer;
    transform: translateY(-3px);
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
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 100px;

    table {
        width: 90%;
        border-collapse: collapse;
        background: #2b2b2b;
        color: white;
        border-radius: 20px;
        overflow: hidden;
        
    }

    thead tr {
        background: #ffe712;
        color: black;
        font-weight: bold;
        font-size: 20px;
    }

    thead th {
      padding: 18px 0;
      text-align: center;
    }


    th {
        padding: 18px 0;
        background-color: #ffe712;
        font-family: 'Roboto', sans-serif;
    }

    tbody tr {
        border-bottom: 1px solid #555;
    }

    td {
        padding: 16px;
        font-size: 18px;
        font-family: 'Roboto', sans-serif;
        background-color: #424242;

        strong{
          background-color: #424242;
        }
    }

    .cargo {
        color: #ffe100;
        font-size: 15px;
        background-color: #424242;
    }

    .tag {
        border: 2px solid #ffe100;
        padding: 6px 18px;
        border-radius: 12px;
        background-color: #424242;
    }

    .delete-btn {
        background: none;
        border: none;
        font-size: 28px;
        cursor: pointer;
        color: white;
        background-color: #424242;

        svg {
          width: 25px;
          height: 25px;
          background-color: transparent;
        }
    }
`;

export const LoginButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-right: 50px;
`;



export const LoginButton = styled.button`
    top: 20px;
    right: 40px;

    display: flex;

    background: black;
    color: #ffe100;
    border: 2px solid #ffe100;
    border-radius: 12px;
    padding: 10px 18px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`;

export const ModalBackground = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.65);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
`;

export const ModalContainer = styled.div`
    width: 420px;
    background: #2b2b2b;
    padding: 30px;
    border-radius: 16px;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 14px;
    border: 2px solid #ffe100;

    form{
      background-color: transparent;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    h2 {
        text-align: center;
        color: #ffe100;
        background-color: #2b2b2b;
    }

    label{
      background-color: #2b2b2b;
      margin-bottom: 4px;
    }

    select, textarea {
        padding: 10px;
        border-radius: 10px;
        border: 1px solid #ffe100;
        background: #555;
        color: white;
    }

    textarea {
        height: 90px;
        resize: none;
    }

    .addproject{

      margin: auto;
      width: 150px;
      right: 50px;
      display: flex;
      background: none;
      border-radius: 12px;
      cursor: pointer;
      border: none;

      font-family: 'Roboto', sans-serif;
      font-size: 0.8rem;
      color: white;
      gap: 10px;

      &:hover{
          opacity: 0.6;
      }
    }

    .buttons {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        background-color: #2b2b2b;
    }

    .cancelar, .confirmar {
        width: 45%;
        padding: 10px;
        border-radius: 12px;
        cursor: pointer;
        border: none;
        
    }

    .cancelar {
        background: #555;
        color: white;
        
    }

    .confirmar {
        background: #ffe100;
        color: black;
        font-weight: bold;
    }
`;

export const DeslogarButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  top: 40px;
  margin-right: 100px;
  background-color: transparent;
  
`;

export const DeslogarButton = styled.div`
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: white;
  background-color: #FFE712;
  border-radius: 10px;

  svg {
    width: 45px;
    height: 45px;
    background-color: transparent;
    color: #000000;
  }

  &:hover {
      opacity: 0.5;
    }
`;
