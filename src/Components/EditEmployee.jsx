import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditEmployee = () => {
  const { employeeId } = useParams()
  const [employee, setEmployee] = useState({
    // name: "",
    // email: "",
    // salary: "",
    // address: "",
    // category_id: "",
    name: "",
    email: "",
    mobile: "",
    dob: "",
    password: "",
    fname: "",
    salary: "",
    address: "",
    jod: "",
    category: "",
    gender: "",
    marritalStatus: "",
    status: "",
    site: "",
    work: "",
  });
  const [category, setCategory] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('https://mohitbyproject-production.up.railway.app/api/category/')
      .then(result => {
        if (result.data) {
          setCategory(result.data);
        } else {
          alert(result.data.Error)
        }
      }).catch(err => console.log(err))

    axios.get('https://mohitbyproject-production.up.railway.app/api/employee/' + employeeId)
      .then(result => {
        setEmployee({
          ...employee,
          // name: result.data.name,
          // email: result.data.email,
          // address: result.data.address,
          // salary: result.data.salary,
          // category_id: result.data.category_id,
          name: result.data.name,
          email: result.data.email,
          mobile: result.data.mobile,
          dob: result.data.dob,
          password: result.data.password,
          fname: result.data.fname,
          salary: result.data.salary,
          address: result.data.address,
          jod: result.data.jod,
          category: result.data.category,
          gender: result.data.gender,
          marritalStatus: result.data.marritalStatus,
          status: result.data.status,
          site: result.data.site,
          work: result.data.work,
        })
      }).catch(err => console.log(err))
  }, [])
  

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put('https://mohitbyproject-production.up.railway.app/api/employee/' + employeeId, employee)
      .then(result => {
        if (result.data) {
          navigate('/dashboard/employee')
        } else {
          alert(result.data.Error)
        }
      }).catch(err => console.log(err))
  }

  const marritalStatuses = ["Married", "Unmarried", "Divorced"];
  const statuses = [
    "Current",
    "Ex-Employee",
    "New Joining",
    "Transferred In",
    "Transferred Out",
    "Exited Employee",
  ];
  const sites = ["New Delhi", "Mumbai", "Bangalore", "Patna", "Kolkata", "Pune"];
  const works = ["Permanent", "Full Time", "Part Time", "Contract Basis"];

  return (
    <div className="add_emp_bg">
      <div className="d-flex justify-content-center align-items-center">
        <div className="p-3 rounded w-50 border mt-5 mb-1">
          <h3 className="text-center">Edit Employee</h3>
        {/* <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label for="inputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputName"
              placeholder="Enter Name"
              value={employee.name}
              onChange={(e) =>
                setEmployee({ ...employee, name: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control rounded-0"
              id="inputEmail4"
              placeholder="Enter Email"
              autoComplete="off"
              value={employee.email}
              onChange={(e) =>
                setEmployee({ ...employee, email: e.target.value })
              }
            />
          </div>
          <div className='col-12'>
            <label for="inputSalary" className="form-label">
              Salary
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputSalary"
              placeholder="Enter Salary"
              autoComplete="off"
              value={employee.salary}
              onChange={(e) =>
                setEmployee({ ...employee, salary: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputAddress"
              placeholder="1234 Main St"
              autoComplete="off"
              value={employee.address}
              onChange={(e) =>
                setEmployee({ ...employee, address: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="category" className="form-label">
              Category
            </label>
            <select name="category" id="category" className="form-select"
                onChange={(e) => setEmployee({...employee, category_id: e.target.value})}>
              {category.map((c) => {
                return <option value={c.id}>{c.name}</option>;
              })}
            </select>
          </div>
          
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Edit Employee
            </button>
          </div>
        </form> */}

        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="inputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputName"
              placeholder="Enter Name"
              value={employee.name}
              onChange={(e) =>
                setEmployee({ ...employee, name: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control rounded-0"
              id="inputEmail4"
              placeholder="Enter Email"
              value={employee.email}
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, email: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputmobile" className="form-label">
              Mobile No.
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputmobile"
              placeholder="Enter Mobile No."
              value={employee.mobile}
              onChange={(e) =>
                setEmployee({ ...employee, mobile: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputdob" className="form-label">
              Date of Birth
            </label>
            <input
              type="date"
              className="form-control rounded-0"
              id="inputdob"
              value={employee.dob}
              onChange={(e) =>
                setEmployee({ ...employee, dob: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control rounded-0"
              id="inputPassword4"
              placeholder="Enter Password"
              value={employee.password}
              onChange={(e) =>
                setEmployee({ ...employee, password: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputFname" className="form-label">
              Father's Name
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputFname"
              value={employee.fname}
              placeholder="Enter Father's Name"
              onChange={(e) =>
                setEmployee({ ...employee, fname: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputSalary" className="form-label">
              Salary Monthly
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputSalary"
              placeholder="Enter Monthly Salary"
              value={employee.salary}
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, salary: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputAddress"
              placeholder="Enter Address"
              value={employee.address}
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, address: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputjod" className="form-label">
              Date of Joining
            </label>
            <input
              type="date"
              className="form-control rounded-0"
              value={employee.jod}
              id="inputjod"
              onChange={(e) =>
                setEmployee({ ...employee, jod: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="category" className="form-label">
              Category / Department
            </label>
            <select
              name="category"
              id="category"
              value={employee.category}
              className="form-select form-control rounded-0"
              onChange={(e) =>
                setEmployee({ ...employee, category: e.target.value })
              }
            >
              <option value="">Select Category</option>
              {category.map((c) => (
                <option key={c.categoryId} value={c.category}>
                  {c.categoryName}
                </option>
              ))}
            </select>
          </div>
          <div className="col-12">
            <label className="form-label">Select Gender:</label>
            <div className="gender-btn">
              <span className="me-2">
                <input
                  type="radio"
                  id="radio-1"
                  name="gender"
                  value="male"
                  // value={employee.gender}
                  onChange={(e) =>
                    setEmployee({ ...employee, gender: e.target.value })
                  }
                />
                <label htmlFor="radio-1">Male</label>
              </span>
              <span className="me-2">
                <input
                  type="radio"
                  id="radio-2"
                  name="gender"
                  value="female"
                  // value={employee.gender}
                  onChange={(e) =>
                    setEmployee({ ...employee, gender: e.target.value })
                  }
                />
                <label htmlFor="radio-2">Female</label>
              </span>
              <span>
                <input
                  type="radio"
                  id="radio-3"
                  name="gender"
                  value="trans"
                  // value={employee.gender}
                  onChange={(e) =>
                    setEmployee({ ...employee, gender: e.target.value })
                  }
                />
                <label htmlFor="radio-3">Trans</label>
              </span>
            </div>
          </div>
          <div className="col-12">
            <label htmlFor="inputMarritalStatus" className="form-label">
              Marrital Status
            </label>
            <select
              className="form-control rounded-0 form-select"
              id="inputMarritalStatus"
              value={employee.marritalStatus}
              onChange={(e) =>
                setEmployee({ ...employee, marritalStatus: e.target.value })
              }
            >
              <option value="">Select Status</option>
              {marritalStatuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
          <div className="col-12">
            <label htmlFor="inputStatus" className="form-label">
              Status
            </label>
            <select
              className="form-control rounded-0 form-select"
              id="inputStatus"
              value={employee.status}
              onChange={(e) =>
                setEmployee({ ...employee, status: e.target.value })
              }
            >
              <option value="">Select Status</option>
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
          <div className="col-12">
            <label htmlFor="inputSite" className="form-label">
              Select Site
            </label>
            <select
              className="form-control rounded-0 form-select"
              id="inputSite"
              value={employee.site}
              onChange={(e) =>
                setEmployee({ ...employee, site: e.target.value })
              }
            >
              <option value="">Select Site</option>
              {sites.map((site) => (
                <option key={site} value={site}>
                  {site}
                </option>
              ))}
            </select>
          </div>
          <div className="col-12">
            <label htmlFor="inputWork" className="form-label">
              Select Work Type
            </label>
            <select
              className="form-control rounded-0 form-select"
              id="inputWork"
              value={employee.work}
              onChange={(e) =>
                setEmployee({ ...employee, work: e.target.value })
              }
            >
              <option value="">Select Work Type</option>
              {works.map((work) => (
                <option key={work} value={work}>
                  {work}
                </option>
              ))}
            </select>
          </div>
          {/* <div className="col-12">
              <label htmlFor="inputImage" className="form-label">
                Upload Image
              </label>
              <input
                type="file"
                className="form-control rounded-0"
                id="inputImage"
                onChange={(e) =>
                  setEmployee({ ...employee, image: e.target.files[0] })
                }
              />
            </div> */}
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Add Employee
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  )
}

export default EditEmployee