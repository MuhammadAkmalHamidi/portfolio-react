import About from "./components/About";
import Footer from "./components/footer";
import Homepage from "./components/home";
import Location from "./components/location";
import Navbar from "./components/navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <About />
      <Location />
      <Footer />
    </div>
  );
}

export default App
