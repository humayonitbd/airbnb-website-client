import React, { useContext, useState } from 'react';
import { format } from 'date-fns';
import { Link, useNavigate, } from 'react-router-dom';
import logo from '../../assets/imges/logo.png'
import { UserCircleIcon, GlobeAltIcon, CalendarIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/solid'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from '../../Context/AuthProvider';

// import { useDispatch } from 'react-redux';
// import { setSearchQuery } from '../../Feature/Products/ProductSlice';
// import { navigate } from 'react-router-dom';


const Header = () => {
    const [open, setOpen]= useState(false);
    const [search, setSearch] = useState('');
    const [adulPlusBtn, setAdulPlusBtn] = useState(0);
    const [childrenBtn, setChildrenBtn] = useState(0);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date(startDate.getTime() + 24 * 60 * 1000));
    const { user, logOut } = useContext(AuthContext);
    // const dispatch = useDispatch();
    // console.log(user);
    const logOutHandler = () => {
      logOut()
        .then(() => {
          
          alert("Logout successfull!");
        })
        .catch((error) => console.log(error));
    };
    
    const navigate = useNavigate();
    const handlerQuerySubmit =(e)=>{
      e.preventDefault();
      const startDateTime = format(startDate, "PP").split(',')[0];
      const endDateTime = format(endDate, "PP").split(',')[0];
      const timeSet = `${startDateTime}-${endDateTime}`;
      const query = {
        location: search,
        dateTimeSet: timeSet,
        adults: adulPlusBtn,
        children: childrenBtn,
      };

      // dispatch(setSearchQuery(query));
      // console.log(query);
      navigate('/', {state: query})
      
    }

    const adulPlus = ()=>{
      setAdulPlusBtn(adulPlusBtn + 1)

    }
    // console.log(query)
    return (
      <div className='  '>
        <div>
          <div className="navbar bg-base-100 py-5">
            <div className="flex-1">
              <Link to="/">
                <img className="w-100 h-10" src={logo} alt="image" />
              </Link>
            </div>
            <div className="flex-1 hidden lg:block">
              <ul className="flex shadow px-3 rounded-full p-2  md:w-[400px]">
                <li className=" border-r-4 border-b-slate-400 pr-5">
                  {open ? (
                    <Link className="text-black ">Stays </Link>
                  ) : (
                    <Link className="text-black font-bold" to="/home">
                      Anywhere{" "}
                    </Link>
                  )}
                </li>
                <li className="ml-10 mr-7 border-r-4 border-b-slate-400 pr-5">
                  {open ? (
                    <Link className="text-black ">Experiences</Link>
                  ) : (
                    <Link className="text-black font-bold" to="/about">
                      Any week
                    </Link>
                  )}
                </li>
                <li>
                  {open ? (
                    <span className="text-sm text-black">
                      Online Experiences
                    </span>
                  ) : (
                    <span
                      onClick={() => setOpen(!open)}
                      className="cursor-pointer"
                    >
                      search...
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 bg-red-700 p-2 ml-4 rounded-full text-white inline"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </span>
                  )}
                </li>
              </ul>
            </div>

            <div className="flex-none gap-2">
              <div className="hidden lg:block lg:ml-32">
                <span className=" ">
                  {user?.email && (
                    <Link className="bg-red-300 px-5 pt-1 pb-2 rounded-full text-white font-bold" to="/dashboard">
                      Dashboard
                    </Link>
                  )}
                </span>
                {user?.email && user?.photoURL ? (
                  <>
                    <button
                      onClick={logOutHandler}
                      className="btn btn-ghost rounded-full mr-4"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/signIn">
                      <button className="btn btn-ghost rounded-full mr-4">
                        Login
                      </button>
                    </Link>
                  </>
                )}

                <GlobeAltIcon className="h-6 w-6 text-black inline" />
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0}>
                  <div className="w-10  rounded-full">
                    {user?.email ? (
                      <>
                        <img
                          src={user?.photoURL}
                          className="h-9 w-9 rounded-full"
                          alt=""
                        />
                      </>
                    ) : (
                      <>
                        <UserCircleIcon className="h-10 w-10 text-black" />
                      </>
                    )}
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <form onSubmit={handlerQuerySubmit}>
            <div
              className={`flex justify-center items-center navbar bg-base-100 ${
                open ? "block pb-7" : "hidden"
              } `}
            >
              <div className="border-2 p-2 rounded-full">
                <div className="mr-3">
                  <input
                    type="text"
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search"
                    className="input input-bordered h-8 w-24 md:w-auto"
                  />
                </div>
                <div className="shadow p-1 rounded mr-2">
                  <p className="text-sm">Check in / Add dates</p>
                  <div className="flex">
                    <DatePicker
                      className="border pr--10 font-semibold "
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                    <CalendarIcon className="h-6 w-6 text-black font-semibold text-lg " />
                  </div>
                </div>
                <div className="shadow p-1 rounded ml-2">
                  <p className="text-sm">Check out / Add dates</p>
                  <DatePicker
                    className="border pr--10 font-semibold"
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                  />
                  <CalendarIcon className="h-6 w-6 text-black font-semibold text-lg inline" />
                </div>
                {/* <button className='btn mr-2 ml-2 block'>Check in <br /> <span className='text-slate-400 text-sm'>Add dates</span></button> */}

                {/* <button className='btn mr-2 block'>Check out <br /> <span className='text-slate-400 text-sm'>Add dates</span></button> */}
                {/* <button className='btn mr-2 block'>Who <br /><span className='text-slate-400 text-sm'>Add guests</span> </button> */}
                <div>
                  <div className="dropdown dropdown-bottom">
                    <label
                      tabIndex={0}
                      className="rounded py-4 cursor-pointer px-2 m-1 shadow  mr-2"
                    >
                      Add guests
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <div className="flex justify-between items-center  mb-4">
                        <p className="font-semibold">Adults</p>
                        <div className="flex justify-between items-center">
                          <div>
                            <MinusIcon
                              onClick={() => setAdulPlusBtn(adulPlusBtn - 1)}
                              className="h-6 w-6 inline text-black border p-1 border-black rounded-full "
                            />
                          </div>
                          <div className="mx-2 border rounded px-3 py-1">
                            {adulPlusBtn}
                          </div>
                          <div>
                            <PlusIcon
                              onClick={() => setAdulPlusBtn(adulPlusBtn + 1)}
                              className="h-6 w-6 text-black border inline p-1 border-black rounded-full "
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="font-semibold">Children</p>
                        <div className="flex justify-between items-center">
                          <div>
                            <MinusIcon
                              onClick={() => setChildrenBtn(childrenBtn - 1)}
                              className="h-6 w-6 inline text-black border p-1 border-black rounded-full "
                            />
                          </div>
                          <div className="mx-2 border rounded px-3 py-1">
                            {childrenBtn}
                          </div>
                          <div>
                            <PlusIcon
                              onClick={() => setChildrenBtn(childrenBtn + 1)}
                              className="h-6 w-6 text-black border inline p-1 border-black rounded-full "
                            />
                          </div>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-inherit border-0 cursor-pointer"
                >
                  <svg
                    onClick={() => setOpen(!open)}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 bg-red-700 p-2 ml-4 rounded-full text-white inline"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Header;