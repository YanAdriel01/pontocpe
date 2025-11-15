import styled from "styled-components";


export const CarouselContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 800px; 
    height: 493px;
    
    transform: translate(0%,25%);
    margin: auto;

    overflow: hidden; 

    .arrow-left,
    .arrow-right {
        position: absolute;
        z-index: 1; 
        top: 50%; 
        transform: translateY(-50%);
        color: white;
        background-color: #000000 ;
        border-radius: 20px;
        font-size: 2rem; 
        cursor: pointer; 
    }

    .arrow-left {
        left: 1rem; 
    }

    .arrow-right {
        right: 1rem; 
    }


    .indicators {
        position: absolute;
        bottom: 1rem;
        z-index: 1;
        display: flex;
        gap: 0.8rem;
        background-color : #667 ;
        border-radius: 10px;
    }

    .indicator-btn {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: none;
        background-color: #ccc; 
        cursor: pointer;
    }

    .indicator-btn.active {
        background-color: white; 
    }

    //tablet pequeno: 769 - 1024px
    @media (min-width: 769px) and (max-width: 1024px){
        width: 690px; 
        height: 393px;

        .arrow-left {
        left: 0.1rem; 
        }

        .arrow-right {
        right: 0.1rem; 
        }

        .indicator-btn {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            border: none;
            background-color: #ccc; 
            cursor: pointer;
        }

        .arrow-left,
        .arrow-right {
            position: absolute;
            z-index: 1; 
            top: 50%; 
            transform: translateY(-50%);
            color: white;
            background-color: #000000 ;
            border-radius: 20px;
            font-size: 1.5rem; 
            cursor: pointer; 
        }
    }

    //celulares médio/grande: 481 - 768px
    @media (min-width: 481px) and (max-width: 768px){
        width: 464px; 
        height: 293px;

        .arrow-left {
        left: 0.1rem; 
        }

        .arrow-right {
        right: 0.1rem; 
        }

        .indicator-btn {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            border: none;
            background-color: #ccc; 
            cursor: pointer;
        }

        .arrow-left,
        .arrow-right {
            position: absolute;
            z-index: 1; 
            top: 50%; 
            transform: translateY(-50%);
            color: white;
            background-color: #000000 ;
            border-radius: 20px;
            font-size: 1.5rem; 
            cursor: pointer; 
        }
    }
    //celulares: 320 - 480px
    @media (max-width: 480px){
        
        width: 321px; 
        height: 193px;

        .arrow-left {
        left: 0.1rem; 
        }

        .arrow-right {
        right: 0.1rem; 
        }

        .indicator-btn {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            border: none;
            background-color: #ccc; 
            cursor: pointer;
        }

        .arrow-left,
        .arrow-right {
            position: absolute;
            z-index: 1; 
            top: 50%; 
            transform: translateY(-50%);
            color: white;
            background-color: #000000 ;
            border-radius: 20px;
            font-size: 1.5rem; 
            cursor: pointer; 
        }
    }

    //menor tamanho: 320px
    @media (max-width: 320px){
        
        width: 240px; 
        height: 173px;

        .arrow-left {
        left: 0.1rem; 
        }

        .arrow-right {
        right: 0.1rem; 
        }

        .indicator-btn {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            border: none;
            background-color: #ccc; 
            cursor: pointer;
        }

        .arrow-left,
        .arrow-right {
            position: absolute;
            z-index: 1; 
            top: 50%; 
            transform: translateY(-50%);
            color: white;
            background-color: #000000 ;
            border-radius: 20px;
            font-size: 1.5rem; 
            cursor: pointer; 
    }
    }
`;


export const SlidesContainer = styled.div`
    display: flex; 
    width: 100%;
    height: 100%;

    transform: translateX(-${(props) => props.slide * 100}%);
    transition: transform 0.4s ease-in-out; 
    `;

export const CarouselImage = styled.img`
    border-radius: 0.5rem;
    box-shadow: 0px 0px 7px #666;
    width: 100%;
    height: 100%;

    flex-shrink: 0;
    object-fit: cover;
`;