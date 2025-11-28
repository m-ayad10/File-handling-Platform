import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="w-full bg-white/10 backdrop-blur-md shadow-2xl border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div  className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <div  className="flex cursor-pointer items-center space-x-4">
            {/* Cloud Icon with gradient */}
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-200">
              <svg
                className="w-6 h-6 text-white drop-shadow-sm"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
              </svg>
            </div>

            {/* Brand Name with enhanced styling */}
            <div className="flex flex-col">
              <h1 onClick={() => navigate("/")} className="text-2xl hover:cursor-pointer sm:text-3xl lg:text-4xl font-black text-gray-800 tracking-tight drop-shadow-sm">
                CloudBox
              </h1>
              <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-1 shadow-md"></div>
            </div>
          </div>
          <span className="cursor-pointer"  onClick={() => navigate("/login")}>
          <button
            className="
  bg-gradient-to-r from-blue-500 to-purple-600 
  hover:from-blue-600 hover:to-purple-700 
  text-white font-semibold 
  py-2 px-4 
  sm:py-2.5 sm:px-6 
  md:py-2.5 md:px-6 
  lg:py-3 lg:px-8 
  xl:py-4 xl:px-12
  rounded-xl 
  sm:rounded-2xl
  shadow-md 
  sm:shadow-lg 
  hover:shadow-xl 
  cursor-pointer
  transform 
  hover:scale-105 
  transition-all 
  duration-200 
  border 
  border-white/20
  text-sm
  sm:text-base
  md:text-lg
  w-auto
  min-w-[80px]
  sm:min-w-[100px]
"
           onClick={() => navigate("/login")}
          >
            Login
          </button>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
