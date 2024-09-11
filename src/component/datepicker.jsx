import React, { useState, useEffect, useRef } from 'react';

const Datepicker = ({ onChange, value }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(value || '');
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const datePickerRef = useRef(null);

  useEffect(() => {
    if (value) {
      setSelectedDate(value);
      setCurrentMonth(new Date(value));
    }
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDateClick = (day) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const formattedDate = formatDate(date);
    setSelectedDate(formattedDate);
    onChange(formattedDate);
    setIsOpen(false);
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');   
    const minutes = String(date.getMinutes()).padStart(2, '0'); 
    const seconds = String(date.getSeconds()).padStart(2, '0'); 
   
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
  };

  const renderCalendar = () => {
    const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
    
    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="w-8 h-8"></div>);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      const isCurrentDate = date.toDateString() === new Date().toDateString();
      const isSelected = formatDate(date) === selectedDate;
      days.push(
        <button
          type="button"
          key={day}
          onClick={() => handleDateClick(day)}
          className={`h-8 w-8 rounded-full flex items-center justify-center text-sm
            ${isCurrentDate ? 'bg-gray-700 text-white' : 'text-gray-800'}
            ${isSelected ? 'bg-blue-600 text-white' : ''}
            hover:bg-gray-700 transition-colors duration-200`}
        >
          {day}
        </button>
      );
    }
    return days;
  };

  return (
    <div className="relative max-w-sm" ref={datePickerRef}>
      <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
        </svg>
      </div>
      <input 
        id="datepicker-autohide" 
        datepicker 
        datepicker-autohide 
        type="text" 
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        placeholder="Select date"
        value={selectedDate}
        onClick={() => setIsOpen(!isOpen)}
        readOnly
      />
      {isOpen && (
        <div className="absolute z-10 mt-1 border border-gray-300 rounded-md shadow-lg bg-gray-50">
          <div className="flex items-center justify-between p-2 border-b border-gray-700">
            <button onClick={handlePrevMonth} className="p-1 text-gray-800 rounded-full hover:bg-gray-700">
              &lt;
            </button>
            <span className="font-semibold text-gray-800">
              {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
            </span>
            <button onClick={handleNextMonth} className="p-1 text-gray-800 rounded-full hover:bg-gray-700">
              &gt;
            </button>
          </div>
          <div className="grid grid-cols-7 gap-1 p-2">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
              <div key={day} className="text-xs font-semibold text-center text-gray-800">
                {day}
              </div>
            ))}
            {renderCalendar()}
          </div>
        </div>
      )}
    </div>

    
  );
};

export default Datepicker;
