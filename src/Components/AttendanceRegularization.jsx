import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import AttendanceFilter from './AttendanceFilter';
import ReportFilter from './ReportFilter';

const AttendanceRegularization = () => {
    const[date, setDate] = useState(new Date())
    const [employee, setEmployee] = useState([]);
    const [employeeCopy, setEmployeeCopy] = useState([]);

    const [openReportFilter, setOpenReportFilter] = useState(false);

    const [openReportFilterSearchText, setOpenReportFilterSearchText] = useState('');
    const [filterbyDepartment, setFilterbyDepartment] = useState('');
    const [filterbySite, setFilterbySite] = useState('');
    const [filterbyShift, setFilterbyShift] = useState('');

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

    useEffect(() => {
      setEmployee(employeeCopy.filter(f => f.name.toLowerCase().includes(openReportFilterSearchText)))
  }, [openReportFilterSearchText]);

    useEffect(() => {
      setEmployee(employeeCopy.filter(f => f.name === filterbyDepartment))
  }, [filterbyDepartment]);

    useEffect(() => {
      setEmployee(employeeCopy.filter(f => f.address === filterbySite))
  }, [filterbySite]);

    useEffect(() => {
      setEmployee(employeeCopy.filter(f => f.salary == filterbyShift))
  }, [filterbyShift]);

    // console.log('event.target.value',openReportFilterSearchText )
    // console.log('event.target.value',filterbyDepartment )
    // console.log('event.target.value',filterbySite )
    console.log('event.target.value',filterbyShift )

    // const [records, setRecords] = useState(data)
    // const handleFilter = (event) => {
    //     setRecords(employee.filter(f => f.name.toLowerCase().includes(event.target.value)))
    // }
  return (
    <div className='dailyReport-bg'>
        <div className='currentEmplyee-bg-1 '>
            <div className='currentEmplyee-bg-2'>
            Attendance Regularization
            </div>
            <div className='currentEmplyee-bg-3'>
                    <div>
                    <div className='dailyreport-btn-2' role='button'>{date.getDate()}-{date.getMonth()+1}-{date.getFullYear()}</div>
                    </div>
                    
                    <div>
                        <div className='dailyreport-btn-1' role='button' onClick={()=> setOpenReportFilter((prev) => !prev)}>
                            <i className="bi bi-filter" />
                        </div>
                    </div>
                </div>
        </div>
        <div className='ps-3 pe-3'>
                <div className='w-100 h-100 '>
                    <table className="dailyReportTable">
                    <thead>
                      <tr>
                        <th>Emp Id</th>
                        <th>Employee</th>
                        <th>Request Id</th>
                        <th>Created On</th>
                        <th>Check In</th>
                        <th>Check Out</th>
                        <th>Next approver</th>
                        <th>Attendance</th>
                        <th>Status</th>
                        <th>Reason</th>
                        <th>Trail</th>
                        <th>Total Duration</th>
                      </tr>
                    </thead>
                    <tbody >
                      {employee.map((e) => (
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
                                  {e.category}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            {e.address}
                          </td>
                          <td>
                            {e.salary}
                          </td>
                          <td>
                            {e.site}
                          </td>
                          <td>
                            {e.jod}
                          </td>
                          <td>
                            {e.status}
                          </td>
                          <td>
                            <div className='status-field'>
                                {e.status}
                            </div>
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
        {
          openReportFilter && <AttendanceFilter 
          setOpenReportFilterSearchText={setOpenReportFilterSearchText}  
          setFilterbyDepartment={setFilterbyDepartment}
          setFilterbySite={setFilterbySite}
          setFilterbyShift={setFilterbyShift}
          onClose={()=> setOpenReportFilter(false)}/>
        }
    </div>
  )
}

export default AttendanceRegularization