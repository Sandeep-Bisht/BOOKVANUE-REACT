import React from 'react'
import '../../css/loader.css'
import { Loading } from 'react-loading-dot'

const Loader = () => {
  return (
    <div className='loader-main'>
        <Loading background='#00BFB4'/>
    </div>
  )
}

export default Loader