import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import uuid from 'react-uuid'
import { LayoutContainer } from '../../layout/container'

export const Navbar = () => {

  const links = [
    {
      name: 'Inicio',
      url: '/',
    },
    {
      name: 'Categorias',
      url: '/categories',
    },
    {
      name: 'Contacto',
      url: '/contact',
    }
  ]

  return (
    <LayoutContainer>
        <div className='py-6 flex justify-between'>
            <div className='me-auto'>
              <Link className='py-1 px-3 rounded-full' to={'/'}>Home</Link>
            </div>
            <div className='ms-auto flex gap-2'>
              {
                links.map(link => {
                  return(
                    <NavLink key={uuid()} className={({isActive}) => (isActive ? 'active py-1 px-3 rounded-sm transition' : 'py-1 px-3 rounded-sm transition')} to={link.url}>{link.name}</NavLink>
                  )
                })
              }
            </div>
        </div>
    </LayoutContainer>
  )
}
