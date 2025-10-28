import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"
import { CarouselContainer, SlidesContainer, CarouselImage } from "./style";

export const Carousel = ({ data }) => {

    const [slide, setSlide] = useState(0);

    if (!data || !data.slides) {
         return <p style={{color:"#FFFFFF"}}>Carregando imagens...</p>;
    }

    const slides = data.slides;

    const nextSlide = () => {
        setSlide(slide === slides.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? slides.length - 1 : slide - 1);
    };

    return( 
        
        <CarouselContainer>
            <BsArrowLeftCircleFill 
                className="arrow-left"
                onClick={prevSlide}
            />
            <SlidesContainer slide={slide}>
                {slides.map((item, idx) => {
                    return (
                        <CarouselImage
                            src={item.src}
                            alt={item.alt}
                            key={idx} 
                        />
                    );
                })}
            </SlidesContainer>
            <BsArrowRightCircleFill 
                className="arrow-right"
                onClick={nextSlide}    
            />
            <span className="indicators">
                {slides.map((_, idx) => {
                    return(
                        <button 
                            key={idx} 
                            onClick={() => setSlide(idx)} 
                            className={slide === idx ? "indicator-btn active" : "indicator-btn"}
                        ></button>
                    )
                })}
            </span>
        </CarouselContainer>
        );
};