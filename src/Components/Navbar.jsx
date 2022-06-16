import React, { useState } from 'react'

const Navbar = () => {
  const [bgColor , setBgColor]=useState("");
  window.addEventListener("scroll",()=>{
    setBgColor( window.scrollY >=3? "bg-white shadow-sm" : "");
  })
  return (
      <nav className={`navbar  navbar-expand-lg navbar-light py-3 fixed-top ${bgColor}`}>
        <div className="container px-5">
          <a className="navbar-brand fw-bold" href="#">W<span className='text-danger'>i</span>nkez</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-muted mx-3" aria-current="page" href="#">المدونة</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active btn btn-primary text-white  py-2 px-4 btn-user" aria-current="page" href="#">دخول المستخدمين</a>
              </li>
            
            </ul>
            
          </div>
      </div>
    </nav>

    
  )
}

export default Navbar