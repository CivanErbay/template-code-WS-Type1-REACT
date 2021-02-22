import './App.css'
import { useScrollTrigger } from './useScrollTrigger'
import React from 'react'
import Landing from './components/Landing/Landing'

function App() {
    const { pageIndex, currentPageScrollY } = useScrollTrigger()
    // console.log({ pageIndex, currentPageScrollY });

    const pageRenderSwitch = () => {
        switch (pageIndex) {
            case 0:
                return <Landing />
            default:
                ;<Landing />
        }
    }

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
    )
}

export default App
