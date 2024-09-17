
import React from 'react'
import p1 from '../assets/react.svg'

const card = (props) => {
  const carddata = ["Blood1","Blood2","Blood3","Blood4","Blood5"];
  const carddatalength = carddata.length;
  return (
    <div>
      <div className="flex items-center h-48 ml-5 mr-5 transition duration-200 ease-out transform border-2 shadow-lg cursor-pointer display rounded-xl hover:scale-105" style={{ overflow: 'hidden' }}>
      
      <div className="flex-grow w-3/5 mt-12 mb-12">
        <h5 className="pl-4 mx-12 mt-8 text-lg font-bold tracking-tight text-center uppercase text-slate-500">
        {carddatalength>0 && carddata.map((data) => data.title)}
        </h5> 
        <h3 className="m-4 text-4xl font-bold text-center text-red-700 dark:text-gray-400">
        </h3>
        <h2 className="m-4 text-lg font-bold tracking-tight text-center uppercase text-slate-500">
        Blood
        Component
        Register
        </h2>
      </div>
      <div className="w-2/5 flex-l h-100">
        Text2
        {/* {props.icon} */}
        {/* <{props.icon} style={{ fontSize:'100px', margin:'10px' }} /> */}
        {/* {SelectedIcon && <SelectedIcon style={{ fontSize: '100px', margin: '10px' }} />} */}
      </div>
      </div>
    </div>
    )
}

export default card