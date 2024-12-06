import { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const SunIcon = (
  <svg
    className="h-5 w-5 mr-2"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414-1.414M17.95 17.95l-1.414-1.414M6.05 6.05L4.636 7.464M12 8a4 4 0 100 8 4 4 0 000-8z"
    />
  </svg>
);

const MoonIcon = (
  <svg
    className="h-5 w-5 mr-2"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M17.293 13.293a8 8 0 11-10.586-10.586 8 8 0 0010.586 10.586z" />
  </svg>
);

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300">
      <h2 className="text-xl font-semibold mb-4">
        Context API for Global State
      </h2>
      <p className="mb-6 text-center">
        <span className="font-medium">Current Theme:</span>{" "}
        <span className="text-blue-600 capitalize">{theme}</span>
      </p>
      <button
        onClick={toggleTheme}
        className="flex items-center justify-center bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-400"
      >
        {theme === "dark" ? (
          <>
            {SunIcon}
            Light Mode
          </>
        ) : (
          <>
            {MoonIcon}
            Dark Mode
          </>
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
