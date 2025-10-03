import React from "react";

const Dashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">User Information</h2>
          <p className="text-gray-600">Name: John Doe</p>
          <p className="text-gray-600">Email: johndoe@example.com</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">User Activity</h2>
          <ul className="list-disc list-inside">
            <li>Logged in on January 1, 2022</li>
            <li>Logged in on January 2, 2022</li>
            <li>Logged in on January 3, 2022</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">User Settings</h2>
          <form>
            <label className="block">
              <span className="text-gray-700">Username</span>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Email</span>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </label>
            <button
              type="submit"
              className="w-full flex justify-center bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
