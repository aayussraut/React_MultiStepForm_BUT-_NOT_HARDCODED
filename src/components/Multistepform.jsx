import React, { useState } from "react";
import ApplicantsData from "../Pages/ApplicantsData";
import ContactDetails from "../Pages/ContactDetails";
import FamilyDetails from "../Pages/FamilyDetails";
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
    temp_house_no: "",
    temp_district: "",
    temp_local_level: "",
    temp_ward_no: "",
    temp_village_tole: "",
    father_first_name: "",
    father_middle_name: "",
    father_last_name: "",
    mother_first_name: "",
    mother_middle_name: "",
    mother_last_name: "",
    spouse_first_name: "",
    spouse_middle_name: "",
    spouse_last_name: "",
    grandfather_first_name: "",
    grandfather_middle_name: "",
    grandfather_last_name: "",
    grandmother_first_name: "",
    grandmother_middle_name: "",
    grandmother_last_name: "",
  });
  const handleChange = (input) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [input]: e.target.value,
    }));
  };
  const [checked, setChecked] = useState(false);
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
    <ContactDetails
      formData={formData}
      handleChange={handleChange}
      checked={checked}
      setChecked={setChecked}
    />,
    <FamilyDetails formData={formData} handleChange={handleChange} />,
  ]);

  function handleSubmit(e) {
    e.preventDefault();
    {
      !isLastStep ? next() : alert("Form Submitted");
    }
  }

  return (
    <div className="container">
      <div className="offset-md-1 form-box">
        <form
          className="form-group border p-5 col-md-6"
          onSubmit={handleSubmit}
        >
          {step}
          <div className="mt-3">
            {!isFirstStep && (
              <button
                type="button"
                className="btn btn-primary float-start"
                onClick={back}
              >
                Prev
              </button>
            )}

            <button className="btn btn-primary float-end">
              {isLastStep ? "Submit" : "Next"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
