// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { CSVLink } from "react-csv";
// import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router for navigation

// const Attendence = () => {
//   const [date, setDate] = useState(new Date());
//   const [admins, setAdmins] = useState([]);
//   const [category, setCategory] = useState([]);
//   const [employee, setEmployee] = useState([]);
//   const [records, setRecords] = useState([]);
//   const [ctime, setCtime] = useState(new Date().toLocaleTimeString());
//   const [status, setStatus] = useState('status_1');
//   const [punchRecords, setPunchRecords] = useState({}); // to track punch-in records
//   const navigate = useNavigate();

//   const statusOptions = ['Present', 'Absent', 'Late', 'Half Day', 'Paid Leave'];

//   useEffect(() => {
//     AdminRecords();
//     fetchCategories();
//     fetchEmployees();
//     const interval = setInterval(() => setCtime(new Date().toLocaleTimeString()), 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const AdminRecords = () => {
//     const token = localStorage.getItem('token');
//     axios.get("https://mohitbyproject-production.up.railway.app/api/user/", {
//       headers: { "Authorization": `Bearer ${token}` }
//     })
//     .then(result => {
//       if (result.data) {
//         setAdmins(result.data);
//       } else {
//         alert(result.data.Error);
//       }
//     })
//     .catch(err => console.log(err));
//   };

//   const fetchCategories = () => {
//     const token = localStorage.getItem('token');
//     axios.get("https://mohitbyproject-production.up.railway.app/api/category/", {
//       headers: { "Authorization": `Bearer ${token}` }
//     })
//     .then(result => {
//       if (result.data) {
//         setCategory(result.data);
//       } else {
//         alert(result.data.Error);
//       }
//     })
//     .catch(err => console.log(err));
//   };

//   const fetchEmployees = () => {
//     const token = localStorage.getItem('token');
//     axios.get("https://mohitbyproject-production.up.railway.app/api/employee/", {
//       headers: { "Authorization": `Bearer ${token}` }
//     })
//     .then(result => {
//       if (result.data) {
//         setEmployee(result.data);
//         setRecords(result.data);
//       } else {
//         alert(result.data.Error);
//       }
//     })
//     .catch(err => console.log(err));
//   };

//   const handleFilter = (event) => {
//     setRecords(employee.filter(f => f.name.toLowerCase().includes(event.target.value.toLowerCase())));
//   };

//   const handleStatus = (e) => {
//     setStatus(e.target.value);
//     console.log(e.target.value);
//   };

//   const handleDate = (e) => {
//     setDate(e.target.value);
//     console.log(e.target.value);
//   };

//   const handlePunch = (employeeId, name) => {
//     const punchButton = document.getElementById('punchButton' + employeeId);
//     const isPunchingIn = punchButton.innerText === 'Punch In';

//     if (isPunchingIn) {
//       punchButton.innerText = 'Punch Out';
//       axios.post('https://mohitbyproject-production.up.railway.app/api/Hello/punchIn', {
//         employeeName: name,
//         employeeId: employeeId,
//         // punchIn: new Date().toLocaleString(),
//         status: status // Include selected status
//       })
//       .then(result => {
//         if (result.data) {
//           setPunchRecords(prevState => ({
//             ...prevState,
//             [employeeId]: result.data.attendanceId // Store the attendance ID
//           }));
//         } else {
//           alert(result.data.Error);
//         }
//       })
//       .catch(err => console.log(err));
//     } else {
//       const attendanceId = punchRecords[employeeId];
//       punchButton.innerText = 'Punch In';
//       axios.put(`https://mohitbyproject-production.up.railway.app/api/Hello/punchOut/${attendanceId}`, {
//         // punchOut: new Date().toLocaleString()
//       })
//       .then(result => {
//         if (result.data) {
//           // Optionally, remove the record from punchRecords after punch out
//           setPunchRecords(prevState => {
//             const newState = { ...prevState };
//             delete newState[employeeId];
//             return newState;
//           });
//         } else {
//           alert(result.data.Error);
//         }
//       })
//       .catch(err => console.log(err));
//     }

//     console.log(employeeId, name, new Date().toLocaleString(), punchButton.innerText);
//   };

