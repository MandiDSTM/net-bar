import Header from "./component/header/Header";
import Navbar from "./component/navbar/Navbar";
import Speciality from "./component/speciality/Speciality";
import Situation from "./component/situation/Situation";
import Footer from "./component/footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="mainContainer">
      <Navbar />
      <Header />
      <Speciality />
      <Situation />
      <Footer />
    </div>
  )
}

export default App;
