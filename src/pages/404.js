import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <div className="error-box">
      <h1>ERROR 404</h1>
      <p>Ruta no encontrada, lo sentimos.</p>
      <Link to="/"> Volver a Inicio </Link>
    </div>
  </Layout>
)

export default NotFoundPage
