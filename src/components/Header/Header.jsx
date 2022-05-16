import './Header.scss'
import { useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  const headerRef = useRef(null)

  useEffect(() => {
    const fixHeader = () => {
      if (window.pageYOffset > 100) {
        headerRef.current.classList.add('fixed')
      } else {
        headerRef.current.classList.remove('fixed')
      }
    }
    window.addEventListener('scroll', fixHeader)
    return () => {
      window.removeEventListener('scroll', fixHeader)
    }
  }, [])

  return (
    <div ref={headerRef} className='header'>
      <div className='header__row container '>
        <div className='header__logo'>
          <Link to='/'>React-Movie</Link>
        </div>
        <nav className='header__menu menu-header'>
          <ul className='menu-header__list'>
            <li className='menu-header__item'>
              <NavLink className='menu-header__link' to='/'>
                Home
              </NavLink>
            </li>
            <li className='menu-header__item'>
              <NavLink className='menu-header__link' to='/movie'>
                Movies
              </NavLink>
            </li>
            <li className='menu-header__item'>
              <NavLink className='menu-header__link' to='/tv'>
                TV Series
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header
