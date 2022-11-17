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
        <p className="text-gray-400">{props.description}</p>
        <div className="flex items-center justify-between">
          <Link to={props.url} className="flex w-full justify-between rounded-md bg-gradient-to-b from-gray-800 py-2 px-4 font-bold">
            {props.textButton}
            <i class="gg-arrow-top-right-r" style={{'--ggs': .8}}></i>
          </Link>
        </div>
      </div>
    </div>
  )
}
