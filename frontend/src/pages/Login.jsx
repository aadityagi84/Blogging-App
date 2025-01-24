import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";

const Login = () => {
  return (
    <div>
      <div className=" h-[100vh] bg-[url('https://img.freepik.com/premium-photo/glass-building-with-word-company-it_1295754-30727.jpg')] bg-cover bg-center ">
        <div className="bg-[linear-gradient(46deg,_rgba(33,33,33,0.84)_0%,_rgba(66,66,66,0.24)_178.98%)] w-full h-full   ">
          <div className="max-w-[1440px] w-[90%] mx-auto    h-full relative  ">
            <div className="absolute bottom-0  w-full ">
              <div className="grid lg:grid-cols-2 lg:gap-0 gap-10 items-center  ">
                <div className="text-white  ">
                  <h2 className="text-[30px] leading-[20px] font-medium">
                    {" "}
                    Hello <span className="text-red-600"> Admin!</span>
                  </h2>
                  <h1 className="text-[47px] font-semibold ">
                    Building the Future...
                  </h1>
                  <p className="text-[20px] w-[70%]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="  bg-white rounded-tl-md  rounded-tr-md shadow-md border py-10 px-14">
                  <p className="text-red-600 font-medium">WELCOME BACK</p>
                  <h2 className="text-[22px] font-semibold pb-4 ">
                    Log In to your Account
                  </h2>
                  <div className=" mt-6">
                    <form action="">
                      <div className=" mt-4">
                        <label htmlFor="inp" className="inp ">
                          <input
                            type="email"
                            id="email"
                            className="w-full py-4 px-4 border-2 border-[#424242] rounded-xl outline-none "
                            placeholder="&nbsp;"
                            required
                          />
                          <span className="label bg-white px-4">Email</span>
                          <span className="focus-bg"></span>
                        </label>
                      </div>
                      <div className=" mt-6">
                        <label htmlFor="inp" className="inp ">
                          <input
                            type="password"
                            id="password"
                            className="w-full py-4 px-4 border-2  border-[#424242] rounded-xl outline-none "
                            placeholder="&nbsp;"
                            required
                          />
                          <span className="label bg-white px-4">Password </span>
                          <span className="focus-bg"></span>
                        </label>
                      </div>
                      <div className="flex items-center justify-between py-2 ">
                        <div className=""></div>
                        <div className=" font-medium text-[#424242]">
                          <a href="">Forgot Password?</a>
                        </div>
                      </div>
                      <div className=" mt-4">
                        <button
                          type="submit"
                          className="bg-red-600 text-white  py-4 w-full  rounded-xl"
                        >
                          CONTINUE
                        </button>
                      </div>
                      <div className="my-4 grid grid-cols-[1fr,50px,1fr] gap-2 items-center justify-center ">
                        <div className="h-[2px] bg-[#E0E0E0] w-full"></div>
                        <div className="text-[#000] font-semibold text-center  ">
                          Or
                        </div>
                        <div className="h-[2px] bg-[#E0E0E0] w-full"></div>
                      </div>

                      <div>
                        <div className="  flex flex-col items-center  justify-center text-center  space-y-2">
                          {/* Google Login */}
                          <button className="flex items-center justify-center  w-full px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-100">
                            <FaGoogle className="text-red-500 mr-3" />
                            <span className="text-gray-700">
                              Log In with Google
                            </span>
                          </button>

                          {/* Facebook Login */}
                          <button className="flex items-center justify-center w-full px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-100">
                            <FaFacebookF className="text-blue-500 mr-3" />
                            <span className="text-gray-700">
                              Log In with Facebook
                            </span>
                          </button>

                          {/* Apple Login */}
                          <button className="flex items-center justify-center w-full px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-100">
                            <FaApple className="text-black mr-3" />
                            <span className="text-gray-700">
                              Log In with Apple
                            </span>
                          </button>
                        </div>

                        {/* Signup Text */}
                        <p className="mt-6 text-center text-gray-600">
                          New User?{" "}
                          <a
                            href="#"
                            className="font-bold text-black hover:underline"
                          >
                            SIGN UP HERE
                          </a>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
