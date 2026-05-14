// import {
//   useState
// } from "react";

// import {
//   Link,
//   useNavigate
// } from "react-router-dom";

// import API from "../services/api";

// export default function Register() {

//   const navigate = useNavigate();

//   const [form, setForm] =
//     useState({

//       companyName: "",
//       name: "",
//       email: "",
//       password: "",

//     });

//   const handleChange = (e) => {

//     setForm({

//       ...form,

//       [e.target.name]:
//         e.target.value,

//     });

//   };

//   const handleSubmit = async (e) => {

//     e.preventDefault();

//     try {

//       await API.post(
//         "/auth/register",
//         form
//       );

//       alert(
//         "Registration successful"
//       );

//       navigate("/");

//     } catch (err) {

//       alert(
//         err.response?.data?.error ||
//         "Registration failed"
//       );

//     }

//   };

//   return (

//     <div className="min-h-screen bg-gradient-to-r from-black via-blue-950 to-indigo-950 flex items-center justify-center">

//       <form
//         onSubmit={handleSubmit}
//         className="bg-white w-[450px] p-10 rounded-3xl shadow-2xl"
//       >

//         <h1 className="text-5xl font-bold text-center">
//           Register
//         </h1>

//         <input
//           type="text"
//           name="companyName"
//           placeholder="Company Name"
//           className="w-full border p-4 rounded-2xl mt-8"
//           onChange={handleChange}
//         />

//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           className="w-full border p-4 rounded-2xl mt-5"
//           onChange={handleChange}
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           className="w-full border p-4 rounded-2xl mt-5"
//           onChange={handleChange}
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           className="w-full border p-4 rounded-2xl mt-5"
//           onChange={handleChange}
//         />

//         <button
//           className="w-full bg-green-600 hover:bg-green-700 text-white p-4 rounded-2xl mt-8 text-2xl font-semibold"
//         >
//           Register
//         </button>

//         <p className="text-center mt-8 text-gray-500">

//           Already have account?

//           <Link
//             to="/"
//             className="text-indigo-600 font-bold ml-2"
//           >
//             Login
//           </Link>

//         </p>

//       </form>

//     </div>

//   );

// }


import {
  useState
} from "react";

import {
  Link,
  useNavigate
} from "react-router-dom";

import API from "../services/api";

export default function Register() {

  const navigate =
    useNavigate();

  const [form, setForm] =
    useState({
      companyName: "",
      name: "",
      email: "",
      password: "",
    });



  // HANDLE INPUT
  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });

  };



  // HANDLE REGISTER
  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        await API.post(
          "/auth/register",
          form
        );

        alert(
          "Registration successful"
        );

        navigate("/");

      } catch (err) {

        alert(
          err.response?.data?.error ||
          "Registration failed"
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

        {/* HEADER */}
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
            Register
          </h1>

          <p className="text-gray-500 mt-4 text-lg">
            Create your inventory account
          </p>

        </div>



        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* COMPANY NAME */}
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
              Company Name
            </label>

            <input
              type="text"
              name="companyName"
              placeholder="Enter company name"
              value={form.companyName}
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



          {/* NAME */}
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
              Your Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
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
              value={form.email}
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
              placeholder="Enter password"
              value={form.password}
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



          {/* REGISTER BUTTON */}
          <button
            type="submit"
            className="
              w-full
              bg-green-600
              hover:bg-green-700
              transition
              text-white
              text-xl
              font-bold
              py-4
              rounded-2xl
              shadow-md
              mt-4
            "
          >
            Register
          </button>

        </form>



        {/* LOGIN LINK */}
        <div className="text-center mt-8">

          <p className="text-gray-500">

            Already have an account?

            <Link
              to="/"
              className="
                ml-2
                text-indigo-600
                font-bold
                hover:text-indigo-800
              "
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>

  );

}