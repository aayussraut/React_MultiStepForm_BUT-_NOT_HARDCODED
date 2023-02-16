import React from "react";
import FormInput from "../components/FormInput";
import formField from "./formFields.json";
// import FormSelect from "../components/FormSelect";
export default function ContactDetails({ formData, handleChange }) {
  return (
    <>
      <fieldset className="form-group border p-3 mb-3">
        <legend className="w-auto px-2 ">Applicant's Permanent Address</legend>
        {/* {console.log(formField[2].co)} */}
        {formField[2].contat_details.map((field, index) => (
          <FormInput
            key={index}
            label={field.label}
            type={field.type}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange(field.name)}
          />
        ))}
      </fieldset>
    </>
  );
}
