import {
  FaFacebook,
  FaLinkedin,
  FaGoogle,
  FaRegEnvelope,
} from "react-icons/fa";

import { MdLockOutline } from "react-icons/md";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <div className="bg-white text-black rounded-2xl shadow-2xl flex w-2/3 max-w-4xl text-center overflow-hidden">
        {/* Sign in section */}
        <div className="w-3/5 p-5">
          <div className="text-left font-bold">
            <span className="text-gray-500">Company</span>Name
          </div>
          <div className="py-10">
            <h2 className="text-3xl font-bold text-black">Login</h2>
            <div className="border-2 w-10 border-black inline-block my-4"></div>
            {/*Social Login Section*/}
            <div className="flex justify-center my-2">
              <a
                href="#"
                className="border-2 border-gray-200 rounded-full p-3 mx-1"
              >
                <FaFacebook clasName="text-sm" />
              </a>
              <a
                href="#"
                className="border-2 border-gray-200 rounded-full p-3 mx-1"
              >
                <FaLinkedin clasName="text-sm" />
              </a>
              <a
                href="#"
                className="border-2 border-gray-200 rounded-full p-3 mx-1"
              >
                <FaGoogle clasName="text-sm" />
              </a>
            </div>
            <p className="text-white my-3">or use your email account</p>
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 w-64 p-4 flex items-center mb-3 h-10 rounded">
                <FaRegEnvelope className="text-gray-500 mr-2 text-sm" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="bg-gray-100 outline-none text-sm flex-1 text-gray-600"
                />
              </div>
              <div className="bg-gray-100 w-64 p-4 flex items-center mb-3 h-10 rounded">
                <MdLockOutline className="text-gray-500 mr-2" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="bg-gray-100 outline-none text-sm flex-1 text-gray-600"
                />
              </div>
              <div className="flex w-64 items-center justify-between">
                <label htmlFor="checkbox" className="flex text-xs items-center">
                  <input
                    type="checkbox"
                    name="remember"
                    className="mr-1"
                    aria-label="Remember me"
                  ></input>
                  Remember me
                </label>
                <a href="#" className="text-xs">
                  Forgot Password?
                </a>
              </div>
              <a
                href="#"
                className="border-2 border-black text-black rounded px-12 py-2 inline-block mt-10 font-semibold hover:bg-black hover:text-white transition duration-500 ease-in-out"
              >
                Sign In
              </a>
            </div>
          </div>
        </div>
        {/* Sign up section */}
        <div className="w-2/5 bg-black bg-cover bg-no-repeat">
          <div className="backdrop-blur-md text-white px-8 h-full py-40">
            <h2 className="text-3xl font-semibold mb-2">Create an account</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p>
              Fill in your personal information to be able to create an account
            </p>
            <a
              href="#"
              className="border-2 border-white rounded px-12 py-2 inline-block mt-10 font-semibold hover:bg-white hover:text-black transition duration-500 ease-in-out"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
