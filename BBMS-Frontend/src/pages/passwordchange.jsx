import React, { useState } from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';
import image from '../assets/background.png';

const passwordchange = () => {
    
    const [formData, setFormData] = useState({
        username: '',
        oldPassword: '',
        newPassword: '',
    });
    // console.log(formData);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        if (!formData.username || !formData.oldPassword) {
            setError('Please fill in all fields');
            return false;
        }
        if (formData.newPassword.length < 6) {
            setError('Password must be at least 6 characters long');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:8080/api/v1/register/changepassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: formData.username,
                    oldPassword: formData.oldPassword,
                    newPassword: formData.newPassword,
                }),
            });

            const data = await response.json();

            // console.log(data.message);
            if (response.ok && data.status) {
                setSuccess('Password Change successful! You can now log in.');
                console.log('Password Change successful', data);

            } else {
                setError(data.message || 'Password Change failed');
            }
        } catch (error) {
            setError('An error occurred. Please try again.');
            console.error('Password Change error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col justify-center min-h-screen py-12 bg-gray-100 sm:px-6 lg:px-8 " style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >

            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-3xl font-extrabold text-center text-white">
                    Change password
                </h2>
                <p className="mt-2 text-sm text-center text-gray-600">

                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                User Name
                            </label>
                            <div className="mt-1">
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    autoComplete="username"
                                    required
                                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                    value={formData.username}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="oldPassword" className="block text-sm font-medium text-gray-700">
                                Old Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="oldPassword"
                                    name="oldPassword"
                                      autoComplete="oldPassword"
                                    required
                                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                    type="password"
                                    value={formData.oldPassword}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                                New Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="newPassword"
                                    name="newPassword"
                                    autoComplete="name"
                                    required
                                    className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                    type="password"
                                    value={formData.newPassword}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>


                        <div>
                            <button
                                type="submit"
                                className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                disabled={isLoading}
                            >
                                {isLoading ? 'changing...' : 'change'}
                            </button>
                        </div>
                    </form>

                    {error && (
                        <div className="relative px-4 py-3 mt-4 text-red-700 bg-red-100 border border-red-400 rounded" role="alert">
                            <div className="flex items-center">
                                <AlertCircle className="mr-2" size={20} />
                                <span className="block sm:inline">{error}</span>
                            </div>
                        </div>
                    )}

                    {success && (
                        <div className="relative px-4 py-3 mt-4 text-green-700 bg-green-100 border border-green-400 rounded" role="alert">
                            <div className="flex items-center">
                                <CheckCircle className="mr-2" size={20} />
                                <span className="block sm:inline">{success}</span>
                                <></>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default passwordchange
