import React from 'react'
import Location from './Location';
import ContactUsPopUp from './ContactUsPopUp';
import spaceDots from './assets/spaceDots.svg'

const ContactUs = () => {
    return (
        <div className=''>
            <div className="relative md:h-[12vh] h-[7vh]">
                <img src={spaceDots} alt="dots" className="absolute top-[0px] md:left-[-90px] left-[-50px] md:w-[200px] w-[100px]" />
            </div>
            <div className='md:px-10 px-5 flex md:flex-row flex-col gap-5 relative'>
                <div className="flex flex-col z-20">
                    <p className="text-3xl font-semibold md:text-5xl">
                        Contact Us
                    </p>
                    <p className="text-xl heroGradient md:w-1/2 w-full pt-5 manrope">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
                    </p>
                    <div className="flex flex-col gap-5 pt-9 md:w-1/2 w-full">
                        <Location title="Head Office" address={['Aadrila Technologies INC', '8 The Green, Ste R, in the City of Dover County of Kent Zip Code 19901.']} />
                        <Location title="India Office" address={['Aadrila Technologies Private Limited', 'Unit 707, Lotus Trade Centre, Sahakar Nagar, New Link Road, Near D.N.Nagar, Andheri West, Mumbai, Maharashtra 400053.']} />
                    </div>
                </div>
                <ContactUsPopUp />
            </div>
        </div>
    )
}

export default ContactUs