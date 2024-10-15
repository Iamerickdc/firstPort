import React, { useState, useEffect } from 'react'
import Images from '../assets/Images'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  
  

  return (
    <div>

<section className="relative bg-gray-50 text-gray-800 min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
  <div className="container mx-auto max-w-7xl">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <div className="h-1 w-20 bg-indigo-600 rounded"></div>
        <h4 className="font-sans text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
          Introducing
        </h4>
        <h2 className="font-serif text-3xl sm:text-4xl font-medium text-indigo-600 leading-tight">
          Hello, I am Erick Osayande
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          With over 3 years of experience in video animation and editing, graphic design, web development and design,
          I have perfected skills in WordPress Web designing, HTML, CSS, Javascript, React and Canva Design.
          My expertise and passion for creating visually stunning and
          user-friendly websites make me the perfect choice for your next project.
        </p>
        <div className="pt-4">
          <Link to="cont" className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out">
            Get in Touch
          </Link>
        </div>

      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-indigo-100 transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <img 
          className="relative rounded-3xl shadow-2xl object-cover object-center w-full h-full max-h-96 md:max-h-full hover:shadow-2xl hover:-translate-y-2" 
          alt="Erick Osayande" 
          src={Images.image2} 
        />
      </div>
    </div>
  </div>
</section>



    </div>
  )
}

export default HeroSection