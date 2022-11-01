import React from 'react'
import {Link} from 'react-router-dom';
import './Navbar.scss'
import logo from '../../img/logo.png'
function Navbar() {
  return (
    <>
        <nav>
          <Link to='/home'  ><img src={logo} alt=""/></Link>
        <ul className='nav__list'>
          <li className='nav__item'>
            <i className="bi bi-house-fill"></i>
            <Link to='/home'>Home</Link>
          </li>
          <li className='nav__item'>
            <i class="bi bi-hash"></i>
            <Link to='/explore'>Explore</Link>
          </li>
          <li className='nav__item'>
            <i class="bi bi-bell"></i>
            <Link to='/notifications'>Notifications</Link>
          </li>
          <li className='nav__item'>
            <i class="bi bi-envelope"></i>
            <Link to='/messages'>Messages</Link>
          </li>
          <li className='nav__item'>
            <i class="bi bi-bookmark"></i>
            <Link to='/bookmarks'>Bookmarks</Link>
          </li>
          <li className='nav__item'>
            <i class="bi bi-card-list"></i>
            <Link to='/lists'>Lists</Link>
          </li>
          <li className='nav__item'>
            <i class="bi bi-person"></i>
            <Link to='/profile'>Profile</Link>
          </li>
          <li className='nav__item'>
            <i class="bi bi-three-dots"></i>More
          </li>
        </ul>
        <button className='btn btn-primary'>Tweet </button>
      </nav>
    </>
  )
}

export default Navbar;