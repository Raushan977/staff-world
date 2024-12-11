import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddTask = () => {
    const [employee, setEmployee] = useState([]);
    const [records, setRecords]= useState([]);

  useEffect(() => {
    axios
      .get("https://mohitbyproject-production.up.railway.app/api/employee/")
      .then((result) => {
        if (result.data) {
          setEmployee(result.data);
          setRecords(result.data);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);
//   const handleDelete = (employeeId) => {
//     axios.delete('https://mohitbyproject-production.up.railway.app/api/employee/' + employeeId)
//       .then(result => {
//         if (result.data) {
//           window.location.reload()
//         } else {
//           alert(result.data.Error)
//         }
//       })
//   }
  
  const handleFilter = (event) => {
    console.log(event);
        setRecords(employee.filter(f => f.name.toLowerCase().includes(event.target.value)))
  }

    return (
        <div className='document-bg'>
            <div className='document-bg-2 fs-5 bg-head'>
                Task
            </div>
            <div className='document-bg-3'>
                <div className='document-bg-4 input-group '>
                    <div className='rounded-2 d-flex document-search-input'>
                        <i className="bi bi-search text-center pt-1 ps-2"></i>
                        <input type="text" className='border-0 ps-2 input-d w-100' placeholder='Search Name of employee' onChange={handleFilter} />
                        <button type="button" className="btn btn-primary btn-sm rounded-2">Search</button>
                    </div>
                    <div className='document-bg-5'>
                        <div className="table px-5 mt-3">
                                {/* <div>
                                    <Link to="/dashboard/add_employee" className="btn btn-success mx-2">
                                        Add Employee
                                    </Link>
                                </div> */}
                            <div className="">
                                <table className="table-content">
                                    <thead>
                                        <tr>
                                            <th>Emp Id</th>
                                            <th>Image</th>
                                            <th>Name</th>
                                            <th>Designation</th>
                                            <th>Site</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {records.map((e) => (
                                            <tr>
                                                <td>{e.employeeId}</td>
                                                <td>
                                                    <img
                                                        src={`https://mohitbyproject-production.up.railway.app/api/employee/image/${e.zname}`}
                                                        alt={`${e.zname}'s profile`}
                                                        className="employee_image"
                                                    />
                                                </td>
                                                <td>{e.name}</td>
                                                <td>{e.category}</td>
                                                <td>{e.site}</td>
                                                <td>
                                                    <Link
                                                        to={`/dashboard/assigntask/` + e.employeeId}
                                                        className="btn btn-info btn-sm me-2"
                                                    >
                                                        Assign Task
                                                    </Link>
                                                    {/* <button
                                                        className="btn btn-warning btn-sm"
                                                        onClick={() => handleDelete(e.employeeId)}
                                                    >
                                                        Delete
                                                    </button> */}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTask