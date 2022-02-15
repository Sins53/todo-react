import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import TodoApp from "./TodoApp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <TodoApp />
    </>
  );
}

export default App;
