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
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  background-color: green;

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
  }
`;

export const SearchInput = styled.input`
  width: 250px;
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