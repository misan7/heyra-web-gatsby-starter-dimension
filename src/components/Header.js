import React from 'react'
import PropTypes from 'prop-types'

import Logo from '!svg-react-loader!../assets/images/svg-images/logo.svg'

const Header = props => (
  <header
    id="header"
    style={
      props.timeout
        ? {
            display: 'none',
          }
        : {}
    }
  >
    {' '}
    {/* <div className="logo">
          <span className="icon fa-diamond" />
        </div> */}{' '}
    <div className="content">
      <div className="inner">
        <div className="logo-box">
          <Logo className="logo-svg" />
        </div>
        <p>
          El asistente virtual que organiza eventos con personas afines a tus
          gustos.{' '}
        </p>{' '}
      </div>{' '}
    </div>{' '}
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            Sobre Nosotros{' '}
          </a>{' '}
        </li>{' '}
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contacto{' '}
          </a>{' '}
        </li>{' '}
      </ul>{' '}
    </nav>{' '}
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
