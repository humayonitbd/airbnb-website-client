import React from 'react';
import { useQuery } from '@tanstack/react-query';

const AllReportPlaces = () => {
   const find = true;
   //booking data get by email
   const {
     data: allReportPlaceData = [],
     refetch,
     isLoading,
   } = useQuery({
     queryKey: ["allReportPlaceData"],
     queryFn: async () => {
       const res = await fetch(
         `http://localhost:5000/allReportPlaceData/${find}`
       );
       const data = await res.json();
       return data;
     },
   });

   const deleteHandler = (id) => {
     console.log("delete id", id);
     fetch(`http://localhost:5000/allReportPlaceData/${id}`, {
       method: "DELETE",
     })
       .then((res) => res.json())
       .then((data) => {
         if (data.acknowledged) {
           refetch();
         }
       });
   };

//    console.log(allBookedPlaceData);
   return (
     <div>
       <div className="py-5 bg-red-300">
         <h3 className="text-center text-xl font-bold text-white">
           All Report Place List
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
                 <th>Place Booking</th>
                 <th>Cost Night</th>
                 <th>Action</th>
               </tr>
             </thead>
             <tbody>
               {allReportPlaceData?.length ? (
                 <>
                   {isLoading && <div> loading.... </div>}
                   {allReportPlaceData?.map((reportPlace) => (
                     <>
                       <tr key={reportPlace?._id}>
                         <td>
                           <div className="flex items-center space-x-3">
                             <div className="avatar">
                               <div className="mask mask-squircle w-12 h-12">
                                 <img
                                   src={reportPlace?.picture}
                                   alt="Avatar Tailwind CSS Component"
                                 />
                               </div>
                             </div>
                             <div>
                               <div className="font-bold">
                                 {reportPlace?.name}
                               </div>
                               <div className="text-sm opacity-50">
                                 {reportPlace?.location}
                               </div>
                             </div>
                           </div>
                         </td>
                         <td>{reportPlace?.category}</td>
                         <td>{reportPlace?.report && <span>true</span>}</td>
                         <td className="font-bold">
                           ${reportPlace?.perNightCost}
                         </td>
                         <td>
                           <button
                             onClick={() => deleteHandler(reportPlace._id)}
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

export default AllReportPlaces;