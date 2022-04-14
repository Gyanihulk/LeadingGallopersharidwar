import React from 'react'
import './Experience.css'
import tr1 from '../../assests/tr1.jpg';
import tr2 from '../../assests/tr2.jpg';
import tr3 from '../../assests/tr3.jpeg';
import tr4 from '../../assests/tr4.jpeg';
import tr5 from '../../assests/tr5.jpeg';
import tr6 from '../../assests/tr6.jpg';
import tr7 from '../../assests/tr7.jpg';
import tr8 from '../../assests/tr8.jpg';
import tr9 from '../../assests/tr9.jpg';

import sb from '../../assests/Sb.jpg';
const Experience = () => {
  return (<>
    
{/* <div class="w3-content w3-container " id="about">
  <h3 class="w3-center">SAURABH BHATIA</h3>
  <h4>NATIONAL LEVEL COACH</h4>
  <div class="w3-row">
    <div class="w3-row  w3-center w3-padding-large">
      <img src={sb} class="w3-round w3-image w3-opacity w3-hover-opacity-off" alt="Photo of Me" width="250" height="333"></img>
    </div>
    <div class="w3-row  w3-center w3-padding-large">
      <img src={sb} class="w3-round w3-image w3-opacity w3-hover-opacity-off" alt="Photo of Me" width="250" height="333"></img>
    </div>

    <p>I am Training horses and riders from last 20 years in DPS Ranipur.
    Trained kids for National Level Horse Riding Competions</p>
  </div>
  </div> 


<div class="w3-content w3-container w3-padding-64" id="about">
  <h1>I am a Heading</h1>
  <p>I am a paragraph.</p>
</div> */}

<div class="w3-row">
  <div class="w3-half w3-container w3-green">
  <h3 class="w3-center">SAURABH BHATIA</h3>
  <h4>NATIONAL LEVEL COACH</h4>
  <div class="w3-row">
    <div class="w3-row  w3-center w3-padding-large">
      <img src={sb} class="w3-round w3-image w3-opacity w3-hover-opacity-off" alt="Photo of Me" width="100
      
      
      " height="200"></img>
    </div>

    <p>I am Training horses and riders from last 20 years in DPS Ranipur.
    Trained kids for National Level Horse Riding Competions</p>
  </div>
  </div>
  <div class="w3-half w3-container w3-blue">
    <h1>Skills Of My Students</h1>

    
      <div className='w3-third w3-container w3-red' >
      <img src={tr1}  class="w3-round w3-image w3-opacity w3-hover-opacity-off" width="10" height="450"></img>
      </div>
      <div className='w3-third w3-container w3-red'>
      <img src={tr2} width="10" height="450" ></img>
      </div>
      <div className='w3-third w3-container w3-red'>
      <img src={tr3} width="10" height="450"></img>
      </div>
      <div className='w3-third w3-container w3-red'>
      <img src={tr4} width="10" height="450"></img>
      </div>
      <div className='w3-third w3-container w3-red'>
      <img src={tr5} width="10" height="450"></img>
      </div>
      <div className='w3-third w3-container w3-red'>
      <img src={tr6} width="10" height="450"></img>
      </div>
      <div className='w3-third w3-container w3-red'>
      <img src={tr7} width="10" height="450"></img>
      </div>
      <div className='w3-third w3-container w3-red'>
      <img src={tr8} width="10" height="450"></img>
      </div>
      <div className='w3-third w3-container w3-red'>
      <img src={tr9} width="10" height="450"></img>
      </div>

    
  </div>
  </div>
</>
  )
}

export default Experience