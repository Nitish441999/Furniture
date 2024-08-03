import React, { useContext, useState } from 'react';
import Layout from '../../Component/Layout/Layout';
import { useNavigate } from 'react-router-dom';
import myContext from '../../Context/myContext';
import toast, {Toaster} from 'react-hot-toast';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import {auth, fireDB} from "../../Firebase/FirebaseConfig"



function Signup() {
  const context = useContext(myContext);
  // const {Loading, setLoading}= context;

  const navigate = useNavigate();

  const [userSignup, setUserSignup] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    conformPassword: "",
    mobile: "",
    role:"user"
  });

  const userSignupFunction = async  (e) => {
    e.preventDefault()
    
    // Validation
    if (userSignup.name === "" || userSignup.lastname === "" || userSignup.email === "" || userSignup.mobile === "" || userSignup.password === "" || userSignup.conformPassword === "") {
      toast.error("All fields are required");
    }
    //  setLoading(true);
    try {
      const users = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password);
      const user = {
        name: userSignup.name,
        lastname: userSignup.lastname,
        email: users.user.email,
        mobile: userSignup.mobile,
        role: userSignup.role,
        uid: users.user.uid,
        time:Timestamp.now(),
        date: new Date().toLocaleString(
          "en-US",
          {
              month: "short",
              day: "2-digit",
              year: "numeric",
          }
      )

      }
      console.log(user)

      const userRefrence = collection(fireDB, "user")

      addDoc(userRefrence, user);

      setUserSignup({
        name: "",
    lastname: "",
    email: "",
    password: "",
    conformPassword: "",
    mobile: "",

      })
      toast.success("Signup Successfully");
      // setLoading(false)
      navigate("/signin");
      
    } catch (error) {
      console.log(error);
      // setLoading(false);
      
    }

    
  };

  return (
    <Layout>
    <Toaster/>
      <section className="bg-white dark:bg-gray-900">
        <div className="flex justify-center items-center min-h-screen">
          <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5 shadow-md shadow-gray-600 rounded-xl">
            <div className="w-full">
              <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white text-center">
                Get your free account now.
              </h1>

              <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2" onSubmit={userSignupFunction} >
                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    value={userSignup.name}
                    onChange={(e) => setUserSignup({ ...userSignup, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last Name</label>
                  <input
                    type="text"
                    placeholder="Snow"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    value={userSignup.lastname}
                    onChange={(e) => setUserSignup({ ...userSignup, lastname: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Phone Number</label>
                  <input
                    type="text"
                    placeholder="XXX-XX-XXXX-XXX"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    value={userSignup.mobile}
                    onChange={(e) => setUserSignup({ ...userSignup, mobile: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                  <input
                    type="email"
                    placeholder="johnsnow@example.com"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    value={userSignup.email}
                    onChange={(e) => setUserSignup({ ...userSignup, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    value={userSignup.password}
                    onChange={(e) => setUserSignup({ ...userSignup, password: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Confirm Password</label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    value={userSignup.conformPassword}
                    onChange={(e) => setUserSignup({ ...userSignup, conformPassword: e.target.value })}
                  />
                </div>

                <div className="flex items-center justify-between md:col-span-2">
                  <button
                    type="submit"
                    
                    className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#B88E2F] rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 "
                  >
                    <span className='text-center'>Sign Up</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </form>

              <div className="mt-4 text-sm flex justify-between items-center">
                <p className="mr-3 md:mr-0">If you have an account..</p>
                <button
                  className="hover:border register text-white bg-[#002D74] hover:border-gray-400 rounded-xl py-2 px-5 hover:scale-110 hover:bg-[#002c7424] font-semibold duration-300"
                  onClick={() => navigate('/signin')}
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Signup;
