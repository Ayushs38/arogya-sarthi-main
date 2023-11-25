"use client"
import React, { useState, useEffect } from "react"
import Link from 'next/link'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from 'next/navigation'
import axios from "axios";
import { Anybody } from "@next/font/google";


export default function Register() {
    const router = useRouter()
    const supabase = createClientComponentClient();
    const [userState, setUserState] = useState({
        email: "",
        password: "",
        name: "",
        password_confirmation: "",
    });
    

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});



    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
                <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 h-screen">
                    <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">

                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Register</h2>
                        <span className="mt-6 mb-8 text-gray-500">as</span>
                        <div className="flex gap-5">
                            <button className=' p-2 text-lg font-bold  bg-white hover:bg-slate-400 rounded-md border-2 border-black' onClick={() => router.push('/doctorsregister')}>Doctor</button>
                            <button className=' p-2 text-lg font-bold bg-orange-300 hover:bg-orange-500 rounded-md border-2 border-black' onClick={() => router.push('/patientsregister')}>Patient</button>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                            Already have and Account?
                            <Link
                                href="./patientslogin"
                                title=""
                                className="font-semibold text-black transition-all duration-200 hover:underline"
                            >
                                Login
                            </Link>
                        </p>
                        <form action="#" method="POST" className="mt-8">
                            <div className="space-y-5">
                                <div>
                                    <label htmlFor="" className="text-base font-medium text-gray-900">

                                        Full Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="text"
                                            placeholder="Enter your name"
                                            id="name"
                                            onChange={(e) =>
                                                setUserState({ ...userState, name: e.target.value })
                                            }

                                        ></input>
                                        {/* <span className=" text-red-500 font-bold">
                                            {errors?.name}
                                        </span> */}
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="" className="text-base font-medium text-gray-900">

                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="email"
                                            placeholder="Email"
                                            id="email"
                                            onChange={(e) =>
                                                setUserState({ ...userState, email: e.target.value })
                                            }
                                        ></input>
                                        {/* <span className=" text-red-500 font-bold">
                                            {errors?.email}
                                        </span> */}
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="" className="text-base font-medium text-gray-900">

                                            Password
                                        </label>

                                    </div>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="password"
                                            placeholder="Password"
                                            id="password"
                                            onChange={(e) =>
                                                setUserState({ ...userState, password: e.target.value })
                                            }
                                        ></input>
                                        {/* <span className=" text-red-500 font-bold">
                                            {errors?.password}
                                        </span> */}
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="" className="text-base font-medium text-gray-900">

                                            Confirm Password
                                        </label>
                                        <a
                                            href="#"
                                            title=""
                                            className="text-sm font-semibold text-black hover:underline"
                                        >

                                            Forgot password?
                                        </a>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="password"
                                            placeholder="Confirm Password"
                                            id="password_confirmation"
                                            onChange={(e) =>
                                                setUserState({
                                                    ...userState,
                                                    password_confirmation: e.target.value,
                                                })
                                            }
                                        ></input>
                                        {/* <span className=" text-red-500 font-bold">
                                            {errors?.password_confirmation}
                                        </span> */}
                                    </div>
                                </div>
                                <div>
                                    <button
                                        type="button"
                                        className={`inline-flex w-full items-center justify-center rounded-md  px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80 ${loading ? "bg-grey " : "bg-black"}`}
                                    // onClick={submitForm}

                                    >
                                        {loading ? "Processing" : "Register"}
                                    </button>
                                </div>
                            </div>
                        </form>
                        <div className="mt-3 space-y-3">
                            <button
                                type="button"
                                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                            >
                                <span className="mr-2 inline-block">
                                    <svg
                                        className="h-6 w-6 text-rose-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                                    </svg>
                                </span>
                                Sign in with Google
                            </button>

                        </div>
                    </div>
                </div>
                <div className="h-screen w-full">
                    <img
                        className="mx-auto h-screen w-full rounded-md object-cover"
                        src="https://s3-alpha-sig.figma.com/img/cd02/072f/f8c68a4632e87172ec64953bec65088c?Expires=1701648000&Signature=iVBQMosa8cKZJsklJqHBVBSDT5IEvzFlaBr62TQwFNt~SKWJz0g~KJ3qxugipIYxpQi0Pfp1XSLM2k-j7OMFJSMezTUGTbLqVFlfZQYlA3jkMGGaslSs5Awy81Cq8DVTgl11SckEmnKyfF8HaZoLsmXxDF0N222N0SMt6aVUaAwMqFYnEGRSGrQ2eVDfAdId~M-eqI0xACKanrZi4iJ5mhqCgdpFh0YIy4k2Ub4xckeCdqwxkwndYa2fyJ9xkslm6Tz7MGl2PAWpj8NpMwEdHs5zsqSTIdIdysfIUuPN~~~LyeyKBin04Pvz6hZ6b2-4yjyJQrArmwph1jaBVbpg3Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                        alt=""
                    />
                </div>
            </div>
        </section>
    )
}
