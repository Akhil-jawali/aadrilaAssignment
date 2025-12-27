const ProductListCard = ({ img, colorBtn, title, index, features, benefits }) => {
    return (
        <div>
            <div className={`${index % 2 !== 0 ? 'productLeftImgDiv' : 'productRightImgDiv'} md:px-10 px-5 grid grid-cols-1 md:grid-cols-2 gap-6 items-center md:pt-10 pt-5 pb-5`}>
                <div className="flex flex-col gap-5 lg:w-4/5 w-full">
                    <div className="flex">
                        <button className="gradientBg rounded-full px-5 py-2 md:text-xl text-sm w-auto manrope">{colorBtn}</button>
                    </div>
                    <p className="lg:text-[32px] text-[24px] font-bold">
                        {title}
                    </p>

                    <div className="text-[#696969]">
                        <p className="lg:text-xl mb:text-base text-sm font-bold">
                            Features:
                        </p>
                        <ul className='list-disc pl-5 mb:text-base text-sm'>
                            {features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="text-[#696969]">
                        <p className="lg:text-xl mb:text-base text-sm font-bold">
                            Benefits:
                        </p>
                        <ul className='list-disc pl-5 mb:text-base text-sm'>
                            {benefits.map((benefit, i) => (
                                <li key={i}>{benefit}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex gap-5 w-full md:px-0 px-3">
                        <button className="primaryBtn md:text-base text-sm w-full md:px-5 py-2 px-2">Learn More</button>
                        <button className="primaryBtn md:text-base text-sm w-full md:px-5 py-2 px-2">Schedule a Demo</button>
                    </div>
                </div>
                <div className={`${index % 2 !== 0 ? 'md:order-first justify-start' : 'justify-end'} flex items-center`}>
                    <div className={`${index % 2 !== 0 ? 'justify-start' : 'justify-end'} lg:w-4/5 w-full flex items-center justify-end`} >
                        <img src={img} alt="productImg" loading="lazy" className='rounded-xl z-[11] lg:w-9/10 w-full' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductListCard