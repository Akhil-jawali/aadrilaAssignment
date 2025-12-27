import React from 'react'
import blogBg from './assets/blogBg.webp';
const BlogList = ({ blog, index }) => {
    return (
        <div className="flex md:px-10 px-5 pb-7 relative w-full">
            <div key={index} className="bg-white p-4 rounded-lg shadow-md flex flex-col gap-3">
                <p className="font-bold">{blog.title}</p>
                <p className="text-[#719AD0] text-sm font-medium manrope">{blog.date}</p>
                <p className="text-gray-600 manrope">{blog.description}</p>
            </div>
            <div className="absolute bottom-0 right-0 w-full h-20 z-[-1]">
                <img src={blogBg} loading="lazy" alt="blogBg" className="w-full h-full object-cover rounded-xl" />
            </div>
        </div>
    )
}

export default BlogList