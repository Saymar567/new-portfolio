import { CloudArrowUpIcon, CogIcon, ServerIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import "../styles/aboutme.css"


function Aboutme() {
    const [transform, setTransform] = useState("/images/mikel1.jpg");

    const changePhoto = () => {
        setTransform(prevPhoto => prevPhoto === "/images/mikel1.jpg" ? "/images/mikel2.jpg" : "/images/mikel1.jpg")
    }


    return (

        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                            width={200}
                            height={200}
                            x="50%"
                            y={-1}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                </svg>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <p className="text-base font-semibold leading-7 text-indigo-600">Saymar WD</p>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About me</h1>
                            <p className="mt-6 text-xl leading-8 text-gray-700">
                                Hi! My name is Mikel. I'm a web developer. Well, and also historian. And a joker (but not a smoker). But, above all, a web developer. I was working in the public administration and decided to change my career. I made a huge step towards the tech field and came to Barcelona to do a course in web development. And why Saymar? Because that was the acronym of one of my parents' videoclub: Sagrario (mum's name) y (and in spanish) Miguel Ángel (dad's name) repetido (I'm the repeated one)
                            </p>
                            <p>

                            </p>
                        </div>
                    </div>
                </div>
                <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img
                        className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                        src="/images/Aboutme.png"
                        alt=""
                    />
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                            <p>
                                I do have a lot of skills, but when talking about web development skills, I have studied front-end and back-end. These are some of the tools I have used and studied:
                            </p>
                            <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                <li className="flex gap-x-3">
                                    <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">Frontend</strong> HTML, CSS, Tailwind, Javascript, React
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <CogIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">Frameworks</strong> Express, Node.js
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">Backend</strong> MongoDB, Mongoose, Supabase, SQL
                                    </span>
                                </li>
                            </ul>
                            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Only development skills? Of course not</h2>
                            <p className="mt-6">
                                I have experience in many fields. I would say, as my main goals, that I have been working as a researcher in the University of Basque Country (EHU) and as a manager of a train control station. But I have, as well, experience working directly with the client and leading teams.
                            </p>
                            <h3 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Look behind you! A three headed monkey! </h3>
                            <p className="mt-6">
                                <img src={transform} alt="to-monkey-island" className='vintage-image' style={{ width: "15vw", height: "30vh" }} />
                                <button onClick={changePhoto} className='vintage-button' style={{ display: "block", margin: "0 auto" }}>Transform me</button>

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutme