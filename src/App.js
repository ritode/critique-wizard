import { OrbitControls, Sphere } from "@react-three/drei";
import "./App.css";
import Room from "./components/Room";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <div className="App">
      <div className="instruction">-press 'Q' to add comment-</div>
      <Canvas className="canvas">
        <Room position={[0, -1.5, 0]} rotation={[0, 0, 0]} />
        <OrbitControls maxPolarAngle={Math.PI / 2} maxDistance={4.5} />
      </Canvas>
    </div>
  );
}

export default App;
