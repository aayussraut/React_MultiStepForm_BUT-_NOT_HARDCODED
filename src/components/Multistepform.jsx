import React, { useState } from "react";
import ApplicantsData from "../Pages/ApplicantsData";
import ContactDetails from "../Pages/ContactDetails";
import useMultistepForm from "./MultistepformHooks";

export default function Multistepform() {
  const [formData, setFormData] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    dob: "",
    id_type: "",
    id_no: "",
    gender: "",
    marital_status: "",
    caste: "",
    religion: "",
    profession: "",
    phone_number: "",
    state: "",
    district: "",
    local_level: "",
    ward_no: "",

    village_tole: "",
    house_no: "",
    temp_state: "",
    temp_district: "",
    temp_local_level: "",
    temp_ward_no: "",
    temp_village_tole: "",
  });

  const handleChange = (input) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [input]: e.target.value,
    }));
  };

  const {
    steps,
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    next,
    back,
    goTo,
  } = useMultistepForm([
    <ApplicantsData formData={formData} handleChange={handleChange} />,
    <ContactDetails formData={formData} handleChange={handleChange} />,
  ]);

  return (
    <div className="container">
      <h1>Page 2</h1>
      <div className="offset-md-1 form-box">
        <form className="form-group border p-5 col-md-6">
          {step}
          <div className="mt-3">
            {!isFirstStep && (
              <button
                className="btn btn-primary float-start"
                type="button"
                onClick={back}
              >
                Prev
              </button>
            )}

            <button
              className="btn btn-primary float-end"
              type="button"
              onClick={next}
            >
              {isLastStep ? "Submit" : "Next"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
