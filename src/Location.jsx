import React from 'react'
import location from './assets/location.svg'

const Location = ({ title, address }) => {
    return (
        <div className="flex flex-col">
            <div className="flex gap-2 pb-2">
                <img src={location} alt="location" className="w-5 h-5" />
                <span className='font-bold underline'>{title}</span>
            </div>
            {address.map((addr, index) => (
                <p key={index} className="text-sm manrope">
                    {addr}
                </p>
            ))}
        </div>
    )
}

export default Location
