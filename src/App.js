import "./App.css";
import Achievements from "./Components/Achievements/Achievements";
import Banner from "./Components/Banner/Banner";
import Banner2 from "./Components/Banner2/Banner2";
import NavBar from "./Components/NavBar/NavBar";
import Services from "./Components/Services/Services";

function App() {
  return(
    <div className="app">
      <NavBar></NavBar>
      <Banner></Banner>
      <Services></Services>
      <Banner2></Banner2>
      <Achievements></Achievements>
    </div>
  );
}

export default App;
