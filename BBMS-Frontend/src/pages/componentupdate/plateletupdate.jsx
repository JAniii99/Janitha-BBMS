import React from 'react'
import Datepicker from '../../component/datepicker';
import 'flowbite';
import { useState } from 'react';
import image from '../../assets/background.png';
import { AlertCircle, CheckCircle } from 'lucide-react';

const Plateletupdate = () => {
  
  const [formData, setFormData] = useState({
    bloodpackertnumber: '',
    plateletdateofmanufacture: '',
    plateletdateofexpire: '',
    plateletvolume: '',
  });

  // console.log(formData);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleDateChange = (selectedDate) => {
    setFormData({ ...formData, plateletdateofmanufacture: selectedDate });
  };

  const handleDateChange2 = (selectedDate) => {
    setFormData({ ...formData, plateletdateofexpire: selectedDate });
  };

  const validateForm = () => {
    if (!formData.bloodpackertnumber || !formData.plateletdateofmanufacture || !formData.plateletdateofexpire || !formData.plateletvolume) {
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
      const response = await fetch('http://localhost:8080/api/v1/update/plateletupd', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          bloodpackertnumber: formData.bloodpackertnumber,
          plateletdateofmanufacture: formData.plateletdateofmanufacture,
          plateletdateofexpire: formData.plateletdateofexpire,
          plateletvolume: formData.plateletvolume,
        }),
      });

      const donordata = await response.json();

      if (response.ok && donordata.error === null) {
        setSuccess('Platelet Update successful');
        console.log('Platelet Update successful', donordata);
        // window.location.href = '/component/buffycoatregister';

      } else {
        setError(donordata.error || 'Platelet Update failed');
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
            <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Update Component</h2>
            <h2 class="mb-4 text-xl font-bold text-yellow-400 dark:text-white text-right">Platelet Concentrate</h2>
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
                <label for="plateletvolume" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Platelet Volume</label>
                <input
                  id="plateletvolume"
                  name="plateletvolume"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Volume(ml)" required=""
                  value={formData.plateletvolume}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label for="plateletdateofmanufacture" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Manufature Date</label>
                <Datepicker value={formData.plateletdateofmanufacture} onChange={handleDateChange} />
              </div>
              <div>
                <label for="plateletdateofexpire" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expire Date</label>
                <Datepicker value={formData.plateletdateofexpire} onChange={handleDateChange2} />
              </div>
              {/* <div>
                <button
                  type="button"
                  // onClick={() => window.location.href = '/component/rccregister'}
                  class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-red-500 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                  Previous Component
                </button>
              </div> */}
              <div className='flex justify-center pl-64'>
                <button
                  type="submit"
                  class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                  Update
                </button>
              </div>
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
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  )
}

export default Plateletupdate
