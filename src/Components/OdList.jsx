import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const OdList = () => {
    const [date, setDate] = useState(new Date())
    const handleDate = (dt) => {
        setDate(dt)
    }
    const [employee, setEmployee] = useState([]);
    const [records, setRecords] = useState([])
    const [employeeCopy, setEmployeeCopy] = useState([]);
    const [filterbySite, setFilterbySite] = useState('');

    useEffect(() => {
        axios
            .get("https://mohitbyproject-production.up.railway.app/api/employee/")
            .then((result) => {
                if (result.data) {
                    setEmployee(result.data);
                    setEmployeeCopy(result.data)
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
    const siteFilter = (event) => {
        setFilterbySite(event.target.value)
    }
    console.log('event.target.value',filterbySite )

    useEffect(() => {
        setRecords(employee.filter(f => f.address === filterbySite))
    }, [filterbySite]);


    // const siteFilter = (event) => {
    //     setEmployee(employeeCopy.filter(f => f.address.toLowerCase().includes(event.target.value)))
    // }
  return (
    <div className='leaveList-bg'>
            <div className='leaveList-bg-1'>
                <div className='leaveList-bg-2'>
                OD Application
                </div>
                <div className='leaveList-bg-3'>
                    <div>
                        <div className='leaveList-btn' role='button'><i className="bi bi-download icon-2" /> Leave Export</div>
                    </div>
                    <div>
                        <div className='leaveList-font-1'>
                            <label>
                                <div className='leaveList-DateContainer'>
                                    <span className='leaveList-dateInput'>
                                        <DatePicker
                                            selected={date}
                                            dateFormat="MM/yyyy"
                                            onChange={(date) => handleDate(date)}
                                            // showFullMonthYearPicker
                                            showMonthYearPicker
                                        // maxDate={new Date()}
                                        />
                                    </span>
                                    <span className='leaveList-icon'>
                                        <i className="bi bi-calendar3"></i>
                                    </span>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div>
                        <div className='body-fldset'>
                            <div className='form-fldset'>
                                <select name="" id="" placeholder=''
                                    className='text-fldset' >
                                    <option value="">Select Status</option>
                                    {employee.map((e) => {
                                        return <option value={e.employeeId} >{e.name}</option>;
                                    })}
                                </select>
                                <label htmlFor="" className='label-fldset'>
                                    Select Status
                                </label>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <div className='leaveList-body-fldset-1'>
                            <div className='leaveList-form-fldset-1'>
                                <input type="text" placeholder='' className='leaveList-text-fldset-1'
                                    onChange={handleFilter} id='searchInput'/>

                                <label htmlFor="searchInput" className='leaveList-label-fldset-1'>
                                    Search by name <i className="bi bi-search icon-3" />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ps-3 pe-3'>
                <div className='w-100 h-100'>
                    <table className="dailyReportTable">
                        <thead>
                            <tr>
                                <th>OD Id</th>
                                <th>Employee</th>
                                <th>Dept./Desi.</th>
                                <th>Next Approver</th>
                                <th>Applied Date</th>
                                <th>Check In</th>
                                <th>Check Out</th>
                                <th>Distance/Duration</th>
                                <th>Remarks</th>
                                <th>Force Checkout Remarks</th>
                                <th>Detail</th>
                                <th>Expenses</th>
                                <th>Total Amount</th>
                                <th>Status</th>
                                <th>Force Checkout</th>
                            </tr>
                        </thead>
                        <tbody >
                            {records.map((e) => (
                                <tr>
                                    <td>
                                        {e.employeeId}
                                    </td>
                                    <td>
                                        {e.name}
                                    </td>
                                    <td>
                                        {e.email}
                                    </td>
                                    <td>
                                        {e.jod}
                                    </td>
                                    <td>
                                        {e.address}
                                    </td>
                                    <td>
                                        {e.site}
                                    </td>
                                    <td>
                                        {e.status}
                                    </td>
                                    <td>
                                        {e.work}
                                    </td>
                                    <td>
                                        {e.dob}
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
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
  )
}

export default OdList