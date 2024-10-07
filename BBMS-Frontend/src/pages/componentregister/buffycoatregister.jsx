import React from 'react'
import Datepicker from '../../component/datepicker';
import 'flowbite';
import { useState } from 'react';
import image from '../../assets/background.png';

const Buffycoatregister = () => {
  
  const [formData, setFormData] = useState({
    bloodpackertnumber: '',
    buffycoatdateofmanufacture: '',
    buffycoatdateofexpire: '',
    buffycoatvolume: '',
  });

  console.log(formData);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleDateChange = (selectedDate) => {
    setFormData({ ...formData, buffycoatdateofmanufacture: selectedDate });
  };

  const handleDateChange2 = (selectedDate) => {
    setFormData({ ...formData, buffycoatdateofexpire: selectedDate });
  };

  const validateForm = () => {
    if (!formData.bloodpackertnumber || !formData.buffycoatdateofmanufacture || !formData.buffycoatdateofexpire || !formData.buffycoatvolume) {
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
      const response = await fetch('http://localhost:8080/api/v1/component/buffycoatreg', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          bloodpackertnumber: formData.bloodpackertnumber,
          buffycoatdateofmanufacture: formData.buffycoatdateofmanufacture,
          buffycoatdateofexpire: formData.buffycoatdateofexpire,
          buffycoatvolume: formData.buffycoatvolume,
        }),
      });

      const donordata = await response.json();

      if (response.ok) {
        setSuccess('Buffycoat Registration successful');
        console.log('Buffycoat Registration successful', donordata);
        window.location.href = '/component/Componentregistersuccess';

      } else {
        setError(donordata.message || 'Buffycoat Registration failed');
      }


    } catch (error) {
      setError('Something went wrong');
      console.error('Error occured', error);
    }
  };




  return (
    <div>
      <section class="bg-white dark:bg-gray-900 h-screen" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div class="bg-white py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a Component</h2>
            <h2 class="mb-4 text-xl font-bold text-yellow-400 dark:text-white text-right">Buffycoat Concentrate</h2>
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
              <div>
                <label for="bloodResus" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blood Resus</label>
                <select
                  id="bloodResus"
                  name="bloodResus"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >

                  <option selected="">Select Resus</option>
                  <option value="Positive" >+ (Positive)</option>
                  <option value="Negative">-  (Negative)</option>
                </select>
              </div>


              <div class="sm:col-span-2">
                <label for="buffycoatvolume" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Buffycoat Volume</label>
                <input
                  id="buffycoatvolume"
                  name="buffycoatvolume"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Volume(ml)" required=""
                  value={formData.buffycoatvolume}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label for="buffycoatdateofmanufacture" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Manufature Date</label>
                <Datepicker value={formData.buffycoatdateofmanufacture} onChange={handleDateChange} />
              </div>
              <div>
                <label for="buffycoatdateofexpire" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expire Date</label>
                <Datepicker value={formData.buffycoatdateofexpire} onChange={handleDateChange2} />
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => window.location.href = '/component/plateletregister'}
                  class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-red-500 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                  Previous Component
                </button>
              </div>
              <div>
                <button
                  type="submit"
                  class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                  Next Component
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

export default Buffycoatregister
