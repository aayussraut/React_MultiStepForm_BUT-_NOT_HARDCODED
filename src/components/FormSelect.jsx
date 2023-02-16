import React from "react";

const FormSelect = ({ label, name, value, onChange, option }) => {
  return (
    <>
      <div className="row mb-3 col-md-12">
        <label htmlFor={name} className="col-sm-2 col-form-label">
          {label}
        </label>
        <div className="col-sm-10">
          <select value={value} onChange={onChange} className="form-select">
            <option value="">Select {label}</option>
            {option.map((opt, index) => (
              <option key={index} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default FormSelect;

// {
//     "label": "Select Gender",
//     "value": ""
//   },
//   {
//     "label": "Male",
//     "value": "Male"
//   },
//   {
//     "label": "Female",
//     "value": "Female"
//   },
//   { "label": "Other", "value": "Other" }
