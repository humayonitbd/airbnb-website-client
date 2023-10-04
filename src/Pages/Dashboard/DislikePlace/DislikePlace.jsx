import React, { useContext, useState } from 'react';
import { AuthContext } from "../../../Context/AuthProvider";
import { useMutation, useQuery } from "@tanstack/react-query";


const DislikePlace = () => {
    const { user } = useContext(AuthContext);
    console.log("user eamil", user?.email);
    //booking data get by email
    const {
      data: myReportPlace = {},
      refetch,
      isLoading,
    } = useQuery({
      queryKey: ["bookingPlaces", user?.email],
      queryFn: async () => {
        const res = await fetch(
          `http://localhost:5000/reportPlace/${user?.email}`
        );
        const data = await res.json();
        return data;
      },
    });

    const deleteHandler = (id) => {
      console.log("delete id", id);
      fetch(`http://localhost:5000/reportPlace/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            refetch();
          }
        });
    };

    
    return (
      <div>
        <div className="py-5 bg-red-300">
          <h3 className="text-center text-xl font-bold text-white">
            Report Place
          </h3>
        </div>

        <div className="pl-5 pt-5">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="">
                  <th>Place Photo</th>
                  <th>Category</th>
                  <th>Cost Night</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {myReportPlace?.length ? (
                  <>
                    {isLoading && <div> loading.... </div>}
                    {myReportPlace?.map((reportedPlace) => (
                      <>
                        <tr key={reportedPlace?._id}>
                          <td>
                            <div className="flex items-center space-x-3">
                              <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                  <img
                                    src={reportedPlace?.picture}
                                    alt="Avatar Tailwind CSS Component"
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="font-bold">
                                  {reportedPlace?.name}
                                </div>
                                <div className="text-sm opacity-50">
                                  {reportedPlace?.location}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>{reportedPlace?.category}</td>
                          <td className="font-bold">
                            ${reportedPlace?.perNightCost}
                          </td>
                          <td>
                            <button
                              onClick={() => deleteHandler(reportedPlace._id)}
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

export default DislikePlace;