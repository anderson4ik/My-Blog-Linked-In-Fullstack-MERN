import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
       <nav>
           <ul>
               <li>
                   <Link to="/"  className='navbar-anchor'>Home</Link>
               </li>
               <li>
                   <Link to="/about" className='navbar-anchor'>About</Link>
               </li>
               <li>
                   <Link to="/articles-list" className='navbar-anchor'>Articles</Link>
               </li>
           </ul>
       </nav>
    );

}

export default NavBar;