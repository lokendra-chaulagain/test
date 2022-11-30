

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';


const Header = (props) => {
  let router=useRouter()
  const logout=async()=>{
    localStorage.removeItem('admin-token')
    await props.setToken('')
  await  router.push('/auth/login')
  }
 
  return (
    <>
     <header className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-6">
              <div className="header-left d-flex align-items-center">
                <div className="menu-toggle-btn text-center">
                  <button
                    id="menu-toggle"
                    className="btn btn-primary text-center "
                  >
                    <i className="fas fa-bars  "></i> 
                  </button>
                </div>
               
              </div>
            </div>
            <div className="col-lg-7 col-md-7 col-6">
              <div className="header-right">
               
               
              
                {/* <!-- profile start --> */}
                <div className="profile-box ml-15">
                  <button
                    className="dropdown-toggle bg-transparent border-0"
                    type="button"
                    id="profile"
                    data-toggle="dropdown"
                   
                    aria-expanded="false"
                    
                  >

        



                    <div className="profile-info">
                      <div className="info">
                        <h6>KB</h6>
                        <div className="image">
                          <img src="/images/user.webp"
                            alt="user image"   />
                          <span className="status"></span>
                        </div>
                      </div>
                    </div>
                    <i className="lni lni-chevron-down"></i>
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="profile"
                  >
                    <li>
                      <Link href="/profile">
                        <a>
                        <i className="fas fa-user"></i> View Profile
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/profile/password">
                  <a>
                  <i className="fas fa-lock"></i> Change password
                  </a>
                      </Link>
                    </li>
                  
                    
                    <li>
                      <a href="#0" onClick={logout}> <i className="fas fa-power-off"></i> Sign Out </a>
                    </li>
                  </ul>
                </div>
                {/* <!-- profile end --> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header