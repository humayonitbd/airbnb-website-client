import React, { useEffect, useState } from "react";
// import { format } from 'date-fns';
import HomeCategory from "./HomeCategory";
import AllProductData from "./AllProductData";
import {
  HomeIcon,
  BuildingOffice2Icon,
  HomeModernIcon,
} from "@heroicons/react/24/solid";
import { useLocation } from "react-router-dom";
import Modal from "react-modal";
// import { useQuery } from "@tanstack/react-query";
import Loading from "../../../SharedPage/Loading/Loading";

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
//

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  // const dispatch = useDispatch();
  let { state } = useLocation();
  // const [searchData, setSearchData] = useState(state);
  const [categorys, setCategorys] = useState([]);
  const [allProductData, setAllProductData] = useState([]);
  const [categoryText, setCategoryText] = useState("");
  const [allCategoryData, setAllCategoryData] = useState([]);
  const [rangeValue, setRangeValue] = useState(50);
  const [rangeValue2, setRangeValue2] = useState(600);
  // const [values, setValues] = useState( MIN, MAX)
  const [modalBtn, setModalBtn] = useState(51);
  const [roomState, setRoomState] = useState(1);
  const [bedState, setBedState] = useState(1);
  const [bathroomState, setBathroomState] = useState(1);
  const [propertyState, setPropertyState] = useState("House");
  const [filterSearch, setFilterSearch] = useState({});

  
