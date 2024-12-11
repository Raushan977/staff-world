import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const EmpTask = () => {

  const [task, setTask] = useState([]);

  useEffect(() => {const token = localStorage.getItem('eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyYW1wbDFAZ21haWwuY29tIiwiaWF0IjoxNzIyMzM2MTQ5LCJleHAiOjE3MjIzMzc5NDl9.Wk5XMV_V61JXrrtldWp02-0XKhPiCHAw4EKtmdQmWhM');
    axios
    .get("https://mohitbyproject-production.up.railway.app/api/tasks", {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then((result) => {
        if (result.data) {
          setTask(result.data);
          // setRecords(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='reqstLeave'>
      <div className="d-flex justify-content-center align-items-center pt-2 pb-2 fs-4 border-bottom">
        Task List
      </div>
      <div className='table-size-task'>
        <table className="home-leave-table">
          <thead>
            <tr>
              <th>Task Id</th>
              <th>Assigned Date</th>
              <th>Task Title</th>
              <th>Assigned Task</th>
              <th>Assigned Details</th>
              <th>Task Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody >
            {task.map((e) => (
              <tr>
                <td>
                  {e.taskId}
                </td>
                <td>
                  {e.assign}
                </td>
                <td>
                  {e.taskTitle}
                </td>
                <td>
                  {e.taskName}
                </td>
                <td>
                  {e.taskAbout}
                </td>
                <td>
                  {e.status}
                  {/* <select name="" id="">
                    <option value="">Select Status</option>
                    <option value="">Pending</option>
                    <option value="">Working</option>
                    <option value="">Completed</option>
                  </select> */}
                </td>
                <td>
                  <Link
                    to={`/dashboard/updateTask/` + e.taskId}
                    className="btn btn-info btn-sm me-2"
                  >
                    Update Task Status
                  </Link>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default EmpTask