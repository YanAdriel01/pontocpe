import styled from 'styled-components'



export const Header = styled.div`
    //tablet normal: 769 - 1024px
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

    //menor tamanho: 280px
    @media (max-width: 320px) {

        height: 90px;

        .logo_cpe{
            width: 103px;
            height: 42px;
            margin-left: 30px;
            margin-top: 16px;
        }
        
    }
    //celualres: 320 - 480px
    @media (min-width: 321px) and (max-width: 480px) {

        height: 130px;
        .logo_cpe{
            width: 150px;
            height: 59px;
            margin-left: 18px;
            margin-top: 12px;
        }
        
    }
    //tablets pequenos e telefones maiores: 480 - 768px
    @media (min-width: 481px) and (max-width: 768px) {

        height: 99px;

        .logo_cpe{
            width: 130px;
            height: 49px;
            margin-left: 18px;
            margin-top: 20px;
        }
    }
`;

export const Titulo = styled.h1`
    //tablet normal: 769 - 1024px
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

    //menor tamanho: 280px
    @media (max-width: 320px) {

        font-size: 2rem;

    }

    //celualres: 320 - 480px
    @media (min-width: 321px) and (max-width: 480px) {

        font-size: 2.5rem;
        
    }

    //Celular médio/grande: 480 - 768px
    @media (min-width: 481px) and (max-width: 768px) {

        font-size: 3rem;

    }
    //Tablet pequeno: 769 - 1024px
    @media (min-width: 769px) and (max-width: 1024px) {

        font-size: 3.5rem;

    }


`;
export const InputWraper = styled.div`
    //tablet normal: 769 - 1024px
    margin: auto;
    margin-top: 40px;

    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;


`;

export const InputString = styled.input`
    //tablet normal: 769 - 1024px
    width: 650px;
    height: 54px;
    font-size: 1rem;
    border-radius: 40px;
    border: none;
    background-color: #F5F5F5;
    padding-left: 23px;
    box-sizing: border-box;

    //menor tamanho: até 320px
    @media (max-width: 320px) {
        width: 90%;
        max-width: 280px;
        height: 45px;
        font-size: 0.9rem;
        padding-left: 16px;
    }

    //celulares: 320 - 480px
    @media (max-width: 480px) {
        width: 90%;
        max-width: 389px;
        height: 45px;
        font-size: 1rem;
        padding-left: 18px;
    }

    //tablets pequenos e telefones maiores: 480 - 768px
    @media (max-width: 768px) {
        width: 95%;
        max-width: 600px;
        height: 50px;
        font-size: 1rem;
        padding-left: 20px;
    }
`;
export const CaptionWraper = styled.div`
    //tablet normal: 769 - 1024px
    width: 100%;
    margin: auto;

    display: flex;
    margin-top: 36px;
    align-items: center;
    gap: 20px;

`;

export const Caption = styled.p`
    //tablet normal: 769 - 1024px
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;

    margin: auto;
    display: flex;


    a{
        color: #FFE712;
        padding-left: 5px;
    }

    //menor tamanho: até 320px
    @media (max-width: 320px){

        font-size: 0.8rem;
        a{
            font-size: 0.8rem;
        }

    }


`;

export const ButtonWraper = styled.div`
    //tablet normal: 769 - 1024px
    width: 100%;
    margin: auto;

    display: flex;
    margin-top: 36px;
    align-items: center;
    gap: 20px;

`;

export const Button = styled.button`
    //tablet normal: 769 - 1024px
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

    //menor tamanho: até 320px
    @media (max-width: 320px){
        width: 157px;
        height: 37px;

        font-size: 1.0rem;
    }

    //celulares: 320 - 480px
    @media (min-width: 321px) and (max-width: 480px){
        width: 177px;
        height: 47px;

        font-size: 1.3rem;
    }

    //celular médio/grande: 481 - 768px
    @media (min-width: 481px) and (max-width: 768px){
        width: 198px;
        height: 62px;

        font-size: 1.7rem;
    }

    //Tablet pequeno: 769 - 1024px
    @media (min-width: 769px) and (max-width: 1024px){
        width: 258px;
        height: 72px;

        font-size: 1.9rem;
    }

`;
