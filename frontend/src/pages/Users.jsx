// import { useEffect, useState }
// from "react";

// import DashboardLayout
// from "../layouts/DashboardLayout";

// import API from "../services/api";

// const Users = () => {

//   const [users, setUsers] =
//     useState([]);

//   const [formData, setFormData] =
//     useState({
//       name: "",
//       email: "",
//       password: "",
//       role: "staff",
//     });






//   // FETCH USERS
//   const fetchUsers =
//     async () => {

//       try {

//         const res =
//           await API.get("/users");

//         setUsers(res.data);

//       } catch (err) {

//         console.log(err);

//       }
//     };







//   useEffect(() => {

//     fetchUsers();

//   }, []);








//   // CREATE USER
//   const handleSubmit =
//     async (e) => {

//       e.preventDefault();

//       try {

//         await API.post(
//           "/users",
//           formData
//         );



//         setFormData({

//           name: "",

//           email: "",

//           password: "",

//           role: "staff",

//         });




//         fetchUsers();

//       } catch (err) {

//         console.log(err);

//         alert(
//           err.response?.data?.error
//         );

//       }
//     };








//   // DELETE USER
//   const deleteUser =
//     async (id) => {

//       try {

//         await API.delete(
//           `/users/${id}`
//         );

//         fetchUsers();

//       } catch (err) {

//         console.log(err);

//       }
//     };










//   return (

//     <DashboardLayout>

//       <h1 className="text-4xl font-bold mb-2">
//         Users
//       </h1>

//       <p className="text-gray-500 mb-8">
//         Manage company users
//       </p>








//       {/* FORM */}
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-6 rounded-xl shadow mb-10"
//       >

//         <div className="grid md:grid-cols-4 gap-5">




//           {/* NAME */}
//           <input
//             type="text"
//             placeholder="Name"
//             className="border p-3 rounded-lg"
//             value={formData.name}
//             onChange={(e) =>
//               setFormData({

//                 ...formData,

//                 name:
//                   e.target.value,

//               })
//             }
//           />







//           {/* EMAIL */}
//           <input
//             type="email"
//             placeholder="Email"
//             className="border p-3 rounded-lg"
//             value={formData.email}
//             onChange={(e) =>
//               setFormData({

//                 ...formData,

//                 email:
//                   e.target.value,

//               })
//             }
//           />








//           {/* PASSWORD */}
//           <input
//             type="password"
//             placeholder="Password"
//             className="border p-3 rounded-lg"
//             value={formData.password}
//             onChange={(e) =>
//               setFormData({

//                 ...formData,

//                 password:
//                   e.target.value,

//               })
//             }
//           />








//           {/* ROLE */}
//           <select
//             className="border p-3 rounded-lg"
//             value={formData.role}
//             onChange={(e) =>
//               setFormData({

//                 ...formData,

//                 role:
//                   e.target.value,

//               })
//             }
//           >

//             <option value="staff">
//               Staff
//             </option>

//             <option value="manager">
//               Manager
//             </option>

//           </select>

//         </div>








//         <button
//           className="bg-indigo-600 text-white px-6 py-3 rounded-lg mt-5"
//         >
//           Create User
//         </button>

//       </form>









//       {/* USERS TABLE */}
//       <div className="bg-white rounded-xl shadow overflow-hidden">

//         <table className="w-full">

//           <thead className="bg-gray-100">

//             <tr>

//               <th className="p-4 text-left">
//                 Name
//               </th>

//               <th className="p-4 text-left">
//                 Email
//               </th>

//               <th className="p-4 text-left">
//                 Role
//               </th>

//               <th className="p-4 text-left">
//                 Actions
//               </th>

//             </tr>

//           </thead>








//           <tbody>

//             {users.map((user) => (

//               <tr
//                 key={user._id}
//                 className="border-t"
//               >

//                 <td className="p-4">
//                   {user.name}
//                 </td>

//                 <td className="p-4">
//                   {user.email}
//                 </td>

//                 <td className="p-4 capitalize">
//                   {user.role}
//                 </td>

//                 <td className="p-4">

//                   <button
//                     onClick={() =>
//                       deleteUser(
//                         user._id
//                       )
//                     }
//                     className="bg-red-500 text-white px-4 py-2 rounded-lg"
//                   >
//                     Delete
//                   </button>

//                 </td>

//               </tr>

//             ))}

