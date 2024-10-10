import { Group } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import image from '../assets/drop.png';

const Bloodstockcard = (props) => {
    const { bloodgroup, resus } = props;
    const [Group, setGroup] = useState(null);
    const [Resuss, setResuss] = useState(null);
    const [quantity, setQuantity] = useState(null);

    useEffect(() => {
        if (bloodgroup !== null) {
            func1();
        }
    }, [bloodgroup, resus]);

    const func1 = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/v1/stock/bloodstock', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    bloodGroup: bloodgroup,
                    bloodResus: resus,
                }),
            });
            const data = await response.json();
            if (response.ok) {
                const Group = data.bloodGroup;
                const Resuss = data.bloodResus;
                const Quantity = data.count;

                setGroup(Group);
                setResuss(Resuss);
                setQuantity(Quantity);
                console.log(Group, Resuss, Quantity);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div
            className="flex items-center w-40 h-40 transition duration-200 ease-out transform bg-white border-2 shadow-lg cursor-pointer rounded-xl"
            style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '0px' }}
        >
            <div
                // className="grid flex-grow w-3/5 gap-0 mt-12 mb-12 sm:grid-cols-2 sm:gap-2"
            >
                 <div className='pl-0 text-center'>
                    <h2 className='text-5xl text-white'>
                        {quantity}
                    </h2>
                </div>
                <div>
                    <h5 className="pl-0 mx-12 text-sm font-bold tracking-tight text-center text-black uppercase">
                        {Group}<br></br>
                        {Resuss}
                    </h5>
                </div>
               
            </div>
        </div>
    );
};

export default Bloodstockcard;
