const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="bg-white border-b px-8 py-5 flex justify-between items-center">

      <div>

        <h1 className="text-3xl font-bold">
          Welcome {user?.name}
        </h1>

        <p className="text-gray-500 mt-1">
          {user?.companyName}
        </p>

      </div>

      <button
        onClick={() => {
          localStorage.clear();
          window.location.href = "/";
        }}
        className="
          bg-red-500
          hover:bg-red-600
          text-white
          px-6
          py-3
          rounded-xl
          font-semibold
        "
      >
        Logout
      </button>

    </div>
  );
};

export default Navbar;