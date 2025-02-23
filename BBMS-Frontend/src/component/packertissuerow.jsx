import React from 'react'
import { Link } from 'react-router-dom';

function packertissuerow(props) {
    const {  bloodpackertnumber, donorpname, bloodGroup, bloodResus, rccdateofmanufacture, rccdateofexpire } = props; 
    return (
        <div>
            <Link>
                <tr class="border-b dark:border-gray-700">
                    <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{bloodpackertnumber}</th>
                    <td class="px-4 py-3">{donorpname}</td>
                    <td class="px-4 py-3">{bloodGroup}</td>
                    <td class="px-4 py-3">{bloodResus}</td>
                    <td class="px-4 py-3">{rccdateofmanufacture}</td>
                    <td class="px-4 py-3">{rccdateofexpire}</td>
                    <td class="px-4 py-3 flex items-center justify-end">
                        <button id="apple-imac-20-dropdown-button" data-dropdown-toggle="apple-imac-20-dropdown" class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                        </button>
                        <div id="apple-imac-20-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-imac-20-dropdown-button">
                                <li>
                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                </li>
                            </ul>
                            <div class="py-1">
                                <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                            </div>
                        </div>
                    </td>
                </tr>
            </Link>
        </div>
    )
}

export default packertissuerow
