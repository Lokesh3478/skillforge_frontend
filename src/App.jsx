import AppRouter from "./router/AppRouter";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <AppRouter />
    </div>
  );
}


export default App;
