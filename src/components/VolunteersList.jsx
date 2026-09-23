import React, { useState, useEffect } from "react";
import axios from "axios";
import { Mail, Phone } from "lucide-react";

//volunteersList component (combines card and list functionality)
const VolunteersList = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchVolunteers = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await axios.get(
          "http://localhost:3002/api/volunteers",
        );
        setVolunteers(response.data);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchVolunteers();
  }, []);

  const formDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-Us", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 md:p-8 max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Volunteer Directory
        </h2>
      </div>

      {loading && (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 rounded-md p-4 mb-6">
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && volunteers.length === 0 && (
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <p className="text-gray-600">
            No volunteers found. Be the first to register!
          </p>
        </div>
      )}



      {!loading && !error && volunteers.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-slide-up">
          {volunteers.map((volunteer) => (
            <div
              key={volunteer.id}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-10
                              hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                        {volunteer.name}
                  </h3>
                  {volunteer.createdAt && (
                    <p className="text-sm text-gray-500">
                      Joined: {formDate(volunteer.createdAt)}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                  <div className="flex items-start">
                        <Mail className="h-5 w-5 text-gray500 mt-0.5 mr-2 shrink-0" />
                        <p className="text-gray-700 break-all">{volunteer.email}</p>
                  </div>

                  <div className="flex items-start">
                        <Phone className="h-5 w-5 text-gray-500 mt-0.5 mr-2 shrink-0"/>
                        <p className="text-gray-700">{volunteer.phone}</p>
                  </div>
            </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

//export the component
export default VolunteersList;
