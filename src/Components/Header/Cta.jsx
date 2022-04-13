import React from 'react'
import FS from '../../assests/fs.pdf'

const Cta = () => {
  return (
    <div className='cta'>
        <a href ={FS} className='btn' download>Download Fee Structure</a>
        <a href="#contact" className='btn btn-primary'>Lets Talk</a>
    </div>
  )
}

export default Cta