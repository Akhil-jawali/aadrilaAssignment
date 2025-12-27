import React from 'react'
import Vision from './Vision'

const AboutUsHero = () => {
    return (
        <>
            <div className="aboutUsBg flex flex-col justify-center items-center mt-10 md:py-20 pt-10 pb-3 md:px-10 px-5 md:gap-15 gap-5">
                <div className="flex flex-col gap-2 items-center px-10 bg-white rounded-lg py-10 md:px-10 px-5" style={{ 'box-shadow': '0px 0px 20px 0px #0000001F' }}>
                    <p className="mt-3 text-3xl font-semibold md:text-5xl">
                        About Us
                    </p>
                    <p className="md:text-2xl text-lg heroGradient text-center manrope">
                        Meet the Minds Shaping Document Automation.
                    </p>
                </div>
                <div className="mt-7 w-full flex flex-col gap-15">
                    <Vision title="Our Vision" />
                    <Vision title="Our Mission" />
                </div>
            </div>
        </>
    )
}

export default AboutUsHero