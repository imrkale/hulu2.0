import React from 'react'
import requests from '../utils/requests'
import {useRouter} from 'next/router'

function Nav() {
    const router=useRouter();
    return (
        <nav className="relative ">
            <div  className="flex px-10 space-x-10 overflow-x-scroll sm:space-x-20 sm:px-20 text-2xl whitespace-nowrap scrollbar-hide">
            {
                Object.entries(requests).map(([key,{title,url}])=>(
                    <h2 key={key} onClick={()=>router.push(`/?genre=${key}`)} className="cursor-pointer last:pr-24 transform transition duration-200 hover:scale-110 hover:text-white active:text-red-500">{title}</h2>
                ))
            } 
        </div>
        <div className="absolute top-0 left-0 bg-gradient-to-r from-[#06202A] h-10 w-1/12"/>
        <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12"/>
        </nav>
        
    )
}

export default Nav
