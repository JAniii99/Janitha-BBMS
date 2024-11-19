import React, { useState } from 'react';
import Datepicker from '../../component/datepicker';
import 'flowbite';
import image from '../../assets/background.png';

const rccregister = () => {
  // Form data state to handle form fields
  const [formData, setFormData] = useState({
    bloodpackertnumber: '',
    bloodGroup: '',
    bloodResus: '',
    donorpname: '',
    packertserialnumber: '',
    packerttype: '',
    rccvolume: '',
    eid: '',
    fname: '',
    rccdateofmanufacture: '',
    rccdateofexpire: '',
  });
  // console.log(formData);

  const [error, setError] = useState(''); // Error state for handling errors
  const [success, setSuccess] = useState(''); // Success state for success message

  // Handle changes to form input fields
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle date selection for manufacturing date
  const handleDateChange = (selectedDate) => {
    setFormData({ ...formData, rccdateofmanufacture: selectedDate });
  };

  // Handle date selection for expiration date
  const handleDateChange2 = (selectedDate) => {
    setFormData({ ...formData, rccdateofexpire: selectedDate });
  };

  // Validate the form fields before submission
  const validateForm = () => {
    if (
      !formData.bloodpackertnumber ||
      !formData.bloodGroup ||
      !formData.bloodResus ||
      !formData.donorpname ||
      !formData.packertserialnumber ||
      !formData.packerttype ||
      !formData.rccvolume ||
      !formData.eid ||
      !formData.fname ||
      !formData.rccdateofexpire ||
      !formData.rccdateofmanufacture
    ) {
      setError('Please fill in all fields');
      return false;
    }
    return true;
  };

  // New function to check and fetch data by blood pack number
  const handleCheck = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/check/checkdonor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          bloodpackertnumber: formData.bloodpackertnumber, // Pass blood pack number
        }),
      });

      if (response.ok) {
        const data = await response.json();
        // Auto-fill form fields based on the response
        // console.log(data);
        setFormData((prev) => ({
          ...prev,
          donorpname: data.donorName || '',
          bloodpackertnumber: data.bloodpackertnumber || '',
        }));
        setError('');
      } else {
        const errorData = await response.json();
        setFormData((prev) => ({
          ...prev,
          donorpname: '',
        }));
        setError(errorData.message || 'Invalid blood pack number');
      }
    } catch (error) {
      setError('Something went wrong');
      console.error('Error occurred', error);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!validateForm()) {
      return;
    }
    try {
      const response = await fetch('http://localhost:8080/api/v1/component/rccreg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Submit the entire form data
      });

      if (response.ok) {
        setSuccess('RCC Registration successful');
        localStorage.setItem('packnumber', formData.bloodpackertnumber);
        localStorage.setItem('bloodgroup', formData.bloodGroup);
        localStorage.setItem('bloodresus', formData.bloodResus);
        window.location.href = '/component/plateletregister'; // Redirect after success
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'RCC Registration failed');
      }
    } catch (error) {
      setError('Something went wrong');
      console.error('Error occurred', error);
    }
  };

  return (
    <div className="overflow-y-auto" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <section className="h-screen">
        <div className="max-w-2xl px-4 py-8 mx-auto bg-white lg:py-16">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a Component</h2>
            <h2 className="mb-4 text-xl font-bold text-right text-red-600 dark:text-white">Red Cell Concentrate(RCC)</h2>
          </div>
          <form action="#" onSubmit={handleSubmit}>
            <div className="flex items-center justify-center ">
              <div className="content-center w-72">
                <label htmlFor="bloodpackertnumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Packert Number
                </label>
                <input
                  type="text"
                  name="bloodpackertnumber"
                  id="bloodpackertnumber"
                  className="bg-gray-50 border border-red-400 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="50224/20"
                  required
                  value={formData.bloodpackertnumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className="ml-2">
                <label htmlFor="checkbloodpack" className="block mb-2 text-sm font-medium text-white dark:text-white">
                  Check
                </label>
                {/* Button to trigger the handleCheck function */}
                <button
                  type="button"
                  onClick={handleCheck}
                  className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5"
                >
                  Check
                </button>
              </div>
            </div>
            {/* Other form fields */}
                  <div class="grid gap-4 sm:grid-cols-2 sm:gap-6 pt-5">
                    <div>
                    <label for="bloodGroup" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blood Group</label>
                    <select
                      id="bloodGroup"
                      name="bloodGroup"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={formData.bloodGroup}
                      onChange={handleInputChange}
                      
                    >
                      <option selected="">Select Blood Group</option>
                      <option value="A" >A</option>
                      <option value="B">B</option>
                      <option value="AB">AB</option>
                      <option value="O">O</option>
                    </select>
                    </div>
                    <div>
                    <label for="bloodResus" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blood Resus</label>
                    <select
                      id="bloodResus"
                      name="bloodResus"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={formData.bloodResus}
                      onChange={handleInputChange}
                      
                    >

                      <option selected="">Select Resus</option>
                      <option value="Positive" >+ (Positive)</option>
                      <option value="Negative">-  (Negative)</option>
                    </select>
                    </div>

                    <div class="sm:col-span-2">
                    <label for="donorpname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Donor Packert Name</label>
                    <input
                      name="donorpname"
                      id="donorpname"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder=" Samaranayake P S" required=""
                      value={formData.donorpname}
                      onChange={handleInputChange}
                      disabled
                    />
                    </div>
                    <div>
                    <label for="packertserialnumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Packert serial Number</label>
                    <input
                      name="packertserialnumber"
                      id="packertserialnumber"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="SE123456789" required=""
                      value={formData.packertserialnumber}
                      onChange={handleInputChange}
                      
                    />
                    </div>
                    <div>
                    <label for="packerttype" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blood Bag Type</label>
                    <select
                      id="packerttype"
                      name="packerttype"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={formData.packerttype}
                      onChange={handleInputChange}
                      
                    >

                      <option selected="">Blood Bag Type</option>
                      <option value="SAGM">SAGM</option>
                      <option value="Triple">Triple</option>
                      <option value="Single">Single</option>
                    </select>
                    </div>
                    <div>
                    <label for="rccvolume" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Packert Volume</label>
                    <input
                      type="text"
                      name="rccvolume"
                      id="rccvolume"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Volume(ml)" required=""
                      value={formData.rccvolume}
                      onChange={handleInputChange}
                      
                    />
                    </div>
                    <div>
                    {/* Empty div */}
              </div>
              <div>
                <label for="fname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Packert Prepared By</label>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Employee Name" required=""
                  value={formData.fname}
                  onChange={handleInputChange}

                />
              </div>
              <div>
                <label for="eid" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Employee ID</label>
                <input
                  type="text"
                  name="eid"
                  id="eid"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Employee ID" required=""
                  value={formData.eid}
                  onChange={handleInputChange}

                />
              </div>
              <div>
                <label for="rccdateofmanufacture" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Manufature Date</label>
                <Datepicker value={formData.rccdateofmanufacture} onChange={handleDateChange} />
              </div>

              {/* Try Auto Generate Expire Date After 35 */}
              <div>
                <label for="rccdateofexpire" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expire Date</label>
                <Datepicker value={formData.rccdateofexpire} onChange={handleDateChange2} />
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-white bg-primary-700 rounded-lg focus:ring-4 hover:bg-primary-800"
            >
              Next Component
            </button>
          </form>

          {error && (
            <div className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
              <svg
                className="flex-shrink-0 inline w-4 h-4 me-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span className="sr-only">Error</span>
              <div>
                <span className="font-medium">{error}</span>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default rccregister;
