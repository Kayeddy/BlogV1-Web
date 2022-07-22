import React , { useState } from 'react'
import * as HiIcons from 'react-icons/hi';
import './Navbar.module.scss'
import { motion } from 'framer-motion';

const MobileNavbar = () => {
  
  const [toggle, setToggle] = useState(false);

  return (
    <nav className= 'my-auto'>
         <div className="app__navbar-menu sm:contents lg:hidden md:hidden text-white ml-5">
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

                  <ul>

                    {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map((item) =>
                    (
                      <li key= {item}>
                          <a href={`#${item}`} onClick={() => setToggle(false)}> {item} </a>  
                      </li>
                    ))}

                  </ul>
                </motion.div>
              )
            }
        </div>
    </nav>
  )
}

export default MobileNavbar