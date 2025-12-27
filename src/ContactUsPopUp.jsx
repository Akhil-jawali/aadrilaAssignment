import React from 'react'

const ContactUsPopUp = () => {
    return (
        <div className="md:absolute md:top-0 md:right-0 md:w-1/2 rounded-lg lg:px-10 md:px-5 px-0">
            <div className="flex items-center justify-center">
                <div className="bg-white md:px-8 py-10 p-3 w-full max-w-xl rounded-xl" style={{ 'box-shadow': '0px 0px 20px 0px #0000001F' }}>
                    < div className="flex flex-col gap-5">
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full p-3 border border-[#959595] rounded-md focus:border-black"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-3 border border-[#959595] rounded-md focus:border-black"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="w-full p-3 border border-[#959595] rounded-md focus:border-black"
                            />
                            <input
                                type="text"
                                placeholder="Company Name"
                                className="w-full p-3 border border-[#959595] rounded-md focus:border-black"
                            />
                        </div>

                        <input type="text"
                            placeholder="Inquiry Type"
                            className="w-full p-3 border border-[#959595] rounded-md focus:border-black"
                        />

                        <textarea rows="5"
                            placeholder="Message"
                            className="w-full p-3 border border-[#959595] rounded-md focus:border-black"
                        />

                        <button
                            type="submit"
                            className="w-full py-3 primaryBtn"
                        >
                            Send Inquiry
                        </button>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default ContactUsPopUp