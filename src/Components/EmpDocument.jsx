import React, { useState } from 'react'

const EmpDocument = () => {

    const[document, setDocument] = useState({
        matric: "",
        inter: "",
        graduation: "",
        pg: "",
        aadhar: "",
        pan: "",
        dl: ""
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('matric', document.matric);
        formData.append('inter', document.inter);
        formData.append('graduation', document.graduation);
        formData.append('pg', document.pg);
        formData.append('aadhar', document.aadhar);
        formData.append('pan', document.pan);
        formData.append('dl', document.dl);
     
        const token = localStorage.getItem('token');
     
     
        axios.post('https://emsproject-production.up.railway.app/api/document/', formData
        ,{  headers: {
          "content-type": "application/json",
          "Authorization": `Bearer ${token}` // Include the token in the Authorization header
          },})
     
        .then(result => {
            if(result.data) {
                navigate('/employee_detail/empDocument')
            } else {
                alert(result.data.Error)
            }
        })
        .catch(err => console.log(err))
      }

  return (
    <>
            <div className='reqstLeave'>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="p-3 rounded w-75 border mt-5 mb-1">
                        <h3 className="text-center">List of documents</h3>
                        <form className="row g-1" 
                        onSubmit={handleSubmit}
                        >
                           
                            <div className="col-12">
                                <label for="inputName" className="form-label">
                                    10th Certificate
                                </label>
                                <input
                                    type="file"
                                    className="form-control rounded-0"
                                    id="inputName"
                                  onChange={(e) =>
                                    setDocument({ ...document, matric: e.target.value })
                                  }
                                />
                            </div>
                            <div className="col-12">
                                <label for="inputName" className="form-label">
                                    10+2 Certificate
                                </label>
                                <input
                                    type="file"
                                    className="form-control rounded-0"
                                    id="inputName"
                                  onChange={(e) =>
                                    setDocument({ ...document, inter: e.target.value })
                                  }
                                />
                            </div>
                            <div className="col-12">
                                <label for="inputName" className="form-label">
                                    Graduation / BTech / Other Certificate
                                </label>
                                <input
                                    type="file"
                                    className="form-control rounded-0"
                                    id="inputName"
                                  onChange={(e) =>
                                    setDocument({ ...document, graduation: e.target.value })
                                  }
                                />
                            </div>
                            <div className="col-12">
                                <label for="inputName" className="form-label">
                                    PG Certificate
                                </label>
                                <input
                                    type="file"
                                    className="form-control rounded-0"
                                    id="inputName"
                                  onChange={(e) =>
                                    setDocument({ ...document, pg: e.target.value })
                                  }
                                />
                            </div>
                            <div className="col-12">
                                <label for="inputName" className="form-label">
                                    Aadhar Card
                                </label>
                                <input
                                    type="file"
                                    className="form-control rounded-0"
                                    id="inputName"
                                  onChange={(e) =>
                                    setDocument({ ...document, aadhar: e.target.value })
                                  }
                                />
                            </div>
                            <div className="col-12">
                                <label for="inputName" className="form-label">
                                    Pan Card
                                </label>
                                <input
                                    type="file"
                                    className="form-control rounded-0"
                                    id="inputName"
                                  onChange={(e) =>
                                    setDocument({ ...document, pan: e.target.value })
                                  }
                                />
                            </div>
                            <div className="col-12">
                                <label for="inputName" className="form-label">
                                    DL
                                </label>
                                <input
                                    type="file"
                                    className="form-control rounded-0"
                                    id="inputName"
                                  onChange={(e) =>
                                    setDocument({ ...document, dl: e.target.value })
                                  }
                                />
                            </div>

                            <div className="col-12">
                                <button type="submit" className="btn btn-primary w-100">
                                    Submit Details
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
  )
}

export default EmpDocument