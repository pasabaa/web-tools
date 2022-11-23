import React from 'react'
import { Link } from 'react-router-dom'

export const Card = (props) => {
  return (
    <div className="card flex h-auto w-96">
        <div className="card-body p-8 flex flex-col gap-4">
          <div className="flex w-12 h-12 items-center justify-center rounded-sm bg-gradient-to-br from-black to-black/60">
            <i className={`bi ${props.icon} text-2xl text-gray-100`}></i>
          </div>
          <h1 className="text-xl font-black">{props.title}</h1>
          {props.description && <p className="text-sm text-gray-600">{props.description}</p>}
          <Link to={props.url} className="flex items-center justify-between rounded-sm border border-black p-2 text-sm font-bold text-gray-900 transition hover:bg-black/90 hover:text-gray-100">{props.textButton} <i class="bi bi-chevron-right"></i></Link>
        </div>
    </div>
  )
}

export const SmallCard = (props) => {
  return (
    <div className="card p-8 h-full justify-between flex flex-col">
        <div className='flex gap-8'>
          <div className="flex items-center justify-center rounded-sm">
            <i className={`bi ${props.icon} text-4xl text-gray-900`}></i>
          </div>
          <div className='flex flex-col gap-3'>
            <h1 className='font-bold'>{props.title}</h1>
            <p className='text-gray-400 text-sm'>{props.description}</p>
          </div>
        </div>
        <div className='flex mt-4'>
          <Link to={props.url} className="w-full flex items-center justify-between rounded-sm border border-black p-2 text-sm font-bold text-gray-900 transition hover:bg-black/90 hover:text-gray-100">
            {props.textButton}
            <i className='bi bi-arrow-up-right-square'></i>
          </Link>
        </div>
    </div>
  )
}

