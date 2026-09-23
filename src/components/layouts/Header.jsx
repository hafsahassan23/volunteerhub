import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
const Header = () => {
  return (
    <header className="bg-gradient-to-r from-green-600 to-green-700 text-white shadow-md">
      <div className="containter mx-auto px-4 py-4 ">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className=" flex items-center space-x-2">
            <Heart className="h-8 w-8 text-white" />
            <h1 className="text-2xl font-bold">VolunteerHub</h1>
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li className="hover:text-green-200 transition-colors duration-200">
                <Link to="/volunteers">VolunteerHub</Link>
              </li>
              <li className="hover:text-green-200 transition-colors duration-200">
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
