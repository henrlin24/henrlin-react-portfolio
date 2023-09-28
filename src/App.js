import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div id='main'>
        <Header />
        <br></br>
        <Navbar />
        <br></br>
        <About />  
      </div>
      
      
      <Footer />
    </>
  );
}

export default App;
