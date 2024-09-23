import React from 'react'
import Images from '../assets/Images'

const Skills = () => {
  return (
    <div>
    <div>
    <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap w-full mb-20">
                <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                    <p class="text-indigo-500 text-sm font-semibold tracking-widest mb-2">SERVICES</p>
                    <h1 class="sm:text-5xl text-3xl font-bold text-gray-900 mb-4">Skill-Set</h1>
                    <div class="h-1 w-20 bg-indigo-500 rounded"></div>
                </div>
                <p class="lg:w-1/2 w-full leading-relaxed text-gray-600 text-lg">
                    With over 3 years of experience in video animation and editing, graphic design, web development and design,
                    I have perfected skills in WordPress Web designing, HTML, CSS, Javascript, React and Canva Design.
                    My expertise and passion for creating visually stunning and
                    user-friendly websites make me the perfect choice for your next project.
                </p>
            </div>
            <div class="flex flex-wrap -m-4">
                <div class="xl:w-1/4 md:w-1/2 p-4">
                    <div class="bg-white p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
                        <img class="h-48 rounded w-full object-cover object-center mb-6" src={Images.webp} alt="Web Development" />
                        <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">WEB DESIGN AND DEVELOPMENT</h3>
                        <h2 class="text-xl text-gray-900 font-semibold title-font mb-4">Front-End Developer</h2>
                        <p class="leading-relaxed text-base">With expertise in HTML, CSS, JavaScript and React,
                            I create beautiful, interactive and functional designs for websites and applications.</p>
                    </div>
                </div>


                <div class="xl:w-1/4 md:w-1/2 p-4">
                    <div class="bg-white p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
                        <img class="h-48 rounded w-full object-cover object-center mb-6" src={Images.vided} alt="Graphic Design" />
                        <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">GRAPHIC DESIGN AND VIDEO EDITING</h3>
                        <h2 class="text-xl text-gray-900 font-semibold title-font mb-4">Editor</h2>
                        <p class="leading-relaxed text-base">
                            A passionate graphic designer and video editor with a keen eye for detail and a love
                            for storytelling. I combine creativity with technical skills to bring ideas to life.
                        </p>
                    </div>
                </div>
                <div class="xl:w-1/4 md:w-1/2 p-4">
                    <div class="bg-white p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
                        <img class="h-48 rounded w-full object-cover object-center mb-6" src={Images.back} alt="Backend Development" />
                        <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">BACKEND DEVELOPER</h3>
                        <h2 class="text-xl text-gray-900 font-semibold title-font mb-4">Beginner</h2>
                        <p class="leading-relaxed text-base">I am a backend developer with a foundational understanding of server-side technologies 
                        and a passion for building robust and scalable applications.</p>
                    </div>
                </div>
                <div class="xl:w-1/4 md:w-1/2 p-4">
                    <div class="bg-white p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
                        <img class="h-48 rounded w-full object-cover object-center mb-6" src={Images.back} alt="Software Engineering" />
                        <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SOFTWARE ENGINEERING</h3>
                        <h2 class="text-xl text-gray-900 font-semibold title-font mb-4">Aspiring Software Engineer</h2>
                        <p class="leading-relaxed text-base">As an aspiring software engineer, I am passionate about coding
                            and problem-solving. My journey is fueled by a strong desire to build innovative solutions.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    </div>
  )
}

export default Skills