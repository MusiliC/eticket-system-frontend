/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import styles, { buttons, layout } from '../../../style'
import axios from 'axios';

const Register = () => {

  const [users, setUsers] = useState([]);

  const [userData, setUserData] = useState({
    username: "",
    password: "",
    confirmPassword: ""
  })

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'http://localhost:8080/stadium/rest/user/list',
      );
 
    console.log(response.data);
    };
 
    fetchData();
  }, []);

    // Function to submit the form data using Axios
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post("http://localhost:8080/stadium/rest/user/register", userData);
        console.log("Post created:", response.data);
      } catch (error) {
        console.error("Error creating post:", error);
      }
    };

  return (
    <section className="bg-gray-50  dark:bg-gray-900">
    <div className={`${layout.smallComponentContainer}`}>
      <a
        href="#"
        className={`mb-5 flex items-center text-2xl font-semibold text-gray-900 dark:text-white`}
      >
        Eticket
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="headingTwo">Create account</h1>
          <form className="space-y-4 " action="#" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="labelStyling">
                Your email
              </label>
              <input
                type="email"
                name="username"
                id="username"
                value={userData.username}
                onChange={handleChange}
                className="inputStyling"
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div>
              <label htmlFor="password" className="labelStyling">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                value={userData.password}
                onChange={handleChange}
                className="inputStyling"
                required=""
              />
            </div>
            <div>
              <label htmlFor="password" className="labelStyling">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={userData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className="inputStyling"
                required=""
              />
            </div>
          
            <button type="submit" className={`${buttons.fullButton}`}>
            Register
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
             Have an account?{" "}
              <a
                href="/login"
                className="font-medium text-secondary-100 hover:underline dark:text-primary-500"
              >
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Register