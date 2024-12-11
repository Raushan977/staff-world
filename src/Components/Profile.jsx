import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import preview from "../assets/profile_icon.png"

const Profile = () => {
  const [employee, setEmployee] = useState({
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
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("https://mohitbyproject-production.up.railway.app/api/category/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        if (result.data) {
          setCategories(result.data);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("userData", JSON.stringify(employee));
    formData.append("file", employee.image); // Updated


    const token = localStorage.getItem("token");

    axios
      .post("https://mohitbyproject-production.up.railway.app/api/employee/", formData, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        if (result.data) {
          navigate("/dashboard/employee");
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  const marritalStatuses = [
    "1 to 50", 
    "51 to 100", 
    "101 to 200",
    "201 to 300",
    "301 to 400",
    "401 to 500",
    "501 to 600",
  ];
  // const statuses = [
  //   "New Joining",
  //   "Transferred In",
  //   "Transferred Out",
  //   "Exited Employee",
  // ];
  // const sites = ["New Delhi", "Mumbai", "Bangalore", "Patna", "Kolkata", "Pune"];
  // const works = ["Permanent", "Full Time", "Part Time", "Contract Basis"];

  return (
    <div className="add_emp_bg">
      <div className="d-flex justify-content-center align-items-center ">
        <div className="p-3 rounded w-65  mt-5 mb-1">
          <h3 className="text-center">Company Profile</h3>
          <form className="row g-1" onSubmit={handleSubmit}>

             {/* Profile Icon Preview */}
             <div className=" text-center  mb-4">
              {preview ? (
                <img
                  src={preview}
                  alt="Profile Preview"
                  className="img-thumbnail"
                  style={{ width: "150px", height: "150px", objectFit: "cover",borderRadius: "50%" }}
                />)
              : (
                <p className="file">No Profile Image</p>
              )}
            </div>
            <div className="profile">
              <label htmlFor="cLogo" className="form-label">
                Upload Logo
              </label>
                      <div className="form-controls">
                      <input className="file1"  type="file" id="cLogo"/>
                      </div>
            </div>
            <div className="col-md-4 mb-4">
              <label htmlFor="cName" className="form-label">
                Company Name
              </label>
              <input
                type="text"
                className="form-control rounded-0"
                id="cName"
                placeholder="Enter Company Name"
                onChange={(e) =>
                  setEmployee({ ...employee, cname: e.target.value })
                }
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="dName" className="form-label">
                Name of Director
              </label>
              <input
                type="text"
                className="form-control rounded-0"
                id="dName"
                placeholder="Enter Director Name"
                onChange={(e) =>
                  setEmployee({ ...employee, dname: e.target.value })
                }
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="cEmail" className="form-label">
                Company Email
              </label>
              <input
                type="email"
                className="form-control rounded-0"
                id="cEmail"
                placeholder="Enter Email"
                autoComplete="off"
                onChange={(e) =>
                  setEmployee({ ...employee, cemail: e.target.value })
                }
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="cMobile" className="form-label">
                Mobile No.
              </label>
              <input
                type="text"
                className="form-control rounded-0"
                id="cMobile"
                placeholder="Enter Mobile No."
                onChange={(e) =>
                  setEmployee({ ...employee, cmobile: e.target.value })
                }
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="cinNo" className="form-label">
                CIN No.
              </label>
              <input
                type="text"
                className="form-control rounded-0"
                id="cinNo"
                placeholder="Enter CIN No."
                onChange={(e) =>
                  setEmployee({ ...employee, cinno: e.target.value })
                }
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="diC" className="form-label">
                Date of Incorporation
              </label>
              <input
                type="date"
                className="form-control rounded-0"
                id="diC"
                onChange={(e) =>
                  setEmployee({ ...employee, dic: e.target.value })
                }
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="gstNo" className="form-label">
                GST No.
              </label>
              <input
                type="text"
                className="form-control rounded-0"
                id="gstNo"
                placeholder="Enter GST No."
                onChange={(e) =>
                  setEmployee({ ...employee, gstno: e.target.value })
                }
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="cBranch" className="form-label">
                No. of Branch
              </label>
              <input
                type="number"
                className="form-control rounded-0"
                id="cBranch"
                placeholder="Select No. of Branch"
                onChange={(e) =>
                  setEmployee({ ...employee, cbranch: e.target.value })
                }
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="branchName" className="form-label">
                Branch Names
              </label>
              <textarea 
                type="text"
                className="form-control rounded-0"
                id="branchName"
                placeholder="Enter Name of Branches"
                autoComplete="off"
                onChange={(e) =>
                  setEmployee({ ...employee, branchname: e.target.value })
                }
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="mBranch" className="form-label">
                Main Branch Address
              </label>
              <input
                type="text"
                className="form-control rounded-0"
                id="mBranch"
                placeholder="Enter Main Branch Address"
                autoComplete="off"
                onChange={(e) =>
                  setEmployee({ ...employee, mbranch: e.target.value })
                }
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="cType" className="form-label">
                Company Type
              </label>
              <input
                type="text"
                className="form-control rounded-0"
                id="cType"
                placeholder="Enter Company Type"
                autoComplete="off"
                onChange={(e) =>
                  setEmployee({ ...employee, ctype: e.target.value })
                }
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="cSize" className="form-label">
                Company Size (Employee Wise)
              </label>
              <select
                className="form-control rounded-0 form-select"
                id="cSize"
                onChange={(e) =>
                  setEmployee({ ...employee, csize: e.target.value })
                }
              >
                <option value="">Select Company Size</option>
                {marritalStatuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="cTurnover" className="form-label">
                Company Turnover (In Last Financial Year)
              </label>
              <input
                type="text"
                className="form-control rounded-0"
                id="cTurnover"
                placeholder="Enter Company Type"
                autoComplete="off"
                onChange={(e) =>
                  setEmployee({ ...employee, cturnover: e.target.value })
                }
              />
            </div>
            <div className="col-md-4 mb-3">
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
                Add Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
