import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const PaySalary = () => {
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

  return (
    <div className="add_emp_bg">
      <div className="d-flex justify-content-center align-items-center">
        <div className="p-3 rounded w-50 border mt-5 mb-1">
          <h3 className="text-center">Pay Salary to '{employee.name.toLocaleUpperCase()}' Id '{employeeId}'</h3>

        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="inputCtc" className="form-label">
              CTC <i className="bi bi-currency-rupee" />
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputCtc"
              placeholder="Enter Aadhar card No."
              value={((employee.salary)*12).toFixed(2)}
              onChange={(e) =>
                setEmployee({ ...employee, salary: e.target.value })
              }
            />
          </div>
          
          <div className="col-12">
            <label htmlFor="inputMonthlySal" className="form-label">
              Monthly Salary <i className="bi bi-currency-rupee" />
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputMonthlySal"
              placeholder="Enter Pan Card No."
              value={(employee.salary).toFixed(2)}
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, salary: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputWeaklySalary" className="form-label">
              Weakly Salary <i className="bi bi-currency-rupee" />
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputWeaklySalary"
              placeholder="Enter Pan Card No."
              value={(((employee.salary)/28)*7).toFixed(2)}
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, salary: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputMonthlySal" className="form-label">
              Daily Salary <i className="bi bi-currency-rupee" />
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputMonthlySal"
              placeholder="Enter Pan Card No."
              value={((employee.salary)/30).toFixed(2)}
              autoComplete="off"
              onChange={(e) =>
                setEmployee({ ...employee, salary: e.target.value })
              }
            />
          </div>
          
          <div className="col-12">
            <label htmlFor="inputPf" className="form-label">
              Professional Tax (PF) <i className="bi bi-currency-rupee" />
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputPf"
              placeholder="Enter Professional Amount"
            //   value={employee.mobile}
              onChange={(e) =>
                setEmployee({ ...employee, pf: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputEmployerPf" className="form-label">
              Employer PF <i className="bi bi-currency-rupee" />
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputEmployerPf"
              placeholder="Enter Employer PF Amount"
            //   value={employee.dob}
              onChange={(e) =>
                setEmployee({ ...employee, dob: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputEmpPf" className="form-label">
              Employee PF <i className="bi bi-currency-rupee" />
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputEmpPf"
              placeholder="Enter Employee PF Amount"
            //   value={employee.dob}
              onChange={(e) =>
                setEmployee({ ...employee, dob: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputEmpPf" className="form-label">
              Employee Insurance Optional <i className="bi bi-currency-rupee" />
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputEmpPf"
              placeholder="Enter Employee Insurance Amount"
            //   value={employee.dob}
              onChange={(e) =>
                setEmployee({ ...employee, dob: e.target.value })
              }
            />
          </div>
         
          {/* <div className="col-12">
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
          </div> */}
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Add Employee
            </button>
          </div>
        </form>
        <div >
            <p className='center'>
                Total Monthly Deduction
            </p>
            <p>
                {/* {totalDeduction} */}
                <i className="bi bi-currency-rupee" /> 
                4,500
            </p>
        </div>
        <div >
            <p className='center'>
                Total Annual Deduction
            </p>
            <p>
                {/* {totalDeduction} */}
                <i className="bi bi-currency-rupee" /> 
                {4500*12}
            </p>
        </div>
        <div >
            <p className='center'>
                Net Take Home Monthly
            </p>
            <p>
                {/* {totalDeduction} */}
                <i className="bi bi-currency-rupee" /> 
                {employee.salary}
            </p>
        </div>
        <div >
            <p className='center'>
                Net Take Home Annualy
            </p>
            <p>
                {/* {totalDeduction} */}
                <i className="bi bi-currency-rupee" /> 
                {(employee.salary)*12}
            </p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default PaySalary