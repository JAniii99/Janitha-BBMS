import React from 'react'
import Datepicker from '../../component/datepicker'
import { useState } from 'react'
import 'flowbite';
import image from '../../assets/background.png';
import { AlertCircle, CheckCircle } from 'lucide-react';

const Rccupdate = () => {

  const [formData, setFormData] = useState({
    bloodpackertnumber: '',
    // bloodGroup: '',
    // bloodResus: '',
    // donorpname: '',
    // packertserialnumber: '',
    // packerttype: '',
    rccvolume: '',
    // eid: '',
    // fname: '',
    rccdateofmanufacture: '',
    rccdateofexpire: '',
  });
  // console.log(formData);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleDateChange = (selectedDate) => {
    setFormData({ ...formData, rccdateofmanufacture: selectedDate });
  };

  const handleDateChange2 = (selectedDate) => {
    setFormData({ ...formData, rccdateofexpire: selectedDate });
  };



  const validateForm = () => {
    if (!formData.bloodpackertnumber ||  !formData.rccvolume || !formData.rccdateofexpire || !formData.rccdateofmanufacture) {
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
      const response = await fetch('http://localhost:8080/api/v1/update/rccupd', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          bloodpackertnumber: formData.bloodpackertnumber,
          // bloodGroup: formData.bloodGroup,
          // bloodResus: formData.bloodResus,
          // donorpname: formData.donorpname,
          // packertserialnumber: formData.packertserialnumber,
          // packerttype: formData.packerttype,
          rccvolume: formData.rccvolume,
          // eid: formData.eid,
          // fname: formData.fname,
          rccdateofmanufacture: formData.rccdateofmanufacture,
          rccdateofexpire: formData.rccdateofexpire,
        }),
      });

      const donordata = await response.json();

      if (response.ok && donordata.error ===null) {
        setSuccess('RCC Update successful');
        console.log('RCC Update successful', donordata);
        // window.location.href = '/component/plateletregister';

      } else {
        setError(donordata.error || 'RCC Update failed');
      }


    } catch (error) {
      setError('Something went wrong');
      console.error('Error occured', error);
    }
  };


  return (
    <div >
      <section class="bg-white dark:bg-gray-900 h-screen" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div class="bg-white py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Update Component</h2>
            <h2 class="mb-4 text-xl font-bold text-red-600 dark:text-white text-right">Red Cell Concentrate(RCC)</h2>
          </div>
          <form action="#" onSubmit={handleSubmit}>
            <div class="flex justify-center items-center ">
              <div class="w-72 content-center">
                <label for="bloodpackertnumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Packert Number</label>
                <input
                  type="text"
                  name="bloodpackertnumber"
                  id="bloodpackertnumber"
                  class="bg-gray-50 border border-red-400 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="50224/20" required=""
                  value={formData.bloodpackertnumber}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6 pt-5">
              <div>
                <label for="bloodGroup" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blood Group</label>
                <select
                  id="bloodGroup"
                  name="bloodGroup"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  // value={formData.bloodGroup}
                  // onChange={handleInputChange}
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
                  // value={formData.bloodResus}
                  // onChange={handleInputChange}
                >

                  <option selected="">Select Resus</option>
                  <option value="Positive" >+ (Positive)</option>
                  <option value="Negative">-  (Negative)</option>
                </select>
              </div>


              {/* <div class="sm:col-span-2">
                <label for="donorpname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Donor Packert Name</label>
                <input
                  name="donorpname"
                  id="donorpname"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder=" Samaranayake P S" required=""
                  value={formData.donorpname}
                  onChange={handleInputChange}

                />
              </div> */}


              {/* <div>
                <label for="packertserialnumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Packert serial Number</label>
                <input
                  name="packertserialnumber"
                  id="packertserialnumber"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="SE123456789" required=""
                  value={formData.packertserialnumber}
                  onChange={handleInputChange}

                />
              </div> */}


              {/* <div>
                <label for="packerttype" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blood Resus</label>
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
              </div> */}


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


              {/* <div>
                <label for="fname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Packert Prepared By</label>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Employee Name" required=""
                  value={formData.fname}
                  onChange={handleInputChange}

                />
              </div> */}


              {/* <div>
                <label for="eid" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Employee ID</label>
                <input
                  type="text"
                  name="eid"
                  id="eid"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Employee ID" required=""
                  value={formData.eid}
                  onChange={handleInputChange}

                />
              </div> */}


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
              class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
              Update Component
            </button>
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

export default Rccupdate
