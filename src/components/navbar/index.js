import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavBarElements'

const Navbar = () => {
  return (
    <>
        <Nav>
            <NavBarContainer>
                <NavLogo to='/'>
                    Screen Time Calculator
                </NavLogo>

                <MobileIcon>
                  <FaBars />

                </MobileIcon>

                <NavMenu>
                  <NavItem>
                      <NavLinks to='howitworks'>
                      How it Works
                      </NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks to='getstarted'>
                      Get Started
                      </NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks to='signup'>
                      Sign Up
                      </NavLinks>
                  </NavItem>
                </NavMenu>
                <NavBtn>
                  <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </NavBarContainer>

        </Nav>
    </>
  )
}

export default Navbar