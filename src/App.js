import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import "../src/style.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <Note />
    </div>
  );
}
