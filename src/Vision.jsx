import React from 'react'
import img from './assets/vision.png'

const Vision = ({ title }) => {
    return (
        <div className={`w-full md:px-0 px-5 flex ${title === "Our Mission" ? 'justify-end' : 'justify-start'}`}>
            <div className={`${title === "Our Mission" ? 'justify-start md:flex-row-reverse md:rounded-l-full' : 'justify-end md:flex-col md:flex-row md:rounded-r-full'} md:w-4/6 w-full flex md:flex-row flex-col flex-col-reverse items-center p-3 bg-white gap-4`} style={{ 'box-shadow': '0px 0px 20px 0px #0000001F' }}>
                <span className={`font-medium text-justify manrope ${title === "Our Mission" ? 'text-center md:text-start' : 'text-center md:text-end'}`}>To redefine document management with cutting-edge technology that ensures accuracy, efficiency, and trust.</span>
                <div className={`flex gap-4 items-center md:border-[#CD6028] ${title === "Our Mission" ? 'md:flex-row-reverse md:border-r-4 md:pr-3' : 'flex-row md:border-l-4 md:pl-3'} `}>
                    <span className={`text-2xl font-bold ${title === "Our Mission" ? 'text-center md:text-end' : 'text-center md:text-start'}`}>{title}</span>
                    <img src={img} alt="vision" className="w-[70px] h-[70px]" />
                </div>
            </div >
        </div >
    )
}

export default Vision