import { Link } from 'react-router-dom'
import { UserPlus, Users, ArrowRight } from "lucide-react";

function Home() {
  return (
    <div className='container mx-auto px-4 py-12'>
      <div className="text-center mb-12">
            <h1 className='text-5xl font-bold text-gray-900 mb-6'>
                  Welcome To VolunteerHub
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                  {""}
                  make a diffrence in your community by sharing your time and skills.
                  Join our network of dedicated volunteers today!
            </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Inside her We make Two Card */}
            <Link 
            to="/volunteers"
            className='group bg-white rounded-xl shadow-md p-8 hover:shadow-lg 
            transition-all duration-300'
            >
            <div className="flex items-center mb-4">
              <Users className='h-8 w-8 text-green-600 mr-3' />
              <h2 className='text-2xl font-semibold text-gray-800'>
                  Veiw Volunteers
              </h2>
            </div>
            <p className='text-gray-600 mb-4 '>
                  Browse our network of dedicated volunteers and their skills.
            </p>
            <span className='text-green-600 font-medium group-hover:text-green-700'>
                  Browse Volunteers 
            </span>
            </Link>
            <Link 
            to="/register"
            className='group bg-white rounded-xl shadow-md p-8 hover:shadow-lg 
            transition-all duration-300'
            >
            <div className="flex items-center mb-4">
              <Users className='h-8 w-8 text-blue-400 mr-3' />
              <h2 className='text-2xl font-semibold text-gray-800'>
                  Became a Volunteers 
              </h2>
            </div>
            <p className='text-gray-600 mb-4 '>
                  Register as a volunteer and start making a diffrence today.
            </p>
            <span className='text-blue-400 font-medium group-hover:text-blue-400'>
                  Browse Volunteers
            </span>
            </Link>
      </div>
    </div>
  )
}

export default Home