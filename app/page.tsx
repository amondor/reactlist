import Navbar from "./components/navbar";
import ProjectGrid from "./components/projectGrid";
import { FaStar } from "react-icons/fa";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Navbar/>
       <header className="bg-[url('./images/background.jpg')] bg-cover bg-center h-[900px] text-white">
        <div className="flex flex-col justify-center items-center h-full">
          <a href="https://www.andrewmondor.fr/" className="bg-[#ffffff0d] hover:bg-[#ffffff26] font-semibold border rounded-lg px-8 py-2 my-8">  https://andrewmondor.fr</a>
          <h2 className="md:text-9xl  text-5xl font-bold"> React List. </h2>
          <p className="  text-lg md:text-xl mt-6 text-[#ffffffb3] text-center">The library for web and native user interfaces.</p>
          <p className="text-lg md:text-xl text-[#ffffffb3] mt-2">Collection of mini react.js projects</p>
          
          <a href="https://www.andrewmondor.fr/" className="bg-white text-darkgreen mt-12 text-lg  rounded-2xl py-3 px-8 ">Visit My portfolio </a>
          <span className=" flex items-center text-lightgreen text-xl mt-6">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <h3 className="ml-4 text-[#ffffffb3]"> By Superdrew </h3>
          </span>
        </div>

       </header>
       <div className="mx-auto w-3/4 text-center space-y-5 mt-20 mb-20">
       <h2 className="text-4xl md:text-6xl font-bold text-darkgreen"> Basic React Projects</h2>
       <p className="text-lg   md:w-2/4 mx-auto">Explore my services, from creating stunning web designs to developing robust React.js projects, to deliver an exceptional online presence.</p>
       </div>
       <ProjectGrid/>

      </main>
       
    </div>
  );
}
