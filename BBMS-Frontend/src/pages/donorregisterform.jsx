import React from 'react'
import 'flowbite';
import Datepicker from '../component/datepicker';


function donorregisterform() {
    return (
        <div class="bg-gray-300">
            <section class="bg-gray-300 dark:bg-gray-900">
                <div class="bg-white py-8 px-4 mx-auto max-w-2xl lg:py-16 sm:h-full">
                    <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new Donor</h2>
                    <form action="#">
                        <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div class="w-full">
                                <label for="pnum" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Packert Number</label>
                                <input
                                    type="text"
                                    name="pnum"
                                    id="pnum"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder=" 51100/20" required="" />
                            </div>
                            <div class="sm:col-span-2">
                                <label for="fname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Donor Full Name</label>
                                <input
                                    type="text"
                                    name="fname"
                                    id="fname"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder=" Pasindu Maduwantha Samaranayake" required="" />
                            </div>
                            <div class="sm:col-span-2">
                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Donor Packert Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder=" Samaranayake P S" required="" />
                            </div>
                            <div class="sm:col-span-2">
                                <label for="NIC" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">NIC</label>
                                <input
                                    type="text"
                                    name="NIC"
                                    id="NIC"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder=" 991236547V" required="" />
                            </div>
                            <div class="w-full">
                                <label for="donorage" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                                <input
                                    type="text"
                                    name="donorage"
                                    id="donorage"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder=" 24" required="" />
                            </div>
                            <div class="w-full">
                                <label for="previousdoetedtime" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Previous Donated times</label>
                                <input
                                    type="number"
                                    name="previousdoetedtime"
                                    id="previousdoetedtime"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required="" />
                            </div>
                            <div>
                                <label for="bloodgroup" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blood Group</label>
                                <select
                                    id="bloodgroup"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">

                                    <option selected="">Select Blood Group</option>
                                    <option value="Apositive">A+</option>
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
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required="" />
                            </div>
                            <div class="sm:col-span-2">
                                <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    id="address"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder=" " required="" />
                            </div>
                            <div >
                                <label for="telephone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telephone</label>
                                <input
                                    type="text"
                                    name="telephone"
                                    id="telephone"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="" required="" />
                            </div>
                            <div>
                                <Datepicker />
                            </div>
                        </div>

                        <button
                            type="submit"
                            class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                            Add Submit
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default donorregisterform
