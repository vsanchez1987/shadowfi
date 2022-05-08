import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Input from '../elements/Input';
import Image from '../elements/Image';
import { Link } from 'react-router-dom';



const propTypes = {
  children: PropTypes.node,
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  closeHidden: PropTypes.bool,
  video: PropTypes.string,
  videoTag: PropTypes.oneOf(['iframe', 'video'])
}

const defaultProps = {
  children: null,
  show: false,
  closeHidden: false,
  video: '',
  videoTag: 'iframe'
}

const Modal = ({
  className,
  children,
  handleClose,
  show,
  closeHidden,
  video,
  videoTag,
  ...props
}) => {

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', stopProgagation);
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.removeEventListener('click', stopProgagation);
    };    
  });

  useEffect(() => {
    handleBodyClass();
  }, [props.show]); 
  
  const handleBodyClass = () => {
    if (document.querySelectorAll('.modal.is-active').length) {
      document.body.classList.add('modal-is-active');
    } else {
      document.body.classList.remove('modal-is-active');
    }
  }

  const keyPress = (e) => {
    e.keyCode === 27 && handleClose(e);
  }

  const stopProgagation = (e) => {
    e.stopPropagation();
  }

  const classes = classNames(
    'modal',
    show && 'is-active',
    video && 'modal-video',
    className
  );

  return (
    <>
      {show &&
        <div>
          <style>
            {
              `
              iframe {
                  background:#fff; 
                  clear:left; 
                  font:14px Helvetica,Arial,sans-serif;  
                  width:600px;}
                }
              .input-end {
                position: absolute; left: -5000px;
              }
                
                `
            }
        </style>
          
          <Link to="//cdn-images.mailchimp.com/embedcode/classic-10_7_dtp.css" rel="stylesheet" type="text/css">
          <style type="text/css">
            {/*Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
              We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */}
          </style>
          <div id="mc_embed_signup">
          <form action="https://xyz.us13.list-manage.com/subscribe/post?u=c583344be3b2de2c182cadb69&amp;id=6770f98494" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
              <div id="mc_embed_signup_scroll">
            <h2>Subscribe</h2>
          <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
          <div class="mc-field-group">
            <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
          </label>
            <Input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL"/>
          </div>
          <div class="mc-field-group">
            <label for="mce-FNAME">First Name </label>
            <Input type="text" value="" name="FNAME" class="" id="mce-FNAME" />
          </div>
          <div class="mc-field-group">
            <label for="mce-LNAME">Last Name </label>
            <Input type="text" value="" name="LNAME" class="" id="mce-LNAME" />
          </div>
          <div class="mc-field-group">
            <label for="mce-SERVICE">Which Service would you earn with? </label>
            <select name="SERVICE" class="" id="mce-SERVICE">
            <option value=""></option>
            <option value="Lyft">Lyft</option>
          <option value="Uber">Uber</option>
          <option value="DoorDash">DoorDash</option>
          <option value="Eaze">Eaze</option>
          <option value="Instacart">Instacart</option>
          <option value="Shipt">Shipt</option>
          <option value="Grubhub">Grubhub</option>
          <option value="Other">Other</option>

            </select>
          </div>
            <div id="mce-responses" class="clear foot">
              <div class="response" id="mce-error-response" style="display:none"></div>
              <div class="response" id="mce-success-response" style="display:none"></div>
            </div>    
              <div className='input-end' aria-hidden="true"><Input type="text" name="b_c583344be3b2de2c182cadb69_6770f98494" tabindex="-1" value=""/></div>
                  <div class="optionalParent">
                      <div class="clear foot">
                          <Input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" />
                          <p class="brandingLogo"><a href="http://eepurl.com/h1xa-P" title="Mailchimp - email marketing made easy and fun"><Image src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg" /></a></p>
                      </div>
                  </div>
              </div>
          </form>
          </div>
          </Link>
        </div>
      }
    </>
  )
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;