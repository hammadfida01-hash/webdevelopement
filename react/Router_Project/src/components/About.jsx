import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="./myimage.jpeg"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          Full Stack Developer
                      </h2>
                      <p className="mt-6 text-gray-600">
                          I am a Full Stack Developer with experience in building modern and responsive web applications. I work on both frontend and backend development to create complete and functional websites.!
                      </p>
                      <p className="mt-4 text-gray-600">
                          On the frontend side, I have skills in HTML, CSS, JavaScript, and Tailwind CSS, which I use to design clean, responsive, and user-friendly interfaces. On the backend side, I work with Django and MySQL to build secure server-side logic and manage databases efficiently
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}