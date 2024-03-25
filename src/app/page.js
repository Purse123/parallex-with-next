import ImageData from "@/components/ImageData";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-32 flex flex-col w-full items-start justify-center">
      <h1 className=" font-extrabold text-7xl self-center drop-shadow-[0_35px_35px_rgba(255,255,255,0.25)]">Parallex</h1>
      <p className=" self-center pl-56 text-gray-300 font-bold">~purse</p> 
      <ImageData />
    </main>
  );
}
