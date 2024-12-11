import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditCompanyDetails = () => {
    const { employeeId } = useParams()
    const [employee, setEmployee] = useState({
        // name: "",
        // email: "",
        // salary: "",
        // address: "",
        // category_id: "",
        cname: "",
        dname: "",
        cemail: "",
        cmobile: "",
        cinno: "",
        dic: "",
        gstno: "",
        cbranch: "",
        branchname: "",
        mbranch: "",
        ctype: "",
        csize: "",
        cturnover: "",
        clogo: null,
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
                    cname: result.data.cname,
                    dname: result.data.dname,
                    cemail: result.data.cemail,
                    cmobile: result.data.cmobile,
                    cinno: result.data.cinno,
                    dic: result.data.dic,
                    gstno: result.data.gstno,
                    cbranch: result.data.cbranch,
                    branchname: result.data.branchname,
                    mbranch: result.data.mbranch,
                    ctype: result.data.ctype,
                    csize: result.data.csize,
                    cturnover: result.data.cturnover,
                    clogo: result.data.clogo,
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

    const marritalStatuses = [
        "1 to 50",
        "51 to 100",
        "101 to 200",
        "201 to 300",
        "301 to 400",
        "401 to 500",
        "501 to 600",
    ];
    //   const statuses = [
    //     "Current",
    //     "Ex-Employee",
    //     "New Joining",
    //     "Transferred In",
    //     "Transferred Out",
    //     "Exited Employee",
    //   ];
    //   const sites = ["New Delhi", "Mumbai", "Bangalore", "Patna", "Kolkata", "Pune"];
    //   const works = ["Permanent", "Full Time", "Part Time", "Contract Basis"];

    return (
        <div className="add_emp_bg">
            <div className="d-flex justify-content-center align-items-center">
                <div className="p-3 rounded w-50 border mt-5 mb-1">
                    <h3 className="text-center">Edit Company Profile</h3>

                    <form className="row g-1" onSubmit={handleSubmit}>
                        <div className="col-12">
                            <label htmlFor="cName" className="form-label">
                                Company Name
                            </label>
                            <input
                                type="text"
                                className="form-control rounded-0"
                                id="cName"
                                placeholder="Enter Name"
                                value={employee.cname}
                                onChange={(e) =>
                                    setEmployee({ ...employee, cname: e.target.value })
                                }
                            />
                        </div>
                        <div className="col-12">
                            <label htmlFor="dName" className="form-label">
                                Name of Director
                            </label>
                            <input
                                type="text"
                                className="form-control rounded-0"
                                id="dName"
                                placeholder="Enter Email"
                                value={employee.dname}
                                autoComplete="off"
                                onChange={(e) =>
                                    setEmployee({ ...employee, dname: e.target.value })
                                }
                            />
                        </div>
                        <div className="col-12">
                            <label htmlFor="cEmail" className="form-label">
                                Company Email
                            </label>
                            <input
                                type="text"
                                className="form-control rounded-0"
                                id="cEmail"
                                placeholder="Enter Mobile No."
                                value={employee.cemail}
                                onChange={(e) =>
                                    setEmployee({ ...employee, cemail: e.target.value })
                                }
                            />
                        </div>
                        <div className="col-12">
                            <label htmlFor="cMobile" className="form-label">
                                Mobile No.
                            </label>
                            <input
                                type="text"
                                className="form-control rounded-0"
                                id="cMobile"
                                value={employee.cmobile}
                                onChange={(e) =>
                                    setEmployee({ ...employee, cmobile: e.target.value })
                                }
                            />
                        </div>
                        <div className="col-12">
                            <label htmlFor="cinNo" className="form-label">
                                CIN No.
                            </label>
                            <input
                                type="text"
                                className="form-control rounded-0"
                                id="cinNo"
                                placeholder="Enter Password"
                                value={employee.cinno}
                                onChange={(e) =>
                                    setEmployee({ ...employee, cinno: e.target.value })
                                }
                            />
                        </div>
                        <div className="col-12">
                            <label htmlFor="diC" className="form-label">
                                Date of in Corporation
                            </label>
                            <input
                                type="date"
                                className="form-control rounded-0"
                                id="diC"
                                value={employee.dic}
                                placeholder="Enter Father's Name"
                                onChange={(e) =>
                                    setEmployee({ ...employee, dic: e.target.value })
                                }
                            />
                        </div>
                        <div className="col-12">
                            <label htmlFor="gstNo" className="form-label">
                                GST No.
                            </label>
                            <input
                                type="text"
                                className="form-control rounded-0"
                                id="gstNo"
                                placeholder="Enter Monthly Salary"
                                value={employee.gstno}
                                autoComplete="off"
                                onChange={(e) =>
                                    setEmployee({ ...employee, gstno: e.target.value })
                                }
                            />
                        </div>
                        <div className="col-12">
                            <label htmlFor="cBranch" className="form-label">
                                No. of Branch
                            </label>
                            <input
                                type="number"
                                className="form-control rounded-0"
                                id="cBranch"
                                placeholder="Enter Address"
                                value={employee.cbranch}
                                autoComplete="off"
                                onChange={(e) =>
                                    setEmployee({ ...employee, cbranch: e.target.value })
                                }
                            />
                        </div>
                        <div className="col-12">
                            <label htmlFor="branchName" className="form-label">
                                Branch Names
                            </label>
                            <textarea
                                type="text"
                                className="form-control rounded-0"
                                value={employee.branchname}
                                id="branchName"
                                onChange={(e) =>
                                    setEmployee({ ...employee, branchname: e.target.value })
                                }
                            />
                        </div>
                        <div className="col-12">
                            <label htmlFor="mBranch" className="form-label">
                                Main Branch Address
                            </label>
                            <input
                                type="text"
                                className="form-control rounded-0"
                                value={employee.mbranch}
                                id="mBranch"
                                onChange={(e) =>
                                    setEmployee({ ...employee, mbranch: e.target.value })
                                }
                            />
                        </div>
                        <div className="col-12">
                            <label htmlFor="cType" className="form-label">
                                Company Type
                            </label>
                            <input
                                type="text"
                                className="form-control rounded-0"
                                value={employee.ctype}
                                id="cType"
                                onChange={(e) =>
                                    setEmployee({ ...employee, ctype: e.target.value })
                                }
                            />
                        </div>
                        <div className="col-12">
                            <label htmlFor="cSize" className="form-label">
                                Company Size (Employee Wise)
                            </label>
                            <select
                                className="form-control rounded-0 form-select"
                                id="cSize"
                                value={employee.csize}
                                onChange={(e) =>
                                    setEmployee({ ...employee, csize: e.target.value })
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
                            <label htmlFor="cLogo" className="form-label">
                                Upload Logo
                            </label>
                            <input
                                type="file"
                                className="form-control rounded-0"
                                id="cLogo"
                                onChange={(e) =>
                                    setEmployee({ ...employee, clogo: e.target.files[0] })
                                }
                            />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary w-100">
                                Save Company Profile
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditCompanyDetails