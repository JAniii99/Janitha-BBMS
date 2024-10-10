import React from 'react';

const Navbar = () => {
    return (
        <nav className="py-2 text-white bg-transparent">
            <div className="flex items-center justify-between pl-4">
                <h1 className="pl-6 text-2xl">Blood Bank</h1>
                <div className="flex pr-6 space-x-4">
                    <button 
                     type="button"
                     onClick={() => window.location.href = '/'}
                     class="text-white hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Logout</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;