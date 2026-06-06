function Register() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg w-96">
        <h1 className="text-3xl text-white mb-6 text-center">
          Register
        </h1>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="p-3 rounded bg-gray-700 text-white"
          />

          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded bg-gray-700 text-white"
          />

          <input
            type="password"
            placeholder="Password"
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