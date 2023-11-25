import React from 'react'

const Footer = () => {
    return (
        <div className=' bg-amber-50 mt-0 top-0'>
            <div className="bg-zinc-50 mx-20 h-[29.875rem] w-[90.5rem] rounded-[2.813rem] shadow-red-200  ">
                <div className="bg-zinc-50 h-[23.125rem] w-[87.5rem] rounded-[2.813rem] flex flex-row">
                    <div className="bg-zinc-50  h-[22.188rem] w-[26.25rem] rounded-[2.813rem]">
                        <img
                            className="h-[5.438rem] w-[15.063rem] ml-[1.875rem] mt-[1.5rem]"
                            src="Arogya sarthi Logo.png"
                        />
                        <p className="ml-[2.4rem] mt-[1rem]">
                            Our vision is to provide convinience
                            <br />
                            and help increase your sales business
                        </p>
                        <div className="flex flex-row">
                            <img
                                className="h-[1.563rem] w-[1.563rem] ml-[2.3rem] mt-[0.9rem]"
                                src="Facebook.jpg"
                                alt="Facebook"
                            />
                            <img
                                className="h-[1.563rem] w-[1.563rem]  ml-[1.5rem] mt-[0.9rem]"
                                src="twitter.jpg"
                                alt="twitter"
                            />
                            <img
                                className="h-[1.563rem] w-[1.563rem]  ml-[1.5rem] mt-[0.9rem]"
                                src="instagram.jpg"
                                alt="instagram"
                            />
                        </div>
                    </div>
                    <div className="bg-zinc-50 h-[22.188rem] w-[60.313rem] grid grid-rows-5 grid-flow-col">
                        <div className="bg-zinc-50 h-[2rem] w-[12rem] ml-[12rem] mt-[2.5rem] text-[2.3rem] font-semibold">
                            <a href="">About</a>
                        </div>
                        <div className="bg-zinc-50 h-[2rem] w-[12rem] ml-[12rem] mt-[2.7rem] text-[1.3rem] font-medium">
                            How it works
                        </div>
                        <div className="bg-zinc-50 h-[2rem] w-[12rem] ml-[12rem] mt-[1.7rem] text-[1.3rem] font-medium">
                            Featured
                        </div>
                        <div className="bg-zinc-50 h-[2rem] w-[12rem] ml-[12rem] mt-[1.1rem] text-[1.3rem] font-medium">
                            Partnership
                        </div>
                        <div className="bg-zinc-50 h-[2rem] w-[12rem] ml-[12rem] mt-[0.6rem] text-[1.3rem] font-medium">
                            Business Relation
                        </div>
                        <div className="bg-zinc-50 h-[2rem] w-[12rem] ml-[8rem] mt-[2.5rem] text-[2.3rem] font-semibold">
                            Community
                        </div>
                        <div className="bg-zinc-50 h-[2rem] w-[12rem] ml-[8rem] mt-[2.7rem] text-[1.3rem] font-medium">
                            Events
                        </div>
                        <div className="bg-zinc-50 h-[2rem] w-[12rem] ml-[8rem] mt-[1.7rem] text-[1.3rem] font-medium">
                            Blog
                        </div>
                        <div className="bg-zinc-50 h-[2rem] w-[12rem] ml-[8rem] mt-[1.1rem] text-[1.3rem] font-medium">
                            Podcasst
                        </div>
                        <div className="bg-zinc-50 h-[2rem] w-[12rem] ml-[8rem] mt-[0.6rem] text-[1.3rem] font-medium">
                            Invite a friend
                        </div>
                        <div className="bg-zinc-50 h-[2rem] w-[12rem] ml-[8rem] mt-[2.5rem] text-[2.3rem] font-semibold">
                            Socials
                        </div>
                        <div className="bg-zinc-50 h-[2rem] w-[12rem] ml-[8rem] mt-[2.7rem] text-[1.3rem] font-medium">
                            Discord
                        </div>
                        <div className="bg-zinc-50 h-[2rem] w-[12rem] ml-[8rem] mt-[1.7rem] text-[1.3rem] font-medium">
                            Instagram
                        </div>
                        <div className="bg-zinc-50 h-[2rem] w-[12rem] ml-[8rem] mt-[1.1rem] text-[1.3rem] font-medium">
                            Twitter
                        </div>
                        <div className="bg-zinc-50 h-[2rem] w-[12rem] ml-[8rem] mt-[0.6rem] text-[1.3rem] font-medium">
                            Facebook
                        </div>
                    </div>
                </div>
                <div className="bg-slate-800 h-[0.188rem] w-[90.5rem] rounded-xl grid place-content-center" />
                <div className="bg-zinc-50 h-[6.563rem] w-[90.5rem] rounded-[2.813rem] grid grid-col-3 grid-flow-col">
                    <div className="bg-zinc-50 h-[2rem] w-[25rem] ml-[0.875rem] mt-[1.3rem] text-[1.3rem] font-medium">
                        <a href="">2022 Company Name. All rights reserved</a>
                    </div>
                    <div className="bg-zinc-50 h-[2rem] w-[12rem] ml-[25.875rem] mt-[1.3rem] text-[1.3rem] font-medium">
                        Privacy &amp; Policy{" "}
                    </div>
                    <div className="bg-zinc-50 h-[2rem] w-[12rem] ml-[-1.875rem] mt-[1.3rem] text-[1.3rem] font-medium">
                        Terms &amp; Condition
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer