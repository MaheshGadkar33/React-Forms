import "./App.css";
import { useState } from "react";
import FormInput from "./components/FormInput";

function App() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      label: "UserName",
      name: "name",
      type: "text",
      errorMessage:
        "UserName should be 3-16 character and should'nt include any special character !",
      placeholder: "UserName",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$",
    },
    {
      id: 2,
      label: "Email",
      name: "email",
      type: "email",
      errorMessage: "It should be valid email",
      placeholder: "Email",
      required: true,
    },
    {
      id: 3,
      label: "Birthday",
      name: "birthday",
      type: "date",
      errorMessage: "",
      placeholder: "Birthday",
    },
    {
      id: 4,
      label: " Password",
      name: "password",
      type: "password",
      errorMessage:
        "Password should be 8-20 character and include at least 1 letter,1 number and 1 special character",
      placeholder: "Password",
      required: true,
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    },
    {
      id: 5,
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      errorMessage: "Password don't match",
      placeholder: "Confirm Password",
      required: true,
      pattern: values.password,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    setValues({});
  };
  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((element) => (
          <FormInput
            key={element.id}
            {...element}
            onChange={onChange}
            value={values[element.name]}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
