import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Register() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "candidate",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg w-96">

        <h1 className="text-3xl text-white mb-6 text-center">
          Register
        </h1>

        <form className="flex flex-col gap-4">

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 rounded bg-gray-700 text-white"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded bg-gray-700 text-white"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="p-3 rounded bg-gray-700 text-white"
          />

          <button className="bg-blue-500 p-3 rounded text-white">
            Register
          </button>

          <p className="text-white text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-400">
              Login
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
}

export default Register;