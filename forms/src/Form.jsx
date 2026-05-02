import { useState } from "react";
import "./Form.css";
export default function Form() {
  let [formData, setFormData] = useState({
    fullname: "",
    username: "",
    password: "",
  });

  let changeFunc = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      fullname: "",
      username: "",
      password: "",
    });
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fullname" style={{ color: "white" }}>
          Fullname
        </label>
        <input
          id="fullname"
          type="text"
          placeholder="enter you fullname"
          value={formData.fullname}
          onChange={changeFunc}
          name="fullname"
        />
      </div>

      <div>
        <label htmlFor="username" style={{ color: "white" }}>
          Username
        </label>
        <input
          id="username"
          type="text"
          placeholder="enter you username"
          value={formData.username}
          onChange={changeFunc}
          name="username"
        />
      </div>
      <div>
        <label htmlFor="password" style={{ color: "white" }}>
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="enter you password"
          value={formData.password}
          onChange={changeFunc}
          name="password"
        />
      </div>
      <button>Submit</button>
    </form>
  );
}
