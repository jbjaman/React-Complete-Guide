import { useState } from "react";

const MultiStepFromValidation = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    name: "",
    email: "",
  });
  const [error, setError] = useState("");

  const nextStep = () => {
    if (step === 1) {
      if (data.name.trim() === "") {
        setError("Must be name");
        return;
      }
    }
    if (step === 2) {
      if (!data.email.includes("@")) {
        setError("Must be @");
        return;
      }
    }
    setError("");
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setError("");
    setStep((prev) => prev - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  };

  return (
    <div>
      <h2>Step {step} of 3</h2>
      <h3>{error}</h3>
      {step === 1 && (
        <div>
          <input
            type="text"
            name="name"
            value={data.name}
            placeholder="Full Name"
            onChange={handleChange}
          />
          <button onClick={nextStep}>Next</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <input
            type="email"
            name="email"
            value={data.email}
            placeholder="Email"
            onChange={handleChange}
          />
          <button onClick={prevStep}>Back</button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}
      {step === 3 && (
        <div>
          <pre>{JSON.stringify(data, null, 1)}</pre>
          <button onClick={prevStep}>Back</button>
          <button
            onClick={() => {
              alert("submited");
            }}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default MultiStepFromValidation;
