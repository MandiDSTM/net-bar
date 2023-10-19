import Header from "./component/header/Header";
import Navbar from "./component/navbar/Navbar";
import Speciality from "./component/speciality/Speciality";
import Situation from "./component/situation/Situation";
import Footer from "./component/footer/Footer";
import ClosureAndIffe from "./component/closureAndIffe/ClosureAndIffe"

import "./App.css";

function App() {
  return (
    <div className="mainContainer">
      <Navbar />
      <Header />
      <Speciality />
      <Situation />
      <Footer />
      <ClosureAndIffe/>
    </div>
  )
}

export default App;
