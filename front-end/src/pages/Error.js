import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
      <section className='section'>
          <h2>404</h2>
          <h2>Page not found 🔗🔗🔗</h2>
          <Link to="/home" className="btn btn-primary"><i class="fa-duotone fa-arrow-left"></i>Back to the Home</Link>
      </section>
  )
}

export default Error