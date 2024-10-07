import React from 'react';



const ComponentRegisterSuccess = () => {


    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Component Registered Successfully!</h1>
            <p>Your component has been registered successfully.</p>
            <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"  onClick={() => window.location.href = '/home'}>Back to Home</button>
        </div>
    );
};

export default ComponentRegisterSuccess;