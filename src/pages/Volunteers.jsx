import { Link } from "react-router-dom";
import VolunteersList from "../components/VolunteersList";
function Volunteers() {
  return (
    <div className="container mx-auto px-4 py-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Our Volunteers
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Meet our amzing team of volunteers making diffrence in the community.
          <br />
          <Link
            to="/register"
            className="text-primary-600 hover:text-primary-700"
          >
            Want to join? Register here
          </Link>
        </p>
      </div>

      <VolunteersList />
    </div>
  );
}

export default Volunteers;
