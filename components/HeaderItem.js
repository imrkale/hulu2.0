import React from 'react'

function HeaderItem({Icon,title}) {
    return (
        <div className="flex flex-col cursor-pointer w-12 sm:w-20  items-center group hover:text-white">
            <Icon className="h-8 mb-1 group-hover:animate-bounce"/>
            <p className="tracking-widest transition-opacity duration-400 ease-in-out opacity-0 group-hover:opacity-100">{title}</p>
        </div>
    )
}

export default HeaderItem
  