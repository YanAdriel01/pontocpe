import styled from 'styled-components'
import { useState } from "react";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

export const Header = styled.div`
    
    width: 100%;
    height: 131px;
    background-color: #FFE712;

    .logo_cpe{

        width: 232px;
        height: 86px;
        margin-left: 45px;
        margin-top: 26px;
        background-color: #FFE712;
    }

    a{
        display:  inline-block;
        background-color: #FFE712;
    }

`;

export const Titulo = styled.h1`

    color: #FFE712;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 4rem;
    

    margin-top: 123px;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    z-index: 10;
`;
export const InputWraper = styled.div`
    
    margin: auto;
    margin-top: 90px;

    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;


`;

export const InputString = styled.input`

    width: 650px;
    height: 54px;
    font-size: 1rem;

    border-radius: 40px;
    border: none;
    background-color: #F5F5F5;

    padding-left: 23px;
`;
export const CaptionWraper = styled.div`

    width: 100%;
    margin: auto;

    display: flex;
    margin-top: 36px;
    align-items: center;
    gap: 20px;

`;

export const Caption = styled.p`

    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;

    margin: auto;
    display: flex;


    a{
        color: #FFE712;
        padding-left: 5px;
    }


`;

export const ButtonWraper = styled.div`

    width: 100%;
    margin: auto;

    display: flex;
    margin-top: 36px;
    align-items: center;
    gap: 20px;

`;

export const Button = styled.button`

    border: none;
    border-radius: 30px;

    background-color: #FFE712;
    width: 287px;
    height: 67px;

    color: #000000;
    font-size: 2.5rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 900;

    margin: auto;

    &:hover{
        cursor: pointer;
        transform: translateY(-2px);
        filter: brightness(0.95);
    }
`;
