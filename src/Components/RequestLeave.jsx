import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const RequestLeave = () => {

    const [leave, setLeave] = useState({
        leaveType: "",
        remark: "",
        leaveFrom: "",
        leaveTo: ""
    });
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('leaveType', leave.leaveType);
        formData.append('remark', leave.remark);
        formData.append('leaveFrom', leave.leaveFrom);
        formData.append('leaveTo', leave.leaveTo);
     
        const token = localStorage.getItem('token');
     
     
        axios.post('https://mohitbyproject-production.up.railway.app/api/post', formData
        ,{  headers: {
          "content-type": "application/json",
          "Authorization": `Bearer ${token}` // Include the token in the Authorization header
          },})
     
        .then(result => {
            if(result.data) {
                alert('Task added successfully!')
                navigate('/employee_detail/requestLeave')
            } else {
                alert(result.data.Error)
            }
        })
        .catch(err => console.log(err))
      }

    const leaveTypes = [
        { leaveName: 'Sick leave (SL)' },
        { leaveName: 'Casual Leave (CL)' },
        { leaveName: 'Privilege Leave/Earned Leave/Annual Leave' },
        { leaveName: 'Maternity leaves' },
        { leaveName: 'Marriage leave' },
        { leaveName: 'Sabbatical Leave' },
        { leaveName: 'Bereavement leave' },
        { leaveName: 'Half-day leave' },
        { leaveName: 'Maternity leave' },
        { leaveName: 'Compensatory Off' },
        { leaveName: 'Public holidays' },
        { leaveName: 'Menstruation Leave' },
        { leaveName: 'Loss of Pay Leave' }
    ]
    const [leaveType, setLeaveType] = useState([])
    const changeLeaveType = (e) => {
        setLeaveType(e.target.value)
        setLeave({ ...leave, leaveType: e.target.value })
    }
    return (
        <>
            <div className='reqstLeave'>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="p-3 rounded w-50 border mt-5 mb-1">
                        <h3 className="text-center">Leave Request</h3>
                        <form className="row g-1" 
                        onSubmit={handleSubmit}
                        >
                            
                            <div className="col-12">
                                <label for="inputName" className="form-label">
                                    Leave Type
                                </label>
                                <select
                                    className="form-control rounded-0 form-select"
                                    id="inputName"
                                    value={leaveType}
                                    onChange={changeLeaveType}
                                >
                                    <option value="">Select Leave Type</option>
                                    {leaveTypes.map((e) => {
                                        return <option value={e.leaveName}>{e.leaveName}</option>;
                                    })}
                                </select>
                            </div>

                            <div className="col-12">
                                <label for="inputName" className="form-label">
                                    Remark
                                </label>
                                <textarea
                                    type="text"
                                    className="form-control rounded-0"
                                    id="inputName"
                                    placeholder="Enter your Remaks"
                                    rows="3"
                                  onChange={(e) =>
                                    setLeave({ ...leave, remark: e.target.value })
                                  }
                                />
                            </div>
                            <div className="col-12">
                                <label for="inputName" className="form-label">
                                    Leave from
                                </label>
                                <input
                                    type="date"
                                    className="form-control rounded-0"
                                    id="inputName"
                                  onChange={(e) =>
                                    setLeave({ ...leave, leaveFrom: e.target.value })
                                  }
                                />
                            </div>
                            <div className="col-12">
                                <label for="inputName" className="form-label">
                                    Leave to
                                </label>
                                <input
                                    type="date"
                                    className="form-control rounded-0"
                                    id="inputName"
                                  onChange={(e) =>
                                    setLeave({ ...leave, leaveTo: e.target.value })
                                  }
                                />
                            </div>

                            <div className="col-12">
                                <button type="submit" className="btn btn-primary w-100">
                                    Apply for Leave
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RequestLeave