//   return (
//     <>
//       <div className="container text-center" id='attendence-bg'>
//         <div className="row">
//           <div className="col mt-3">
//             <div className='d-flex justify-content-between'>
//               <div>
//                 <span className='me-2'>
//                   <label className='me-2'>Branch</label>
//                   <select className="bg-white rounded-1 border-1">
//                     <option>All Branches</option>
//                     {admins.map(a => <option key={a.id} value={a.id}>{a.name}</option>)}
//                   </select>
//                 </span>
//                 <span className='me-2'>
//                   <label className='me-2'>Department</label>
//                   <select className="bg-white rounded-1 border-1">
//                     <option selected>All Departments</option>
//                     {category.map(c => <option key={c.id} value={c.id}>{c.categoryName}</option>)}
//                   </select>
//                 </span>
//                 <span>
//                   <label className='me-2'>Date</label>
//                   <input type="date" className='rounded-1 border-1' onChange={handleDate} />
//                 </span>
//               </div>
//               <div>
//                 <button type="button" className="btn btn-outline-primary btn-sm rounded-0 me-2">Mark All Absent As Present</button>
//                 <CSVLink data={employee} filename='DailyReports'>
//                   <button type="button" className="btn btn-primary btn-sm rounded-0"> <i className="bi bi-download me-2"></i>Daily Report</button>
//                 </CSVLink>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="row mt-4 ms-0 me-0 bgcolor">
//           <div className="col mt-3">
//             <div className='rounded-0 border-end present-bg'>
//               <h1>12</h1>
//               <p><i className="bi bi-circle-fill text-success me-2"></i>Present</p>
//             </div>
//           </div>
//           <div className="col mt-3">
//             <div className='rounded-0 border-end present-bg'>
//               <h1>0</h1>
//               <p><i className="bi bi-circle-fill text-danger me-2"></i>Absent</p>
//             </div>
//           </div>
//           <div className="col mt-3">
//             <div className='rounded-0 border-end present-bg'>
//               <h1>0</h1>
//               <p><i className="bi bi-circle-fill text-success me-2"></i>Late</p>
//             </div>
//           </div>
//           <div className="col mt-3">
//             <div className='rounded-0 border-end present-bg'>
//               <h1>0</h1>
//               <p><i className="bi bi-circle-fill text-warning me-2"></i>Half Day</p>
//             </div>
//           </div>
//           <div className="col mt-3">
//             <div className='rounded-0 present-bg'>
//               <h1>0</h1>
//               <p><i className="bi bi-circle-fill text-info me-2"></i>Paid Leave</p>
//             </div>
//           </div>
//         </div>
//         <div className='row mt-3'>
//           <div className='col mb-3'>
//             <div className='d-flex justify-content-between'>
//               <div className='rounded-0 d-flex salary-search-input'>
//                 <i className="bi bi-search text-center pt-2 ps-2"></i>
//                 <input type="text" className='border-0 ps-2 input-t w-100' placeholder='Search Name of employee' onChange={handleFilter} />
//                 <button type="button" className="btn btn-primary btn-sm rounded-0">Search</button>
//               </div>
//               <div>
//                 <CSVLink data={records} filename='RegisterEmployeeData'>
//                   <button type="button" className="btn btn-outline-primary rounded-0 me-0">Export Attendance</button>
//                 </CSVLink>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className='row'>
//           <div className='col'>
//             <div>
//               <table className="table-content">
//                 <thead>
//                   <tr>
//                     <th scope="col">Emp Id</th>
//                     <th scope="col">Image</th>
//                     <th scope="col">Name</th>
//                     <th scope="col">Status</th>
//                     <th scope="col">Punch</th>
//                     {/* <th scope="col">Status</th> */}
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {records.map((e) => (
//                     <tr key={e.employeeId}>
//                       <td>{e.employeeId}</td>
//                       <td>
//                       <img
//                                   src={`https://mohitbyproject-production.up.railway.app/api/employee/image/${e.zname}`}
//                                   alt={`${e.zname}'s profile`}
//                                   className="employee_image"
//                                 />
//                         {/* <img
//                           src={`http://localhost:3000/Images/${e.image}`}
//                           className="employee_image"
//                           alt='Emp Img'
//                         /> */}
//                       </td>
//                       <td>{e.name}</td>
//                       <td>
//                         <select className='rounded-4' onChange={handleStatus}>
//                           {statusOptions.map(option => <option key={option}>{option}</option>)}
//                         </select>
//                       </td>
//                       <td>
//                         <div>
//                           <button
//                             className='punchbtn rounded-4'
//                             id={`punchButton${e.employeeId}`}
//                             onClick={() => handlePunch(e.employeeId, e.name)}>
//                             Punch In
//                           </button>
//                         </div>
//                       </td>
//                       {/* <td>
//                         <select className='rounded-4' onChange={handleStatus}>
//                           {statusOptions.map(option => <option key={option}>{option}</option>)}
//                         </select>
//                       </td> */}
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Attendence;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CSVLink } from "react-csv";
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router for navigation

const Attendence = () => {
  const [date, setDate] = useState(new Date());
  const [admins, setAdmins] = useState([]);
  const [category, setCategory] = useState([]);
  const [employee, setEmployee] = useState([]);
  const [records, setRecords] = useState([]);
  const [ctime, setCtime] = useState(new Date().toLocaleTimeString());
  const [status, setStatus] = useState('status_1');
  const [punchRecords, setPunchRecords] = useState({}); // to track punch-in records
  const navigate = useNavigate();
  const [presentCount, setPresentCount]= useState([]);
  const [absentCount, setAbsentCount]= useState([]);
  const [lateCount, setLateCount]= useState([]);
  const [halfDayCount, setHalfDayCount]= useState([]);
  const [paidLeaveCount, setPaidLeaveCount]= useState([]);

  const statusOptions = ['Select','Present', 'Absent', 'Late', 'Half Day', 'Paid Leave'];

  useEffect(() => {
    AdminRecords();
    fetchCategories();
    fetchEmployees();
    PresentCount();
    AbsentCount();
    LateCount();
    HalfDayCount();
    PaidLeaveCount();
    // const interval = setInterval(() => setCtime(new Date().toLocaleTimeString()), 1000);
    // return () => clearInterval(interval);
  }, []);

  const AdminRecords = () => {
    const token = localStorage.getItem('token');
    axios.get("https://emsproject-production.up.railway.app/auth/getUsers/", {
      headers: { "Authorization": `Bearer ${token}` }
    })
    .then(result => {
      if (result.data) {
        setAdmins(result.data);
      } else {
        alert(result.data.Error);
      }
    })
    .catch(err => console.log(err));
  };

  const fetchCategories = () => {
    const token = localStorage.getItem('token');
    axios.get("https://mohitbyproject-production.up.railway.app/api/category/", {
      headers: { "Authorization": `Bearer ${token}` }
    })
    .then(result => {
      if (result.data) {
        setCategory(result.data);
      } else {
        alert(result.data.Error);
      }
    })
    .catch(err => console.log(err));
  };

  const fetchEmployees = () => {
    const token = localStorage.getItem('token');
    axios.get("https://mohitbyproject-production.up.railway.app/api/employee/", {
      headers: { "Authorization": `Bearer ${token}` }
    })
    .then(result => {
      if (result.data) {
        setEmployee(result.data);
        setRecords(result.data);
      } else {
        alert(result.data.Error);
      }
    })
    .catch(err => console.log(err));
  };

  const handleFilter = (event) => {
    setRecords(employee.filter(f => f.name.toLowerCase().includes(event.target.value.toLowerCase())));
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
    console.log(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
    console.log(e.target.value);
  };

  const handlePunch = (employeeId, name) => {
    const punchButton = document.getElementById('punchButton' + employeeId);
    const isPunchingIn = punchButton.innerText === 'Punch In';

    if (isPunchingIn) {
      punchButton.innerText = 'Punch Out';
      axios.post('https://mohitbyproject-production.up.railway.app/api/Hello/punchIn', {
        employeeName: name,
        employeeId: employeeId,
        // punchIn: new Date().toLocaleString(),
        status: status // Include selected status
      })
      .then(result => {
        if (result.data) {
          setPunchRecords(prevState => ({
            ...prevState,
            [employeeId]: result.data.id // Store the attendance ID
          }));
        } else {
          alert(result.data.Error);
        }
      })
      .catch(err => console.log(err));
    } else {
      const attendanceId = punchRecords[employeeId];
      punchButton.innerText = 'Punch In';
      axios.put(`https://mohitbyproject-production.up.railway.app/api/Hello/punchOut/${attendanceId}`, {
        // punchOut: new Date().toLocaleString()
      })
      .then(result => {
        if (result.data) {
          // Optionally, remove the record from punchRecords after punch out
          setPunchRecords(prevState => {
            const newState = { ...prevState };
            delete newState[employeeId];
            return newState;
          });
        } else {
          alert(result.data.Error);
        }
      })
      .catch(err => console.log(err));
    }

    console.log(employeeId, name, new Date().toLocaleString(), punchButton.innerText);
  };

  const PresentCount = () => {const token = localStorage.getItem('token');
    axios
    .get("https://mohitbyproject-production.up.railway.app/api/Hello/countP", {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then(result => {
        if (result.data>=0) {
          setPresentCount(result.data)
        }
      })
  }

  const AbsentCount = () => {const token = localStorage.getItem('token');
    axios
    .get("https://mohitbyproject-production.up.railway.app/api/Hello/countA", {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then(result => {
        if (result.data>=0) {
          setAbsentCount(result.data)
        }
      })
  }

  const LateCount = () => {const token = localStorage.getItem('token');
    axios
    .get("https://mohitbyproject-production.up.railway.app/api/Hello/countL", {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then(result => {
        if (result.data>=0) {
          setLateCount(result.data)
        }
      })
  }

  const HalfDayCount = () => {const token = localStorage.getItem('token');
    axios
    .get("https://mohitbyproject-production.up.railway.app/api/Hello/countH", {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then(result => {
        if (result.data>=0) {
          setHalfDayCount(result.data)
        }
      })
  }

  const PaidLeaveCount = () => {const token = localStorage.getItem('token');
    axios
    .get("https://mohitbyproject-production.up.railway.app/api/Hello/countPl", {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then(result => {
        if (result.data>=0) {
          setPaidLeaveCount(result.data)
        }
      })
  }
  

  return (
    <>
      <div className="container text-center" id='attendence-bg'>
        <div className="row">
          <div className="col mt-3">
            <div className='d-flex justify-content-between'>
              <div>
                <span className='me-2'>
                  <label className='me-2'>Branch</label>
                  <select className="bg-white rounded-1 border-1">
                    <option>All Branches</option>
                    {employee.map(a => <option key={a.employeeId} value={a.employeeId}>{a.site}</option>)}
                  </select>
                </span>
                <span className='me-2'>
                  <label className='me-2'>Department</label>
                  <select className="bg-white rounded-1 border-1">
                    <option selected>All Departments</option>
                    {category.map(c => <option key={c.id} value={c.id}>{c.categoryName}</option>)}
                  </select>
                </span>
                <span>
                  <label className='me-2'>Date</label>
                  <input type="date" className='rounded-1 border-1' onChange={handleDate} />
                </span>
              </div>
              <div>
                <button type="button" className="btn btn-outline-primary btn-sm rounded-0 me-2">Mark All Absent As Present</button>
                <CSVLink data={employee} filename='DailyReports'>
                  <button type="button" className="btn btn-primary btn-sm rounded-0"> <i className="bi bi-download me-2"></i>Daily Report</button>
                </CSVLink>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4 ms-0 me-0 bgcolor">
          <div className="col mt-3">
            <div className='rounded-0 border-end present-bg'>
              <h1>{presentCount}</h1>
              <p><i className="bi bi-circle-fill text-success me-2"></i>Present</p>
            </div>
          </div>
          <div className="col mt-3">
            <div className='rounded-0 border-end present-bg'>
              <h1>{absentCount}</h1>
              <p><i className="bi bi-circle-fill text-danger me-2"></i>Absent</p>
            </div>
          </div>
          <div className="col mt-3">
            <div className='rounded-0 border-end present-bg'>
              <h1>{lateCount}</h1>
              <p><i className="bi bi-circle-fill text-success me-2"></i>Late</p>
            </div>
          </div>
          <div className="col mt-3">
            <div className='rounded-0 border-end present-bg'>
              <h1>{halfDayCount}</h1>
              <p><i className="bi bi-circle-fill text-warning me-2"></i>Half Day</p>
            </div>
          </div>
          <div className="col mt-3">
            <div className='rounded-0 present-bg'>
              <h1>{paidLeaveCount}</h1>
              <p><i className="bi bi-circle-fill text-info me-2"></i>Paid Leave</p>
            </div>
          </div>
        </div>
        <div className='row mt-3'>
          <div className='col mb-3'>
            <div className='d-flex justify-content-between'>
              <div className='rounded-0 d-flex salary-search-input'>
                <i className="bi bi-search text-center pt-2 ps-2"></i>
                <input type="text" className='border-0 ps-2 input-t w-100' placeholder='Search Name of employee' onChange={handleFilter} />
                <button type="button" className="btn btn-primary btn-sm rounded-0">Search</button>
              </div>
              <div>
                <CSVLink data={records} filename='RegisterEmployeeData'>
                  <button type="button" className="btn btn-outline-primary rounded-0 me-0">Export Attendance</button>
                </CSVLink>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <div>
              <table className="table-content">
                <thead>
                  <tr>
                    <th scope="col">Emp Id</th>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Status</th>
                    <th scope="col">Punch</th>
                    {/* <th scope="col">Status</th> */}
                  </tr>
                </thead>
                <tbody>
                  {records.map((e) => (
                    <tr key={e.employeeId}>
                      <td>{e.employeeId}</td>
                      <td>
                        <img
                          src={`https://mohitbyproject-production.up.railway.app/api/employee/image/${e.zname}`}
                          className="employee_image"
                          alt='Emp Img'
                        />
                      </td>
                      <td>{e.name}</td>
                      <td>
                        <select className='rounded-4' onChange={handleStatus}>
                          {statusOptions.map(option => <option key={option}>{option}</option>)}
                        </select>
                      </td>
                      <td>
                        <div>
                          <button
                            className='punchbtn rounded-4'
                            id={`punchButton${e.employeeId}`}
                            onClick={() => handlePunch(e.employeeId, e.name)}>
                            Punch In
                          </button>
                        </div>
                      </td>
                      {/* <td>
                        <select className='rounded-4' onChange={handleStatus}>
                          {statusOptions.map(option => <option key={option}>{option}</option>)}
                        </select>
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Attendence;
