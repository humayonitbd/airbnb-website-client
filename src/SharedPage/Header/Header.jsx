import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/imges/logo.png'
import { UserCircleIcon, GlobeAltIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open, setOpen]= useState(false);
    

    return (
        <div>
            <div>
            <div className="navbar bg-base-100 py-5">
              <div className="flex-1">
              <img className='w-100 h-10' src={logo} alt="image" />
              </div>
              <div className='flex-1 hidden lg:block'>
              <ul className='flex shadow px-3 rounded-full p-2'>
                        <li className=' border-r-4 border-b-slate-400 pr-5'>{open ? <Link className='text-black ' >Stays </Link> : <Link className='text-black font-bold' to='/home'>Anywhere </Link>}</li>
                        <li  className='ml-10 mr-7 border-r-4 border-b-slate-400 pr-5'>{open ? <Link className='text-black ' >Experiences</Link> : <Link className='text-black font-bold' to='/about'>Any week</Link>}</li>
                        <li >{open ? <span className='text-sm text-black'>Online Experiences</span>:<span onClick={()=> setOpen(!open)} className='cursor-pointer'>search...<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 bg-red-700 p-2 ml-4 rounded-full text-white inline" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></span> }
                        
                        </li>
                    </ul>
              </div>
              
                <div className="flex-none gap-2">
                  <div className='hidden lg:block lg:ml-44'>
                    <button className='btn btn-ghost rounded-full mr-4'>Airbnb your home</button>
                    <GlobeAltIcon className="h-6 w-6 text-black inline"/>

                  </div>
                  <div className="dropdown dropdown-end">
                    <label tabIndex={0}>
                      <div className="w-10  rounded-full">
                      <UserCircleIcon className="h-10 w-10 text-black" />
                      </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                      <li>
                        <a className="justify-between">
            Profile
                          <span className="badge">New</span>
                       </a>
                      </li>
                      <li><a>Settings</a></li>
                      <li><a>Logout</a></li>
                    </ul>
                  </div>
                </div>
                
              </div>
              <div className={`flex justify-center items-center navbar bg-base-100 ${open ? 'block pb-7' : 'hidden'} `}>
                <div className='border-2 p-2 rounded-full'>
                <div>
                    <input type="text" placeholder="Search" className="input input-bordered h-8 w-24 md:w-auto" />
                  </div>
                  <button className='btn mr-2 ml-2 block'>Check in <br /> <span className='text-slate-400 text-sm'>Add dates</span></button>
                  <button className='btn mr-2 block'>Check out <br /> <span className='text-slate-400 text-sm'>Add dates</span></button>
                  <button className='btn mr-2 block'>Who <br /><span className='text-slate-400 text-sm'>Add guests</span> </button>
                  <span className='bg-inherit border-0 cursor-pointer'><svg onClick={()=> setOpen(!open)} xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 bg-red-700 p-2 ml-4 rounded-full text-white inline" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></span>
                </div>
              </div>
            </div>



            
        </div>
    );
};

export default Header;