import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const AllProductData = (props) => {
  // console.log(product);
  const { product } = props;
  const { category, picture, rating, title, date, name, perNightCost, _id } =
    product;
  return (
    <div>
      <div className="card card-compact p-0  bg-base-100 shadow-xl rounded-lg">
        <img className="w-full rounded-lg h-40" src={picture} alt="Shoes" />
        <div className="card-body">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="card-title leading-3 ">{name}</h2>
            </div>
            <div>
              <p className="">
                <StarIcon className="h-4 w-4 mr-1 text-black inline"></StarIcon>
                {rating}
              </p>
            </div>
          </div>
          <p className="leading-3">{title}</p>
          <p>{date}</p>
          <p>
            <span className="font-bold">${perNightCost}</span> night
          </p>
          <div className="card-actions w-full">
            <Link className="w-full" to={`/productDetails/${_id}`}>
              <button className="btn bg-red-300 w-full">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductData;
