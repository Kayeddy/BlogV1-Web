import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../services'
import MobileNavbar from './Navigation/MobileNavbar'

const Header = () => {
    
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then(receivedCategories => setCategories(receivedCategories));
    }, []);

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
                {
                    categories.map((category) => (
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            <span className=' mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                                {
                                    category.name
                                }
                            </span>
                        </Link>
                    ))
                }
            </div>
        </div>

    </div>
  )
}

export default Header