import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


const HomeCategory = ({
  data,
  setCategoryText,
  
}) => {
  // console.log('home category component',category)
  // const [ami, setAmi] = useState('')
  // console.log('ami',ami)
  const { categoryName, category } = data;
  const categorySelect = () => {
    setCategoryText(category);
  };
  

  // console.log(data)

  return (
    <div>
      <ul className="">
        <Link className="text-black hover:text-white">
          <li
            onClick={categorySelect}
            className="mx-3 rounded-md bg-red-300 px-5 py-2"
          >
            {categoryName}
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default HomeCategory;