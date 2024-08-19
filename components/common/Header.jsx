"use client";

import React, { useState } from 'react';
import "../common.css";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
  MDBNavbarLink,
} from 'mdb-react-ui-kit';
import Link from 'next/link';
import SideNav from './SideNav.jsx';

export default function Header({children}) {
  const [openNavColor, setOpenNavColor] = useState(false);

  return (
    <>
      <MDBNavbar expand='lg' dark bgColor='primary'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>TravelEase</MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setOpenNavColor(!openNavColor)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse open={openNavColor} navbar>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem className='active'>
                <Link href="/" passHref legacyBehavior>
                  <MDBNavbarLink className='Navbarlink'>Home</MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Features</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link href="/about" passHref legacyBehavior>
                  <MDBNavbarLink className='Navbarlink'>About us</MDBNavbarLink>
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>About</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 p-0"><SideNav /></div>
          <div className="col-md-9 content-container">{children}</div>
        </div>
      </div>
    </>
  );
}
