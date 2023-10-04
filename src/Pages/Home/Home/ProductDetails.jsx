import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { StarIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate, useParams } from "react-router-dom";

import { AuthContext } from "../../../Context/AuthProvider";

const ProductDetails = () => {
  const { id } = useParams();
  const {user} = useContext(AuthContext)
//   console.log(user)
const navigate = useNavigate();

  const { data: singleProduct = {} } = useQuery({
    queryKey: ["singleProductDataDetails"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/singleProductDataDetails/${id}`
      );
      const data = await res.json();
      return data;
    },
  });

  console.log("singleProduct", singleProduct);
  const {
    Bathrooms,
    Bedrooms,
    Beds,
    adults,
    category,
    children,
    date,
    location,
    name,
    perNightCost,
    picture,
    title,
    typePlace,
    rating,
    _id,
  } = singleProduct;

  const bookingHandler = ({ name, picture, category, perNightCost, _id }) => {
    const bookingData = {
      bookingProductID: _id,
      name: name,
      picture: picture,
      category: category,
      perNightCost: perNightCost,
      location:location,
      email:user?.email

    };
    // console.log("bookingData", bookingData);
    fetch(`http://localhost:5000/bookingPlace`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("booking successfull!!");
          // refetch;
          navigate("/home");
          refetch();
        }
        console.log(data);
      });
    
  };
  const wishlistHandler = ({ name, picture, category, perNightCost, _id }) => {
    const wishlistData = {
      wishlistProductID: _id,
      name: name,
      picture: picture,
      category: category,
      perNightCost: perNightCost,
      location: location,
      email: user?.email,
    };
    // console.log("bookingData", bookingData);
    fetch(`http://localhost:5000/wishlistPlace`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(wishlistData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("wishlist successfull!!");
          // refetch;
          navigate("/home");
          refetch();
        }
        console.log(data);
      });
  };
  const reportHandler = ({ name, picture, category, perNightCost, _id }) => {
    const reportData = {
     reportProductID: _id,
      name: name,
      picture: picture,
      category: category,
      perNightCost: perNightCost,
      location: location,
      email: user?.email,
    };
    // console.log("bookingData", bookingData);
    fetch(`http://localhost:5000/reportPlace`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reportData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Report Places successfull!!");
          // refetch;
          navigate("/home");
          refetch();
        }
        console.log(data);
      });
  };
  


// ;

   return (
     <div className="py-10">
       <div>
         <div className="card card-side bg-base-100 ">
           <div className="w-1/2">
             <img className="w-full rounded-lg " src={picture} alt="Shoes" />
           </div>
           <div className="card-body w-1/2">
             <div className="flex justify-between items-center">
               <div>
                 <h2 className="card-title leading-3 ">
                   {" "}
                   <span className="font-bold">Place Name :</span>
                   {name}
                 </h2>
                 <h2 className=" mt-2">
                   {" "}
                   <span className="font-bold">Locations :</span>
                   {location}
                 </h2>
               </div>
               <div>
                 <p className="text-orange-500 font-bold">
                   <StarIcon className="h-4 w-4 mr-1 text-black font-bold inline"></StarIcon>
                   {rating}
                 </p>
               </div>
             </div>
             <p className="leading-3 text-lg font-semibold flex-grow-0 mb-5">
               {title}
             </p>
             <p className="leading-3 flex-grow-0">
               <span className="font-bold">Category type : </span>
               {category}
             </p>
             <p className="flex-grow-0">
               <span className="font-bold">Date of Time :</span> {date}
             </p>
             <p className="flex-grow-0">
               <span className="font-bold">Booking Price Per Night:</span>
               <span className="ml-5">${perNightCost}</span>
             </p>
             <div>
               <p>
                 <span className="font-bold">Bathrooms : </span>
                 <span>{Bathrooms}</span>
               </p>
               <p>
                 <span className="font-bold">Bedrooms : </span>
                 <span>{Bedrooms}</span>
               </p>
               <p>
                 <span className="font-bold">Beds : </span>
                 <span>{Beds}</span>
               </p>
               <p>
                 <span className="font-bold">adults : </span>
                 <span>{adults}</span>
               </p>
               <p>
                 <span className="font-bold">children : </span>
                 <span>{children}</span>
               </p>
               <p>
                 <span className="font-bold">adults : </span>
                 <span>{adults}</span>
               </p>
             </div>
             <div>
               <p>
                 Rooms sit amet consectetur adipisicing elit. Inventore
                 consequuntur dolorum blanditiis iste, consectetur repudiandae,
                 commodi dignissimos eos cupiditate recusandae reiciendis vitae
                 maxime ratione, omnis ex ullam ea quis accusantium eum? Enim
                 mollitia earum error officia quae neque nihil optio accusamus
                 quisquam quam at ut autem dicta nobis ullam animi rerum, minima
                 repellat est consectetur iure recusandae quos nemo aut. Error
                 sequi ab doloremque voluptas est rerum dicta, molestias
                 excepturi qui fuga cupiditate temporibus dolor nesciunt? Ut
                 explicabo, ea inventore nobis assumenda fuga placeat ad
                 similique. Nesciunt quas a recusandae vel iure dolor, dolorem
                 illo ut non adipisci nobis error sit explicabo quis
                 perspiciatis commodi maxime. Optio voluptatum fugiat cupiditate
                 molestias in dolorem doloribus error praesentium nobis
                 assumenda voluptas excepturi nisi neque fuga illum expedita aut
                 at similique, ipsa itaque iusto? Laborum enim aperiam, amet
                 est, rem accusantium veniam excepturi eos molestiae quo,
                 reiciendis eum laudantium! Repudiandae quaerat ea iste fugit
                 ratione ut? Eos debitis laudantium voluptatem quam cumque
                 expedita quas iure dicta. Ex, illo reiciendis repellat fugit
                 laboriosam veritatis harum voluptates nisi? Exercitationem ea
                 provident molestias veritatis nisi eos ipsum debitis? Beatae
                 odit doloremque totam ad quis vitae non, tempora dicta eligendi
                 sunt! Quae, repudiandae accusamus suscipit impedit earum sunt
                 aliquam libero iste. Debitis repellendus recusandae rem
                 tempore?
               </p>
             </div>
             <div className="">
               <div className="flex justify-end items-center">
                 <button
                   onClick={() => reportHandler(singleProduct)}
                   className="btn bg-red-700 hover:bg-red-600 text-white mr-2"
                 >
                   Report Place
                 </button>
                 <button
                   onClick={() => wishlistHandler(singleProduct)}
                   className="btn bg-orange-500 hover:bg-orange-600 text-white "
                 >
                   Wishlist Place
                 </button>
               </div>
               <button
                 onClick={() => bookingHandler(singleProduct)}
                 className="btn bg-red-300 hover:bg-red-400 w-full my-5 text-white"
               >
                 Book Now
               </button>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
};

export default ProductDetails;
