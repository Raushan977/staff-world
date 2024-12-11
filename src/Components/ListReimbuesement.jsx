import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const ListReimbuesement = () => {
  const [date, setDate] = useState(new Date())
    const handleDate = (dt) => {
        setDate(dt)
    }
    const [employee, setEmployee] = useState([]);
    const [records, setRecords] = useState([])



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
    const handleFilter = (event) => {
        setRecords(employee.filter(f => f.name.toLowerCase().includes(event.target.value)))
    }
    const handleDelete = (employeeId) => {
        axios.delete('https://mohitbyproject-production.up.railway.app/api/employee/' + employeeId)
            .then(result => {
                if (result.data) {
                    window.location.reload()
                } else {
                    alert(result.data.Error)
                }
            })
    }
    return (
        <div className='currentEmplyee-bg'>
            <div className='currentEmplyee-bg-1 '>
                <div className='currentEmplyee-bg-2'>
                Requests for Reimbursement
                </div>
                <div className='currentEmplyee-bg-3'>

                    <div>
                        <Link
                            to='#'
                            className='nav-link'>
                            <div className='salary-btn-1' role='button'>Confirmed Reviewed</div>
                        </Link>
                    </div>
                    <div className='salary-calen'>
                    <label>
                        <div className='salaryDateContainer'>
                            <span className='salaryDateInput'>
                                <DatePicker
                                    selected={date}
                                    dateFormat="MM/yyyy"
                                    onChange={(date) => handleDate(date)}
                                    showMonthYearPicker
                                    // maxDate={new Date()}
                                />
                            </span>
                            <span className='salaryIcon'>
                                <i className="bi bi-calendar3"></i>
                            </span>
                        </div>
                    </label>
                </div>
                    
                </div>
            </div>
            
            <div className='ps-3 pe-3'>
                <div className='w-100 h-100 text-center'>
                    <table className="dailyReportTable">
                        <thead>
                            <tr>
                                <th>Reimb. No.</th>
                                <th>Created Date</th>
                                <th>Emp. Code</th>
                                <th>Name</th>
                                <th>Next Approver</th>
                                <th>Department</th>
                                <th>Designation</th>
                                <th>Bill Amt.</th>
                                <th>Approved Amt.</th>
                                <th>Bill Date</th>
                                <th>Status</th>
                                <th>Trail</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody >
                            {records.map((e) => (
                                <tr>
                                    <td>
                                        {e.employeeId}
                                    </td>
                                    <td>
                                        <div className='d-flex'>
                                            <div>
                                                <img
                                                    src={`https://mohitbyproject-production.up.railway.app/api/employee/image/${e.zname}`}
                                                    className="home_leave_image"
                                                />
                                            </div>
                                            <div className='ms-2 d-inline'>
                                                <div>
                                                    {e.name}
                                                </div>
                                                <div>
                                                    {e.category}General Manager
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {e.reason}
                                    </td>
                                    <td>
                                        {e.jod}
                                    </td>
                                    <td>
                                        {e.to_date}
                                    </td>
                                    <td>
                                        {e.site}
                                    </td>
                                    <td>
                                        {e.status}
                                    </td>
                                    <td>
                                        {e.status}
                                    </td>
                                    <td>
                                        {e.status}
                                    </td>
                                    <td>
                                        {e.status}
                                    </td>
                                    <td>
                                        {e.status}
                                    </td>
                                    <td>
                                        {e.status}
                                    </td>
                                    <td>
                                        <Link
                                            to={`/dashboard/editEmployeeIndivisual/` + e.employeeId}

                                        >
                                            {/* btn btn-info btn-sm me-2  */}
                                            <span className="edit_btn me-1">Edit</span>
                                        </Link>
                                        <span
                                            className="edit_btn"
                                            //   btn btn-warning btn-sm 
                                            onClick={() => handleDelete(e.employeeId)}
                                        >
                                            Delete
                                        </span>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ListReimbuesement