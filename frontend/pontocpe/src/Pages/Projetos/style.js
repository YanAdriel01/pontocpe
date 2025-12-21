import styled from "styled-components";

export const BotaoVoltarWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    top: 40px;
    margin-right: 100px;
    background-color: transparent;


`;

export const BotaoVoltar = styled.button`

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

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 50px;

  .search-area {
    position: relative;
    display: flex;
    align-items: center;
    
  }

  .search-icon {
    position: absolute;
    left: 12px;
    color: white;
    opacity: 0.7;
    background-color: transparent;
  }
`;

export const SearchInput = styled.input`
  width: 500px;
  padding: 10px 15px 10px 35px;
  border-radius: 20px;
  border: none;
  outline: none;
  background: #111;
  color: white;
  font-size: 14px;
  margin: auto;

  &::placeholder {
    color: #aaa;
  }
`;

export const AddButton = styled.button`
  background: none;
  border: none;
  color: white;
  border-radius: 50%;
  padding: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.2s;

  svg {
    width: 25px;
    height: 25px;
    background-color: transparent;
    color: #F5F5F5;
  }

  &:hover {
    opacity: 0.5;
  }
`;

export const TabelaWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 100px;
  font-family: 'Roboto', sans-serif;

  table {
    width: 40%;
    border-collapse: collapse;
    background-color: #424242;
    color: white;
    border-radius: 5px;
    overflow: hidden;
  }
  .nome-projeto {
    text-align: left;
    padding-left: 20px;
  }

  .cor-projeto {
    display: flex; 
    align-items: center; 
    gap: 15px;
    width: fit-content;
  }

  .text-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: transparent;
  }

  .descricao {
    font-size: 14px;
    opacity: 0.8;
    color: #FFFFFF;
    font-weight: normal;
    margin-top: 4px;
  }

  .action {
    display: flex; 
    justify-content: center;
    gap: 20px;
  }

  .editar{
    width: 15%;
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .deletar{
    width: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .action-btn {
    background: none;
    border: none;
    cursor: pointer;
    transition: 0.2s;
  }


  .action-btn:hover {
    opacity: 0.7;
    transform: scale(1.1);
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
    font-family: 'Roboto', sans-serif;


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

    input {
        padding: 10px;
        border-radius: 10px;
        border: 1px solid #ffe100;
        background: #555;
        color: white;
        height: 35px;
        resize: none;
    }


    .buttons {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        background-color: transparent;
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