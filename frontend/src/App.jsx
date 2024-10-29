import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="mx-auto min-h-screen max-w-screen-xl px-4 py-6 font-primary">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default App;
