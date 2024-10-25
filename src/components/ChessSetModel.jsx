import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useSelector } from "react-redux"; // Ensure you have redux in your project
import woodenChessSet from "../assets/3dModels/chess_set.glb"; // Adjust the import path as necessary

// Component to load and display the Chess Set model
const ChessSet = () => {
  const { scene } = useGLTF(woodenChessSet); // Use the imported model

  return (
    <primitive object={scene} scale={1.5} position={[0, -1, 0]} /> // Adjusted scale for a bigger size
  );
};

// Hobbies component that renders the Chess Set model
const ChessSetModel = () => {
  const darkMode = useSelector((state) => state.theme.darkMode); // Get dark mode state from Redux

  return (
    <div
    id="hobbies"
      className={`flex flex-col items-center justify-center h-screen mb-4 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
<h1 className={`text-4xl font-bold p-4 rounded-lg shadow-lg ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} transition duration-300 ease-in-out`}>
  Hobbies
</h1>

      {/* Increased the size of the 3D model container */}
      <div className="w-3/4 h-3/4 p-4">
        <Canvas>
          <ambientLight intensity={0.8} /> {/* Add ambient light */}
          <pointLight position={[10, 10, 10]} /> {/* Add point light */}
          <OrbitControls /> {/* Allow user to control the camera */}
          <ChessSet /> {/* Render the Chess Set model */}
        </Canvas>
      </div>

      {/* Instructions Section */}
      <div className="mt-4 text-center mb-4">
        <h2 className="text-lg font-bold">Explore the Chess Set!</h2>
        <p className="mt-2">Use your mouse to rotate and zoom in/out.</p>
        <a
          href="https://venkeyp333.github.io/3D-Models/"
          className="mt-2 text-blue-600 hover:underline mb-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click to view more 3d Models
        </a>
      </div>
    </div>
  );
};

export default ChessSetModel;
