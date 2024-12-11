// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
 
// const Employee = () => {
//   const [employee, setEmployee] = useState([]);
//   const navigate = useNavigate()
 
//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     axios
//     .get("https://emsproject-production.up.railway.app/api/employee/", {
//       headers: {
//         "Authorization": `Bearer ${token}`
//       }
//     })
 
//       .then((result) => {
//         if (result.data) {
//           setEmployee(result.data);
//         } else {
//           alert(result.data.Error);
//         }
//       })
//       .catch((err) => console.log(err));
//   }, []);
//   const handleDelete = (id) => {
//     const token = localStorage.getItem('token');
//     axios.delete('https://emsproject-production.up.railway.app/api/employee/' + id, {
//       headers: {
//         "Authorization": `Bearer ${token}`
//       }
//     })
 
//       .then(result => {
//         if (result.data) {
//           window.location.reload()
//         } else {
//           alert(result.data.Error)
//         }
//       })
//   }
//   return (
//     <>
//       <div className="employee-bg">
//         <div className='row w-full'>
 
//           <div className="row px-5 mt-3">
//             <div className="col d-flex justify-content-lg-start">
//               <div>
//                 <Link to="/dashboard/add_employee" className="btn btn-success mx-2">
//                   Add Employee
//                 </Link>
//               </div>
//               <div>
//                 <Link to="#" className="btn btn-success">
//                   Add Multiple Employee
//                 </Link>
//               </div>
//             </div>
//             <div className="row mt-3 emp-table">
//               <table className="table-content">
//                 <thead>
//                   <tr>
//                     <th>Name</th>
//                     {/* <th>Image</th> */}
//                     <th>Email</th>
//                     <th>Address</th>
//                     <th>Salary</th>
//                     <th>Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {employee.map((e) => (
//                     <tr>
//                       <td>{e.name}</td>
//                       {/* <td>
//                         <img
//                           src={`http://localhost:3000/Images/` + e.image}
//                           className="employee_image"
//                         />
//                       </td> */}
//                       <td>{e.email}</td>
//                       <td>{e.address}</td>
//                       <td>{e.salary}</td>
//                       <td>
//                         <Link
//                           to={`/dashboard/edit_employee/` + e.employeeId}
//                           className="btn btn-info btn-sm me-2"
//                         >
//                           Edit
//                         </Link>
//                         <button
//                           className="btn btn-warning btn-sm"
//                           onClick={() => handleDelete(e.employeeId)}
//                         >
//                           Delete
//                         </button>
//                       </td>
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
 
// export default Employee;
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Employee = () => {
  const [employee, setEmployee] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("https://mohitbyproject-production.up.railway.app/api/employee/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        if (result.data) {
          setEmployee(result.data);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (employeeId) => {
    const token = localStorage.getItem("token");
    axios
      .delete("https://mohitbyproject-production.up.railway.app/api/employee/" + employeeId, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        if (result.data) {
          window.location.reload();
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="employee-bg">
        <div className="row w-full">
          <div className="row px-5 mt-3">
            <div className="col d-flex justify-content-lg-start">
              <div>
                <Link
                  to="/dashboard/add_employee"
                  className="btn btn-success mx-2"
                >
                  Add Employee
                </Link>
              </div>
              <div>
                <Link to="#" className="btn btn-success">
                  Add Multiple Employees
                </Link>
              </div>
            </div>
            <div className="row mt-3 emp-table">
              <table className="table-content">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Salary</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {employee.map((e) => (
                    <tr key={e.employeeId}>
                      <td>{e.name}</td>
                      <td>
                        <img
                          src={`https://mohitbyproject-production.up.railway.app/api/employee/image/${e.zname}`}
                          alt={`${e.zname}'s profile`}
                          className="employee_image"
                        />
                      </td>
                      <td>{e.email}</td>
                      <td>{e.address}</td>
                      <td>{e.salary}</td>
                      <td>
                        <Link
                          to={`/dashboard/edit_employee/` + e.employeeId}
                          className="btn btn-info btn-sm me-2"
                        >
                          Edit
                        </Link>
                        <button
                          className="btn btn-warning btn-sm"
                          onClick={() => handleDelete(e.employeeId)}
                        >
                          Delete
                        </button>
                      </td>
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

export default Employee;
