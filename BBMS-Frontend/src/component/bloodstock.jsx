import React from 'react'
import Bloodstockcard from './bloodstockcard';

function bloodstock() {
    const bloodgrops = ["A", "A", "B", "B", "AB", "AB", "O", "O"];
    const resus = ["Positive", "Negative", "Positive", "Negative", "Positive", "Negative", "Positive", "Negative"];
    return (
        <div>
            <h1 
            className="text-3xl font-bold text-center text-white uppercase">Blood Stock</h1>
            <div 
            className="grid grid-cols-1 gap-4 md:grid-cols-8"
            >
                {bloodgrops.map((bloodgroup, index) => (
                    <Bloodstockcard
                        key={index}
                        bloodgroup={bloodgroup}
                        resus={resus[index]}
                    />
                ))}
            </div>
        </div>
    )
}

export default bloodstock
