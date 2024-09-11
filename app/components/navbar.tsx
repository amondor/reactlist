import React from 'react'
import { BiSolidChevronRightCircle } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { GiThreePointedShuriken } from "react-icons/gi"; 
export default function navbar() {
  return (
    <div className='z-[9999] pt-[0.6em] pl-[0.6em] pr-[0.6em] fixed inset-x-0 top-0'>
  <div className="bg-white rounded-lg p-7 flex flex-col md:flex-row justify-between items-center relative">

    {/* Section droite : Liens des réseaux sociaux */}
    <div className="flex space-x-4 text-2xl md:mt-0 mt-10">
      <a href="#" className="text-gray-700 hover:text-lightgreen">
        <FaGithub />
      </a>
      <a href="#" className="text-gray-700 hover:text-lightgreen">
        <FaTwitter />
      </a>
    </div>

    {/* Section milieu : "RCTLST" */}
    <div className="absolute left-1/2 transform -translate-x-1/2">
      <h1 className="text-xl md:text-2xl font-bold">RCTLST</h1>
    </div>

    {/* Section gauche : "Available Now" + Bouton vert */}
    <div className="flex items-center space-x-4 mb-4 md:mb-0 mt-7 md:mt-0">
      <span className="flex items-center text-gray-700 text-sm md:text-base">
        <GiThreePointedShuriken className='text-green-400 text-2xl mr-2' /> Available now
      </span>
      <button className="flex items-center bg-darkgreen text-white px-4 py-2 font-bold rounded-lg text-sm md:text-base hover:bg-green-800">
        Reach out
        <BiSolidChevronRightCircle className='text-lightgreen mx-2 text-2xl' />
      </button>
    </div>
  </div>
</div>
  )
}
