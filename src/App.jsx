import "./App.css";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar"

function App() {
  return (
    <div className="flex justify-between">
      <div>
        <Sidebar />
      </div >
      <div className="w-[75vw]"> 
        <Topbar/>
      </div>
    </div>
  );
}

export default App;
