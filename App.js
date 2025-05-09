import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BankingApp = () => {
  const [formData, setFormData] = useState({
    name: "",
    accNo: "",
    aadharNo: "",
    ifsc: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!/^[0-9]{9,18}$/.test(formData.accNo)) newErrors.accNo = "Invalid account number";
    if (!/^[0-9]{12}$/.test(formData.aadharNo)) newErrors.aadharNo = "Aadhar number must be 12 digits";
    if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(formData.ifsc)) newErrors.ifsc = "Invalid IFSC code";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ width: "400px" }}>
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Banking Application</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="form-control" />
              {errors.name && <div className="text-danger small">{errors.name}</div>}
            </div>

            <div className="mb-3">
              <input type="text" name="accNo" placeholder="Account Number" value={formData.accNo} onChange={handleChange} className="form-control" />
              {errors.accNo && <div className="text-danger small">{errors.accNo}</div>}
            </div>

            <div className="mb-3">
              <input type="text" name="aadharNo" placeholder="Aadhar Number" value={formData.aadharNo} onChange={handleChange} className="form-control" />
              {errors.aadharNo && <div className="text-danger small">{errors.aadharNo}</div>}
            </div>

            <div className="mb-3">
              <input type="text" name="ifsc" placeholder="IFSC Code" value={formData.ifsc} onChange={handleChange} className="form-control" />
              {errors.ifsc && <div className="text-danger small">{errors.ifsc}</div>}
            </div>

            <button type="submit" className="btn btn-primary w-100">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BankingApp;