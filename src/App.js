import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Counter from "./components/Counter";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import TestError from "./components/TestError";
function App() {
  return (
    <main className="App">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/counter">Counter-Hook</NavLink>
        <NavLink to="/testErrorBoundary">Error boundary</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/testErrorBoundary" element={<TestError />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}
export default App;