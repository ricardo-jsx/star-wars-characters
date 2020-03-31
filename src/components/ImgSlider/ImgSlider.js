import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';

const StyledCarousel = styled(Carousel)`
  ul.slider.animated {
    li.slide {
      display: flex;
      justify-content: center;
    }
  }

  .blurred-img {
    display: flex;
    align-items: center;
    height: 100%;

    > div {
      position: absolute;
      filter: blur(8px);
      height: 100%;
      width: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      z-index: 0;
    }

    > img {
      z-index: 1;
    }
  }
`;

export default function ImgSlider({ imgs }) {
  return (
    <StyledCarousel>
      {imgs.map((img) => (
        <div className="blurred-img" key={img.id}>
          <div style={{ backgroundImage: `url(${img.img})` }} />
          <img src={img.img} alt={img.name} />
        </div>
      ))}
    </StyledCarousel>
  );
}

ImgSlider.propTypes = {
  imgs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
};
