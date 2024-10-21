import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import NissanR44 from '../../assets/3dModels/CarModels/nissan_skyline_r35_gtr_nismo._free.glb';

// Component to handle continuous rotation of the model
const RotatingModel = ({ scene }) => {
  const ref = useRef();
  const rotateSpeed = 0.01; // Speed of rotation

  // Use useFrame to rotate the model continuously
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += rotateSpeed; // Rotate around the Y-axis
    }
  });

  return (
    <primitive
      ref={ref} // Attach the ref to the model
      object={scene}
      scale={[1.5, 2, 1.5]} // Increased height by changing the y value
    // scale={[1, 1, 1]} // Reduced scale to default size

    
      position={[0, -1, 0]}
      rotation={[0, Math.PI / 4, 0]} // Initial rotation of 45 degrees
    />
  );
};

// BMW M4 Car Component
const NisanR33 = () => {
  const { scene } = useGLTF(NissanR44);

  return (
    <div className="flex justify-center items-center h-screen relative overflow-hidden"> {/* Centering with flex */}
      <div className="w-3/4 h-3/4"> {/* Adjust this width as necessary for your design */}
        <Canvas style={{ height: '100%', width: '100%' }}> {/* Full-size canvas */}
          <ambientLight intensity={0.8} /> {/* Increased ambient light intensity */}
          <pointLight position={[10, 10, 10]} intensity={1} decay={2} distance={50} />
          <directionalLight position={[-5, 10, 5]} intensity={1.2} /> {/* Adjusted directional light */}
          <hemisphereLight skyColor={0xffffff} groundColor={0x000000} intensity={0.5} /> {/* Added hemisphere light */}
          <OrbitControls />
          
          {/* Render the rotating model */}
          <RotatingModel scene={scene} />
        </Canvas>
      </div>
    </div>
  );
};

export default NisanR33;
