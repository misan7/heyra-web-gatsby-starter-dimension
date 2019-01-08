import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major"> About </h2>{' '}
          <span className="image main">
            <img src={pic03} alt="" />
          </span>{' '}
          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit.Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac.Aliquam
            erat volutpat.Praesent urna nisi, fringila lorem et vehicula lacinia
            quam.Integer sollicitudin mauris nec lorem luctus ultrices.Aliquam
            libero et malesuada fames ac ante ipsum primis in faucibus.Cras
            viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.{' '}
          </p>{' '}
          {close}{' '}
        </article>
        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major"> Contacto </h2>{' '}
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name"> Nombre </label>{' '}
              <input type="text" name="name" id="name" />
            </div>{' '}
            <div className="field half">
              <label htmlFor="email"> Email </label>{' '}
              <input type="text" name="email" id="email" />
            </div>{' '}
            <div className="field">
              <label htmlFor="message"> Mensaje </label>{' '}
              <textarea name="message" id="message" rows="4" />
            </div>{' '}
            <ul className="actions">
              <li>
                <input type="submit" value="Enviar" className="special" />
              </li>{' '}
              <li>
                <input type="reset" value="Reiniciar Formulario" />
              </li>{' '}
            </ul>{' '}
          </form>{' '}
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/heyrabot"
                className="icon fa-twitter"
                target="_blank"
              >
                <span className="label"> Twitter </span>{' '}
              </a>{' '}
            </li>{' '}
            <li>
              <a
                href="https://www.facebook.com/heyrabot"
                className="icon fa-facebook"
                target="_blank"
              >
                <span className="label"> Facebook </span>{' '}
              </a>{' '}
            </li>{' '}
            <li>
              <a
                href="https://www.instagram.com/heyra_bot/"
                className="icon fa-instagram"
                target="_blank"
              >
                <span className="label"> Instagram </span>{' '}
              </a>{' '}
            </li>{' '}
            <li />{' '}
          </ul>{' '}
          {close}{' '}
        </article>{' '}
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
