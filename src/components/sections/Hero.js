import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import { Router, 
        Switch,
        Route,
        NavLink } from 'react-router-dom';

const SignUp = () => {
  return <p>Put me in coach!</p>;
};

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );


  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              <span className='text-spacing'>Car loans for</span>
              <div className="content">
                <div className='content__container'>
                  <ul className='content__container__list'>
                    <li className='content__container__item text-color-lyft'>Lyft</li>
                    <li className='content__container__item'>Uber</li>
                    <li className='content__container__item text-color-doordash'>Shipt</li>
                    <li className='content__container__item text-color-eaze'>Eaze</li>
                  </ul>
                </div>
              </div> 
                <span>drivers</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Loans designed for Lyft drivers who currently rent, we help you to stop renting and start earning more per week.
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile onClick={openModal}>
                    Get started
                    </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <a
              href="#0"
            >
              <Image
                className="has-shadow"
                src={require('./../../assets/images/ulrik-skare-VO4MMMP7yR0-unsplash.jpg')}
                alt="Hero"
                width={800}
                height={504} />
            </a>
          </div>
          <Modal
            id="video-modal"
            handleClose={closeModal}
            videoTag="iframe" />
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;