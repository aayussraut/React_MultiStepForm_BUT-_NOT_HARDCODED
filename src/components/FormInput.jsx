import React from "react";

const FormInput = ({ label, type, name, value, onChange, required }) => {
  return (
    <div className="row mb-3 col-md-12">
      <label htmlFor={name} className="col-sm-3 col-form-label">
        {required ? label + "*" : label}
      </label>
      <div className="col-sm-9">
        {/* {console.log(name + ":" + required1)} */}
        {required ? (
          <input
            className="form-control"
            name={name}
            value={value}
            onChange={onChange}
            id={name}
            type={type}
            required
          />
        ) : (
          <input
            className="form-control"
            name={name}
            value={value}
            onChange={onChange}
            id={name}
            type={type}
          />
        )}
      </div>
    </div>
  );
};

export default FormInput;
