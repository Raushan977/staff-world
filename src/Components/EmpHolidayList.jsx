import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import axios from 'axios';
import { format } from 'date-fns'; // Import date-fns for formatting


const EmpholidayList = () => {
  const [events, setEvents] = useState([]);
  const [holidayName, setHolidayName] = useState('');
  const [holidayDate, setHolidayDate] = useState('');
  const data = [
    {
        title: "Saroj",
        start: format(new Date(), 'yyyy-MM-dd'),
        allDay: true
    },
    {
        title: "Mohit",
        start: format(new Date(), 'yyyy-MM-dd'),
        allDay: true
    }
  ]


//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/holidays');
//         const events = response.data.map(record => ({
//           title: record.name,
//           start: format(new Date(record.date), 'yyyy-MM-dd'), // Ensure date format
//           allDay: true,
//         }));
//         setEvents(events);
//       } catch (error) {
//         console.error('Error fetching holidays', error);
//       }
//     };
//     fetchEvents();
//   }, []);

//   const addHoliday = async () => {
//     try {
//       const formattedDate = format(new Date(holidayDate), 'yyyy-MM-dd'); // Ensure date format
//       const response = await axios.post('http://localhost:8080/holidays', {
//         name: holidayName,
//         date: formattedDate,
//       });
//       setEvents([...events, {
//         title: response.data.name,
//         start: response.data.date,
//         allDay: true,
//       }]);
//       setHolidayName('');
//       setHolidayDate('');
//     } catch (error) {
//       console.error('Error adding holiday', error);
//     }
//   };

  return (
    <>
    <div className='holiCalender'>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={data}
      />
      {/* <div className="input-form">
        <input
          type="text"
          value={holidayName}
          onChange={(e) => setHolidayName(e.target.value)}
          placeholder="Holiday Name"
        />
        <input
          type="date"
          value={holidayDate}
          onChange={(e) => setHolidayDate(e.target.value)}
        />
        <button onClick={addHoliday}>Add Holiday</button>
      </div> */}
    </div>
    </>
  );
};

export default EmpholidayList;
