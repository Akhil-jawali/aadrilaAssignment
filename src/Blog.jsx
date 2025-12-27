import React, { useState } from 'react'
import BlogList from './BlogList';
import smallDots from './assets/smallDots.svg'
import spaceDots from './assets/spaceDots.svg'

const blogList = [
    { title: "How AI is Revolutionizing Document Management for Enterprises", date: "24 July, 2023", description: "Lorem Ipsum..." },
    { title: "Top 5 Fraud Prevention Strategies for Financial Institutions", date: "15 August, 2023", description: "Lorem Ipsum..." },
    { title: "The Future of OCR: From Basic Extraction to AI-Driven Intelligence", date: "10 September, 2023", description: "Lorem Ipsum..." }
];

const Blog = () => {
    const [index, setIndex] = useState(0);
    const [animKey, setAnimKey] = useState(0); // 🔥 force animation trigger
    const [dir, setDir] = useState("left");

    const triggerAnim = (direction) => {
        setDir(direction);
        setAnimKey(Date.now());  // re-render key forces animation every click
    };

    const next = () => {
        triggerAnim("left");
        setIndex((prev) => (prev + 1) % blogList.length);
    };

    const prev = () => {
        triggerAnim("right");
        setIndex((prev) => (prev - 1 + blogList.length) % blogList.length);
    };

    const visibleBlogs = [
        blogList[index],
        blogList[(index + 1) % blogList.length],
        blogList[(index + 2) % blogList.length]
    ];

    return (
        <div className='md:px-10 px-5'>
            {/* Header */}
            <div className="flex flex-col gap-4 items-center relative">
                <img src={smallDots} alt="dots" className="absolute top-[0px] left-[0px] md:w-[150px] w-[100px]" />
                <p className="mt-3 text-3xl font-semibold md:text-5xl z-8">Blogs</p>
                <p className="md:text-2xl text-lg heroGradient lg:w-3/5 md:w-4/5 w-full text-center z-8 manrope">
                    Lorem Ipsum is simply dummy text of the printing industry.
                </p>
            </div>

            <div className="flex flex-col md:flex-col-reverse">

                {/* ARROWS */}
                <div className="flex gap-4 items-center justify-center py-3">
                    <svg onClick={prev} width="35" height="35" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="60" height="60" rx="12" fill="#1E73BE" />
                        <path d="M34 18L22 30L34 42" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>


                    <svg onClick={next} width="35" height="35" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="60" height="60" rx="12" fill="#1E73BE" />
                        <path d="M26 18L38 30L26 42" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>

                {/* MOBILE */}
                <div className="lg:hidden flex justify-center py-4 overflow-hidden">
                    <div key={animKey} className={`w-full max-w-[450px] slide-${dir}`}>
                        <BlogList blog={blogList[index]} index={index} />
                    </div>
                </div>

                {/* DESKTOP */}
                <div className="hidden lg:flex justify-center w-full overflow-hidden md:py-7 py-4 relative">
                    <div key={animKey} className={`grid grid-cols-3 gap-6 w-full slide-${dir}`}>
                        {visibleBlogs.map((blog, idx) => (
                            <BlogList blog={blog} index={idx} key={idx} />
                        ))}
                    </div>
                    <img src={spaceDots} alt="dots" className="absolute top-[20px] right-0 w-[200px]" />
                </div>
            </div>
        </div>
    )
}

export default Blog;
