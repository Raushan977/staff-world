// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function EmpAttendance() {
//   // const [employeeId, setEmployeeId] = useState('4'); // Assuming '4' is the hardcoded employee ID
//   const [attendanceId, setAttendanceId] = useState('');
//   const [isPunchedIn, setIsPunchedIn] = useState(false);
//   const [punchInTime, setPunchInTime] = useState(null);
//   const [timer, setTimer] = useState(0);
//   const [intervalId, setIntervalId] = useState(null);

//   useEffect(() => {
//     // Cleanup interval on component unmount
//     return () => {
//       if (intervalId) {
//         clearInterval(intervalId);
//       }
//     };
//   }, [intervalId]);

//   useEffect(() => {
//     if (isPunchedIn) {
//       const id = setInterval(() => {
//         setTimer(prevTimer => prevTimer + 1);
//       }, 1000);
//       setIntervalId(id);
//     } else {
//       if (intervalId) {
//         clearInterval(intervalId);
//         setIntervalId(null);
//       }
//     }
//   }, [isPunchedIn]);

//   const handlePunch = () => {
//     if (isPunchedIn) {
//       axios.post(`https://mohitbyproject-production.up.railway.app/api/attendance/punchOut/${attendanceId}`)
//         .then(response => {
//           setIsPunchedIn(false);
//           setAttendanceId(''); // Reset attendanceId after punch out
//           setPunchInTime(null); // Reset punch-in time after punch out
//           setTimer(0); // Reset timer after punch out
//         })
//         .catch(error => {
//           alert('Punch out failed: ' + error.response.data);
//         });
//     } else {
//       const employeeId = localStorage.getItem('employeeId');
//       axios.post('https://mohitbyproject-production.up.railway.app/api/attendance/punchIn', { id: employeeId })
//         .then(response => {
//           setAttendanceId(response.data);
//           setIsPunchedIn(true);
//           setPunchInTime(new Date().toLocaleString()); // Set the punch-in time
//           setTimer(0); // Reset timer when punching in

//         })
//         .catch(error => {
//           alert('Punch in failed: ' + error.response.data);
//         });
//         // console.log(employeeId);
        
//     }
//   };

//   const buttonStyle = {
//     backgroundColor: isPunchedIn ? 'red' : 'green',
//     color: 'white',
//     padding: '10px 20px',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     fontSize: '16px'
//   };

//   const formatTime = seconds => {
//     const h = Math.floor(seconds / 3600);
//     const m = Math.floor((seconds % 3600) / 60);
//     const s = seconds % 60;
//     return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
//   };

//   return (
//     <>
//       <div className='emp_attandance_main'>
//         <div className='emp_attandance pt-2'>
//           {isPunchedIn ? 'Punch Out' : 'Punch In'}
//         </div>
//         <div className='emp_attandeance_1'>
//           <div>
//             <div>
//               <button onClick={handlePunch} style={buttonStyle}>
//                 {isPunchedIn ? 'Punch Out' : 'Punch In'}
//               </button>
//             </div>
//             <div className='pt-4'>
//               {isPunchedIn && (
//                 <div>
//                   <p>Punch-in time: {punchInTime}</p>
//                   <p>Time Elapsed: {formatTime(timer)}</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default EmpAttendance;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function EmpAttendance() {
  // const [employeeId, setEmployeeId] = useState('1'); // Assuming '4' is the hardcoded employee ID
  const employeeId = localStorage.getItem('employeeId');
  const [attendanceId, setAttendanceId] = useState('');
  const [isPunchedIn, setIsPunchedIn] = useState(false);
  const [punchInTime, setPunchInTime] = useState(null);
  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState(null);


 
  
  useEffect(() => {
    // Cleanup interval on component unmount
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  useEffect(() => {
    if (isPunchedIn) {
      const id = setInterval(() => {
        setTimer(prevTimer => prevTimer + 1);
      }, 1000);
      setIntervalId(id);
    } else {
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
      }
    }
  }, [isPunchedIn]);

  const handlePunch = () => {
    if (isPunchedIn) {
      axios.post(`https://mohitbyproject-production.up.railway.app/api/attendance/punchOut/${attendanceId}`)
        .then(response => {
          console.log(response.data)
          setIsPunchedIn(false);
          setAttendanceId(''); // Reset attendanceId after punch out
          setPunchInTime(null); // Reset punch-in time after punch out
          setTimer(45); // Reset timer after punch out
        })
        .catch(error => {
          alert('Punch out failed: ' + error.response.data);
        });
    } else {
      axios.post('https://mohitbyproject-production.up.railway.app/api/attendance/punchIn', { employeeId })
        .then(response => {
          setAttendanceId(response.data);
          setIsPunchedIn(true);
          // setPunchInTime(new Date().toLocaleString()); // Set the punch-in time
          setTimer(0); // Reset timer when punching in

        })
        .catch(error => {
          alert('Punch in failed: ' + error.response.data);
        });
    }
  };

  const buttonStyle = {
    backgroundColor: isPunchedIn ? 'red' : 'green',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px'
  };

  const formatTime = seconds => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <>
      <div className='emp_attandance_main'>
        <div className='emp_attandance pt-2'>
          {isPunchedIn ? 'Punch Out' : 'Punch In'}
        </div>
        <div className='emp_attandeance_1'>
          <div>
            <div>
              <button onClick={handlePunch} style={buttonStyle}>
                {isPunchedIn ? 'Punch Out' : 'Punch In'}
              </button>
            </div>
            <div className='pt-4'>
              {isPunchedIn && (
                <div>
                  <p>Punch-in time: {punchInTime}</p>
                  <p>Time Elapsed: {formatTime(timer)}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmpAttendance;