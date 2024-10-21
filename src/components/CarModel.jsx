import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';

// Import car models
import CAR from '../assets/3dModels/CarModels/civic.glb';
import BMWM4 from '../assets/3dModels/CarModels/bmw_m4.glb';
import AlfaRomeo from '../assets/3dModels/CarModels/alfa_romeo_stradale_1967.glb';
import FormulaE from '../assets/3dModels/CarModels/formula_e__jaguar_i_type-4.glb';
import Lamborghini from '../assets/3dModels/CarModels/lamborghini_sian_fkp_37_custom.glb';
import NissanR33 from '../assets/3dModels/CarModels/nissan_skyline_gtr_r33.glb';
import NissanR35 from '../assets/3dModels/CarModels/nissan_skyline_r35_gtr_nismo._free.glb';
import LowPolyCar from '../assets/3dModels/CarModels/race_car_driver.glb';
import SportsBike from '../assets/3dModels/CarModels/sports_bike.glb';

// Component to load and display the car model
const Car = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath); // Use the model path as prop

  return (
    <primitive object={scene} scale={1.5} position={[0, 0, 0]} /> // Center the model
  );
};

// CarModel component that renders all the car models one below another
const CarModel = () => {
  // List of car models to display
  const carModels = [
    { id: 1, name: 'Honda Civic', path: CAR },
    { id: 2, name: 'BMW M4', path: BMWM4 },
    { id: 3, name: 'Alfa Romeo Stradale 1967', path: AlfaRomeo },
    { id: 4, name: 'Formula E - Jaguar I-Type 4', path: FormulaE },
    { id: 5, name: 'Lamborghini Sian FKP 37', path: Lamborghini },
    { id: 6, name: 'Nissan Skyline GTR R33', path: NissanR33 },
    { id: 7, name: 'Nissan Skyline R35 GTR Nismo', path: NissanR35 },
    { id: 8, name: 'Low Poly Race Car', path: LowPolyCar },
    { id: 9, name: 'Sports Bike', path: SportsBike },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      {carModels.map((car) => (
        <div key={car.id} className="w-full mb-10"> {/* Full width and margin between each model */}
          <h2 className="text-center text-2xl font-bold mb-4">{car.name}</h2>
          <div className="w-full h-96"> {/* Full width with height adjustment */}
            <Canvas>
              <ambientLight intensity={0.5} /> {/* Add ambient light */}
              <pointLight position={[10, 10, 10]} /> {/* Add point light */}
              <OrbitControls /> {/* Allow user to control the camera */}
              <Car modelPath={car.path} /> {/* Render each car model */}
            </Canvas>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarModel;
