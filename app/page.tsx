import Image from "next/image";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Navbar/>
       <header className="bg-[url('./public/background.jpg')] bg-cover bg-center h-[800px] text-white">
        <div className="flex flex-col justify-center items-center h-full">
          <h2 className="text-9xl"> React List</h2>
          <p className=" text-3xl mt-4">The library for web and native user interfaces.</p>
          <p className="text-2xl">Collection of mini react.js projects</p>
        </div>

       </header>

      </main>
       
    </div>
  );
}
