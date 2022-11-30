import Image from 'next/image';
import Link from 'next/link'
import React from 'react';
import { useRouter } from 'next/router';

import {useState,useEffect} from "react";






const Sidebar = () => {

  useEffect(()=>{

  },[])




 

  return (
    <>
       <aside className="sidebar-nav-wrapper">
      
      <div className="navbar-logo">
        <Link href="/"> 
        <a>
       <Image src='/images/falcontech-logo.png' alt="logo" width={50} height={50} />

          </a>
        </Link>
      </div>

      <nav className="sidebar-nav">
        <ul>





        <li className="nav-item">
        <Link href="/">
            <a>
              <span className="icon">
            <i className="fas fa-wallet"></i>
              </span>
              <span className="text">Dashboard</span>
            </a>
            </Link>
          </li>
          



       
          
        
 
  
        



<li className="nav-item">
        <Link href="/banner">

            <a>
              <span className="icon">
            <i className="fas fa-image"></i>
              </span>
              <span className="text">Banner</span>
            </a>
            </Link>
          </li>




<li className="nav-item">
        <Link href="/blog">

            <a>
              <span className="icon">
            <i className="fa fa-copy"></i>
              </span>
              <span className="text">Blog</span>
            </a>
            </Link>
          </li>



          <li className="nav-item">
        <Link href="/portfolio">

            <a>
              <span className="icon">
            <i className="fas fa-copy"></i>
              </span>
              <span className="text">Portfolio</span>
            </a>
            </Link>
          </li>




          <li className="nav-item">
        <Link href="/subscriber">

            <a>
              <span className="icon">
            <i className="fas fa-copy"></i>

           
              </span>
              <span className="text">Subscriber</span>
            </a>
            </Link>
          </li>



          <li className="nav-item">
        <Link href="/team">
            <a>
              <span className="icon">
            <i className="fas fa-users"></i>
              </span>
              <span className="text">Team</span>
            </a>
            </Link>
          </li>




          
          <li className="nav-item">
        <Link href="/clients">
            <a>
              <span className="icon">
            <i className="fas fa-users"></i>
              </span>
              <span className="text">Clients</span>
            </a>
            </Link>
          </li>


          <li className="nav-item">
        <Link href="/timeline">
            <a>
              <span className="icon">
            <i className="fas fa-users"></i>
              </span>
              <span className="text">Timeline</span>
            </a>
            </Link>
          </li>


          <li className="nav-item">
        <Link href="/workprocess">
            <a>
              <span className="icon">
            <i className="fas fa-users"></i>
              </span>
              <span className="text">WorkProcess</span>
            </a>
            </Link>
          </li>


          <li className="nav-item">
        <Link href="/testimonial">
            <a>
              <span className="icon">
            <i className="fas fa-users"></i>
              </span>
              <span className="text">Testimonial</span>
            </a>
            </Link>
          </li>



          <li className="nav-item">
        <Link href="/about">

            <a>
              <span className="icon">
            <i className="fas fa-copy"></i>
              </span>
              <span className="text">About</span>
            </a>
            </Link>
          </li>


          <li className="nav-item">
        <Link href="/ourservice">

            <a>
              <span className="icon">
            <i className="fas fa-copy"></i>
              </span>
              <span className="text">OurService</span>
            </a>
            </Link>
          </li>


          {/* <li className="nav-item">
        <Link href="/faq">

            <a>
              <span className="icon">
            <i className="fa fa-copy"></i>
              </span>
              <span className="text">FAQ</span>
            </a>
            </Link>
          </li> */}





          <li className="nav-item">
        <Link href="/vacancy">

            <a>
              <span className="icon">
            <i className="fas fa-copy"></i>
              </span>
              <span className="text">Vacancy</span>
            </a>
            </Link>
          </li>



          <li className="nav-item">
        <Link href="/appliedvacancy">

            <a>
              <span className="icon">
            <i className="fas fa-copy"></i>
              </span>
              <span className="text">AppliedVacancy</span>
            </a>
            </Link>
          </li>





          <li className="nav-item">
        <Link href="/contact">

            <a>
              <span className="icon">
              <i className="fas fa-users"></i>
              </span>
              <span className="text">Contact</span>
            </a>
            </Link>
          </li>



          
          

    
          <li className="nav-item">
        <Link href="/faq">

            <a>
              <span className="icon">
            <i className="fas fa-copy"></i>
              </span>
              <span className="text">Faq</span>
            </a>
            </Link>
          </li>

          





  <li className="nav-item nav-item-has-children">
            <a
              href="#3"
              className="collapsed "
              data-bs-toggle="collapse"
              data-bs-target="#ddmenu_3"
              aria-controls="ddmenu_3"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon">
              <i className="fas fa-wrench"></i>
              </span>
              <span className="text">Setting</span>
            </a>
            <ul id="ddmenu_3" className="collapse dropdown-nav">
              <li>
                <Link href={{
          pathname: "/setting/cmssetting",
        }}  >
                <a> Cms  Setting</a>
                </Link>
              </li>

              <li>
                <Link href={{
          pathname: "/setting/pagesetting",
        }}>
                <a> Pages  Setting</a>
                </Link>
              </li>

              
            
             
            </ul>
          </li>
         {/* setting dropdown  End*/}
        







        




       
  <li className="nav-item nav-item-has-children">
            <a
              href="#5"
              className="collapsed "
              data-bs-toggle="collapse"
              data-bs-target="#ddmenu_5"
              aria-controls="ddmenu_5"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon">
              <i className="fas fa-user"></i>
              </span>
              <span className="text">Pofile</span>
            </a>
            <ul id="ddmenu_5" className="collapse dropdown-nav">
              
              {/* <li>
                <Link href="/profile" >
                <a> Profile</a>
                </Link>
              </li> */}

              {/* <li>
                <Link href="/profile/password">
                <a> Change Password</a>
                </Link>
              </li> */}

              
            
             
            </ul>
          </li>
       
        </ul>
      </nav>
    
    </aside>
    </>
  )
}

export default Sidebar
