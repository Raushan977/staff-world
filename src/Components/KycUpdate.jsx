import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const KycUpdate = () => {
  const { employeeId } = useParams()
  const [employee, setEmployee] = useState({
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
//   const [category, setCategory] = useState([])
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
          navigate('/dashboard/kycVerification')
        } else {
          alert(result.data.Error)
        }
      }).catch(err => console.log(err))
  }

  const bankname = [
    "State Bank Of India", 
    "Bank Of India", 
    "Bank Of Baroda",
    "Central Bank Of India",
    "HDFC Bank Limited",
    "IDFC FIRST Bank Limited",
    "Yes Bank Limited",
    "AXIS Bank Limited",
    "ICICI Bank Limited",
    "Indusland Bank Limited",
    "Bandhan Bank Limited",
    "CSB Bank Limited",
    "DCB Bank Limited",
    "RBL Bank Limited",
    "City Union Bank Limited",
    ];
  const kycStatus = [
    "Pending",
    "Verified",
    "Document Incomplet",
    "Rejected",
  ];

  return (
    <div className="add_emp_bg">
      <div className="d-flex justify-content-center align-items-center">
        <div className="p-3 rounded w-50 border mt-5 mb-1">
          <h3 className="text-center">Update KYC of '{employee.name.toLocaleUpperCase()}' Id '{employeeId}'</h3>

        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="inputAadharNo" className="form-label">
              Aadhar Card No.
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputAadharNo"
              placeholder="Enter Aadhar card No."
              value={employee.name}
              onChange={(e) =>
                setEmployee({ ...employee, name: e.target.value })
              }
            />
          </div>
          <div className="col-12">
              <label htmlFor="inputAadharDoc" className="form-label">
                Upload Aadhar Card
              </label>
              <input
                type="file"
                className="form-control rounded-0"
                id="inputAadharDoc"
                onChange={(e) =>
                  setEmployee({ ...employee, image: e.target.files[0] })
                }
              />
            </div>
          <div className="col-12">
            <label htmlFor="inputPanNo" className="form-label">
              Pan Card No.
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputPanNo"
              placeholder="Enter Pan Card No."
              value={employee.email}
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, email: e.target.value })
              }
            />
          </div>
          <div className="col-12">
              <label htmlFor="inputPanDoc" className="form-label">
                Upload Pan card
              </label>
              <input
                type="file"
                className="form-control rounded-0"
                id="inputPanDoc"
                onChange={(e) =>
                  setEmployee({ ...employee, image: e.target.files[0] })
                }
              />
            </div>
          <div className="col-12">
            <label htmlFor="inputAcNo" className="form-label">
              Bank Account No.
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputAcNo"
              placeholder="Enter Account No."
              value={employee.mobile}
              onChange={(e) =>
                setEmployee({ ...employee, mobile: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputIfsc" className="form-label">
              IFSC Code
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputIfsc"
              value={employee.dob}
              onChange={(e) =>
                setEmployee({ ...employee, dob: e.target.value })
              }
            />
          </div>
         
          <div className="col-12">
            <label htmlFor="inputBankName" className="form-label">
              Select Bank Name
            </label>
            <select
              className="form-control rounded-0 form-select"
              id="inputBankName"
            //   value={employee.marritalStatus}
              onChange={(e) =>
                setEmployee({ ...employee, marritalStatus: e.target.value })
              }
            >
              <option value="">Select Status</option>
              {bankname.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          <div className="col-12">
            <label htmlFor="inputBankAddr" className="form-label">
              Bank Address
            </label>
            <input
              type="text"
              className="form-control rounded-0"
            //   value={employee.jod}
              id="inputBankAddr"
              onChange={(e) =>
                setEmployee({ ...employee, jod: e.target.value })
              }
            />
          </div>

          <div className="col-12">
              <label htmlFor="inputUploadPass" className="form-label">
                Upload Passsbook
              </label>
              <input
                type="file"
                className="form-control rounded-0"
                id="inputUploadPass"
                onChange={(e) =>
                  setEmployee({ ...employee, image: e.target.files[0] })
                }
              />
            </div>

          <div className="col-12">
            <label htmlFor="inputKycStatus" className="form-label">
              Select KYC Status
            </label>
            <select
              className="form-control rounded-0 form-select"
              id="inputKycStatus"
            //   value={employee.status}
              onChange={(e) =>
                setEmployee({ ...employee, status: e.target.value })
              }
            >
              <option value="">Select Status</option>
              {kycStatus.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
          
          
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

export default KycUpdate