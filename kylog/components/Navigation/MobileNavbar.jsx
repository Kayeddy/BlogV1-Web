import React , { useState, useEffect } from 'react'
import * as HiIcons from 'react-icons/hi';
import './Navbar.module.scss'
import { getCategories } from '../../services'
import Link from 'next/link'
import { motion } from 'framer-motion';

const MobileNavbar = () => {
  
  const [toggle, setToggle] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
     getCategories().then(receivedCategories => setCategories(receivedCategories));
  }, []);

  return (
    <nav className= 'my-auto'>
         <div className="app__navbar-menu sm:contents lg:hidden md:hidden text-white ml-2">
            <HiIcons.HiOutlineMenuAlt2 onClick={() => setToggle(true) } className= { `app__navbar-icon float-right ${toggle? 'hidden': ''}` } />

            {
              toggle && (
                <motion.div 
                  whileInView={{ x: [-200, -30] }}
                  initial= {{ x: "50%", y: "1%", opacity: 0, scale: 0.5 }}
                  animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  >
                  
                  <HiIcons.HiX onClick={ () => setToggle(false) } className='app__navbar-icon'/>

                  <div className='flex-col p-2 justify-center align-center'>
                    {
                      categories.map((category) => (
                          <Link key={category.slug} href={`/category/${category.slug}`}>
                              <span className=' block mt-2 text-white font-normal cursor-pointer'>
                                  {
                                      category.name
                                  }
                              </span>
                          </Link>
                      ))
                    }
                  </div>
                </motion.div>
              )
            }
        </div>
    </nav>
  )
}

export default MobileNavbar