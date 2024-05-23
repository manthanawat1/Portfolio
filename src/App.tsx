import "./App.css";
import DrawerAppBar from "./components/Toolbar";
import MainSection from "./components/MainSection";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <DrawerAppBar />
      <div className="contents-container">
        <MainSection />
        <Projects />
        <Experience />
      </div>
      <Footer />
    </>
  );
}

export default App;
