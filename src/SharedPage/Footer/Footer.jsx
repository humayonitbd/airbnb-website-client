import React from 'react';
import logo from '../../assets/imges/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                 <img src={logo} className='h-16 w-100' alt="" />
                  <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
                </div> 
                <div>
                  <span className="footer-title">Services</span> 
                  <Link to='/' className="link link-hover text-black">Branding</Link> 
                  <Link to='/' className="link link-hover text-black">Design</Link> 
                  <Link to='/' className="link link-hover text-black">Marketing</Link> 
                  <Link to='/' className="link link-hover text-black">Advertisement</Link>
                </div> 
                <div>
                  <span className="footer-title">Company</span>               
                  <Link to='/' className="link link-hover text-black">About us</Link> 
                  <Link to='/' className="link link-hover text-black">Contact</Link> 
                  <Link to='/' className="link link-hover text-black">Jobs</Link> 
                  <Link to='/' className="link link-hover text-black">Press kit</Link>
                </div> 
                <div>
                  <span className="footer-title">Legal</span> 
                  <Link to='/' className="link link-hover text-black">Terms of use</Link> 
                  <Link to='/' className="link link-hover text-black">Privacy policy</Link> 
                  <Link to='/' className="link link-hover text-black">Cookie policy</Link>
                </div>
              </footer>
        </div>
    );
};

export default Footer;