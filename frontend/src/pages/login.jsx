import React, { useState } from "react";
import axios from 'axios';

export default function Login() {
  const [formData, setFormData] = useState({
   
   username: "",
    password: "",
    
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleLogIn = () => {
    console.log(formData); 
    
      const postData = {
        username: formData.username,
       
        password: formData.password
      };
      axios.post("http://localhost:3001/api/users/login", postData, {
        headers: {
          'Content-Type': 'application/json',
          
        }
      })
      .then(response => {
        if (response.status === 200) {
          alert("login successfull")

        }
        else if (response.status === 401){
          alert(response.error)
        }
      })
      .catch(error => {
        console.log(error);
      });
    
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
          
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleLogIn} 
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
