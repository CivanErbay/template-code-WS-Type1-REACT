import "./App.css";
import { useScrollTrigger } from "./useScrollTrigger";

function App() {
  const { pageIndex, currentPageScrollY } = useScrollTrigger();

  console.log({ pageIndex, currentPageScrollY });

  pageRenderSwitch = () => {
    switch (pageIndex) {
      case 0:
        // return top page
        break;

      default:
        break;
    }
  };

  return (
    <div className="App">
      {/* Add components for header, footer and sides */}
      <div className="stage">
        <header className="App-header">Fabian Lorenz</header>
        <div className="mx-auto p-6">
          {/* Current Scroll: {scrollY} */}
          Current Page: {pageIndex}
        </div>
        {/* Switch for each page based on scroll */}
        {pageRenderSwitch()}
      </div>
    </div>
  );
}

export default App;
