import Header from "./components/Header";
import Footer from "./components/Footer";
import cd from "./components/CardDetails";
import "../src/style.css";
import CreateCard from "./components/LoopCard";

export default function App() {
  return (
    <div className="App">
      <Header />
      {cd.map(CreateCard)}
      <Footer />
    </div>
  );
}
