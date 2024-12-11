import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";
import MiniDropdown from "./MiniDropdown";

const Dashboard = () => {
  const [admins, setAdmins] = useState([])

  const [openProfile, setOpenProfile] = useState(false);

  useEffect(() => {
    AdminRecords();
  }, [])

  const AdminRecords = () => {
    axios.get('https://mohitbyproject-production.up.railway.app/api/user/')
      .then(result => {
        if (result.data) {
          setAdmins(result.data)
        } else {
          alert(result.data.Error)
        }
      })
  }

  const navigate = useNavigate()
  axios.defaults.withCredentials = true
  const handleLogout = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found, cannot logout.");
      navigate('/');
      return;
    }
 
    axios.post('https://emsproject-production.up.railway.app/auth/logout', {}, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    .then(result => {
      if (result.data) {
        localStorage.removeItem("token");
        navigate('/');
      } else {
        console.error("Logout failed:", result.data);
      }
    })
    .catch(err => console.error("Error in logout request:", err));
  };
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
            {/* <div className="btn-head" role="button">
              {admins.map((e) => (
                <div className="btn-head-1">
                  Name : {e.name}
                </div>
              ))}
            </div> */}
          </div>
          <div className="header-main-5 ms-3">
            <div className="line-1"></div>
          </div>
          <div className="header-main-5 ms-3 me-2">
            <div className="">

              <img src="/Images/Acetech-logo-1.png" alt="LOGO" className="logo_profile" role="button" onClick={() => setOpenProfile((prev) => !prev)} />

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
                    to="/dashboard"
                    className='nav-link text-white px-0 align-middle'

                  >
                    <i className="fs-4 bi-speedometer2 ms-1"></i>
                    <span className="ms-2 d-none d-sm-inline" className>Dashboard</span>
                  </Link>
                </li>
                <li className="w-100">
                  <NavLink
                    // to="/dashboard/employee"
                    to="/dashboard/employeemenu"
                    className="nav-link px-0 align-middle text-white"
                  >
                    <i className="fs-4 bi-people ms-1"></i>
                    <span className="ms-2 d-none d-sm-inline">
                      Manage Employees
                      <span id="blink-bg">New</span>
                    </span>

                  </NavLink>
                </li>
                <li className="w-100">
                  <NavLink
                    to="/dashboard/category"
                    className="nav-link px-0 align-middle text-white"
                  >
                    <i className="fs-4 bi-columns ms-1"></i>
                    <span className="ms-2 d-none d-sm-inline">Category</span>
                  </NavLink>
                </li>
                
                <li className="w-100">
                  <NavLink
                    to="/dashboard/attendence"
                    className="nav-link px-0 align-middle text-white"
                  >
                    <i className="fs-4 bi-fingerprint ms-1"></i>
                    <span className="ms-2 d-none d-sm-inline">Attendance</span>
                  </NavLink>
                </li>
                <li className="w-100">
                  <NavLink
                    to="/dashboard/report"
                    className="nav-link px-0 align-middle text-white"
                  >
                    <i className="fs-4 bi-file-earmark-bar-graph ms-1"></i>
                    <span className="ms-2 d-none d-sm-inline">Report</span>
                  </NavLink>
                </li>
                <li className="w-100">
                  <NavLink
                    to="/dashboard/notification"
                    className="nav-link px-0 align-middle text-white"
                  >
                    <i className="fs-4 bi-bell ms-1"></i>
                    <span className="ms-2 d-none d-sm-inline">Notification</span>
                  </NavLink>
                </li>
                <li className="w-100">
                  <NavLink
                    to="/dashboard/calculate-salary"
                    className="nav-link px-0 align-middle text-white"
                  >
                    <i className="fs-4 bi-currency-rupee ms-1"></i>
                    <span className="ms-2 d-none d-sm-inline">Calculate Salary</span>
                  </NavLink>
                </li>
                <li className="w-100">
                  <NavLink
                    to="/dashboard/add-payment"
                    className="nav-link px-0 align-middle text-white"
                  >
                    <i className="fs-4 bi-credit-card ms-1"></i>
                    <span className="ms-2 d-none d-sm-inline">Add Payment</span>
                  </NavLink>
                </li>
                <li className="w-100">
                  <NavLink
                    to="/dashboard/pay-employees"
                    className="nav-link px-0 align-middle text-white"
                  >
                    <i className="fs-4 bi-cash ms-1"></i>
                    <span className="ms-2 d-none d-sm-inline">
                      Pay Employees
                      <span id="blink-bg">New</span>
                    </span>
                  </NavLink>
                </li>
                <li className="w-100">
                  <NavLink
                    to="/dashboard/live-location"
                    className="nav-link px-0 align-middle text-white"
                  >
                    <i className="fs-4 bi-crosshair ms-1"></i>
                    <span className="ms-2 d-none d-sm-inline">Live Location</span>
                  </NavLink>
                </li>
                <li className="w-100">
                  <NavLink
                    to="/dashboard/document"
                    className="nav-link px-0 align-middle text-white"
                  >
                    <i className="fs-4 bi-journal ms-1"></i>
                    <span className="ms-2 d-none d-sm-inline">Document</span>
                  </NavLink>
                </li>
                <li className="w-100">
                  <NavLink
                    to="/dashboard/addtask"
                    className="nav-link px-0 align-middle text-white"
                  >
                    <i className="fs-4 bi-journal ms-1"></i>
                    <span className="ms-2 d-none d-sm-inline">Task</span>
                  </NavLink>
                </li>
                <li className="w-100">
                  <NavLink
                    to="/dashboard/settings"
                    className="nav-link px-0 align-middle text-white"
                  >
                    <i className="fs-4 bi-gear ms-1"></i>
                    <span className="ms-2 d-none d-sm-inline">Settings</span>
                  </NavLink>
                </li>
                <li className="w-100">
                  <NavLink
                    to="/support/home"
                    className="nav-link px-0 align-middle text-white"
                  >
                    <i className="fs-4 bi-question-circle ms-1"></i>
                    <span className="ms-2 d-none d-sm-inline">Contact Us</span>
                  </NavLink>
                </li>

                <li className="w-100" onClick={handleLogout}>
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
          </div>
        </div>
      </div>

      <div>
        {
          openProfile && <MiniDropdown onClose={() => setOpenProfile(false)} />
        }
      </div>
      
      <div className="dash-footer">
        Copyright © <a href="#" className="dash-footer-link"> Acetech Work Organization Pvt. Ltd. </a> 2024.
      </div>
    </>
  );
};

export default Dashboard;