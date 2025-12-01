import { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!username) tempErrors.username = "Username is required!";
    if (!email) tempErrors.email = "Email is required!";
    if (!password) tempErrors.password = "Password is required!";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Submitted Data:", { username, email, password });
      setTimeout(() => alert("User Registered Successfully!"), 500);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <p className="error">{errors.username}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
