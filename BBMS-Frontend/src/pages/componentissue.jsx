import React, { useState, useEffect } from "react";
import image from '../assets/background.png';

function ComponentIssue() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedType, setSelectedType] = useState("RCC"); 
   // console.log(selectedType);
    useEffect(() => {
        // Fetch data from your backend API
        fetch("http://localhost:8080/api/v1/bloodcomponents/all") // Replace with your API endpoint
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setData(data); // Update state with fetched data
                setLoading(false); // Stop loading
            })
            .catch((error) => {
                setError(error.message); // Capture any errors
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='fixed w-screen h-screen bg-green-400 sm:grid-cols-1' style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <section className="p-3 dark:bg-gray-900 sm:p-5">
                <div className="max-w-screen-xl px-4 mx-auto lg:px-12">
                    <div className="flex gap-4 mb-4">
                        {["RCC", "Platelet", "FFP", "BuffyCoat"].map((type) => (
                            <button
                                key={type}
                                className={`px-4 py-2 rounded ${selectedType === type
                                        ? "bg-blue-500 text-white"
                                        : "bg-gray-200 hover:bg-gray-300"
                                    }`}
                                onClick={() => setSelectedType(type)}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                    <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
                        <div className="overflow-x-auto">   
                                    {(selectedType ==="RCC") && (
                                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead className="mb-4 text-xs text-gray-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th className="px-4 py-3">Pack Number</th>
                                                <th className="px-4 py-3">Donor Name</th>
                                                <th className="px-4 py-3">Packert Serial Number</th>
                                                <th className="px-4 py-3">Blood Group</th>
                                                <th className="px-4 py-3">Resus</th>
                                                <th className="px-4 py-3">Manufacture</th>
                                                <th className="px-4 py-3">Expire</th>
                                                <th className="px-4 py-3">Volume</th>
                                                <th className="w-2 px-4 py-3"></th>
                                            </tr>
                                        </thead>
                                        {
                                             data.map((item) => (
                                                <tbody>
                                                <tr
                                                    key={item.packNumber}
                                                    className="text-black bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                                >
                                                    <td className="px-4 py-3 mt-3 mb-3">{item.bloodpackertnumber}</td>
                                                    <td className="px-4 py-3">{item.donorpname}</td>
                                                    <td className="px-4 py-3">{item.packertserialnumber}</td>
                                                    <td className="px-4 py-3">{item.bloodGroup}</td>
                                                    <td className="px-4 py-3">{item.bloodResus}</td>
                                                    <td className="px-4 py-3">{item.rccdateofmanufacture}</td>
                                                    <td className="px-4 py-3">{item.rccdateofexpire}</td>
                                                    <td className="px-4 py-3">{item.rccvolume}</td>
                                                    <td className="px-4 py-3"><button type="button" class="px-3 py-2 pt-3text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Isuue</button></td>
                                                </tr>
                                                </tbody>
                                            
                                            ))
                                        }
                                    </table>
                                    )}


                                    {(selectedType ==="Platelet") && (
                                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead className="mb-4 text-xs text-gray-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th className="px-4 py-3">Pack Number</th>
                                                <th className="px-4 py-3">Packert Serial Number</th>
                                                <th className="px-4 py-3">Blood Group</th>
                                                <th className="px-4 py-3">Resus</th>
                                                <th className="px-4 py-3">Manufacture</th>
                                                <th className="px-4 py-3">Expire</th>
                                                <th className="px-4 py-3">Volume</th>
                                            </tr>
                                        </thead>
                                        {
                                             data.map((item) => (
                                                <tbody>
                                                <tr
                                                    key={item.packNumber}
                                                    className="text-black bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                                >
                                                    <td className="px-4 py-3 mt-3 mb-3">{item.bloodpackertnumber}</td>
                                                    <td className="px-4 py-3">{item.packertserialnumber}</td>
                                                    <td className="px-4 py-3">{item.bloodGroup}</td>
                                                    <td className="px-4 py-3">{item.bloodResus}</td>
                                                    <td className="px-4 py-3">{item.plateletdateofmanufacture}</td>
                                                    <td className="px-4 py-3">{item.plateletdateofexpire}</td>
                                                    <td className="px-4 py-3">{item.plateletvolume}</td>
                                                </tr>
                                                </tbody>
                                            
                                            ))
                                        }
                                    </table>
                                    )}



                                    {(selectedType ==="FFP") && (
                                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead className="mb-4 text-xs text-gray-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th className="px-4 py-3">Pack Number</th>
                                                <th className="px-4 py-3">Packert Serial Number</th>
                                                <th className="px-4 py-3">Blood Group</th>
                                                <th className="px-4 py-3">Manufacture</th>
                                                <th className="px-4 py-3">Expire</th>
                                                <th className="px-4 py-3">Volume</th>
                                            </tr>
                                        </thead>
                                        {
                                             data.map((item) => (
                                                <tbody>
                                                <tr
                                                    key={item.packNumber}
                                                    className="text-black bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                                >
                                                    <td className="px-4 py-3 mt-3 mb-3">{item.bloodpackertnumber}</td>
                                                    <td className="px-4 py-3">{item.packertserialnumber}</td>
                                                    <td className="px-4 py-3">{item.bloodGroup}</td>
                                                    <td className="px-4 py-3">{item.ffpdateofmanufacture}</td>
                                                    <td className="px-4 py-3">{item.ffpdateofexpire}</td>
                                                    <td className="px-4 py-3">{item.ffpvolume}</td>
                                                </tr>
                                                </tbody>
                                            
                                            ))
                                        }
                                    </table>
                                    )}

                                    {(selectedType ==="BuffyCoat") && (
                                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead className="mb-4 text-xs text-gray-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th className="px-4 py-3">Pack Number</th>
                                                <th className="px-4 py-3">Packert Serial Number</th>
                                                <th className="px-4 py-3">Blood Group</th>
                                                <th className="px-4 py-3">Resus</th>
                                                <th className="px-4 py-3">Manufacture</th>
                                                <th className="px-4 py-3">Expire</th>
                                                <th className="px-4 py-3">Volume</th>
                                            </tr>
                                        </thead>
                                        {
                                             data.map((item) => (
                                                <tbody>
                                                <tr
                                                    key={item.packNumber}
                                                    className="text-black bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                                >
                                                    <td className="px-4 py-3 mt-3 mb-3">{item.bloodpackertnumber}</td>
                                                    <td className="px-4 py-3">{item.packertserialnumber}</td>
                                                    <td className="px-4 py-3">{item.bloodGroup}</td>
                                                    <td className="px-4 py-3">{item.bloodResus}</td>
                                                    <td className="px-4 py-3">{item.buffycoatdateofmanufacture}</td>
                                                    <td className="px-4 py-3">{item.buffycoatdateofexpire}</td>
                                                    <td className="px-4 py-3">{item.buffycoatvolume}</td>
                                                </tr>
                                                </tbody>
                                            
                                            ))
                                        }
                                    </table>
                                    )}

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ComponentIssue;



{/*                  
                    
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple iMac 20&#34;</th>
                            <td class="px-4 py-3">PC</td>
                            <td class="px-4 py-3">Apple</td>
                            <td class="px-4 py-3">200</td>
                            <td class="px-4 py-3">$1499</td>
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
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple iPhone 14</th>
                            <td class="px-4 py-3">Phone</td>
                            <td class="px-4 py-3">Apple</td>
                            <td class="px-4 py-3">1237</td>
                            <td class="px-4 py-3">$999</td>
                            <td class="px-4 py-3 flex items-center justify-end">
                                <button id="apple-iphone-14-dropdown-button" data-dropdown-toggle="apple-iphone-14-dropdown" class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="apple-iphone-14-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-iphone-14-dropdown-button">
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
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple iPad Air</th>
                            <td class="px-4 py-3">Tablet</td>
                            <td class="px-4 py-3">Apple</td>
                            <td class="px-4 py-3">4578</td>
                            <td class="px-4 py-3">$1199</td>
                            <td class="px-4 py-3 flex items-center justify-end">
                                <button id="apple-ipad-air-dropdown-button" data-dropdown-toggle="apple-ipad-air-dropdown" class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="apple-ipad-air-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-ipad-air-dropdown-button">
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
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Xbox Series S</th>
                            <td class="px-4 py-3">Gaming/Console</td>
                            <td class="px-4 py-3">Microsoft</td>
                            <td class="px-4 py-3">56</td>
                            <td class="px-4 py-3">$299</td>
                            <td class="px-4 py-3 flex items-center justify-end">
                                <button id="xbox-series-s-dropdown-button" data-dropdown-toggle="xbox-series-s-dropdown" class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="xbox-series-s-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="xbox-series-s-dropdown-button">
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
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">PlayStation 5</th>
                            <td class="px-4 py-3">Gaming/Console</td>
                            <td class="px-4 py-3">Sony</td>
                            <td class="px-4 py-3">78</td>
                            <td class="px-4 py-3">$799</td>
                            <td class="px-4 py-3 flex items-center justify-end">
                                <button id="playstation-5-dropdown-button" data-dropdown-toggle="playstation-5-dropdown" class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="playstation-5-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="playstation-5-dropdown-button">
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
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Xbox Series X</th>
                            <td class="px-4 py-3">Gaming/Console</td>
                            <td class="px-4 py-3">Microsoft</td>
                            <td class="px-4 py-3">200</td>
                            <td class="px-4 py-3">$699</td>
                            <td class="px-4 py-3 flex items-center justify-end">
                                <button id="xbox-series-x-dropdown-button" data-dropdown-toggle="xbox-series-x-dropdown" class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="xbox-series-x-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="xbox-series-x-dropdown-button">
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
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple Watch SE</th>
                            <td class="px-4 py-3">Watch</td>
                            <td class="px-4 py-3">Apple</td>
                            <td class="px-4 py-3">657</td>
                            <td class="px-4 py-3">$399</td>
                            <td class="px-4 py-3 flex items-center justify-end">
                                <button id="apple-watch-se-dropdown-button" data-dropdown-toggle="apple-watch-se-dropdown" class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="apple-watch-se-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-watch-se-dropdown-button">
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
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">NIKON D850</th>
                            <td class="px-4 py-3">Photo</td>
                            <td class="px-4 py-3">Nikon</td>
                            <td class="px-4 py-3">465</td>
                            <td class="px-4 py-3">$599</td>
                            <td class="px-4 py-3 flex items-center justify-end">
                                <button id="nikon-d850-dropdown-button" data-dropdown-toggle="nikon-d850-dropdown" class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="nikon-d850-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="nikon-d850-dropdown-button">
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
                        <tr class="border-b dark:border-gray-700">
                            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Monitor BenQ EX2710Q</th>
                            <td class="px-4 py-3">TV/Monitor</td>
                            <td class="px-4 py-3">BenQ</td>
                            <td class="px-4 py-3">354</td>
                            <td class="px-4 py-3">$499</td>
                            <td class="px-4 py-3 flex items-center justify-end">
                                <button id="benq-ex2710q-dropdown-button" data-dropdown-toggle="benq-ex2710q-dropdown" class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="benq-ex2710q-dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="benq-ex2710q-dropdown-button">
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
                    </tbody> */}
