import './App.css'
import LeftSide from "./Components/LeftSide.jsx";
import RightSide from "./Components/RightSide.jsx";

function App() {
    const isMobile = window.innerWidth < 600;

    if (isMobile) {
        alert("This website is not optimized for mobile devices. For the best experience, please visit on a desktop or laptop.");
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between',
            height: '100vh',
            width: '100vw',
            fontFamily: 'Silkscreen, sans-serif',
            overflow: isMobile ? 'auto' : 'hidden',
        }}>
            <LeftSide isMobile={isMobile}/>
            <RightSide isMobile={isMobile}/>
        </div>
    );
}

export default App;