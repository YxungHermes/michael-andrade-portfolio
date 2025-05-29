import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 2rem 0;
  background: ${props => props.scrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  transition: var(--transition);
`

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled(Link)`
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  
  span {
    color: var(--color-accent);
  }
`

const NavLinks = styled.div`
  display: flex;
  gap: 3rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`

const NavLink = styled(Link)`
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${props => props.active ? '100%' : '0'};
    height: 2px;
    background: var(--color-accent);
    transition: var(--transition);
  }
  
  &:hover::after {
    width: 100%;
  }
`

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--color-text);
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: var(--color-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  z-index: 999;
`

function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' }
  ]

  return (
    <>
      <Nav scrolled={scrolled}>
        <div className="container">
          <NavContainer>
            <Logo to="/">
              MICHAEL ANDRADE <span>×</span> VOID
            </Logo>
            
            <NavLinks>
              {navItems.map(item => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  active={location.pathname === item.path}
                >
                  {item.label}
                </NavLink>
              ))}
            </NavLinks>
            
            <MenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? '✕' : '☰'}
            </MenuButton>
          </NavContainer>
        </div>
      </Nav>
      
      {mobileMenuOpen && (
        <MobileMenu
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween' }}
        >
          {navItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              active={location.pathname === item.path}
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontSize: '1.5rem' }}
            >
              {item.label}
            </NavLink>
          ))}
        </MobileMenu>
      )}
    </>
  )
}

export default Navigation