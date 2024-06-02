import Grid from "./components/Grid"; // Ensure the path to the Grid component is correct
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header></Header>
      <h1>Pathfinding Visualizer</h1>
      <Grid rows={20} cols={40} />
      <Footer></Footer>
    </div>
  );
}

export default App;