//           </tbody>

//         </table>

//       </div>

//     </DashboardLayout>

//   );
// };

// export default Users;



import {
  useEffect,
  useState,
  useCallback,
} from "react";

import Layout from "../layouts/Layout";

import API from "../services/api";

const Users = () => {

  const [users, setUsers] =
    useState([]);

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
      role: "staff",
    });



  // FETCH USERS
  const fetchUsers =
    useCallback(async () => {

      try {

        const res =
          await API.get("/users");

        setUsers(res.data);

      } catch (err) {

        console.log(err);

      }

    }, []);




  // LOAD USERS
  useEffect(() => {

    fetchUsers();

  }, [fetchUsers]);




  // HANDLE INPUT
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

  };




  // CREATE USER
  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        await API.post(
          "/users",
          formData
        );



        setFormData({
          name: "",
          email: "",
          password: "",
          role: "staff",
        });



        fetchUsers();

      } catch (err) {

        console.log(err);

        alert(
          err.response?.data?.error
        );

      }

    };




  // DELETE USER
  const deleteUser =
    async (id) => {

      try {

        await API.delete(
          `/users/${id}`
        );

        fetchUsers();

      } catch (err) {

        console.log(err);

      }

    };




  return (

    <Layout>

      <div className="space-y-8">

        {/* HEADER */}
        <div>

          <h1 className="text-4xl font-bold text-gray-900">
            Users
          </h1>

          <p className="text-gray-500 mt-2 text-lg">
            Manage company users
          </p>

        </div>



        {/* USER FORM */}
        <form
          onSubmit={handleSubmit}
          className="
            bg-white
            p-6
            rounded-2xl
            shadow-sm
            border
          "
        >

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

            {/* NAME */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="
                border
                border-gray-300
                p-3
                rounded-xl
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500
              "
              required
            />



            {/* EMAIL */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="
                border
                border-gray-300
                p-3
                rounded-xl
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500
              "
              required
            />



            {/* PASSWORD */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="
                border
                border-gray-300
                p-3
                rounded-xl
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500
              "
              required
            />



            {/* ROLE */}
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="
                border
                border-gray-300
                p-3
                rounded-xl
                focus:outline-none
                focus:ring-2
                focus:ring-indigo-500
              "
            >

              <option value="staff">
                Staff
              </option>

              <option value="manager">
                Manager
              </option>

            </select>

          </div>



          {/* BUTTON */}
          <button
            type="submit"
            className="
              mt-6
              bg-indigo-600
              hover:bg-indigo-700
              transition
              text-white
              px-8
              py-3
              rounded-xl
              font-semibold
            "
          >
            Create User
          </button>

        </form>



        {/* USERS TABLE */}
        <div
          className="
            bg-white
            rounded-2xl
            shadow-sm
            border
            overflow-hidden
          "
        >

          <div className="overflow-x-auto">

            <table className="w-full min-w-[850px]">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-5 text-left">
                    Name
                  </th>

                  <th className="p-5 text-left">
                    Email
                  </th>

                  <th className="p-5 text-left">
                    Role
                  </th>

                  <th className="p-5 text-left">
                    Actions
                  </th>

                </tr>

              </thead>



              <tbody>

                {users.map((user) => (

                  <tr
                    key={user._id}
                    className="
                      border-t
                      hover:bg-gray-50
                      transition
                    "
                  >

                    {/* NAME */}
                    <td className="p-5 font-medium">
                      {user.name}
                    </td>



                    {/* EMAIL */}
                    <td className="p-5">
                      {user.email}
                    </td>



                    {/* ROLE */}
                    <td className="p-5">

                      <span
                        className={`
                          px-3
                          py-1
                          rounded-full
                          text-sm
                          font-semibold
                          ${
                            user.role === "manager"
                              ? "bg-indigo-100 text-indigo-700"
                              : "bg-green-100 text-green-700"
                          }
                        `}
                      >
                        {user.role}
                      </span>

                    </td>



                    {/* ACTION */}
                    <td className="p-5">

                      <button
                        onClick={() =>
                          deleteUser(
                            user._id
                          )
                        }
                        className="
                          bg-red-500
                          hover:bg-red-600
                          transition
                          text-white
                          px-4
                          py-2
                          rounded-xl
                          font-medium
                        "
                      >
                        Delete
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </Layout>

  );

};

export default Users;