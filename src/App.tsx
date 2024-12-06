import AuthStatus from "./components/Auth";
import Counter from "./components/Counter";
import ThemeToggle from "./components/ThemeToggle";
import TodoList from "./components/Todo";
import ZustandCounter from "./components/ZustandCounter";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <header className="bg-white dark:bg-gray-800 shadow-md py-4">
        <h1 className="text-3xl font-bold text-center">
          State Management in React
        </h1>
      </header>

      <main className="container mx-auto p-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <ThemeToggle />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <AuthStatus />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <Counter />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <TodoList />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <ZustandCounter />
        </div>
      </main>

      <footer className="bg-white dark:bg-gray-800 shadow-md py-4 mt-6">
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
