import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {

  return (
    <>
      <div className="bg-gray-500 min-h-screen pb-10">
        <Navbar />

        <Outlet />
      </div>
    </>
  )
}

export default App;
