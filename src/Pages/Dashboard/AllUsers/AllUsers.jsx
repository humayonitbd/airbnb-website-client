import React, { useContext } from 'react';
import userPhoto from '../../../assets/imges/users.jpg';
import { AuthContext } from '../../../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const AllUsers = () => {
    const { user } = useContext(AuthContext);
    // console.log("user eamil", user?.email);
    //booking data get by email
    const {
      data: allUsers = [],
      refetch,
      isLoading,
    } = useQuery({
      queryKey: ["allusers"],
      queryFn: async () => {
        const res = await fetch(`http://localhost:5000/allusers`);
        const data = await res.json();
        // refetch();
        return data;
      },
    });

    const deleteHandler = (id) => {
    //   console.log("delete id", id);
      fetch(`http://localhost:5000/allusers/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
            if (data.acknowledged) {
              refetch();
            }
        });
    };

    console.log("allUsers",allUsers);
    return (
      <div>
        <div className="py-5 bg-red-300">
          <h3 className="text-center text-xl font-bold text-white">
            All Users List
          </h3>
        </div>

        <div className="pl-5 pt-5">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="">
                  <th>Users Photo / Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {allUsers?.length ? (
                  <>
                    {isLoading && <div> loading.... </div>}
                    {allUsers?.map((allUser) => (
                      <>
                        <tr key={allUser?._id}>
                          <td>
                            <div className="flex items-center space-x-3">
                              <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                  <img
                                    src={userPhoto}
                                    alt="Avatar Tailwind CSS Component"
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="font-bold">{allUser?.name}</div>
                              </div>
                            </div>
                          </td>
                          <td>{allUser?.email}</td>
                          <td className="font-bold">
                            {allUser?.role}
                          </td>
                          <td>
                            <button
                              onClick={() => deleteHandler(allUser._id)}
                              className=" bg-red-500 text-white px-5 py-2 rounded mr-2"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      </>
                    ))}
                  </>
                ) : (
                  <>
                    {" "}
                    <div className="text-center">
                      <h2 className="text-2xl text-red-500 mt-40 text-center font-semibold">
                        Sorry!! You don't booking any place,,pleace booking
                        place!!
                      </h2>
                    </div>
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default AllUsers;