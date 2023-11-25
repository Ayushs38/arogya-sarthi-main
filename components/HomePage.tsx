"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const HomePage = () => {
    const router = useRouter()
    return (
        <div>
            {/* Hero Page */}
            <div className=" m-0">
                {/* Left part */}
                <div className=" h-screen flex flex-col md:flex-row mx-5
                 p-5 ">
                    <div className="w-1/2 flex  justify-center flex-col ">
                        <div className=" w-5/6">
                            <p className=" text-xl font-medium">The easiest way to book a doctor's appointment.</p>
                            <h1 className="text-4xl font-extrabold uppercase">The best way to get the care you need</h1>
                            <p className=" text-xl font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>

                            <button className=' mt-5 bg-green-500 hover:bg-green-700 p-3 text-lg rounded font-bold text-white'
                            // onClick={router.push('Patients/BookAppointmentPage')}
                            >
                                Book Appointment
                            </button>
                        </div>


                    </div>

                    {/* Right part */}
                    <div className="w-1/2  align-middle">
                        <img
                            src="https://s3-alpha-sig.figma.com/img/08c1/1cdf/81050882ea067161d8f780927c2fc5c5?Expires=1699833600&Signature=Hd61xtRw4eZjgwVoW3l5Y9SLHQoGU0kbUyhzrZj6~CCqe0QZU1CqzN2lN0b7R7DdojUCH83hqUJMjfAv2PM34DXCfwDB8r9FqO8oRiDElZutM9OuKAxbL8XpcE5jhLAX-3E5FzeZwvuUQa287BG5GiMyuaZg8wlVx9tQ2QhYnb6Lfe9vYVux2yqUb5WOpRsr1cBmiyg-vRSNqSxNap6T7OXJO07IWvZe4FBmDhtNkEoTsOuGe8wVVjNaxbzQQ7k1IxHdF0T0d8IjQegUtPdCURN7nAEcro~PkuRGxFUTcaKz~BpeSmUHIQr3HTGMf3kpm4d6P8Ap636uCPK98hUhAA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" // Replace with your image source
                            // src="https://photos.app.goo.gl/iZK1jqAqZhCyRhgGA" // Replace with your image source
                            // src="https://drive.google.com/drive/folders/1POI7mq4DgGifGMi7xlrPxQoBEAIqYfzH" // Replace with your image source
                            alt="Hero Image"
                            className="w-screen h-fit object-cover"
                        />
                    </div>
                </div>

            </div>

            {/* Second part */}
            <div className=" text-2xl font-medium text-black mx-10 mb-3">
                <h1 className=" mt-0">Why use Arogya Sarthi ?</h1>
                <div className="flex flex-col lg:flex-row gap-x-5  gap-y-4 w-full justify-around ">
                    <div className=' w-4/12 bg-white rounded-xl p-4 gap-y-4 h-32 text-center relative'>

                        <h3 className=" text-lg font-semibold ">Find and Compare local doctors</h3>
                        <p className=" text-sm">Review the doctor profiles and verified credentials before
                            booking an appointment. See real-time availability for in-person
                            or video visits.</p>
                        <div className=" p-3 rounded-full bg-white w-fit object-bottom absolute -translate-x-1/2 left-1/2 ">
                            <img src="https://s3-alpha-sig.figma.com/img/3bdb/3268/3713519ccc635a2d4a2cec42791f1f0c?Expires=1699833600&Signature=Zm-ExRyvZFFhrsdwVn557KRWjhtSJh8n4R9sRFMAlhsfT6AeSIgYMB5B~ORwCDCyBEU3mzlVHShsjWcSUPP0iS1PorScEz4ilIXU4itLHxAiI5ub5wxCp3whZZYSr0KWkOze9eSkc~3LuMsWeIDG3~YK7ofkGgGfV01v759xAqP5jKlE1dVm1Gyc-ENlJ4dXYGJwQkeTg05GD4QTz8vQwRmjYYwPt8wMFb3VUnyLUDUlskw5~AbzVrOOV5XcdW-n0BxCu8EUARCCMFeQvr4tVEhscPfFzvczzrBUCBLo2Zpqk8ya6lqVvsKlJJWcIOa2x6Sv1vlnkj9EQvaUhc2wNQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Ask-Get-answers.web" className=" w-10 h-10" />
                        </div>
                    </div>
                    <div className=' w-4/12 bg-white rounded-xl p-4  h-32 text-center relative'>
                        <h3 className=" text-lg font-semibold ">Have a medical query?</h3>
                        <p className=" text-sm">Share your medical query and we will have the query answered
                            for you from an experienced and verified doctor</p>
                        <div className="p-3 rounded-full bg-white w-fit object-bottom absolute -translate-x-1/2 left-1/2">
                            <img src="https://s3-alpha-sig.figma.com/img/b8ff/caeb/920e62fa12f69656d3d17ba5da4d8134?Expires=1699833600&Signature=dr84-Lq7BdpQONEVw1RaXz1xboC07BZLSjg4j6SMwMYusIVu2fkddpyS-agPiGPfRDk2RdKTDbV5MS6hmqwcNp7kQqGkWW376D5Qhly66gXTTbqO6e9qGeJKShfFhFa~7--K5ZANxhHITXKTL2wNkgsGl9psmMsMKskw2lsFRct~Y~NcpkMkcFyWNJLby~h-HkQkE1SDN0dNZf82dRDqQlbuUGLCG2o6mU0urhAH3G8Ytx5yxydbPUFxOyoDjXMQNwOMo12K~F1Atyd0upGDV0khfdHDPKi3RKj1SM8izPqncIzlCth-QhQMx59N3Yzlb2wkuwgu~NhlstaFEbArww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Ask-Get-answers.web" className="  w-10 h-10 " />
                        </div>
                    </div>
                    <div className='  w-4/12 bg-white rounded-xl p-4 h-32 text-center relative'>
                        <h3 className=" text-lg font-semibold ">Get care anytime, anywhere</h3>
                        <p className=" text-sm">Book appointments in person or online; see the same great
                            doctors from home with a video visit.</p>
                        <div className="p-3 rounded-full bg-white w-fit object-bottom absolute -translate-x-1/2 left-1/2">
                            <img src="https://s3-alpha-sig.figma.com/img/d1b0/f560/4968a914af8af7721ccbe99f7849e8f4?Expires=1699833600&Signature=KtKMo0Pj4kwPRm22enDin4gwTb-aWBSVMaWc1GATT3xDENzGlsWqaKiO1VkSuNISRI7EoZmp41kdhgkTiAZjyVZXLF9JFzamJnm0Y7kRhPdGk7BbNxYZXLGBWCLTwA1uOGCigaPppNoyqcIp-WpX6LHj8ANzHAmdwamWJsZtNgBAXl~yC2xrfbLFf5MXgwR8-po4jrk-cX5Ky7sYiOHKPXoHMTk0hPdnHwnkytK4rh6VO-KyzKI18dOW-qhgNGfasaUW4X2LyjepSG2uXEOn9rvrF6-gicIaGvqAcPVrHUIStnI-mEiKLN8u93aeYhybizRITT4uEoZ5OGi4Gwryvw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="Ask-Get-answers.web" className=" w-10 h-10" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Third part  */}
            <div className="md:flex justify-evenly">
                {/*doctors details*/}
                <div className="mt-5">
                    <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:h-96 md:w-56">
                        <div className="">
                            <div>
                                <img
                                    className="h-56 w-full object-cover md:h-full md:w-full "
                                    src="https://s3-alpha-sig.figma.com/img/52fa/f3b6/b46f61a1fb9000558039ef6f461a0175?Expires=1699833600&Signature=dhJzvl~ipbK3KJfDZ~2x3nog7MXLKa8IoMMKMksNwgl7nuRCqC6KKIn7lCTyzFHU~PNgRyy0UQXJqf3TLXyfX0-yZqZ0RFGQkVJyketPFBU5JKcHNUv2DfGfA9sT8ZMY3~Q-kmqOHevylnsAqf8pKMyDGi2yyQb~4wavEArrkQ8LJcDHQ9Y50J0-8YZ~WYg9Y0cgIi2hC-VTIFoNbYAeLxJpUrAl1sPUucgylqSLhgfgwvRa4MhzK7Vs6Qo7NO0fW5MTKQubdJDC2JTZuUqk9SyaqSATmX5j9-mlsujs-RE-7EEN6R0ghlSde8FL--GFuSvXBmsU72ORZ7tiDzQc3A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                    alt="img"
                                />
                            </div>
                            <div className="p-4">
                                <a
                                    className="block mt-1 text-lg font-medium text-black hover:text-blue-700"
                                    href="#"
                                >
                                    Instant Video Consultation
                                </a>
                                <p className="mt-2 text-slate-500">Connect within 60 secs.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*doctors details*/}
                <div className="mt-5">
                    <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:h-96 md:w-56">
                        <div className="">
                            <div>
                                <img
                                    className="h-56 w-full object-cover md:h-full md:w-full "
                                    src="https://s3-alpha-sig.figma.com/img/47f6/e6e7/c972b4d5eda6622a32cd565b85753fd8?Expires=1699833600&Signature=PnC6Z7~wNzWvjPOW43DcnmY~a0MtRLXsYKErvtZqrRbuWxPCP4JnSUCDMwwy3-AoMXt9U8zPN~HI7cVZC~j2y7DIW~o7yQSWT0uwS2vSl9XK0RAaFjvTcpYiIpeku3G~DBYb5SgC1~JUjfWWoTXNqPcEupYzSPRHDth2NhDQkRY4PT9MyJV1iVuDIc39RH4ZQuxx4hayN62L-TCHiZIHa2q5kRiB~~gYjrFnPx~BVRUlWGPMDVqLTpDDXJ8bZX2Kx6Ms-Y-vdzxHsR15nbHo979oytp2PfihKvE5gJ26X78tC1N4qcKOW75qEFTMq~MbPMgT8ObFBmvg0rp66aBDUQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                    alt="img"
                                />
                            </div>
                            <div className="p-4">
                                <a
                                    className="block mt-1 text-lg font-medium text-black hover:text-blue-700"
                                    href="#"
                                >
                                    Find Doctors Near You
                                </a>
                                <p className="mt-2 text-slate-500">Confirmed appointments</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*doctors details*/}
                <div className="mt-5">
                    <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:h-96 md:w-56">
                        <div className="">
                            <div>
                                <img
                                    className=" h-56 w-full object-cover md:h-full md:w-full"
                                    src="https://s3-alpha-sig.figma.com/img/1abc/1f40/07d67ebedaeb1b9665b1ff2942a1c5a8?Expires=1701648000&Signature=DuRZAlCjQM2Ek~wqxqux7HpHQKgB41iGHJdDzs4lfRmIf7~cXZnxYCwwORrm2tX1WdF8xJ4Vlm6AlK7iAe1bAYU~4tbC9ykBjnyiyIsljF55atPy9k7mJem4-5eMETzp00e3-wUTkRhipeP3RM1CSjEk68nDkhrfh26wcM9pMOo3pzugqcCcfsOMZW59BMHZkLA0pUfej9Q01jXgfDHhICyFkYepeQYJPNureBfYQrsw4KYgRJC4LhJ9wW-uJs9o-svVixs8GWMBZZG8yBP5imcMx-UZZvTlab5SMCYpgW4luvb4khG8~7Sgzs7DBQc7PPsUtuEw7a9nPU0nacBQew__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                    alt="img"
                                />
                            </div>
                            <div className="p-4">
                                <a
                                    className="block mt-1 text-lg font-medium text-black hover:text-blue-700"
                                    href="#"
                                >
                                    Medicines
                                </a>
                                <p className="mt-2 text-slate-500">Essentials at your doorstep</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*doctors details*/}
                <div className="mt-5">
                    <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:h-96 md:w-56">
                        <div className="">
                            <div>
                                <img
                                    className="h-56 w-full object-cover md:h-full md:w-full "
                                    src="https://s3-alpha-sig.figma.com/img/c366/6b38/9f5a471bdee6d195e8756cf768d4d1c1?Expires=1701648000&Signature=WAhs1U0yF8F2Sdv88HYaS71u2ADljPhkgn-GJPiCp5LWYRGVAZUU1CwGesNXkxYDpYFyGfQVXMWGgfn6I7m5Jli285iIGn4rUDdXaekYA0zQzEl7VCWUUZOK7GoUxfr8EqS6-LgBqlie~6GB4YmQD9PaxNA1yGHuZnF6tMUsd1-tgBZ386IjXu0L2WWWqkN-7XB5gRdjd5aArrPXasKwsnTIipC825VBw1AHMDlta1Y98Ctt~1bPF7SCYAKkS47AkHNYoZBmghaVPbvDXfq2kGg2itxjxO2FOsxM7Jr3bfTEr5y80pkueqJsGTWb6yB-XTT5y7B96VG7XioJD8SEew__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                    alt="img"
                                />
                            </div>
                            <div className="p-4">
                                <a
                                    className="block mt-1 text-lg font-medium text-black hover:text-blue-700"
                                    href="#"
                                >
                                    Lab Tests
                                </a>
                                <p className="mt-2 text-slate-500">Sample pickup at your home</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*doctors details*/}
                <div className="mt-5">
                    <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:h-96 md:w-56">
                        <div className="">
                            <div>
                                <img
                                    className="h-56 w-full object-cover md:h-full md:w-full "
                                    src="https://s3-alpha-sig.figma.com/img/5634/a5bc/4b3407b049bc8585ecae80bba0fe8c09?Expires=1701648000&Signature=SLqZpkB4KWQaac3FuKBOvbtyXOF~pVsqeuvF7~90uAPU1JJjrRMJzEV-Bl~PlGVN433oaaE1QrR3qX9yW52J5Jot4jhcUsSLiMmjXeVABig-A8owcwmcMMogg9CU9ULM48CdIglbo2JD~PzcQ~QYw0ztNW-NJKI4QAmmtkaK7CCpwkkFmDQYNHh3FnEzqWGYIlmi4jdAdBo4OEj5AXXN5HpxbDNq5T5sZFNx38ha0-67wgQsjHh-6kcz1Y0AVRtVzVbLDGzGvVMxCq2Sn19RH77x1Qq1LPsmynAaVJxNnnNy11xhTHta0p10-UUOVA2wujiYdoFQoF~H6pxTTfqEkQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                    alt="img"
                                />
                            </div>
                            <div className="p-4">
                                <a
                                    className="block mt-1 text-lg font-medium text-black hover:text-blue-700"
                                    href="#"
                                >
                                    Surgeries{" "}
                                </a>
                                <p className="mt-2 text-slate-500">
                                    Safe and trusted surgery centers
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white m-14 rounded-3xl">
                {/*index1*/}
                <div className="">
                    <p className="ms-4  text-xl">
                        Consult top doctors online for any health concern
                    </p>
                    <p className="ms-4 text-slate-500">
                        Private online consultations with verified doctors in all specialists
                    </p>
                    <div className="md:flex justify-evenly">
                        {/*index11*/}
                        <div className="mt-5">
                            <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:w-44 ">
                                <div className="text-center">
                                    <div>
                                        <img
                                            className="h-40 w-40 object-cover  md:h-full md:w-44 rounded-full "
                                            src="https://s3-alpha-sig.figma.com/img/0bea/d240/aff5be5e17c4d7b4001460ae2772773d?Expires=1701648000&Signature=o8Ap3CWqgBlXPw8g27ea3WZDvCLXxl8yvh5-UZfpz~Tk6WW8QBMCPC4wNvIkuB4YG0gtirj5NhilvKUoBMpUURGtT2VpIdboLkJG2CxNgJYAL~VivkpDRDdTFwBinROFmutfqQsAC14OchWjj9YOHtH~tWpWYaSVWDbbttOC01hASVQMzr9g5BhSA4tQHDlyQJFK3Pyl12CSwC7U8-2w7jDMnIyf0~FDCjzhKxWu~n2cp0bBgq2iXgP3maQuyh1K69vaazLG-1YuAX1CEcB3aRbAdEM3tztj-dGZkUYAmTfXlzLkrWsqN7hM2bSHzvtEDr5NyJEuqVTlyGaqUqv4RA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                            alt="img"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <p className="mt-2 text-slate-500 text-center text-xs">
                                            Period doubts or Pregnancy
                                        </p>
                                        <a
                                            className="block mt-1 text-sm font-medium text-center text-red-700 hover:text-blue-700"
                                            href="#"
                                        >
                                            CONSULT NOW{" "}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*index12*/}
                        <div className="mt-5">
                            <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:w-44 ">
                                <div className="">
                                    <div>
                                        <img
                                            className="h-40 w-40 object-cover  md:h-full md:w-44 rounded-full "
                                            src="https://s3-alpha-sig.figma.com/img/f3df/4c29/3a85ab735ef0bce66e1fb05dba9b88ea?Expires=1701648000&Signature=Nxxd9OEcuR4t0-M6n360o43h91zHtEFZ9xFFLYmMurHGNW-eGHHY-HXK-VVgcMcX~h-J53jnKMxmeoKKl6isNdY3jX~MCpT59VmwY8MC6AE39LtHIQ5WxuuOuZKaJ42UWgxxFxebmrC15fJfmWsgdWwjAWuY3fcl2i89Yyv8HPi5Bbqsdvz05mb2DHFhV~wsmxXSq8ywJDfeq8uO0bRzcfAPKatehjYOj-TUaTRoNvSrBVd5HzHNZ4hONdIH6MGdqWeJUk9u4Sz1LCRdjRLd2oreQzADtALOyFb1TxB14oli20xYQiJ3yPLSjUJ5KqjJY7PIKoQU8sQK3kshN9EQHQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                            alt="img"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <p className="mt-2 text-slate-500 text-center text-xs">
                                            Acne, pimple or skin issues
                                        </p>
                                        <a
                                            className="block mt-1 text-sm font-medium text-center text-red-700 hover:text-blue-700"
                                            href="#"
                                        >
                                            CONSULT NOW{" "}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*index13*/}
                        <div className="mt-5">
                            <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:w-44 ">
                                <div className="">
                                    <div>
                                        <img
                                            className="h-40 w-40 object-cover  md:h-full md:w-44 rounded-full "
                                            src="/assets/top-speciality-sexology.svg (2).png"
                                            alt="img"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <p className="mt-2 text-slate-500 text-center text-xs">
                                            Performance issues in bed
                                        </p>
                                        <a
                                            className="block mt-1 text-sm font-medium text-center text-black hover:text-blue-700"
                                            href="#"
                                        >
                                            CONSULT NOW{" "}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*index14*/}
                        <div className="mt-5">
                            <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:w-44 ">
                                <div className="">
                                    <div>
                                        <img
                                            className="h-40 w-40 object-cover  md:h-full md:w-44 rounded-full "
                                            src="https://s3-alpha-sig.figma.com/img/fc13/25cf/87b91d25b7f1753adeacf741a5205bab?Expires=1701648000&Signature=AefFRKwdyO45-j~FNXxIPL9zxVZjmn-g~TLGcOuFHl~mtAQ-s~9PukgrZvCA9qbVL2V1vj89-GaMg~BAM~PvVPzgQkIANql-sotBZIJdZydu5ONWeZZRfCk28r4zq5OlSIMM7fZV25CtFdPsD189wPLaI06kj-iFVB5XDAYTQ45JGCuwXAa3~MDz2HADvPHlB7~mEenr5ghcheaLTP5~i8ZMnBPKpZ5rZsTEXpXpmA6iwCmV9xOR6JIuZPCzaaUalN0AvBcqUaN25-4jNHdseK6WavvapCtPVP-fpGOyufy3iIYZEIMGppdIbXjKapAN2gtKOkrY0ov6JAGHcBGBpw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                            alt="img"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <p className="mt-2 text-slate-500 text-center text-xs">
                                            Cold, cough or fever{" "}
                                        </p>
                                        <a
                                            className="block mt-1 text-sm font-medium text-center text-black hover:text-blue-700"
                                            href="#"
                                        >
                                            CONSULT NOW{" "}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*index15*/}
                        <div className="mt-5">
                            <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:w-44 ">
                                <div className="">
                                    <div>
                                        <img
                                            className="h-40 w-40 object-cover  md:h-full md:w-44 rounded-full "
                                            src="/assets/top-speciality-pediatric.svg (1).png"
                                            alt="img"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <p className="mt-2 text-slate-500 text-center text-xs">
                                            Child not feeling well
                                        </p>
                                        <a
                                            className="block mt-1 text-sm font-medium text-center  text-black hover:text-blue-700"
                                            href="#"
                                        >
                                            CONSULT NOW{" "}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*index16*/}
                        <div className="mt-5">
                            <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:w-44 ">
                                <div className="">
                                    <div>
                                        <img
                                            className="h-40 w-40 object-cover  md:h-full md:w-44 rounded-full "
                                            src="https://s3-alpha-sig.figma.com/img/b374/95f9/8d88321045671d93d8a7b5d5a3cb1282?Expires=1701648000&Signature=jXOMkh4KsXhtlELVwbhkbAFHWsgfOz790G9cWHE~1JG7-tJAM47hav2CRR~Mio4I6g5VkU1zXpnAYm97jOx-wjXtxl0KsUgAM6X8lotaDGdL6xlgd-BY~6VURDqQ2Kd90a1VNt5R4-z8U593ockS0H73u7QV4Ra42SFKRN3bZatUTgTNcm4xZk6uBqVRee9MhIslM1y2NduyG7ND7LLNqIvD1lD-h2oRnulySVJ7RbmxiYMRiH3XL0VcGkz1VekfDlCfw7fIXdDCFZNtTv7bpnNGIBCgio6eFr9TbiQJbu3fP6o2YR-KQ3wNGF-uHuTKaGX1bbh67zIdWvUS8B0gFw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                            alt="img"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <p className="mt-2 text-slate-500 text-center text-xs">
                                            Depression or anxiety
                                        </p>
                                        <a
                                            className="block mt-1 text-sm font-medium text-center  text-black hover:text-blue-700"
                                            href="#"
                                        >
                                            CONSULT NOW{" "}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*index2*/}
                <div className="">
                    <p className="ms-4 text-xl">
                        Book an appointment for an in-clinic consultation
                    </p>
                    <p className="ms-4 text-slate-500">
                        Find experienced doctors across all specialties
                    </p>
                    <div className="md:flex justify-evenly">
                        {/*index21*/}
                        <div className="mt-5">
                            <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:w-56 ">
                                <div className="">
                                    <div>
                                        <img
                                            className="h-40 w-40 object-cover  md:h-full md:w-56 rounded-xl "
                                            src="https://s3-alpha-sig.figma.com/img/e16b/1f95/9af287c155074fb2ada4f54dbed6bfb1?Expires=1701648000&Signature=VDpKThs7zzjIvkMmYcNUVXxqNIR1LNSOWwZZJ16an5fNoFT53GSzmDuyo55FOlV2LYU7hg83swpibG6NylI885bN2ECPAnrq7wpzenHjg7lwfP06JQ~Yfqikex~gYwEFzN0D-rIGsulZ6OQMCCIQq2QHygreqfL3b8fkjcDVxv5W7XE0QNzfRumc5jNey8ytSvHHxKVY-yRbSkqTwWTG9Zi0dd2I5dvZasVAYIWAEdy~Gz6yZrFubD2Yp44yiZGx2RQXiJPhsJROeM7Cv1PKr6M4o7GikAEs4cSJ7UPUrdejpSRtDDv9n594osPOlKNQCWUInlXBw6IbQ2T3VtVx9w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                            alt="img"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <a
                                            className="block mt-1 text-sm font-medium text-center text-black hover:text-blue-700"
                                            href="#"
                                        >
                                            Dentist
                                        </a>
                                        <p className="mt-2 text-slate-500  text-xs">
                                            {" "}
                                            Teething troubles? Schedule a dental checkup
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*index22*/}
                        <div className="mt-5">
                            <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:w-56 ">
                                <div className="">
                                    <div>
                                        <img
                                            className="h-40 w-40 object-cover  md:h-full md:w-56 rounded-xl "
                                            src="https://s3-alpha-sig.figma.com/img/7033/f01f/1f5a010e41a671708eeca8153bde8fe0?Expires=1701648000&Signature=dOnVVpztW8w4s0qJwVNgOMXMe4XmEuKS9h3rPBuu8ZuR4aBbzQrGhdRnypKhObcPfKJQWsy1iBlggIOXYjHaoQVEKJUTuo7xB~~6r3zuFhrk0VM5U-L61R0nR2Qw0a18YwRD-NAa2Q-jvetzaHhJhKtuhITthJ4O3EjXjJtAdCicX-3F-KAeHJFsdnpqx9Amd5uFrhYun9z4-q~odiBWnADPB0LlI12eESnTLm0IFqmbHqm9BOfnGqsegrxGWQQC2RXIQmYzNNgMf6~xJ27ATcMJsqPL8luEVgEkY1ajumoLf~XyLxZZP9ITPnwv~AlRqkehFTNoh1GjxQHdbWNnhg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                            alt="img"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <a
                                            className="block mt-1 text-sm font-medium text-center text-black hover:text-blue-700"
                                            href="#"
                                        >
                                            {" "}
                                            Gynecologist/Obstetrician
                                        </a>
                                        <p className="mt-2 text-slate-500  text-xs">
                                            Explore for women’s health, pregnancy and infertility
                                            treatments
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*index23*/}
                        <div className="mt-5">
                            <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:w-56 ">
                                <div className="">
                                    <div>
                                        <img
                                            className="h-40 w-40 object-cover  md:h-full md:w-56 rounded-xl "
                                            src="https://s3-alpha-sig.figma.com/img/4ffa/6496/a5ea96b439d76d15f7fefe3d0c2d7d27?Expires=1701648000&Signature=Z8aT7BNWZXNfeFjCvfQu8d-fzL-v9F1ZKauCsKR4NAF3cu~zLbPj~mt3XFrdtSJx~vmZpAgtp~6LCJZxlhAxl0ZqDV17ASfTe7hJPGtRlWMWE0Wot6G7zvGxVGDuAL915DmU5PaZ66YhoNqXMJtH2IGDDQkGRS~JxywXuwOiaz2-3~17iZj0v2gZ7rUGvWeJ0Fduqje~UplcaUYlfV9y7Cq4c6e1OuoT5oM7VhTUEl3ptZDWrEYyrTEfAl7ITCbhbPoIrrUIPB6vnjSoCSVKLtkpMaJ4NuINr7U3S86cVyVKdd2gYu~t40Ee9JenBlK8FVWuAAdE5mOx4S~Y0RV2Ug__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                            alt="img"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <a
                                            className="block mt-1 text-sm font-medium text-center text-black hover:text-blue-700"
                                            href="#"
                                        >
                                            {" "}
                                            Dietitian/Nutrition{" "}
                                        </a>
                                        <p className="mt-2 text-slate-500  text-xs">
                                            Get guidance on eating right, weight management and sports
                                            nutrition
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*index24*/}
                        <div className="mt-5">
                            <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:w-56 ">
                                <div className="">
                                    <div>
                                        <img
                                            className="h-40 w-40 object-cover  md:h-full md:w-56 rounded-xl "
                                            src="https://s3-alpha-sig.figma.com/img/759f/1c95/ee2fc83fe1b1970bf50be3becb15303a?Expires=1701648000&Signature=BTDsqsXrUOJV~QkXaep78UaACkK32eBfppsgWHvbxVQhsI~k63H2kAfHVwjIjBh1XA35UGRTuzlh2h66q3H30BjXuQmg-yoNPB6-TdNhwyqEgzTsZ6CV0k5bWJWemAdzFv3bVcDlkjfIynZiMON6~oOw6~hPA0iL2VS46RqnFm52RSdGMTB2yzaauR5HkDpavevtXaCC1~rJ1ueRCUsUlX~cHnABEHkzsH90AdgTYCaizwEyjrgIf6jb-dMYG84m5fVi487wqGS8JNccVTV~NjaZoHFj9j333UV~7Wu5wtlPNRZSC0ILilKMXZF5zzngmo6ScJc419x0YPWu0UyDgA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                            alt="img"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <a
                                            className="block mt-1 text-sm font-medium text-center text-black hover:text-blue-700"
                                            href="#"
                                        >
                                            {" "}
                                            Physiotherapist{" "}
                                        </a>
                                        <p className="mt-2 text-slate-500  text-xs">
                                            Pulled a muscle? Get it treated by a trained physiotherapist
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*index3*/}
                <div className="">
                    <div className="md:flex justify-evenly border-t-2 border-slate-400">
                        {/*index31*/}
                        <div className="mt-5">
                            <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:w-56 ">
                                <div className="mt-10">
                                    <div>
                                        <p className="block mt-1 text-sm font-medium  text-black">
                                            Read top articles from health experts
                                        </p>
                                    </div>
                                    <div className="pb-4">
                                        <p className=" text-slate-500  text-xs">
                                            Health articles that keep you informed about good health
                                            practices and achieve your goals.
                                        </p>
                                        <button className="bg-green-600 text-center text-xs text-white font-bold mt-2 rounded-xl  p-2 hover:bg-green-300 hover:text-black dark:bg-red-300">
                                            see all articles
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*index32*/}
                        <div className="mt-5">
                            <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:w-56 ">
                                <div className="">
                                    <div>
                                        <img
                                            className="h-56 w-56 object-cover  md:h-full md:w-56 rounded-xl "
                                            src="https://s3-alpha-sig.figma.com/img/1d8a/d120/818d1193d44405897b2f36713a316282?Expires=1701648000&Signature=ETCjHrCWPwTCfryKZTxd1RBXR-WrLv1~p6gaJ0YrhGmSfps0RPJ6lilEvbvmF1KF80OxKw8XF3fIjjSk6C4UGFQEJznmc79E7Muh10i4Sa8ocu0lhCUoDsHmjSVDr5aopufdzQnBrqJ2l1ie-L9z33WnVGfU0nxdCbvOvDRSfWJ7nkKiDmqxNHzVoDnCJ-yYCsPF6T778v5Mswd-2cwdASSHpPiV7MwCGbrZJGC9G1d5DArUdPZvkOwfuZxRjKfhsURq9uWbrESilnK1biRbYkEXxoMVIMRQN4f1EHrOupye2Hqi2BZGvnvel5AV4Hpxxq2yTQ1jHfOSL~Bbty0POg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                            alt="img"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <a
                                            className="block mt-1 text-sm font-medium  text-black hover:text-blue-700"
                                            href="#"
                                        >
                                            Coronavirus{" "}
                                        </a>
                                        <p className="mt-2  text-xs">
                                            12 Coronavirus Myths and Facts That You Should Be Aware Of
                                        </p>
                                        <p className="text-slate-500">Dr. Diana Borgio</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*index33*/}
                        <div className="mt-5">
                            <div className="max-w-sm mx-auto bg-white rounded-xl overflow-hidden md:w-56 ">
                                <div className="">
                                    <div>
                                        <img
                                            className="h-56 w-56 object-cover  md:h-full md:w-56 rounded-xl "
                                            src="https://s3-alpha-sig.figma.com/img/5dbd/2d48/bf94e0072f1da07c6d1f6c685fcbf86a?Expires=1701648000&Signature=K8d6g11~piJnmITXXZ~43p-ZLGCNLXBAkoE7LgDF6PhZLog-Xopn701Xb4Jx5qsTFf-oy78~-H-TX2Qi80W1IZBVsK4By0SYeg8ZE-Qd-wWrKdyB~Huh2AmuFwSg~EG~nfPa3ybIGE97iL2Rz9nTJKfrAz5~dqNQXC1a3wfWTJFtEZyOz8f4nd~rL48lumuzdEHnwdOEQhob~nQnqQxq08KOwRER-oZ0uyP3rL7QJvlCBcL6kGjfGyV-jggW8cStDB9kLsHH5scPOnZyQmXGWikD0fIQgIVl9i7PYmNb-2iYEk9QsTsk9IJFrfmMQU3tsbxBFNKSaC25n2sgBphC3w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                            alt="img"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <a
                                            className="block mt-1 text-sm font-medium  text-black hover:text-blue-700"
                                            href="#"
                                        >
                                            Vitamins and Supplements{" "}
                                        </a>
                                        <p className="mt-2  text-xs">
                                            Eating Right to Build Immunity Against Cold and Viral
                                            Infections
                                        </p>
                                        <p className="text-slate-500">Dr. Diana Borgio</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Index 4 */}


            </div>
            <div className="visible">
                <img src="/assets/index 4.png" alt="" className=' mx-auto' />
            </div>
            {/* <div className="flex flex-row h-36 bg-orange-300 ">
                <div className=" w-1/4 ml-10 overflow-visible -translate-y-25">
                    <img src="https://s3-alpha-sig.figma.com/img/f6da/a524/496b10ff4ad945938eb1df0ac4f66830?Expires=1701648000&Signature=AEobzKfss00gc2~rjKCaH7WzXgNKCsRAx1h6klQ0qP0YsgN5by8tUSQr4pgFdfp7Qdj37SVyi-S3alCq7uvhHyXzAWKJxB1Mp3kpX8Syh20ppDZDUwFV7qfyaPY8ll7t5Y8qvBnV0Q1EDPDypUCiD2fmqcebY65W1DWGq2uX3C0hEX0N0tH97zVkqaLUASEw0TtHHyb7OuvaQQuGDgYOo-vJtv0YxGlB9DISAl62iPdZNCbHy~kQYtQIn~RAevB6BbUlQ~5rZlm4b9pYBtSgH0Lfx8yZYJb4B1Mb692HcOTz0GZ3IJKVDpKCSXVACvPbCYa1UIG6-FEZVv-KwJE9ew__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" className="" width={200} />

                </div>
                <div className="">
                    <h4 className=" text-lg font-bold ">Are you a doctor?</h4>
                    <p className="">
                        Doctors who claim their free DocIndia profile connect 2X more with upright patients.
                        Your future patients are ready to connect. Make sure your profile stands out. Learn more about how to claim your free . DocIndia profile and our available upgrades.
                    </p>
                </div>
            </div> */}
        </div>

    )
}

export default HomePage