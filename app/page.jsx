import Image from "next/image"
import Link from "next/link"


export default function page() {
  return (
      <form className="font-ft font-bold shadow-md bg-gra-500 p-10 md:h-1/2 md:w-1/2 absolute w-5/6 h-1/2 bg-white space-y-6 select-none">
        <h1 className=" text-3xl select-none">La Plume</h1>
        <hr className="bg-green-200 h-1 select-none"/>
        <div className="flex flex-col justify-center h-1/2" >
          <Link href='/Etudiant' className="select-none m-3 cursor-pointer border border-gray-900 p-5 hover:bg-black hover:text-white"><p className="select-none">Etudiant</p></Link>
          <Link href='/professeur' className="select-none m-3 cursor-pointer border border-gray-900 p-5 hover:bg-black hover:text-white">Professeur</Link>
        </div>
        
      </form >
  )
}
