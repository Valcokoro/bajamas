import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
   return (
       <nav className="navbar">
           <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'}
               onClick = {() => setIsMobile(false)}
           >
               <Link to='/' className='page1'>
                   <li className='one'>1</li>
               </Link>
               <Link to='/page2' className='page2'>
                   <li className='two'>2</li>
               </Link>
               <Link to='/page3' className='page3'>
                   <li className='three'>3</li>
               </Link>
               
           </ul>
           <button className='phone-menu-icon'
              onClick={ () => setIsMobile(!isMobile)} >
               {isMobile ? (
               <i className="times icon"></i> 
               )
               : (<i className="bars icon"></i>)}
           </button>
       </nav>
   )
}


export default Navbar;