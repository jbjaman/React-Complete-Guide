import { useState } from "react";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <h2>Step {step} of 3</h2>

      {step === 1 && (
        <div>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
          />

          <button onClick={nextStep}>Next</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <button onClick={prevStep}>Back</button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {step === 3 && (
        <div>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
          <button onClick={prevStep}>Back</button>
          <button onClick={() => alert("SUbmitted")}>Submit</button>
        </div>
      )}
    </>
  );
};

export default MultiStepForm;
