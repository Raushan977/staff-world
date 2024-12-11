import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import TaskListFilter from './TaskListFilter';

const TaskList = () => {
    
    const[date, setDate] = useState(new Date())
    const [employee, setEmployee] = useState([]);
    const [employeeCopy, setEmployeeCopy] = useState([]);
    const [task, setTask] = useState([]);

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
                    // setRecords(result.data);
                } else {
                    alert(result.data.Error);
                }
            })
            .catch((err) => console.log(err));
        axios
            .get("https://mohitbyproject-production.up.railway.app/api/tasks")
            .then((result) => {
                if (result.data) {
                    setTask(result.data);
                    // setEmployeeCopy(result.data)
                    // setRecords(result.data);
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
    // console.log('event.target.value',filterbyShift )

    // const [records, setRecords] = useState(data)
    // const handleFilter = (event) => {
    //     setRecords(employee.filter(f => f.name.toLowerCase().includes(event.target.value)))
    // }
  return (
    <div className='dailyReport-bg'>
        <div className='currentEmplyee-bg-1 '>
            <div className='currentEmplyee-bg-2'>
            Task Management
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
                        <th>Employee Name</th>
                        <th>Task Id</th>
                        <th>Task Name</th>
                        <th>Assign Date</th>
                        <th>Completed Date</th>
                        <th>Task Status</th>
                      </tr>
                    </thead>
                    <tbody >
                      {task.map((e) => (
                        <tr>
                          <td>
                            {e.employeeId}
                          </td>
                          
                          <td>
                            {e.name}
                          </td>
                          <td>
                            {e.taskId}
                          </td>
                          <td>
                            {e.taskName}
                          </td>
                          <td>
                            {/* Format each employee's date */}
                            {new Intl.DateTimeFormat('en-GB', {
                              day: 'numeric',
                              month: 'short', // Use 'short' for abbreviated month names
                              year: 'numeric',
                            }).format(new Date(e.assign))}
                          </td>
                          <td>
                            {/* Format each employee's date */}
                            {new Intl.DateTimeFormat('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit',
                              second: '2-digit',
                              hour12: true,
                            }).format(new Date(e.assign))}
                          </td>
                          <td>
                          <div className='status-field'>
                                {e.status}
                            </div>
                          </td>
                        </tr>
                      ))}

                    </tbody>
                  </table>
                </div>
        </div>
        {
          openReportFilter && <TaskListFilter 
          setOpenReportFilterSearchText={setOpenReportFilterSearchText}  
          setFilterbyDepartment={setFilterbyDepartment}
          setFilterbySite={setFilterbySite}
          setFilterbyShift={setFilterbyShift}
          onClose={()=> setOpenReportFilter(false)}/>
        }
    </div>
  )
}

export default TaskList