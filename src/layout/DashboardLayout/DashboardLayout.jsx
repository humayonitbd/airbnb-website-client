import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { Link, Outlet } from 'react-router-dom';
import Header from '../../SharedPage/Header/Header';
import useAdmin from '../../hooks/useAdmin';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    // console.log(user);
    const [isAdmin] = useAdmin(user?.email);
    console.log(isAdmin);
    return (
      <div>
        <Header />
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content ">
            {/* Page content here */}
            {/* <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label> */}
            <Outlet />
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>

            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              <div className="flex justify-start items-center mb-5">
                <img
                  className="h-10 w-10 rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
                <div className="ml-4">
                  <h4 className="font-bold">{user?.displayName}</h4>
                  <p>{user?.email}</p>
                </div>
              </div>
              {/* Sidebar content here */}
              <Link to="/dashboard">
                <li className="bg-red-300 rounded text-lg p-2 text-white mb-4">
                  Dashboard
                </li>
              </Link>
              {isAdmin === "admin" ? (
                <>
                  <Link to="/dashboard/allUsers">
                    <li className="bg-red-300 rounded text-lg p-2 text-white mb-4">
                      All Users
                    </li>
                  </Link>
                  <Link to="/dashboard/AllPlace">
                    <li className="bg-red-300 rounded text-lg p-2 text-white mb-4">
                      All Places
                    </li>
                  </Link>
                  <Link to="/dashboard/allBookedPlace">
                    <li className="bg-red-300 rounded text-lg p-2 text-white mb-4">
                      All Booked Place
                    </li>
                  </Link>
                  <Link to="/dashboard/allReportPlace">
                    <li className="bg-red-300 rounded text-lg p-2 text-white mb-4">
                      All Report Place
                    </li>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/dashboard/booking-place">
                    <li className="bg-red-300 rounded text-lg p-2 text-white mb-4">
                      Booking Place
                    </li>
                  </Link>
                  <Link to="/dashboard/favorite-place">
                    <li className="bg-red-300 rounded text-lg p-2 text-white mb-4">
                      Wishlist Place
                    </li>
                  </Link>
                  <Link to="/dashboard/dislike-place">
                    <li className="bg-red-300 rounded text-lg p-2 text-white mb-4">
                      Report Place
                    </li>
                  </Link>
                </>
              )}

              <div className="flex justify-center items-end mt-10 rounded bg-red-200">
                <Link to="/">
                  <p className="link p-2">back to Home</p>
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default DashboardLayout;