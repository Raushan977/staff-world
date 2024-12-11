import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const AssignTask = () => {
  const { employeeId } = useParams()
  const [employee, setEmployee] = useState({
    name: "",
  });
  const [taskName, setTaskName] = useState('');
  const [taskTitle, setTaskTitle] = useState('');
  const [taskAbout, setTaskAbout] = useState('');
  const navigate = useNavigate()

  useEffect(() => {
    
    axios.get('https://mohitbyproject-production.up.railway.app/api/employee/' + employeeId)
      .then(result => {
        setEmployee({
          ...employee,
          name: result.data.name,
        })
      }).catch(err => console.log(err))
  }, [])
  

const handleSubmit = async (e) => {
    e.preventDefault();

    const newTask = {
      taskName,
      taskTitle,
      taskAbout,
      employeeId,
      name: employee.name,
    };

    try {
      const response = await fetch('https://mohitbyproject-production.up.railway.app/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      });

      if (response.ok) {
        alert('Task added successfully!');
        navigate('/dashboard/taskList')
        // Clear the form
        setTaskName('');
        setTaskTitle('');
        setTaskAbout('');
      } else {
        alert('Failed to add task');
      }
    } catch (error) {
      console.error('Error adding task:', error);
      alert('Error adding task');
    }
  };
  

  return (
    <div className="add_emp_bg">
      <div className="d-flex justify-content-center align-items-center">
        <div className="p-3 rounded w-50 border mt-5 mb-1">
          <h3 className="text-center">Assigning Task to  '{employee.name}' employee Id '{employeeId}'</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="inputName" className="form-label">
              Task Title
            </label>
            {/* <input
              type="text"
              className="form-control rounded-0"
              id="inputName"
              placeholder="Enter Task Title"
              onChange={(e) =>
                setAssignTask({ ...assignTask, taskTitle: e.target.value })
              }
            /> */}
             <input
                  type="text"
                  className="form-control rounded-0"
                  id="inputName"
                  placeholder="Enter Task Title"
                  value={taskTitle}
                  onChange={(e) => setTaskTitle(e.target.value)}
                  required
                />
          </div>
          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label">
              Task Name
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputEmail4"
              placeholder="Enter Task Name"
              autoComplete="off"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              required
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputmobile" className="form-label">
              Task Details
            </label>
            <textarea
              type="text"
              rows='3'
              className="form-control rounded-0"
              id="inputmobile"
              placeholder="Enter Task Details"
              value={taskAbout}
              onChange={(e) => setTaskAbout(e.target.value)}
              required
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Add Task
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  )
}

export default AssignTask