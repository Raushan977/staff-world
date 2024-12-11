import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useNavigate, useParams } from 'react-router-dom'


const EmployeeDetail = () => {
    const [employee, setEmployee] = useState([])
    // const { employeeId } = useParams()
    const navigate = useNavigate()

    // useEffect(() => {
    //     axios.get('http://localhost:3000/employee/detail/'+id)
    //     .then(result => {
    //         setEmployee(result.data[0])
    //     })
    //     .catch(err => console.log(err))
    // }, [])

    useEffect(() => {
        const token = localStorage.getItem('token');
        const employeeId = localStorage.getItem('employeeId');
        // console.log(employeeId);
        axios
            .get("https://mohitbyproject-production.up.railway.app/api/employee/" + employeeId, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            .then(result => {
                // setEmployee(result.data[0])
                setEmployee(result.data)
            })
            .catch((err) => console.log(err, "Saroj we are getting error"));
    }, []);

    
    // console.log(employee.name);
    

    const handleLogout = () => {
        // axios.get('http://localhost:3000/employee/logout')
        //     .then(result => {
        //         if (result.data.Status) {
        //             // localStorage.removeItem("valid")
        //             navigate('/')
        //             console.log("logout");
        //         }
        //     }).catch(err => console.log(err))
    }
    return (
        <>
            <div className="header-main shadow">
                <div className="header-main-1">
                    {/* <div className="fs-3">
            <i className="bi bi-list" role="button"></i>
          </div> */}
                    <div>
                        <img src="/Images/Acetech-logo-1.png" alt="LOGO" className="logo_image" role="button" />
                    </div>
                    <div className="" role="button">
                        <div className="header-main-2">
                            STAFF WORLD
                        </div>
                        <div className="header-main-6">
                            An Employee Management System
                        </div>
                    </div>
                </div>
                <div className="header-main-3">
                    <div className="header-main-5">
                        <div className="fs-4 me-3">
                            <i className="bi bi-bell" role="button"></i>
                        </div>
                    </div>
                    <div className="header-main-5">
                        <div className="fs-4 me-3">
                            <i className="bi bi-megaphone" role="button"></i>
                        </div>
                    </div>
                    <div className="header-main-5">
                        <div className="fs-4 me-3">
                            <i className="bi bi-cake" role="button"></i>
                        </div>
                    </div>
                    <div className="header-main-5">
                        <div className="fs-4 me-3">
                            <i className="bi bi-headset" role="button"></i>
                        </div>
                    </div>
                    <div className="header-main-5">
                        <div className="btn-head" role="button">
                            {/* {admins.map((e) => (
                <div className="btn-head-1">
                  Site : {e.name}
                </div>
              ))} */}

                            <div className="btn-head-1">
                                {employee.name}
                            </div>

                        </div>
                    </div>
                    <div className="header-main-5 ms-3">
                        <div className="line-1"></div>
                    </div>
                    <div className="header-main-5 ms-3 me-2">
                        <div className="">

                            <img
                                src="/Images/Acetech-logo-1.png"
                                alt="LOGO"
                                className="logo_profile"
                                role="button"
                            // onClick={() => setOpenProfile((prev) => !prev)} 
                            />

                        </div>
                    </div>
                    <div className="header-main-4">
                        <i className="bi bi-three-dots-vertical fs-3" role="button"></i>
                    </div>
                </div>
            </div>



            <div className="container-fluid">
                <div className="row flex-nowrap main_div">
                    <div className="col col-1 col-xl-2 px-sm-2 px-0 navbg">

                        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white ">


                            <ul
                                className="nav flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"

                            >
                                <li className="w-100">
                                    <Link
                                        to={``}
                                        className='nav-link text-white px-0 align-middle'

                                    >
                                        <i className="fs-4 bi-person-circle ms-1"></i>
                                        <span className="ms-2 d-none d-sm-inline">Dashboard</span>
                                    </Link>
                                </li>


                                <li className="w-100">
                                    <NavLink
                                        to={`/employee_detail/empAttendance`}
                                        className="nav-link px-0 align-middle text-white"
                                    >
                                        <i className="fs-4 bi-fingerprint ms-1"></i>
                                        <span className="ms-2 d-none d-sm-inline">Mark Attendance</span>
                                    </NavLink>
                                </li>

                                <li className="w-100">
                                    <NavLink
                                        to={`/employee_detail/empViewAttendance`}
                                        className="nav-link px-0 align-middle text-white"
                                    >
                                        <i className="fs-4 bi-calendar4-week ms-1"></i>
                                        <span className="ms-2 d-none d-sm-inline">View Attendance</span>
                                    </NavLink>
                                </li>


                                <li className="w-100">
                                    <NavLink
                                        to={`/employee_detail/requestLeave`}
                                        className="nav-link px-0 align-middle text-white"
                                    >
                                        <i className="fs-4 bi-backpack2 ms-1"></i>
                                        <span className="ms-2 d-none d-sm-inline">Request Leaves</span>
                                    </NavLink>
                                </li>

                                <li className="w-100">
                                    <NavLink
                                        to={`/employee_detail/empHolidayList`}
                                        className="nav-link px-0 align-middle text-white"
                                    >
                                        <i className="fs-4 bi-calendar2-event ms-1"></i>
                                        <span className="ms-2 d-none d-sm-inline">Holiday List</span>
                                    </NavLink>
                                </li>

                                <li className="w-100">
                                    <NavLink
                                        to={`/employee_detail/empDocument`}
                                        className="nav-link px-0 align-middle text-white"
                                    >
                                        <i className="fs-4 bi-folder2 ms-1"></i>
                                        <span className="ms-2 d-none d-sm-inline">My Documents</span>
                                    </NavLink>
                                </li>

                                <li className="w-100">
                                    <NavLink
                                        to={`/employee_detail/empTask`}
                                        className="nav-link px-0 align-middle text-white"
                                    >
                                        <i className="fs-4 bi-journal-text ms-1"></i>
                                        <span className="ms-2 d-none d-sm-inline">Tasks</span>
                                    </NavLink>
                                </li>

                                <li className="w-100"
                                    onClick={handleLogout}
                                >
                                    <Link
                                        className="nav-link px-0 align-middle text-white"
                                    >
                                        <i className="fs-4 bi-power ms-1"></i>
                                        <span className="ms-2 d-none d-sm-inline">Logout</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col p-0 m-0" id="main_contaner">
                        <Outlet />


                        {/* <div className='d-flex justify-content-center flex-column align-items-center mt-3'>
                            <img src={`http://localhost:3000/Images/` + employee.image} className='emp_det_image' />
                            <div className='d-flex align-items-center flex-column mt-5'>
                                <h3>Name: {employee.name}</h3>
                                <h3>Email: {employee.email}</h3>
                                <h3>Salary: ${employee.salary}</h3>
                            </div>
                            <div>
                                <button className='btn btn-primary me-2'>Edit</button>
                                <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
                            </div>
                        </div> */}


                    </div>

                </div>
            </div>

            <div className="dash-footer">
                Copyright © <a href="#" className="dash-footer-link"> Acetech Work Organization Pvt. Ltd. </a> 2024.
            </div>
        </>
    )
}

export default EmployeeDetail