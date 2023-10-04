import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { useMutation, useQuery } from '@tanstack/react-query';
import Modal from "react-modal";


const customStyles = {
  content: {
    top: "50%",
    width: "600px",
    left: "50%",
    right: "auto",
    bottom: "auto",
    // marginRight: "-10%",
    transform: "translate(-50%, -50%)",
    padding: "0px",
  },
};


const BookingPlace = () => {
  const { user } = useContext(AuthContext);
  const [paymentProduct, setPaymentProduct] = useState({});
  console.log("user eamil", user?.email);
  //booking data get by email
  const {
    data: myBookingPlace = {},
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["bookingPlaces", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/bookingPlaces/${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  const deleteHandler = (id) => {
    console.log("delete id", id);
    fetch(`http://localhost:5000/bookingPlacesDelete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          refetch();
        }
      });
  };

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openPayModal(data) {
    setPaymentProduct(data);

    setIsOpen(true);
  }
  // category: "rooms";
  // email: "user2@gmail.com";
  // location: "Italy";
  // name: "Milan, Italy";
  // perNightCost: 100;
  // picture: "https://i.ibb.co/M84DCNN/e6bed0e6-6190-4119-bd80-d12d369cea19.jpg";
  // _id: "651a81a2be57aaa9ba050bd0";

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  //modal code end

  const handleSubmitBtnModal = (e) => {
    e.preventDefault();
    const form = e.target;
    const accountNumber = form.payment.value;
    const payInfo = {
      bankAccountNumber: accountNumber,
      bookingProductID:paymentProduct.bookingProductID,
      payment: "paid",
      
    };

    fetch(`http://localhost:5000/bookingPayment/${paymentProduct._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payInfo),
    })
    .then(res => res.json())
    .then(data =>{
        if (data.modifiedCount){
            console.log("payment successfull !!");
             refetch();
        } 
            
    })

    //   setFilterSearch(queryFilter);
    // console.log("payInfo", payInfo);
    setIsOpen(false);
  };

  console.log(
    "paymentProduct paymentProduct",
    paymentProduct,
    "oldID",
    paymentProduct.bookingProductID
  );
//   console.log("myBookingPlace", myBookingPlace);
  return (
    <div>
      <div className="py-5 bg-red-300">
        <h3 className="text-center text-xl font-bold text-white">
          Booking Place
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
              {myBookingPlace?.length ? (
                <>
                  {isLoading && <div> loading.... </div>}
                  {myBookingPlace?.map((bookedPlace) => (
                    <>
                      <tr key={bookedPlace?._id}>
                        <td>
                          <div className="flex items-center space-x-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img
                                  src={bookedPlace?.picture}
                                  alt="Avatar Tailwind CSS Component"
                                />
                              </div>
                            </div>
                            <div>
                              <div className="font-bold">
                                {bookedPlace?.name}
                              </div>
                              <div className="text-sm opacity-50">
                                {bookedPlace?.location}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>{bookedPlace?.category}</td>
                        <td className="font-bold">
                          ${bookedPlace?.perNightCost}
                        </td>
                        <td>
                          <button
                            onClick={() => deleteHandler(bookedPlace._id)}
                            className=" bg-red-500 text-white px-5 py-2 rounded mr-2"
                          >
                            Delete
                          </button>
                          {bookedPlace.payment ? (
                            <>
                              <button
                                className=" bg-green-500  text-white px-5  py-2 rounded"
                              >
                                PAID
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                onClick={() => openPayModal(bookedPlace)}
                                className=" bg-blue-500  text-white px-5  py-2 rounded"
                              >
                                PAY
                              </button>
                            </>
                          )}
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

      {/* //modal start  */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmitBtnModal}>
          <div className="flex flex-col  p-5">
            <h3 className="text-xl font-bold text-center">
              Bank Account Number
            </h3>
            <br />
            <div className="flex justify-between items-center mb-3">
              <div className="">
                <p>
                  Email: <span className=" font-bold"> {user?.email}</span>
                </p>
                <p>
                  Location:{" "}
                  <span className=" font-bold">
                    {" "}
                    {paymentProduct?.location}
                  </span>
                </p>
              </div>
              <div className="pr-5">
                <p>
                  Price:{" "}
                  <span className=" font-bold">
                    {" $"}
                    {paymentProduct?.perNightCost}
                  </span>
                </p>
                <p>
                  Category:{" "}
                  <span className=" font-bold">
                    {" "}
                    {paymentProduct?.category}
                  </span>
                </p>
              </div>
            </div>
            <div className="my-2">
              <label className=" font-bold">Account Number:</label>
              <br />
              <input
                type="number"
                className="border border-stone-300 p-2 w-full "
                name="payment"
                placeholder="type account number..."
              />
            </div>

            <button type="submit" className="btn btn-primary text-white my-3">
              submit
            </button>
          </div>
        </form>
      </Modal>
      {/* //modal end  */}
    </div>
  );
};

export default BookingPlace;