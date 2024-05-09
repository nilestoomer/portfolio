import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'

export default function Landing() {
  return (
    <div className='landing'>
        <p className='landing-links'>
          <a href='https://github.com/nilestoomer'>Github</a> |
          <a href='https://www.linkedin.com/in/niles-toomer'> LinkedIn</a> |
          About Me
        </p>
        <h1 className="landing-name">Welcome to my Portfolio</h1>
        <img className='landing-img' src=''></img>
        <p className='landing-text'>Fullstack Developer</p>
        <Link to={'/projects'}>
          <h1>Checkout my Projects</h1>
        </Link>
    </div>
  )
}