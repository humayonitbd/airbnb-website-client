import React from 'react';
import  { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
// import Swal from "sweetalert2";
// const Swal = require("sweetalert2");



const SignUp = () => {
  const { createUser, userUpdateHandler } = useContext(AuthContext);
  
  const navigete = useNavigate();
  // const [createEmail, setCreateEmail] = useState("");
  // console.log(createEmail);
  // const [token] = useJwtToken(createEmail);
  // if (token) {
  //   navigete("/");
  // }
  const handlerRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];
    const formData = new FormData();
    formData.append("image", image);

    if (password.length < 6) {
      alert("Your password must be 6 charecter!!");
      return;
    }

    const url = `https://api.imgbb.com/1/upload?key=0ba2b4921b02f88551c8a45a193a174e`;
    // console.log(url)

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const userImg = {
          img: data.data.display_url,
        };
        // console.log(userData);
        createUser(email, password)
          .then((result) => {
            const user = result.user;
            userUpdateHandler(name, userImg.img);
            console.log(user);
            const userData = {
              name: name,
              email: email,
              password: password,
              role: "user",
              
            };
            console.log(userData);
           
            
            fetch(`http://localhost:5000/users`, {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(userData),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  console.log("post successfull!");
                  // refetch();
                }

                // setCreateEmail(userData.email);
              
              });

            // Swal.fire({
            //   title: "Create Account Successfull !!",
            //   showClass: {
            //     popup: "animate__animated animate__fadeInDown",
            //   },
            //   hideClass: {
            //     popup: "animate__animated animate__fadeOutUp",
            //   },
            // });
            alert("account successfull !!")
            form.reset();
            //   navigete('/');
          })
          .catch((error) => console.log(error.message));
      });

    //   console.log(email,  image);
  };

  // const userUpdateHandlerBtn = (name) => {
  //   userUpdateHandler(name)
  //     .then(() => {
  //       console.log("profile update");
  //     })
  //     .catch((err) => console.log(err));
  // };
  
  return (
    <div>
      <div className="hero bg-white min-h-screen loginBackgroud ">
        <div className="hero-content flex-col ">
          <form
            onSubmit={handlerRegister}
            className="card flex-shrink-0 w-full shadow-2xl bg-base-100"
          >
            <div className="card-body bg-white w-full md:w-[400px]">
              <h1 className="text-2xl text-center font-bold text-black">
                Sign Up now!
              </h1>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="type full name"
                  className="input input-bordered bg-white "
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="type your email"
                  className="input input-bordered bg-white "
                  required
                />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="type your password"
                  className="input input-bordered bg-white "
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Upload Photo</span>
                </label>
                <input
                  name="image"
                  type="file"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="submit"
                  className="btn bg-[#FF5A5F] text-white"
                ></input>
              </div>
            </div>
          </form>
          <p className="text-white text-lg">
            Have a account?{" "}
            <Link to="/signIn">
              <strong className="link">Sign In</strong>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;