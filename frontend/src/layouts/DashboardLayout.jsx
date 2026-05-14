import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex bg-gray-100">
      <Sidebar />

      <div className="flex-1 min-h-screen">
        <Navbar />

        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}