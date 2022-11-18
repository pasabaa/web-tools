import React from 'react'
import { Link } from 'react-router-dom'

export const Card = (props) => {
  return (
    <div className="card flex rounded-md bg-gray-900 p-8 text-sm text-gray-100 hover:bg-gray-900/80 transition">
      <div className="card-icon flex w-6/12 items-center justify-center pr-8">
        <i className={`gg-${props.icon} text-gray-600 transition`} style={{'--ggs': 3}}></i>
      </div>
      <div className="card-body flex flex-col gap-4">
        <h1 className="text-xl text-gray-300 font-bold">{props.title}</h1>
        {props.description && <p className="text-gray-400">{props.description}</p>}
        <div className="flex items-center justify-between">
          <Link to={props.url} className="flex w-full justify-between rounded-md bg-gradient-to-b from-gray-800 py-2 px-4 font-bold hover:bg-gray-700 transition">
            {props.textButton}
            <i className="gg-arrow-top-right-r" style={{'--ggs': .8}}></i>
          </Link>
        </div>
      </div>
    </div>
  )
}

export const SmallCard = (props) => {
  return (
    <div className="card p-4 rounded-md bg-gray-900 h-full justify-between flex flex-col">
        <div className='flex gap-8'>
          <div className='bg-gray-800 min-w-[2.5rem] h-10 rounded-md flex items-center justify-center'>
            <i className={`gg-${props.icon} text-gray-600 transition`} style={{'--ggs': 1.2}}></i>
          </div>
          <div className='flex flex-col gap-3'>
            <h1 className='font-bold'>{props.title}</h1>
            <p className='text-gray-400 text-sm'>{props.description}</p>
          </div>
        </div>
        <div className='flex mt-4'>
          <Link to={props.url} className="flex w-full justify-between rounded-md bg-gradient-to-b from-gray-800  py-1 px-4 font-bold text-sm hover:bg-gray-700 transition">
            {props.textButton}
            <i className="gg-arrow-top-right-r" style={{'--ggs': .7}}></i>
          </Link>
        </div>
    </div>
  )
}

