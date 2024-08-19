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
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBInputGroup
} from 'mdb-react-ui-kit';
import Link from 'next/link';
import SideNav from './SideNav.jsx';

export default function Header({children}) {
  const [openNavColor, setOpenNavColor] = useState(false);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
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
                <Link href="/" className='navText'>
                  Home
                </Link>
              </MDBNavbarItem>
             
            </MDBNavbarNav>

         

          </MDBCollapse>
          <div className="d-flex w-auto mb-3">
          
                <Link href="/" className='navText'>
                 Signin
                </Link>
              
          </div>

        </MDBContainer>
      </MDBNavbar>

        </div>
      </div>
      
    
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3"><SideNav></SideNav></div>
        <div className="col-md-3">{children}</div>
      </div>
    </div>   
    </>
  );
}
