import NukaCarousel, { CarouselProps } from "nuka-carousel";
import * as React from "react";
import Media from "react-media";
// import ReactSVG from "react-svg";

// import arrowImg from "../../images/carousel-arrow.svg";

import "./scss/index.scss";
import {
  mediumScreen,
  smallScreen,
} from "../../globalStyles/scss/variables.scss";

interface CarouselType extends CarouselProps {
  children: React.ReactNode;
}

const renderDotControls = ({
  currentSlide,
  slideCount,
}) => {
  return (
    <div
      className="slider-control-bottomcenter"
      style={{
        position: 'absolute',
        bottom: '0px',
        left: '50%',
        transform: 'translateX(-50%)'
      }}
    >
      <ul
        style={{
          position: 'relative',
          margin: '0px',
          bottom: '30px',
          padding: '0px',
          display: 'flex'
        }}
      >
        {[...Array(slideCount)].map((sc, i) => (
          <li
            style={{ listStyleType: 'none', display: 'inline-block' }}
            key={i + 1}
          >
            <div
              style={{
                border: '1px #000 solid',
                width: '10px',
                height: '10px',
                background: currentSlide === i ? '#000' : 'transparent',
                borderRadius: '5px',
                margin: '0 3px'
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};



const Carousel: React.FC<CarouselType> = ({ children, ...rest }) => {
  const settings = {
    className: "carousel",
    // withoutControls: true,
    // renderBottomCenterControls: () => null,
    renderCenterLeftControls: () => null,
    renderCenterRightControls: () => null,
    renderBottomCenterControls: ({ currentSlide, slideCount }) => renderDotControls({ currentSlide, slideCount }),
    // renderCenterLeftControls: ({ previousSlide, currentSlide }) =>
    //   currentSlide !== 0 ? (
    //     <div
    //       onClick={previousSlide}
    //       className="carousel__control carousel__control--left"
    //     >
    //       <ReactSVG path={arrowImg} />
    //     </div>
    //   ) : null,
    // renderCenterRightControls: ({
    //   nextSlide,
    //   currentSlide,
    //   slideCount,
    //   slidesToShow,
    // }) =>
    //   slideCount - slidesToShow !== currentSlide ? (
    //     <div
    //       onClick={nextSlide}
    //       className="carousel__control carousel__control--right"
    //     >
    //       <ReactSVG path={arrowImg} />
    //     </div>
    //   ) : null,
    ...rest,
  };
  const carousel = (slides: number) => (
    <NukaCarousel slidesToShow={!rest.slidesToShow ? slides : rest.slidesToShow} slidesToScroll={!rest.slidesToScroll ? slides : rest.slidesToScroll} {...settings}>
      {children}
    </NukaCarousel>
  );

  return (
    <Media query={{ maxWidth: smallScreen }}>
      {matches =>
        matches ? (
          carousel(1)
        ) : (
          <Media query={{ maxWidth: mediumScreen }}>
            {matches => carousel(matches ? 2 : 5)}
          </Media>
        )
      }
    </Media>
  );
};

export default Carousel;
