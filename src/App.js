import "./App.css";
import { useScrollTrigger } from "./useScrollTrigger";

function App() {
  const { pageIndex } = useScrollTrigger();

  console.log({ pageIndex });

  return (
    <div className="App">
      <div className="stage">
        <header className="App-header">Fabian Lorenz</header>
        <div className="mx-auto p-6">
          {/* Current Scroll: {scrollY} */}
          Current Page: {pageIndex}
        </div>
      </div>
    </div>
  );
}

export default App;
