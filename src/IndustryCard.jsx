import React from 'react'

const IndustryCard = ({ name, description, img }) => {
    return (
        <div className="flex flex-col items-center gap-4 bg-white lg:p-6 p-3 rounded-lg lg:m-4 z-20" style={{ 'box-shadow': '0px 0px 20px 0px #0000001F' }}>
            <img src={img} alt={name} className="w-16 h-16 object-contain" />
            <p className="text-lg font-semibold text-[#141219] text-center">{name}</p>
            <p className="text-sm text-[#696969] leading-relaxed text-center manrope">{description}</p>
        </div>
    )
}

export default IndustryCard