import React from 'react'
import jump from '../../assests/jump.jpg'
import training1 from '../../assests/training1.jpg'
import train2 from '../../assests/train2.jpg'

const Card = () => {
  return (<>
      <div className='container header__container'>
<h1>WHAT WE OFFER</h1>
      </div >
    <div class="w3-row-padding ">
          <div class="w3-third w3-section">
              <div class="w3-card-4">
                  <div class="w3-container w3-white">
                      <img src={jump}></img>
                      <h4>JUMPING EXERCISE'S</h4>
                  </div>
              </div>
          </div>
          <div class="w3-third w3-section">
              <div class="w3-card-4">
                  <div class="w3-container w3-white">
                        <img src={training1}></img>
                      <h4>THROD POLLES</h4>
                  </div>
              </div>
          </div>
          <div class="w3-third w3-section">
              <div class="w3-card-4">
                  <div class="w3-container w3-white">
                  <img src={train2}></img>
                         <h4>CHILDREN RIDING CLASSES</h4>
                  </div>
              </div>
          </div>
          

    </div>
    </>
    
  )
}

export default Card