import Hero from "./components/hero/hero"
//import Build from "./components/build"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartBuild from "./components/build/startBuild";

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="home" element={<Hero />} />
          <Route path="startBuild" element={<StartBuild />} />
          
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
