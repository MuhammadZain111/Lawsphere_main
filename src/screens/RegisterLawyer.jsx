import React from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


function RegisterLawyer() {
  
  const navigate=useNavigate();

  const goToDashboard = () => {
    navigate('/lawyerDashboard');  
  };


  // const handleLogin = async () => {
    
  //   const isValid = await validateLogin(email, password); 
  
  //   if (isValid) {
  //     goToDashboard();  
  //   } else {
  //     alert("Invalid login credentials."); // Show error to user
  //   }
  // };
  

const [isRegistering, setIsRegistering] = useState(false);

return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isRegistering ? "Lawyer Registration" : "Lawyer Login"}
        </h2>
        <form className="space-y-4">
          {isRegistering && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Law Firm (Optional)</label>
                <input
                  type="text"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                  placeholder="Doe Legal Group"
                />
              </div>
            </>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
              placeholder="lawyer@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
              placeholder="********"
            />
          </div>
          {isRegistering && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                placeholder="********"
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            {isRegistering ? "Register" : "Login"}
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          {isRegistering ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
           onClick={() => {
              setIsRegistering(!isRegistering);
              goToDashboard();
          }}
         className="text-blue-600 hover:underline">
       {isRegistering ? "Login" : "Register"}
         </button>

        </p>
      </div>
    </div>
  );
}
 
export default RegisterLawyer
