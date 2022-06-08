import React from 'react'

export default function Menu() {
  return (
    
        <ul className='flex items-center text-xl'>
            <li className='mx-4'><a className='cursor-pointer hover:text-zinc-400 duration-200' href='.'>Home</a></li>
            <li className='mx-4'><a className='cursor-pointer hover:text-zinc-400 duration-200' href='#about'>Sobre</a></li>
            <li className='mx-4'><a className='cursor-pointer hover:text-zinc-400 duration-200' href='#portfolio'>Portfólio</a></li>
            <li className='mx-4'><a className='cursor-pointer hover:text-zinc-400 duration-200' href='#footer'>Contato</a></li>
        </ul>

  )
}
