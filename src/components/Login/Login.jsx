import React from "react";
import Header from "../Header/Header";

const Login = () => {
  return (
    // Login form with tailwind
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white rounded-lg shadow-xl p-10">
          <h2 className="text-3xl font-bold mb-10 text-center">Login</h2>
          <form>
            <div className="mb-5">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-5">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Login
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="/registration"
              >
                Register
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
