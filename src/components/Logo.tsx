import Image from 'next/image'
import React from 'react'

function Logo() {
  return (
    <div className='logo'>
      <Image src="/logo.png" alt="logo" width={100} height={100}/>
    </div>
  )
}

export default Logo
