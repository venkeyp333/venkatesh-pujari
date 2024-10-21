import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

import CAR from '../assets/3dModels/car.glb'; // Adjust the import path as necessary
import woodenChessSet from '../assets/3dModels/chess_set.glb'; // Adjust the import path as necessary

// Component to load and display the Chess Set model
const ChessSetModel = () => {
  const { scene } = useGLTF(woodenChessSet); // Use the imported model

  return (
    <primitive object={scene} scale={1.5} position={[0, -1, 0]} />  // Adjusted scale for a bigger size
  );
};

// Component to load and display the Car model
const CarModel = () => {
  const { scene } = useGLTF(CAR); // Use the imported model

  return (
    <primitive object={scene} scale={1.5} position={[2, -1, 0]} />  // Adjusted position to separate models
  );
};

function Hobbies() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}> {/* Full viewport width and height */}
      <Canvas>
        <ambientLight intensity={0.5} /> {/* Add ambient light */}
        <pointLight position={[10, 10, 10]} /> {/* Add point light */}
        <OrbitControls /> {/* Allow user to control the camera */}
        <ChessSetModel /> {/* Render the Chess Set model */}
        <CarModel /> {/* Render the Car model */}
      </Canvas>
    </div>
  );
}

export default Hobbies;
