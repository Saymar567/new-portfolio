import { CloudArrowUpIcon, CogIcon, ServerIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import "../styles/aboutme.css"
import { Center } from '@react-three/drei';


function Aboutme() {
    const [transform, setTransform] = useState("/images/mikel1.png");

    const changePhoto = () => {
        setTransform(prevPhoto => prevPhoto === "/images/mikel1.png" ? "/images/mikel2.jpg" : "/images/mikel1.png")
    }


    return (

        <>
            <div id="about" class="relative bg-white overflow-hidden mt-16">
                <div class="max-w-7xl mx-auto">
                    <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                        <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                            fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                            <polygon points="50,0 100,0 50,100 0,100"></polygon>
                        </svg>

                        <div class="pt-1"></div>

                        <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div class="sm:text-center lg:text-left">
                                <h2 class="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                                    About me
                                </h2>

                                <p>
                                    Hi! My name is Miguel Ángel, but everyone calls me Mikel. I'm a software developer. Well, and also historian. And a joker (but not a smoker). But, above all, a web developer.
                                    </p>
                                    <br></br>
                                    <p>
                                        I was working in the public administration and decided to change my career.
                                        I made a huge step towards the tech field and came to Barcelona to do a course in web development, learning the fundamentals of HTML and CSS, as well as Javascript and React as library to create responsive web apps.
                                        Also, I'm studying now a course in Java, using Spring as framework, to build strong and secured backend applications. I will finish the course in january.
                                        Besides, I have a strong background in office work and team leadership, as outlined in my CV.
                                        Moreover, I believe I possess very good soft skills dealing with people, bringing a good environmente in work and building good relationships with potential clients.
                                    </p>
                                    <br></br>
                                    <p>
                                        And what about me? Well, I used to play basketball for many years, so I love to watch basket matches. I like to play adventure videogames and my favorite one is <i>The Secret of Monkey Island</i> -will you transform me into one of that game's characters, please?.
                                        As I have said earlier, I'm a historian and a traveller. You can guess what kind of trips I like, right?
                                        And last, but not least, I'm from Bilbao, the capital of the world. And, of course, I'm a huge fan of Athletic Club de Bilbao.
                                        Hope you enjoy my portfolio!
                                    </p>
                            </div>
                            <p className="mt-12 text-1xl font-bold tracking-tight text-gray-900" style={{display: "flex", justifyContent: "center"}}>Look behind you! A three headed monkey! </p>
                            <p className="mt-6">
                                <img src={transform} alt="to-monkey-island" className='vintage-image' style={{ height: "30vh" }} />
                                <button onClick={changePhoto} className='vintage-button' style={{ display: "block", margin: "10px auto" }}>Transform me into a Monkey Island character</button>

                            </p>
                        </main>
                    </div>
                </div>
                <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img class="h-56 w-full object-contain object-top sm:h-72 md:h-96 lg:w-full lg:h-full"  src="/images/Me.jpg" alt="Mikel" />
                </div>
            </div>

        </>
    )
}

export default Aboutme