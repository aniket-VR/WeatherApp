import React from 'react'
import { CiSearch } from "react-icons/ci";
export default function Header() {
  return (
    <header className='border-b-2 border-gray-200 border-[1px]'>
     <div className='flex px-2 py-2 md:px-6 md:py-3 text-[20px] flex-row items-center justify-between'>
        <div className='flex  flex-row'>
            <span>logo</span>
            <span className='flex ml-2 rounded-full py-[2px] border-[1px] border-black flex-row items-center'><CiSearch className=' ml-2 h-[20px] w-[20px]'/>
             <input  className='w-[30vw] mr-4 ml-2'/>
             </span>
        </div>
        <div className='flex flex-row'>
            <span>DarkMode</span>
        </div>
     </div>


    </header>
  )
}
