import React from 'react';
import { AiFillHome } from "react-icons/ai";
import { CiCircleQuestion } from "react-icons/ci";
import { RiVipDiamondFill } from "react-icons/ri";
import { BsGraphUpArrow, BsBookmarkStar } from "react-icons/bs";
import { Link } from 'react-router-dom';
// import  { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Pie,
  PieChart,
} from "recharts";



const Dashboard = () => {

  const bookingPlaces = [
    {
      id: 1,
      title: "Weekly Booking Confrom",
      dollar: "$ 150000",
      incress: "Increased by 60%",
      bgColor: "bg-red-300",
      icon: <BsGraphUpArrow />,
    },
    {
      id: 2,
      title: "Weekly Booking",
      dollar: "45,6334",
      incress: "Decreased by 10%",
      bgColor: "bg-[#379AE8]",
      icon: <BsBookmarkStar />,
    },
    {
      id: 3,
      title: "Visitors Online",
      dollar: "95,5741",
      incress: "Increased by 5%",
      bgColor: "bg-[#38D2BC]",
      icon: <RiVipDiamondFill />,
    },
  ];

  const data = [
    {
      name: "Italy",
      visitor: 4000,
      booking: 2400,
      review: 2000,
    },
    {
      name: "France",
      visitor: 4000,
      booking: 2400,
      review: 1000,
    },
    {
      name: "US",
      visitor: 4000,
      booking: 2400,
    },
    {
      name: "UK",
      visitor: 4000,
      booking: 2400,
      review: 1700,
    },
    {
      name: "Autraliya",
      visitor: 4000,
      booking: 2400,
      review: 1600,
    },
    {
      name: "Canada",
      visitor: 4000,
      booking: 2400,
      review: 1300,
    },
    {
      name: "Malayshiya",
      visitor: 4000,
      booking: 2400,
      review: 1500,
    },
  ];


  const data02 = [
    { name: "visitor", value: 4000 },
    { name: "booking", value: 2400 },
    { name: "review", value: 1500 },
    
  ];


  const leatesPlaces = [
    {
      id: 1,
      img: "https://i.ibb.co/2N3wNbz/013d40ec-8c83-4464-9f18-ad31d54ef497.jpg",
      title: "Phang, Thailand",
      details: "Stay with enjoy hosting for 5 years",
      bookingPrice: 350
    },
    {
      id: 2,
      img: "https://i.ibb.co/dpjgkcx/feee7be8-35d6-4ba7-b493-b6ff93660ca3.jpg",
      title: "Merignac, France",
      details: "Stay with enjoy hosting for 5 years",
      bookingPrice: 500
    },
    {
      id: 3,
      img: "https://i.ibb.co/T0GrxdP/30d2fd45-0c7d-488e-8433-d6e8d49ed755.jpg",
      title: "Sainj, India",
      details: "Stay with enjoy hosting for 5 years",
      bookingPrice: 750
    },
  ];
    return (
      <div className="pl-5 pt-5">
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center">
            <p>
              <AiFillHome className="text-4xl bg-red-300 rounded text-white p-2" />
            </p>
            <h4 className="ml-2 font-bold text-lg">Dashboard</h4>
          </div>
          <div className="flex justify-end items-center">
            <p className="mr-1  mt-1">
              <CiCircleQuestion />
            </p>
            <Link to="/">
              <p className="p-0 m-0 ">overview page</p>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 my-5">
          {bookingPlaces?.map((bookingPlace) => (
            <>
              <div key={bookingPlace.id}>
                <div
                  className={`${bookingPlace.bgColor}  rounded text-start p-8 text-white `}
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg">{bookingPlace.title}</h4>
                    <p className="text-white text-lg">{bookingPlace.icon}</p>
                  </div>
                  <h1 className="text-3xl font-bold pt-3 pb-12 ">
                    {bookingPlace.dollar}
                  </h1>
                  <p>{bookingPlace.incress}</p>
                </div>
              </div>
            </>
          ))}
        </div>
        {/* rechart start */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-10">
          <div className="">
            {/* dfadgffafafasfafaf */}
            {/* <ResponsiveContainer width="100%" height="100%"></ResponsiveContainer> */}
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="visitor" stackId="a" fill="#8884d8" />
              <Bar dataKey="booking" stackId="a" fill="#82ca9d" />
              <Bar dataKey="review" fill="#ffc658" />
            </BarChart>
          </div>

          <div>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart width={600} height={600}>
                <Pie
                  data={data02}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  fill="#82ca9d"
                  label
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        {/* rechart end */}

        <div className="grid md:grid-cols-3 grid-cols-1 gap-5 my-10">
          {leatesPlaces?.map((leatesPlace) => (
            <>
              <div key={leatesPlace.id} className="shadow-md">
                <img src={leatesPlace.img} className="w-full h-60" alt="" />
                <div className="p-2">
                  <h3 className="text-lg font-semibold">{leatesPlace.title}</h3>
                  <p>{leatesPlace.details}</p>
                  <p>
                    <span className="font-bold">
                      ${leatesPlace.bookingPrice}
                    </span>{" "}
                    night
                  </p>
                  <Link to="/">
                    <button className="btn w-full mt-5 text-white bg-slate-900 hover:bg-red-300">
                      Booking Now
                    </button>
                  </Link>
                </div>
              </div>
            </>
          ))}
        </div>

        <div className="bg-black flex justify-center items-center h-24 text-white">
          <p>Thanks for visited Dashboard</p>
        </div>
      </div>
    );
};

export default Dashboard;