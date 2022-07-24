import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import MobileNavbar from './Navigation/MobileNavbar'

const Header = () => {

  return (
    <div className='mx-auto fixed top-0 left-0 right-0 bottom-0 z-10 h-fit'>

        <div className='flex py-8 w-full bg-slate-900 backdrop-blur px-10'>
            <div className='flex justify-between w-full gap-10 '>
                <Link href="/">
                    <span className='cursor-pointer font-bold text-4xl text-white'>
                        Kaylog
                    </span>
                </Link>
                <MobileNavbar />
            </div>

            <div className='hidden md:float-right md:contents'>
                
            </div>
        </div>

    </div>
  )
}

export default Header