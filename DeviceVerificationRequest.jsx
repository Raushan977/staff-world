import { useState, useEffect } from "react";
import "./style.css";

const API_BASE = "http://localhost:3000/auth/employee"; // Replace this with your backend URL

const DeviceVerificationRequest = () => {
  const [requests, setRequests] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [checkedItems, setCheckedItems] = useState({});
  const [showCheckboxes, setShowCheckboxes] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Fetch data from backend on load
  useEffect(() => {
    fetch(API_BASE)
      .then((res) => res.json())
      .then((data) => setRequests(data))
      .catch((err) => console.error("Failed to fetch:", err));
  }, []);

  const handleAction = (id, action) => {
    fetch(`${API_BASE}/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action }), // e.g., { action: "approved" }
    })
      .then((res) => {
        if (!res.ok) throw new Error("Request failed");
        setRequests((prev) => prev.filter((req) => req.id !== id));
      })
      .catch((err) => console.error("Action failed:", err));
  };

  const handleCheckboxChange = (id) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleBulkAction = (action) => {
    const selectedIds = Object.keys(checkedItems)
      .filter((id) => checkedItems[id])
      .map(Number);

    if (selectedIds.length === 0) return;

    Promise.all(
      selectedIds.map((id) =>
        fetch(`${API_BASE}/${id}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action }),
        })
      )
    )
      .then(() => {
        setRequests((prev) =>
          prev.filter((req) => !selectedIds.includes(req.id))
        );
        setCheckedItems({});
      })
      .catch((err) => console.error("Bulk action failed:", err));
  };

  const handleAllAction = (action) => {
    const allIds = requests.map((req) => req.id);

    Promise.all(
      allIds.map((id) =>
        fetch(`${API_BASE}/${id}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action }),
        })
      )
    )
      .then(() => {
        setRequests([]);
        setCheckedItems({});
      })
      .catch((err) => console.error("All action failed:", err));
  };

  const filteredRequests = requests.filter(
    ({ employee, device }) =>
      employee.toLowerCase().includes(searchTerm.toLowerCase()) ||
      device.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const anyChecked = Object.values(checkedItems).some((val) => val);

  return (
    <div className="container">
      <h2>Device Verification Request</h2>

      <div className="search-bar-wrapper">
        <input
          type="text"
          placeholder="Search by employee or device..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <div className="menu-wrapper">
          <button
            className="dots-btn"
            onClick={() => setDropdownOpen((prev) => !prev)}
          >
            ⋯
          </button>

          {dropdownOpen && (
            <div className="dropdown-menu">
              <label>
                <input
                  type="checkbox"
                  onChange={() => setShowCheckboxes((prev) => !prev)}
                />{" "}
                Enable Selection
              </label>
              <hr />
              <button onClick={() => handleAllAction("approved")}>
                Approve All
              </button>
              <button onClick={() => handleAllAction("rejected")}>
                Reject All
              </button>
            </div>
          )}
        </div>
      </div>

      {showCheckboxes && anyChecked && (
        <div className="bulk-actions">
          <button
            onClick={() => handleBulkAction("approved")}
            className="approve-btn"
          >
            Approve Selected
          </button>
          <button
            onClick={() => handleBulkAction("rejected")}
            className="reject-btn"
          >
            Reject Selected
          </button>
        </div>
      )}

      {filteredRequests.length === 0 ? (
        <p className="no-requests">No matching device verification requests.</p>
      ) : (
        <ul className="request-list">
          {filteredRequests.map(({ id, employee, device }) => (
            <li key={id} className="request-item">
              {showCheckboxes && (
                <input
                  type="checkbox"
                  checked={!!checkedItems[id]}
                  onChange={() => handleCheckboxChange(id)}
                  className="check-box"
                />
              )}
              <div className="request-info">
                <p className="employee-name">{employee}</p>
                <p className="device-name">{device}</p>
              </div>
              <div className="button-group">
                <button
                  onClick={() => handleAction(id, "approved")}
                  className="approve-btn"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleAction(id, "rejected")}
                  className="reject-btn"
                >
                  Reject
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DeviceVerificationRequest;

