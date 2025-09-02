import './App.css'
import LeftSide from "./Components/LeftSide.jsx";
import RightSide from "./Components/RightSide.jsx";

function App() {

  return (
    <>
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: '100vh',
            width: '100vw',
            fontFamily: 'Silkscreen, sans-serif',
            overflow: 'hidden',
        }}>
            <LeftSide />
            <RightSide />
        </div>
    </>
  )
}

export default App
