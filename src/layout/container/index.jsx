import React from 'react'

export const Container = ( { children } ) => {
return (
<div className='h-screen w-full flex flex-col text-gray-900'>
    {children}
</div>
)
}

export const LayoutContainer = ({children}) => {
return(
<div className='w-full bg-gray-50'>
    <div className='w-8/12 sm:w-11/12 md:w-10/12 2xl:w-11/12 mx-auto'>
        {children}
    </div>
</div>
)
}

export const AppContainer = ({children}) => {
return(
<div className='w-8/12 sm:w-11/12 md:w-10/12 2xl:w-11/12 mx-auto flex-grow py-16'>
    {children}
</div>
)
}