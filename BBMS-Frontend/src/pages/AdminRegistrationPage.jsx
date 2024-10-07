import React, { useState } from 'react';
import image from '../assets/background.png';

const AdminRegistrationPage = () => {
  const [formData, setFormData] = useState({
    uname: '',
    eid: '',
    fname: '',
    password: '',
    repeatPassword: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false); 


  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    // Password validation
    if (formData.password !== formData.repeatPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true); // Start loading

    try {
      const response = await fetch('http://localhost:8080/api/v1/register/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Employee registered successfully');
        setFormData({ uname: '', eid: '', fname: '', password: '', repeatPassword: '' });
      } else {
        setError(data.message || 'Registration failed');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }

    setIsLoading(false); // End loading
  };

  return (
    <div className="flex flex-col justify-center min-h-screen py-12 bg-gray-100 sm:px-6 lg:px-8" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-3xl font-extrabold text-center text-white">
        Create a new account
        </h2>
      
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="uname" className="block text-sm font-medium text-gray-700">
                User Name
              </label>
              <div className="mt-1">
                <input
                  id="uname"
                  name="uname"
                  type="text"
                  autoComplete="uname"
                  required
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  value={formData.uname}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="eid" className="block text-sm font-medium text-gray-700">
                Employee ID
              </label>
              <div className="mt-1">
                <input
                  id="eid"
                  name="eid"
                  type="text" // Fixed the type
                  autoComplete="eid"
                  required
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  value={formData.eid}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="fname" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <div className="mt-1">
                <input
                  id="fname"
                  name="fname"
                  type="text"
                  autoComplete="name"
                  required
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  value={formData.fname}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="repeatPassword" className="block text-sm font-medium text-gray-700">
                Repeat Password
              </label>
              <div className="mt-1">
                <input
                  id="repeatPassword"
                  name="repeatPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  value={formData.repeatPassword}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                disabled={isLoading} // Loading state for button
              >
                {isLoading ? 'Registering...' : 'Register'}
              </button>
            </div>
          </form>

          {/* <div className="mt-6">
            <p className="text-sm text-center text-gray-600">
              Already have an account?{' '}
              <a href="/login" className="font-medium text-red-600 hover:text-red-500">
                Sign in here
              </a>
            </p>
          </div> */}

          {error && (
            <div className="relative px-4 py-3 mt-4 text-red-700 bg-red-100 border border-red-400 rounded" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          )}

          {success && (
            <div className="relative px-4 py-3 mt-4 text-green-700 bg-green-100 border border-green-400 rounded" role="alert">
              <span className="block sm:inline">{success}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminRegistrationPage;
