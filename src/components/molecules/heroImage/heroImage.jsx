/* eslint-disable no-undef */
import PropTypes from 'prop-types';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

import { px2rem, mq } from '../../../stylesheets/tools';

const StyledHeroImage = styled.div`
  position: relative;
  width: 100%;
  height: calc(50vh - 52px);

  ${mq('l')} {
    height: calc(100vh - 66px);
  }

  .heroImage__wrapper {
    position: fixed;
    top: 0;
    left: 0;
    height: calc(50vh - 52px);
    width: 100%;

    ${mq('l')} {
      height: 100vh;
    }
  }

  .gatsby-image-wrapper {
    height: 100%;
    width: 100%;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .heroImage__scroll {
    position: absolute;
    width: 100%;
    padding: ${px2rem(15)};
    bottom: 0;
    text-align: center;
    z-index: 1;
    border-bottom: 8px solid #000;
    outline: none;

    svg {
      transition: transform 0.2s ease-in-out;
      transform: rotate(180deg);
    }

    &:hover svg {
      transform: translateY(3px) rotate(180deg);
    }
  }
`;

const HeroImage = ({ image }) => {
  const handleClick = () => {
    const top = document.getElementById('main-section').offsetTop;

    window.scrollTo({
      top,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <StyledHeroImage>
      <div className="heroImage__wrapper">
        {image.childImageSharp ? (
          <Img fluid={image.childImageSharp.fluid} />
        ) : (
          <img src={image} alt="" />
        )}
      </div>
      <button
        className="heroImage__scroll"
        type="button"
        onClick={handleClick}
        aria-label="Zum Hauptinhalt"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="51.072" height="32.608">
          <path d="M3.537 29.071l22-22 22 22" fill="none" stroke="#000" strokeWidth="10" />
        </svg>
      </button>
    </StyledHeroImage>
  );
};

HeroImage.propTypes = {
  image: PropTypes.shape()
};

HeroImage.defaultProps = {
  image: {}
};

export default HeroImage;
