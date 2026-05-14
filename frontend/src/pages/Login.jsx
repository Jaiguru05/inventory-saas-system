// import { useState } from "react";

// import { Link, useNavigate }
// from "react-router-dom";

// import API from "../services/api";

// const Login = () => {

//   const navigate =
//     useNavigate();

//   const [formData, setFormData] =
//     useState({

//       email: "",
//       password: "",

//     });






//   const handleChange = (e) => {

//     setFormData({

//       ...formData,

//       [e.target.name]:
//         e.target.value,

//     });

//   };








//   const handleSubmit =
//     async (e) => {

//       e.preventDefault();

//       try {

//         const res =
//           await API.post(
//             "/auth/login",
//             formData
//           );






//         // SAVE TOKEN
//         localStorage.setItem(
//           "token",
//           res.data.token
//         );






//         // SAVE USER
//         localStorage.setItem(
//           "user",
//           JSON.stringify(
//             res.data.user
//           )
//         );







//         navigate("/dashboard");

//       } catch (err) {

//         console.log(err);

//         alert(
//           err.response?.data?.error
//           || "Login failed"
//         );

//       }
//     };










//   return (

//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black via-blue-950 to-indigo-950">

//       <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-10">




//         {/* TITLE */}
//         <h1 className="text-6xl font-black text-center leading-tight">
//           Inventory
//           <br />
//           SaaS
//         </h1>






//         <p className="text-center text-gray-500 mt-4 mb-10">
//           Welcome back
//         </p>








//         {/* FORM */}
//         <form onSubmit={handleSubmit}>





//           {/* EMAIL */}
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full border p-5 rounded-2xl mb-6 text-lg"
//             required
//           />








//           {/* PASSWORD */}
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             className="w-full border p-5 rounded-2xl mb-8 text-lg"
//             required
//           />








//           {/* BUTTON */}
//           <button
//             type="submit"
//             className="w-full bg-indigo-600 hover:bg-indigo-700 transition text-white text-2xl font-bold py-5 rounded-2xl"
//           >
//             Login
//           </button>

//         </form>









//         {/* REGISTER LINK */}
//         <p className="text-center text-gray-500 mt-8 text-lg">

//           Don&apos;t have an account?

//           {" "}

//           <Link
//             to="/register"
//             className="text-indigo-600 font-bold"
//           >
//             Register
//           </Link>

//         </p>

//       </div>

//     </div>

//   );
// };

// export default Login;


import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import API from "../services/api";

const Login = () => {

  const navigate =
    useNavigate();

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });



  // HANDLE INPUT
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

  };



  // HANDLE LOGIN
  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        const res =
          await API.post(
            "/auth/login",
            formData
          );



        // SAVE TOKEN
        localStorage.setItem(
          "token",
          res.data.token
        );



        // SAVE USER
        localStorage.setItem(
          "user",
          JSON.stringify(
            res.data.user
          )
        );



        navigate("/dashboard");

      } catch (err) {

        console.log(err);

        alert(
          err.response?.data?.error
          || "Login failed"
        );

      }

    };



  return (

    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-gradient-to-br
        from-black
        via-slate-900
        to-indigo-950
        px-4
      "
    >

      <div
        className="
          w-full
          max-w-md
          bg-white
          rounded-3xl
          shadow-2xl
          p-8
          md:p-10
        "
      >

        {/* LOGO */}
        <div className="text-center mb-10">

          <h1
            className="
              text-5xl
              md:text-6xl
              font-black
              text-gray-900
              leading-tight
            "
          >
            Inventory
            <br />
            SaaS
          </h1>

          <p className="text-gray-500 mt-4 text-lg">
            Welcome back
          </p>

        </div>



        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* EMAIL */}
          <div>

            <label
              className="
                block
                text-sm
                font-semibold
                text-gray-700
                mb-2
              "
            >
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="
                w-full
                border
                border-gray-300
                p-4
                rounded-2xl
                text-lg
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500
                focus:border-indigo-500
                transition
              "
              required
            />

          </div>



          {/* PASSWORD */}
          <div>

            <label
              className="
                block
                text-sm
                font-semibold
                text-gray-700
                mb-2
              "
            >
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="
                w-full
                border
                border-gray-300
                p-4
                rounded-2xl
                text-lg
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500
                focus:border-indigo-500
                transition
              "
              required
            />

          </div>



          {/* LOGIN BUTTON */}
          <button
            type="submit"
            className="
              w-full
              bg-indigo-600
              hover:bg-indigo-700
              transition
              text-white
              text-xl
              font-bold
              py-4
              rounded-2xl
              shadow-md
            "
          >
            Login
          </button>

        </form>



        {/* REGISTER */}
        <div className="text-center mt-8">

          <p className="text-gray-500">

            Don&apos;t have an account?

            <Link
              to="/register"
              className="
                ml-2
                text-indigo-600
                font-bold
                hover:text-indigo-800
              "
            >
              Register
            </Link>

          </p>

        </div>

      </div>

    </div>

  );

};

export default Login;