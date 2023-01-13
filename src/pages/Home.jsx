// import AddClient from "../components/modals/AddClient";
// import Clients from "../components/Clients";
// import Jobs from "../components/Jobs";
// import AddJob from "../components/modals/AddJob";
import "./Home.css";
import Sidebar from "../components/sidebar/Sidebar";
import Operation from "../components/operation/Operation";

export default function Home() {
  return (
    <>
     <div id="home">
      <div className="d-flex gap-3 mb-4" id="home">
        {/* <AddClient />
        <AddJob /> */}
      </div>
      <div className="homeGlass">
        <Sidebar/>
        <Operation/>
        {/* <Jobs />
        <hr /> */}
        {/* <Clients /> */}
      </div>
      </div>
    </>
  );
}
