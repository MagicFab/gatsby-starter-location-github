import React from 'react'
import './logo.css'

const Logo = () => (
  <div style={{ width: 200, border: 'thin solid white' }}>
    <svg xmlns='http://www.w3.org/2000/svg' width='300'>
      <defs>
        <symbol id='rollodeqc-card'>
          <rect
            width='70'
            height='40'
            x='82.5'
            y='45'
            rx='5'
            yx='5'
            className='logo_s1'
          />
          <circle cx='92.5' cy='65' r='3' className='logo_s2' />
          <path
            d='M105 55 L120 55z'
            className='logo_s3'
            stroke-linecap='round'
          />
          <path
            d='M105 60 L125 60z'
            className='logo_s3'
            stroke-linecap='round'
          />
          <path
            d='M105 65 L145 65z'
            className='logo_s3'
            stroke-linecap='round'
          />
          <path
            d='M110 70 L120 70z'
            className='logo_s3'
            stroke-linecap='round'
          />
          <path
            d='M130 70 L140 70z'
            className='logo_s3'
            stroke-linecap='round'
          />
          <path
            d='M110 75 L120 75z'
            className='logo_s3'
            stroke-linecap='round'
          />
          <path
            d='M130 75 L140 75z'
            className='logo_s3'
            stroke-linecap='round'
          />
        </symbol>
      </defs>
      <use className='rollodeck-card' id='card-1' xlinkHref='#rollodeqc-card' />
      <use className='rollodeck-card' id='card-2' xlinkHref='#rollodeqc-card' />
      <use className='rollodeck-card' id='card-3' xlinkHref='#rollodeqc-card' />
      <use className='rollodeck-card' id='card-4' xlinkHref='#rollodeqc-card' />
      <use className='rollodeck-card' id='card-5' xlinkHref='#rollodeqc-card' />
    </svg>
  </div>
)

export default Logo
