import React from 'react';
import { Link } from 'react-router-dom';

const departments = [
  { id: 1, name: "HR", description: "Manage Human Resources" },
  { id: 2, name: "IT", description: "Manage IT Infrastructure" },
  { id: 3, name: "Finance and Accounting", description: "Handle financial planning and recordkeeping" },
  { id: 4, name: "Marketing and Sales", description: "Drive market growth and customer acquisition" },
  { id: 5, name: "Operations", description: "Oversee day-to-day business operations" },
  { id: 6, name: "Customer Support or Service", description: "Provide assistance to customers" },
  { id: 7, name: "Legal and Compliance", description: "Ensure compliance with laws and regulations" },
  { id: 8, name: "Research and Development (R&D)", description: "Develop new products and services" },
  { id: 9, name: "Quality Assurance (QA)", description: "Ensure product and service quality" },
  { id: 10, name: "Facilities Management", description: "Maintain workplace facilities" },
];

const AddDepartments = () => {
  return (
    <div className="department-container">
      <h2 className="department-title">Add Departments</h2>
      <div className="department-grid">
        {departments.map((dept) => (
          <div key={dept.id} className="department-card">
            <div className="department-icon">
              <i className="fs-2 bi bi-diagram-2"></i>
            </div>
            <div className="department-details">
              <h3 className="department-name">{dept.name}</h3>
              <p className="department-description">{dept.description}</p>
            </div>
            <div className="department-link">
              <Link to={`/departments/${dept.id}`} className="nav-link">
                <i className="fs-5 bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddDepartments;
