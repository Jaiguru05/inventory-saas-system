import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div
        style={{
          marginLeft: "256px",
          width: "calc(100% - 256px)",
          minHeight: "100vh",
        }}
      >

        {/* NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <main className="p-6">
          {children}
        </main>

      </div>

    </div>
  );
};

export default Layout;