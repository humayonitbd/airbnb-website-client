// import React from 'react';

// const indexx = () => {
//     return (
//       <div>
//         <div>
//           <dialog id="my_modal_3" className={`modal`}>
//             <form
//               method="dialog"
//               onSubmit={handleSubmitBtnModal}
//               className="modal-box w-11/12 max-w-3xl ml-80 mt-14"
//             >
//               <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
//                 ✕
//               </button>
//               <h3 className="font-bold text-lg text-center">Filter!</h3>
//               <hr />
//               <h1 className="font-semibold">Type of place</h1>

//               <div>
//                 <div className="grid grid-cols-3  text-center">
//                   {fristFilter?.map((filter1) => (
//                     <div
//                       key={filter1.id}
//                       onClick={() => setModalBtn(filter1.downTitle)}
//                       className={`${
//                         modalBtn ? "bg-black text-white" : "bg-white"
//                       } border py-2 rounded `}
//                     >
//                       <p className="font-semibold">{filter1.upTitle}</p>
//                       <p className="text-sm">${filter1.downTitle}avg</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <hr className="my-5" />

//               <div>
//                 <h1 className="font-semibold">Price range</h1>
//                 <div className="py-10">
//                   <div className="flex justify-center">
//                     <div className="text-center font-semibold text-xl pb-5">
//                       $ <h1 className="inline">{rangeValue}</h1>
//                     </div>
//                     &nbsp; &nbsp; - &nbsp;&nbsp;
//                     <div className="text-center font-semibold text-xl pb-5">
//                       $ <h1 className="inline">{rangeValue2}</h1>
//                     </div>
//                   </div>
//                   <div>
//                     <input
//                       type="range"
//                       min="0"
//                       className="range range-error bg-slate-300 w-1/2 rotate-180  rounded-none rounded-r-xl "
//                       max="1000"
//                       step="-1"
//                       value={rangeValue}
//                       onChange={(e) => setRangeValue(e.target.value)}
//                     />
//                     <input
//                       type="range"
//                       min="0"
//                       className="range range-error bg-slate-300 w-1/2 rounded-none rounded-r-xl "
//                       max="1000"
//                       step="1"
//                       value={rangeValue2}
//                       onChange={(e) => setRangeValue2(e.target.value)}
//                     />
//                   </div>
//                 </div>
//               </div>
//               <hr />
//               <div>
//                 <h1 className="font-semibold my-2">
//                   Rooms and Beds and bathrooms
//                 </h1>
//                 <div>
//                   <p className="mb-2">Rooms</p>
//                   <div>
//                     <ul className="flex justify-between py-5">
//                       {rooms?.map((room) => (
//                         <li
//                           key={room.id}
//                           onClick={(e) => setRoomState(e.target.innerText)}
//                           className="border rounded-full py-2 px-4"
//                         >
//                           {room.number}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>

//                 <div>
//                   {/* beds */}
//                   <p className="mb-2">Beds</p>
//                   <div>
//                     <ul className="flex justify-between py-5">
//                       {beds?.map((bed) => (
//                         <li
//                           key={bed.id}
//                           onClick={(e) => setBedState(e.target.innerText)}
//                           className="border rounded-full py-2 px-4"
//                         >
//                           {bed.number}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//                 <div>
//                   <p className="mb-2">Bathrooms</p>
//                   <div>
//                     <ul className="flex justify-between py-5">
//                       {bathrooms?.map((bathroom) => (
//                         <li
//                           key={bathroom.id}
//                           onClick={(e) => setBathroomState(e.target.innerText)}
//                           className="border rounded-full py-2 px-4"
//                         >
//                           {bathroom.number}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//               <hr className="my-5" />
//               {/* <BeakerIcon className="h-6 w-6 text-blue-500" /> */}
//               <div>
//                 <h1 className="font-semibold pt-2 pb-4">Property type</h1>
//                 <div>
//                   <div className="flex justify-start items-center">
//                     {propertys?.map((property) => (
//                       <div
//                         className="border py-3 pl-3 pr-10 mr-5"
//                         onClick={() => setPropertyState(property.category)}
//                         key={property.id}
//                       >
//                         {" "}
//                         <p className="h-8 w-8 text-black">
//                           {property.icon}
//                         </p>{" "}
//                         <p>{property.category}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               <div className="flex justify-end mt-10 mb-3">
//                 <button type="submit" className="btn btn-primary">
//                   Show Rooms...
//                 </button>
//               </div>
//             </form>
//           </dialog>
//         </div>
//       </div>
//     );
// };

// export default indexx;





// import { useSelector } from "react-redux";
// import Todo from "./Todo";

// export default function TodoList() {
//   const todos = useSelector((state) => state.todos);
//   const filters = useSelector((state) => state.filters);

//   const filterByStatus = (todo) => {
//     const { status } = filters;
//     switch (status) {
//       case "Complete":
//         return todo.completed;

//       case "Incomplete":
//         return !todo.completed;

//       default:
//         return true;
//     }
//   };

//   const filterByColors = (todo) => {
//     const { colors } = filters;
//     if (colors.length > 0) {
//       return colors.includes(todo?.color);
//     }
//     return true;
//   };

//   return (
//     <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
//       {todos
//         .filter(filterByStatus)
//         .filter(filterByColors)
//         .map((todo) => (
//           <Todo todo={todo} key={todo.id} />
//         ))}
//     </div>
//   );
// }