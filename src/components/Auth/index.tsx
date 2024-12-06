import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout, RootState } from "../../store";

const AuthStatus: React.FC = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  );

  const handleLogin = () => {
    dispatch(login("John Doe"));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Redux for Global State</h2>
      <p className="mb-6 text-center">
        <span className="font-medium">Authentication Status:</span>{" "}
        {isAuthenticated ? (
          <span className="text-green-600">Logged in as {user}</span>
        ) : (
          <span className="text-red-600">Logged out</span>
        )}
      </p>
      {isAuthenticated ? (
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition duration-300"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={handleLogin}
          className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition duration-300"
        >
          Login
        </button>
      )}
    </div>
  );
};

export default AuthStatus;
