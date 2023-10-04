import React, { useEffect } from 'react';
import  { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './SignIn.css';
import { AuthContext } from '../../../Context/AuthProvider';


const SignIn = () => {
    const { login, googleLogin } = useContext(AuthContext);
    // const location = useLocation();
    // const navigate = useNavigate();
    // const from = location.state?.from?.pathname || "/";

    // const [loginEmail, setLoginEmail] = useState("");
    // const [token] = useJwtToken(loginEmail);
    // if (token) {
    //   navigate(from, { replace: true });
    // }

    // useEffect(() => {
    //   if (isSuccess) {
    //     console.log("post successfull !!");
    //   }
    //   if (isError) {
    //     console.log(isError.message);
    //   }
    // }, [isSuccess, isError]);

    const handlerLogin = (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      login(email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
        //   setLoginEmail(user.email);
        
          alert("Login successfull!!");
          form.reset();
        //   navigate(from, {replace: true});
        })
        .catch((err) => {
          console.log(err.message);
        });
      console.log(email, password);
    };

    const handlerLoginGoogle = () => {
      googleLogin()
        .then((result) => {
          const user = result.user;
          const userData = {
            name: user.displayName,
            email: user.email,
            role: "user",
          };
          
          
            fetch(`http://localhost:5000/googleUsers`, {
              method: "PUT",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(userData),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                // setLoginEmail(userData.email);
                alert("google login successfull!!")
              });

          // console.log("userData", userData);
        })
        .catch((error) => console.log(error));
    };
    return (
      <div>
        <div className="hero bg-white min-h-screen loginBackgroud ">
          <div className="hero-content flex-col ">
            <form
              onSubmit={handlerLogin}
              className="card flex-shrink-0 w-full shadow-2xl bg-base-100"
            >
              <div className="card-body bg-white w-full md:w-[400px]">
                <h1 className="text-2xl text-center font-bold text-black">
                  Login now!
                </h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered bg-white"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered bg-white"
                    required
                  />
                  <label className="label">
                    <Link href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </Link>
                  </label>
                </div>

                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="submit"
                    className="btn bg-[#FF5A5F] text-white"
                  ></input>
                </div>
                <div className="flex justify-center items-center">
                  <hr className="border-2 border-slate-200 w-1/3" />
                  <span className="font-bold mx-3">OR</span>
                  <hr className="border-2 border-slate-200 w-1/3" />
                </div>
                <div>
                  <button
                    onClick={handlerLoginGoogle}
                    className="btn w-full bg-[#FF5A5F] text-white"
                  >
                    Google-login
                  </button>
                </div>
              </div>
            </form>
            <p className="text-white text-lg">
              Have a new user?{" "}
              <Link to="/signUp">
                <strong className='link'>Sign Up</strong>
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
};

export default SignIn;