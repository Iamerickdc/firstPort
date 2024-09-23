import React from 'react'
import Images from '../assets/Images'

const Services = () => {
    return (
        <div>
               <section class="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">My Services</h1>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto">Experience, Skills, and Tools for Web Design Excellence</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                    <img alt="HTML/CSS" class="w-full h-48 object-cover object-center" src={Images.htmlcss} />
                    <div class="p-6">
                        <h2 class="text-2xl font-semibold text-gray-800 mb-2">HTML/CSS</h2>
                        <div class="flex items-center mb-4">
                            <div class="w-full bg-gray-200 rounded-full h-2.5">
                                <div class="bg-blue-600 h-2.5 rounded-full" style={{ width: '99%' }}></div>
                            </div>
                            <span class="text-sm font-medium text-gray-500 ml-2">99%</span>
                        </div>
                        <p class="text-gray-600">With expertise in HTML and CSS, I create beautiful and interactive designs for websites and applications.</p>
                    </div>
                </div>
                
                <div class="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                    <img alt="JavaScript" class="w-full h-48 object-cover object-center" src={Images.javascript} />
                    <div class="p-6">
                        <h2 class="text-2xl font-semibold text-gray-800 mb-2">JavaScript</h2>
                        <div class="flex items-center mb-4">
                            <div class="w-full bg-gray-200 rounded-full h-2.5">
                                <div class="bg-yellow-400 h-2.5 rounded-full" style={{ width: '87%' }}></div>
                            </div>
                            <span class="text-sm font-medium text-gray-500 ml-2">87%</span>
                        </div>
                        <p class="text-gray-600">Creating functional and responsive webpages with Javascript.</p>
                    </div>
                </div>
                
                <div class="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                    <img alt="React" class="w-full h-48 object-cover object-center" src={Images.reactlogo} />
                    <div class="p-6">
                        <h2 class="text-2xl font-semibold text-gray-800 mb-2">React</h2>
                        <div class="flex items-center mb-4">
                            <div class="w-full bg-gray-200 rounded-full h-2.5">
                                <div class="bg-cyan-400 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                            </div>
                            <span class="text-sm font-medium text-gray-500 ml-2">70%</span>
                        </div>
                        <p class="text-gray-600">Using React, I can build single-page and multi-page interfaces for web, mobile, and desktop applications.</p>
                    </div>
                </div>
                
                <div class="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                    <img alt="WordPress" class="w-full h-48 object-cover object-center" src={Images.wordpress} />
                    <div class="p-6">
                        <h2 class="text-2xl font-semibold text-gray-800 mb-2">WordPress</h2>
                        <div class="flex items-center mb-4">
                            <div class="w-full bg-gray-200 rounded-full h-2.5">
                                <div class="bg-indigo-500 h-2.5 rounded-full" style={{ width: '64%' }}></div>
                            </div>
                            <span class="text-sm font-medium text-gray-500 ml-2">64%</span>
                        </div>
                        <p class="text-gray-600">I specialize in creating visually stunning and user-friendly websites using WordPress.</p>
                    </div>
                </div>
            </div>
        </div>
    </section> 
        </div>
    )
}

export default Services