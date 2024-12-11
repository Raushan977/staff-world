import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AreaChart, Area, LineChart, Line, BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const EmpDashboard = () => {
    // const { employeeId } = useParams()
    const [presentCount, setPresentCount] = useState([]);
    const [absentCount, setAbsentCount] = useState([]);
    const [halfDayCount, setHalfDayCount] = useState([]);
    const [lateCount, setLateCount]= useState([]);
    const [attendanceTotal, setAttendanceTotal] = useState([]);

    useEffect(() => {
        PresentCount();
        AbsentCount();
        HalfDayCount();
        LateCount();
        AttendanceCount();
      }, []);

    // useEffect(() => {
        const PresentCount = () => {
            const token = localStorage.getItem('token');
            axios
                .get("https://mohitbyproject-production.up.railway.app/api/Hello/countP", {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                })
                .then(result => {
                    if (result.data >= 0) {
                        setPresentCount(result.data)
                    }
                })
        }

        const AbsentCount = () => {
            const token = localStorage.getItem('token');
            axios
                .get("https://mohitbyproject-production.up.railway.app/api/Hello/countA", {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                })
                .then(result => {
                    if (result.data >= 0) {
                        setAbsentCount(result.data)
                    }
                })
        }

        const HalfDayCount = () => {
            const token = localStorage.getItem('token');
            axios
                .get("https://mohitbyproject-production.up.railway.app/api/Hello/countH", {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                })
                .then(result => {
                    if (result.data >= 0) {
                        setHalfDayCount(result.data)
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

    // }, []);
    // console.log("Present Count", presentCount);
    // console.log("Absent Count",absentCount);
    // console.log("Half Day Count",halfDayCount);

    // const presentC = presentCount;
    const data = [
        {
            name: 'Jan',
            present: presentCount,
            half_Day: halfDayCount,
            absent: absentCount,
        },
        {
            name: 'Feb',
            present: presentCount,
            half_Day: halfDayCount,
            absent: absentCount,
        },
        {
            name: 'March',
            present: presentCount,
            half_Day: halfDayCount,
            absent: absentCount,
        }
    ];

    // console.log(employeeId);

    const [m, setM] = useState(0)
    const [f, setF] = useState(0)
    const [t, setT] = useState(0)
    const [employeeTotal, setemployeeTotal] = useState(0)
    const [employee, setEmployee] = useState([]);
    // const[data, setData]= useState([])

    useEffect(() => {
        const token = localStorage.getItem('token');
        const employeeId = localStorage.getItem('employeeId');
        axios
            .get("https://mohitbyproject-production.up.railway.app/api/employee/" + employeeId, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            .then((result) => {
                if (result.data) {
                    setEmployee(result.data);
                    // setRecords(result.data.Result);
                } else {
                    alert(result.data.Error);
                }
            })
            .catch((err) => console.log(err));
    }, []);

    const AttendanceCount = () => {
        const token = localStorage.getItem('token');
        axios
            .get("https://mohitbyproject-production.up.railway.app/api/Hello/count", {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            .then(result => {
                if (result.data >= 0) {
                    setAttendanceTotal(result.data)
                }
            })
    }

    const GenderM = () => {
        const token = localStorage.getItem('token');
        axios
            .get("https://mohitbyproject-production.up.railway.app/api/employee/countm", {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            .then(result => {
                if (result.data) {
                    setM(result.data)
                } else {
                    alert(result.data.Error)
                }
            })
    }
    const GenderF = () => {
        const token = localStorage.getItem('token');
        axios
            .get("https://mohitbyproject-production.up.railway.app/api/employee/countf", {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            .then(result => {
                if (result.data) {
                    setF(result.data)
                } else {
                    alert(result.data.Error)
                }
            })
    }
    const GenderT = () => {
        const token = localStorage.getItem('token');
        axios
            .get("https://mohitbyproject-production.up.railway.app/api/employee/countt", {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            .then(result => {
                if (result.data) {
                    setT(result.data)
                } else {
                    alert(result.data.Error)
                }
            })
    }




    return (
        <>
            <div className='empDash'>
                <div className='text-center pt-2 ms-1 border-bottom'>
                    <h3>Employee Dashboard</h3>
                </div>
                <div className='row row-cols-1 row-cols-md-3'>
                    <div className='col'>
                        <div className='text-center pt-2'>Attendance Report</div>
                        {/* <ResponsiveContainer width="100%" height={300}> */}
                        <BarChart
                            width={380}
                            height={250}
                            data={data}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="present" fill="#008000" activeBar={<Rectangle fill="#006400" stroke="#00F700" />} />
                            <Bar dataKey="half_Day" fill="#f4d03f" activeBar={<Rectangle fill="#FFC300" stroke="#b7950b" />} />
                            <Bar dataKey="absent" fill="#f71409" activeBar={<Rectangle fill="#f02218" stroke="#bb120a" />} />
                        </BarChart>
                        {/* </ResponsiveContainer> */}
                    </div>

                    <div className='col'>
                        <div className='text-center pt-2'>Salary Report</div>
                        {/* <ResponsiveContainer width="100%" height="100%"> */}
                        <LineChart
                            width={380}
                            height={250}
                            data={data}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="present" stroke="#8884d8" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="half_Day" stroke="#82ca9d" />
                            <Line type="monotone" dataKey="absent" stroke="#fc03c6" />
                        </LineChart>
                        {/* </ResponsiveContainer> */}
                    </div>

                    <div className='col'>
                        <div className='text-center pt-2'>Task Report</div>
                        {/* <ResponsiveContainer> */}
                        <AreaChart
                            width={380}
                            height={250}
                            data={data}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Area type="monotone" dataKey="present" stroke="#8884d8" fill="#8884d8" />
                            <Area type="monotone" dataKey="half_Day" stroke="#82ca9d" fill="#8884d8" />
                            <Area type="monotone" dataKey="absent" stroke="#fc03c6" fill="#8884d8" />
                        </AreaChart>
                        {/* </ResponsiveContainer> */}
                    </div>
                </div>
                <div className='row row-cols-1 row-cols-md-4 g-0'>
                    <div className='col '>
                        <Link
                            //   to='/dashboard/currentemployee'
                            className='nav-link'>
                            <div className='dashCard'>
                                <div className='d-flex justify-content-between dashcard-1 p-2'>
                                    <div className='d-flex'>
                                        <div className='me-2 icon-home'>
                                            <i className="bi-fingerprint icon-home-1"></i>
                                        </div>
                                        <div className='dash-font'>
                                            Current Month Attendance
                                        </div>
                                    </div>
                                    <div className='dash-font-1'>
                                        {attendanceTotal}
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                                    <div >Present :</div>
                                    <div>{presentCount}</div>
                                </div>
                                <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                                    <div>Absent :</div>
                                    <div>{absentCount}</div>
                                </div>
                                <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                                    <div>Late :</div>
                                    <div>{lateCount}</div>
                                </div>
                                <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                                    <div>Half Day :</div>
                                    <div>{halfDayCount}</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='col '>
                        <Link
                            //   to='/dashboard/currentemployee'
                            className='nav-link'>
                            <div className='dashCard'>
                                <div className='d-flex justify-content-between dashcard-2 p-2'>
                                    <div className='d-flex'>
                                        <div className='me-2 icon-home'>
                                            <i className="bi-wallet-fill icon-home-1"></i>
                                        </div>
                                        <div className='dash-font'>
                                            Last Month Salary
                                        </div>
                                    </div>
                                    <div className='dash-font-1'>
                                        {employeeTotal}
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                                    <div>Full Salary :</div>
                                    <div>{m}</div>
                                </div>
                                <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                                    <div>Paid Salary :</div>
                                    <div>{f}</div>
                                </div>
                                <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                                    <div>Deducted Salary :</div>
                                    <div>{t}</div>
                                </div>
                                <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                                    <div>Advance Salary :</div>
                                    <div>{t}</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='col '>
                        <Link
                            //   to='/dashboard/currentemployee'
                            className='nav-link'>
                            <div className='dashCard'>
                                <div className='d-flex justify-content-between dashcard-1 p-2'>
                                    <div className='d-flex'>
                                        <div className='me-2 icon-home'>
                                            <i className="bi-journal-text icon-home-1"></i>
                                        </div>
                                        <div className='dash-font'>
                                            Current Month Tasks
                                        </div>
                                    </div>
                                    <div className='dash-font-1'>
                                        {employeeTotal}
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                                    <div>Overdue Task :</div>
                                    <div>{m}</div>
                                </div>
                                <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                                    <div>Today's Task :</div>
                                    <div>{f}</div>
                                </div>
                                <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                                    <div>This week's Due :</div>
                                    <div>{t}</div>
                                </div>
                                <div className='d-flex justify-content-between m-2 border-bottom dash-font'>
                                    <div>Pending Task :</div>
                                    <div>{t}</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='col '>
                        <Link
                            //   to='/dashboard/currentemployee'
                            className='nav-link'>
                            <div className='dashCard'>
                                <div className='d-flex justify-content-between dashcard-2 p-2'>
                                    <div className='d-flex'>
                                        <div className='me-2 icon-home'>
                                            <i className="bi-calendar2-event icon-home-1"></i>
                                        </div>
                                        <div className='dash-font'>
                                            Current Month Holiday
                                        </div>
                                    </div>
                                    <div className='dash-font-1'>
                                        {employeeTotal}
                                    </div>
                                </div>
                                <div className=' table-size-holiday'>
                                    <table className="home-leave-table">
                                        <thead>
                                            <tr>
                                                <th>Sr. No.</th>
                                                <th>Name of Holiday</th>
                                            </tr>
                                        </thead>
                                        <tbody >
                                            {/* {employee.map((e) => (
                                                <tr>
                                                    <td>
                                                        {e.id}
                                                    </td>
                                                    
                                                    <td>
                                                        {e.reason}
                                                    </td>
                                                </tr>
                                            ))} */}

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmpDashboard


