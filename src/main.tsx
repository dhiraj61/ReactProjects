import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ToastContainer } from "react-toastify";
import Wraper from "./components/Wraper.tsx";

createRoot(document.getElementById("root")!).render(
  <Wraper>
    <App />
    <ToastContainer position="top-center" />
  </Wraper>
);
