import React from 'react'
import Datepicker from '../../component/datepicker';
import 'flowbite';
import { useState } from 'react';

const ffpregister = () => {
  
  const [formData, setFormData] = useState({
    bloodpackertnumber: '',
    ffpdateofmanufacture: '',
    ffpdateofexpire: '',
    ffpvolume: '',
  });

  console.log(formData);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleDateChange = (selectedDate) => {
    setFormData({ ...formData, ffpdateofmanufacture: selectedDate });
  };

  const handleDateChange2 = (selectedDate) => {
    setFormData({ ...formData, ffpdateofexpire: selectedDate });
  };

  const validateForm = () => {
    if (!formData.bloodpackertnumber || !formData.ffpdateofmanufacture || !formData.ffpdateofexpire || !formData.ffpvolume) {
      setError('Please fill in all fields');
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
    try {
      const response = await fetch('http://localhost:8080/api/v1/component/ffpreg', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          bloodpackertnumber: formData.bloodpackertnumber,
          ffpdateofmanufacture: formData.ffpdateofmanufacture,
          ffpdateofexpire: formData.ffpdateofexpire,
          ffpvolume: formData.ffpvolume,
        }),
      });

      const donordata = await response.json();

      if (response.ok) {
        setSuccess('ffp Registration successful');
        console.log('ffp Registration successful', donordata);

      } else {
        setError(donordata.message || 'ffp Registration failed');
      }


    } catch (error) {
      setError('Something went wrong');
      console.error('Error occured', error);
    }
  };




  return (
    <div>
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a Component</h2>
            <h2 class="mb-4 text-xl font-bold text-orange-600 dark:text-white text-right">Fresh Frozen Plasma(FFP)</h2>
          </div>
          <form action="#" onSubmit={handleSubmit}>
            <div class="flex justify-center items-center">
              <div class="w-72 content-center">

                {/* implement the blood packert number auto generation */}


                <label for="bloodpackertnumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Packert Number</label>
                <input
                  id="bloodpackertnumber"
                  name="bloodpackertnumber"
                  class="bg-gray-50 border border-red-400 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="50224/20" required=""
                  value={formData.bloodpackertnumber}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6 pt-5">

              {/* implement the blood group auto generation */}
              {/* blood group is not passin in the backend  */}

              <div>
                <label for="bloodGroup" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blood Group</label>
                <select
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option selected="">Select Blood Group</option>
                  <option value="A" >A</option>
                  <option value="B">B</option>
                  <option value="AB">AB</option>
                  <option value="O">O</option>
                </select>
              </div>

              <div class="sm:col-span-2">
                <label for="ffpvolume" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">FFP Volume</label>
                <input
                  id="ffpvolume"
                  name="ffpvolume"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Volume(ml)" required=""
                  value={formData.ffpvolume}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label for="ffpdateofmanufacture" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Manufature Date</label>
                <Datepicker value={formData.ffpdateofmanufacture} onChange={handleDateChange} />
              </div>
              <div>
                <label for="ffpdateofexpire" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expire Date</label>
                <Datepicker value={formData.ffpdateofexpire} onChange={handleDateChange2} />
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => window.location.href = '/component/buffycoatregister'}
                  class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-red-500 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                  Previous Component
                </button>
              </div>
              <div>
                <button
                  type="submit"
                  class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                  Submit
                </button>
              </div>
            </div>
          </form>
          {error && (
            <div
              className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert"
            >
              <svg
                className="flex-shrink-0 inline w-4 h-4 me-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span className="sr-only">Info</span>
              <div>
                <span className="font-medium">{error}</span>
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  )
}

export default ffpregister
