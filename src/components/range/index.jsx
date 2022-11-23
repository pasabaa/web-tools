import React from 'react'

export const InputRange = (props) => {
return (
<div className="form-range">
    <label className="text-sm" htmlFor={props.id}>{props.text}</label>
    <input 
        id={props.id} 
        max={props.max} 
        min={props.min} 
        step={props.step} 
        defaultValue={props.min}
        onChange={(e)=> {props.event(e.target.value)}}
        className="h-1 w-full cursor-pointer appearance-none rounded-lg bg-black" type="range" />
</div>
)
}