console.log(allProductData)


  //modal code start
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

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
    const queryFilter = {
      roomState: roomState,
      bedState: bedState,
      bathroomState: bathroomState,
      propertyState: propertyState,
      modalBtn: modalBtn,
    };
    setFilterSearch(queryFilter);
    setIsOpen(false);
  };



  const allProductHandler =()=>{
      fetch("http://localhost:5000/allProductData")
        .then((res) => res.json())
        .then((data) => setAllProductData(data));
    

  }



  useEffect(() => {
    fetch("http://localhost:5000/allCategory")
      .then((res) => res.json())
      .then((data) => setCategorys(data));
  }, []);

  
  

  useEffect(() => {
    fetch("http://localhost:5000/allProductData")
      .then((res) => res.json())
      .then((data) => setAllProductData(data));
  }, []);

  useEffect(() => {
    if (categoryText) {
      // fetch(`http://localhost:5000/singleCategoryData/?category=${categoryText}`)
      fetch(`http://localhost:5000/singleCategoryData/${categoryText}`)
        .then((res) => res.json())
        .then((data) => setAllProductData(data));
    }
  }, [categoryText]);

  useEffect(() => {
    if (state) {
      const { location, adults, children, dateTimeSet } = state;
      // const dateTimeSet = `${startTime}-${endDate}`;
      fetch(
        `http://localhost:5000/searchData/?location=${location}&adults=${adults}&children=${children}&dateTimeSet=${dateTimeSet}`
      )
        .then((res) => res.json())
        .then((data) => setAllProductData(data));
    }
  }, [state]);

  useEffect(() => {
    if (filterSearch) {
      const { modalBtn, roomState, bedState, bathroomState, propertyState } =
        filterSearch;
      fetch(
        `http://localhost:5000/searchFillter/?modalBtn=${modalBtn}&roomState=${roomState}&bedState=${bedState}&bathroomState=${bathroomState}&propertyState=${propertyState}`
      )
        .then((res) => res.json())
        .then((data) => setAllProductData(data));
    }
  }, [filterSearch]);
  // console.log(roomState, bedState, bathroomState, propertyState,modalBtn);

  const fristFilter = [
    {
      id: 1,
      upTitle: "Any type",
      downTitle: 51,
    },
    {
      id: 2,
      upTitle: "Room",
      downTitle: 35,
    },
    {
      id: 3,
      upTitle: "Entire home",
      downTitle: 67,
    },
  ];

  // console.log(modalBtn);

  //rooms filter  code start
  const rooms = [
    {
      id: 1,
      number: 1,
    },
    {
      id: 2,
      number: 2,
    },
    {
      id: 3,
      number: 3,
    },
    {
      id: 4,
      number: 4,
    },
    {
      id: 5,
      number: 5,
    },
    {
      id: 6,
      number: 6,
    },
    {
      id: 7,
      number: 7,
    },
    {
      id: 8,
      number: 8,
    },
  ];

  //bed filter  code end
  const beds = [
    {
      id: 1,
      number: 1,
    },
    {
      id: 2,
      number: 2,
    },
    {
      id: 3,
      number: 3,
    },
    {
      id: 4,
      number: 4,
    },
    {
      id: 5,
      number: 5,
    },
    {
      id: 6,
      number: 6,
    },
    {
      id: 7,
      number: 7,
    },
    {
      id: 8,
      number: 8,
    },
  ];
  //bed filter  code end
  const bathrooms = [
    {
      id: 1,
      number: 1,
    },
    {
      id: 2,
      number: 2,
    },
    {
      id: 3,
      number: 3,
    },
    {
      id: 4,
      number: 4,
    },
    {
      id: 5,
      number: 5,
    },
    {
      id: 6,
      number: 6,
    },
    {
      id: 7,
      number: 7,
    },
    {
      id: 8,
      number: 8,
    },
  ];

  //Property type
  const propertys = [
    {
      id: 1,
      category: "House",
      icon: <HomeIcon />,
    },
    {
      id: 2,
      category: "Apartment",
      icon: <BuildingOffice2Icon />,
    },
    {
      id: 3,
      category: "Guesthouse",
      icon: <HomeModernIcon />,
    },
  ];
  return (
    <div>
      <div className=" flex justify-center items-center py-3 mb-2">
        <button onClick={allProductHandler} className="bg-red-300 text-black hover:text-white px-5 mr-2 py-2 rounded ">All</button>
        {categorys?.map((data) => (
          <HomeCategory
            key={data._id}
            setCategoryText={setCategoryText}
            data={data}
          ></HomeCategory>
        ))}

        <button className="btn ml-16 bg-red-800 hover:bg-slate-900 text-white" onClick={openModal}>
          Filter
        </button>
      </div>
      <div className="pb-10">
        <div>
          {allProductData?.length ? (
            <>
              <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 ">
                {allProductData?.map((product) => (
                  <AllProductData
                    key={product._id}
                    product={product}
                  ></AllProductData>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-center items-center h-80">
                <Loading />
              </div>
            </>
          )}
        </div>
      </div>

      {/* modal popup  */}
      {/* ///// */}

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form
          onSubmit={handleSubmitBtnModal}
          className="modal-box max-w-full w-full shadow-none p-0 "
        >
          <h3 className="font-bold text-lg text-center">Filter!</h3>
          <hr />
          <h1 className="font-semibold mb-2">Type of place</h1>
          <div>
            <div className="grid grid-cols-3  text-center">
              {fristFilter?.map((filter1) => (
                <div
                  key={filter1.id}
                  onClick={() => setModalBtn(filter1.downTitle)}
                  className={`${
                    modalBtn ? "bg-black text-white" : "bg-white"
                  } border py-2 rounded `}
                >
                  <p className="font-semibold">{filter1.upTitle}</p>
                  <p className="text-sm">${filter1.downTitle}avg</p>
                </div>
              ))}
            </div>
          </div>
          <hr className="my-5" />
          <div>
            <h1 className="font-semibold">Price range</h1>
            <div className="py-10">
              <div className="flex justify-center">
                <div className="text-center font-semibold text-xl pb-5">
                  $ <h1 className="inline">{rangeValue}</h1>
                </div>
                &nbsp; &nbsp; - &nbsp;&nbsp;
                <div className="text-center font-semibold text-xl pb-5">
                  $ <h1 className="inline">{rangeValue2}</h1>
                </div>
              </div>
              <div>
                <input
                  type="range"
                  min="0"
                  className="range range-error bg-slate-300 w-1/2 rotate-180  rounded-none rounded-r-xl "
                  max="1000"
                  step="-1"
                  value={rangeValue}
                  onChange={(e) => setRangeValue(e.target.value)}
                />
                <input
                  type="range"
                  min="0"
                  className="range range-error bg-slate-300 w-1/2 rounded-none rounded-r-xl "
                  max="1000"
                  step="1"
                  value={rangeValue2}
                  onChange={(e) => setRangeValue2(e.target.value)}
                />
              </div>
            </div>
          </div>
          <hr />
          <div>
            <h1 className="font-semibold my-2">Rooms and Beds and bathrooms</h1>
            <div>
              <p className="mb-2">Rooms</p>
              <div>
                <ul className="flex justify-between py-5">
                  {rooms?.map((room) => (
                    <li
                      key={room.id}
                      onClick={(e) => setRoomState(e.target.innerText)}
                      className="border rounded-full py-2 px-4"
                    >
                      {room.number}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              {/* beds */}
              <p className="mb-2">Beds</p>
              <div>
                <ul className="flex justify-between py-5">
                  {beds?.map((bed) => (
                    <li
                      key={bed.id}
                      onClick={(e) => setBedState(e.target.innerText)}
                      className="border rounded-full py-2 px-4"
                    >
                      {bed.number}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <p className="mb-2">Bathrooms</p>
              <div>
                <ul className="flex justify-between py-5">
                  {bathrooms?.map((bathroom) => (
                    <li
                      key={bathroom.id}
                      onClick={(e) => setBathroomState(e.target.innerText)}
                      className="border rounded-full py-2 px-4"
                    >
                      {bathroom.number}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-5" />
          {/* <BeakerIcon className="h-6 w-6 text-blue-500" /> */}
          <div>
            <h1 className="font-semibold pt-2 pb-4">Property type</h1>
            <div>
              <div className="flex justify-start items-center">
                {propertys?.map((property) => (
                  <div
                    className="border py-3 pl-3 pr-10 mr-5"
                    onClick={() => setPropertyState(property.category)}
                    key={property.id}
                  >
                    {" "}
                    <p className="h-8 w-8 text-black">{property.icon}</p>{" "}
                    <p>{property.category}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center my-8">
            <button onClick={closeModal} className="btn mr-10">
              close
            </button>
            <button type="submit" className="btn">
              Show more...
            </button>
          </div>
        </form>
      </Modal>

      {/* modal popup  */}
    </div>
  );
};

export default Home;
