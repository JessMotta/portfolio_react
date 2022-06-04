import React from 'react'
import Menu from '../Menu'

export default function Header() {
  return (
    <header className='bg-english-violet text-white flex items-center justify-around h-24'>
        <div>LOGO</div>
        <Menu/>
    </header>
  )
}
