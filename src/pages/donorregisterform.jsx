import React, { useState } from 'react'
import 'flowbite';
import Datepicker from '../component/datepicker';



const donorregisterform = () => {

    const [formData, setFormData] = useState({
        bloodpackertnumber: '',
        donorfname: '',
        donorpname: '',
        donornic: '',
        donorage: '',
        previoustransfusiontime: '',
        bloodgroup: '',
        donorweight: '',
        address: '',
        telephone: '',
        date: '',
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleDateChange = (selectedDate) => {
        setFormData({ ...formData, date: selectedDate });
    };

    const validateForm = () => {
        if (!formData.address || !formData.bloodgroup || !formData.bloodpackertnumber || !formData.date || !formData.donorage || !formData.donorfname || !formData.donornic || !formData.donorpname || !formData.donorweight || !formData.previoustransfusiontime || !formData.telephone) {
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
            const response = await fetch('http://localhost:8080/api/v1/donor/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    bloodpackertnumber: formData.bloodpackertnumber,
                    donorfname: formData.donorfname,
                    donorpname: formData.donorpname,
                    donornic: formData.donornic,
                    donorage: formData.donorage,
                    previoustransfusiontime: formData.previoustransfusiontime,
                    donorweight: formData.donorweight,
                    address: formData.address,
                    donorbloodgroup: formData.bloodgroup,
                    telephone: formData.telephone,
                    date: formData.date,
                }),
            });

            const donordata = await response.json();

            if (response.ok) {
                setSuccess('Donor Registration successful');
                console.log('Donor Registration successful', donordata);

            } else {
                setError(donordata.message || 'Donor Registration failed');
            }


        } catch (error) {
            setError('Something went wrong');
            console.error('Error occured', error);
        }
    };



    return (
        <div class="bg-gray-300">
            <section class="bg-gray-300 dark:bg-gray-900">
                <div class="bg-white py-8 px-4 mx-auto max-w-2xl lg:py-16 sm:h-full">
                    <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new Donor</h2>
                    <form action="#" onSubmit={handleSubmit}>
                        <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div class="w-full">
                                <label for="bloodpackertnumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Packert Number</label>
                                <input
                                    type="text"
                                    name="bloodpackertnumber"
                                    id="bloodpackertnumber"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder=" 51100/20" required
                                    value={formData.bloodpackertnumber}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div class="sm:col-span-2">
                                <label for="donorfname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Donor Full Name</label>
                                <input
                                    type="text"
                                    name="donorfname"
                                    id="donorfname"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder=" Pasindu Maduwantha Samaranayake" required
                                    value={formData.donorfname}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div class="sm:col-span-2">
                                <label for="donorpname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Donor Packert Name</label>
                                <input
                                    type="text"
                                    name="donorpname"
                                    id="donorpname"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder=" Samaranayake P S" required
                                    value={formData.donorpname}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div class="sm:col-span-2">
                                <label for="donornic" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">NIC</label>
                                <input
                                    type="text"
                                    name="donornic"
                                    id="donornic"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder=" 991236547V" required
                                    value={formData.donornic}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div class="w-full">
                                <label for="donorage" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                                <input
                                    type="text"
                                    name="donorage"
                                    id="donorage"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder=" 24" required
                                    value={formData.donorage}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div class="w-full">
                                <label for="previoustransfusiontime" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Previous Donated times</label>
                                <input
                                    type="number"
                                    name="previoustransfusiontime"
                                    id="previoustransfusiontime"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required
                                    value={formData.previoustransfusiontime}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label for="bloodgroup" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blood Group</label>
                                <select
                                    id="bloodgroup"
                                    name="bloodgroup"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    value={formData.bloodgroup}
                                    onChange={handleInputChange}
                                >

                                    <option selected="">Select Blood Group</option>
                                    <option value="Apositive" >A+</option>
                                    <option value="Anegative">A-</option>
                                    <option value="Bpositive">B+</option>
                                    <option value="Bnegative">B-</option>
                                    <option value="ABpositive">AB+</option>
                                    <option value="ABnegative">AB-</option>
                                    <option value="Opositive">O+</option>
                                    <option value="Onegative">O-</option>
                                    <option value="None">None</option>
                                </select>
                            </div>
                            <div>
                                <label for="donorweight" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Donor Weight (kg)</label>
                                <input
                                    type="number"
                                    name="donorweight"
                                    id="donorweight"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required
                                    value={formData.donorweight}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div class="sm:col-span-2">
                                <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    id="address"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder=" " required
                                    value={formData.address}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div >
                                <label for="telephone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telephone</label>
                                <input
                                    type="text"
                                    name="telephone"
                                    id="telephone"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required
                                    value={formData.telephone}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label for="telephone" class="block mb-2 text-sm font-medium text-transparent dark:text-white">.</label>
                                <Datepicker value={formData.date} onChange={handleDateChange} />
                            </div>
                        </div>

                        <button
                            type="submit"
                            class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-600 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                            Add Submit
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default donorregisterform
