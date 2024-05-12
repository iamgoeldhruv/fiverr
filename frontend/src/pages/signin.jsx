import React, { useState } from "react";
import axios from 'axios';

export default function Signin() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSignIn = () => {
    console.log(formData); 
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match, please retry");
    } else {
      const postData = {
        username: formData.username,
        email: formData.email,
        password: formData.password
      };
      axios.post("http://localhost:3001/api/users/signup", postData, {
        headers: {
          'Content-Type': 'application/json',
          
        }
      })
      .then(response => {
        if (response.status === 200) {
          alert("signup successfull")

        }
      })
      .catch(error => {
        console.log(error);
      });
    }
  };
  

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              name="username" // Add name attribute for username
              onChange={handleInputChange} // Add onChange event handler
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
              name="email" // Add name attribute for email
              onChange={handleInputChange} // Add onChange event handler
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              name="password" // Add name attribute for password
              onChange={handleInputChange} // Add onChange event handler
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmpassword">
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmpassword"
              type="password"
              placeholder="******************"
              name="confirmPassword" // Add name attribute for confirmPassword
              onChange={handleInputChange} // Add onChange event handler
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSignIn} // Call handleSignIn when button is clicked
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
