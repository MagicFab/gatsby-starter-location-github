import React from 'react'
import './logo.css'

/*
const s1 = {
 fill: 'beige',
 strokeWidth: 3,
 stroke: 'brown'
}

const s2 = {
  fill: 'none',
  stroke: 'red',
  strokeWidth: 3
}

const s3 = {
  strokeWidth: 3,
  stroke: 'black'
}

const Logo = () => (
<svg xmlns="http://www.w3.org/2000/svg" width = "400" height = "400">
  <symbol id = "rollodeqc-card" viewPort="0 0 100 100">
  <def>
  </def>
  <rect  width = "70" height = "40" x="82.5" y="45" rx="5" yx="5" style={s1} >
  </rect>
  <circle cx="92.5" cy="65" r="3" style={s2}></circle>
  <path d = "M105 55 L120 55z" style={s3} stroke-linecap="round"></path>
  <path d = "M105 60 L125 60z" style={s3} stroke-linecap="round"></path>
  <path d = "M105 65 L145 65z" style={s3} stroke-linecap="round"></path>
  <path d = "M110 70 L120 70z" style={s3} stroke-linecap="round"></path>
  <path d = "M130 70 L140 70z" style={s3} stroke-linecap="round"></path>
  <path d = "M110 75 L120 75z" style={s3} stroke-linecap="round"></path>
  <path d = "M130 75 L140 75z" style={s3} stroke-linecap="round"></path>
  </symbol>
  <use className = "rollodeck-card" id = "card-1" xlinkHref="#rollodeqc-card"/>
  <use className = "rollodeck-card" id = "card-2" xlinkHref="#rollodeqc-card"/>
  <use className = "rollodeck-card" id = "card-3" xlinkHref="#rollodeqc-card"/>
  <use className = "rollodeck-card" id = "card-4" xlinkHref="#rollodeqc-card"/>
  <use className = "rollodeck-card" id = "card-5" xlinkHref="#rollodeqc-card"/>
</svg>
)
*/

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
