import React from "react";

const FormSelect = ({ label, name, value, onChange, option, required }) => {
  return (
    <>
      <div className="row mb-3 col-md-12">
        <label htmlFor={name} className="col-sm-2 col-form-label">
          {label}
          {required ? "*" : ""}
        </label>

        <div className="col-sm-10">
          {required ? (
            <select
              value={value}
              onChange={onChange}
              className="form-select"
              required
            >
              <option value="">Select {label}</option>
              {option.map((opt, index) => (
                <option key={index} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          ) : (
            <select value={value} onChange={onChange} className="form-select">
              <option value="">Select {label}</option>
              {option.map((opt, index) => (
                <option key={index} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>
    </>
  );
};

export default FormSelect;
