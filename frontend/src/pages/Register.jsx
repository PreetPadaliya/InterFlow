import { useState } from "react";
import axios from "axios";

function Register() {

  // STATE
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "candidate",
  });

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ADD SUBMIT FUNCTION HERE
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );

      alert(response.data.message);

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">

      <div className="bg-gray-800 p-8 rounded-lg w-96">

        <h1 className="text-3xl text-white mb-6 text-center">
          Register
        </h1>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >

          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className="p-3 rounded bg-gray-700 text-white"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="p-3 rounded bg-gray-700 text-white"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="p-3 rounded bg-gray-700 text-white"
          />

          <button className="bg-blue-500 p-3 rounded text-white">
            Register
          </button>

        </form>

      </div>

    </div>
  );
}

export default Register;