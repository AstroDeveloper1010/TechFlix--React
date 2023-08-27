import Nav from "./components/nav";
import Header from "./components/header";
import Row from "./components/rows"
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Nav */}
      <Nav />
      {/* Header */}
      <Header />
      {/* Rows */}
      <Row />
    </div>
  );
}

export default App;