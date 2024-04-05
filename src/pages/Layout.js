import React from 'react'
import {Outlet,Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Layout = () => {
  return (
    <div>
      <div className="App">
      <header className='heading'>
        <nav className='navbar'>
          <div className='contentcontainer'>
            <ul role='menubar' className='menubar'>
              
              <li role='none' className='gamut-3tullx-Box'>
                {/* <a role='menuitem' className='gamutanker' href=''>
                  "my home"
                </a> */}
                <Link to="/" role='menuitem' className='gamutanker'>Home</Link>
              </li>
              <li role='none' className='gamut-3tullx-Box'>
                {/* <a role='menuitem' className='gamutanker' href=''>
                  "Catalog"
                </a> */}
                <Link to="/blockchain" role='menuitem' className='gamutanker'>Blockchain</Link>
              </li>
              <li role='none' className='gamut-3tullx-Box'>
                {/* <a role='menuitem' className='gamutanker' href=''>
                  "Resource"
                </a> */}
                <Link to="/cloudcomputing" role='menuitem' className='gamutanker'>Cloud Computing</Link>
              </li>
              <li role='none' className='gamut-3tullx-Box'>
                {/* <a role='menuitem' className='gamutanker' href=''>
                  "Community"
                </a> */}
                <Link to="cybersecurity" role='menuitem' className='gamutanker'>Cyber Security</Link>
              </li>
              <li role='none' className='gamut-3tullx-Box'>
              
                <Link to="datascience" role='menuitem' className='gamutanker'>Data Science</Link>
              </li>
              <li role='none' className='gamut-3tullx-Box'>
              
                <Link to="devops" role='menuitem' className='gamutanker'>DevOps</Link>
              </li>
              <li role='none' className='gamut-3tullx-Box'>
                
                <Link to="digitalmarketing" role='menuitem' className='gamutanker'>Digital Marketing</Link>
              </li>
              <li role='none' className='gamut-3tullx-Box'>
                
                <Link to="fullstackdevelopment" role='menuitem' className='gamutanker'>Full Stack Development</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
    <main>
      <Outlet />
    </main>
  </div>
  )
}

export default Layout