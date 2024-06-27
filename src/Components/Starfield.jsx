import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const NUM_POINTS = 2500;
const MAX_RADIUS = 20;
const MIN_RADIUS = 5;
const DEPTH = 5;

const randomFromInterval = (min, max) => {
  return Math.random() * (max - min) + min;
};

const generatePoints = (numPoints, innerRadius, outerRadius, depth) => {
  const points = [];

  for (let i = 0; i < numPoints; i++) {
    const randomRadius = randomFromInterval(innerRadius, outerRadius);
    const randomAngle = Math.random() * Math.PI * 2;

    const x = Math.cos(randomAngle) * randomRadius;
    const y = Math.sin(randomAngle) * randomRadius;
    const z = randomFromInterval(-depth, depth);

    points.push({ position: [x, y, z], number: i + 1 }); // Añade un número a cada punto
  }

  return points;
};

const StarField = () => {
  const pointsInner = generatePoints(NUM_POINTS, MIN_RADIUS, MAX_RADIUS, DEPTH);
  const pointsOuter = generatePoints(NUM_POINTS / 4, MIN_RADIUS / 2, MAX_RADIUS * 2, DEPTH * 10);

  return (
    <Canvas
      camera={{ position: [0, 0, 50] }}
      style={{ height: "100vh" }}
      className="bg-black"
    >
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      
      <group>
        {pointsInner.map((point, index) => (
          <TextMesh key={index} position={point.position} number={point.number} />
        ))}
        {pointsOuter.map((point, index) => (
          <TextMesh key={index} position={point.position} number={point.number} />
        ))}
      </group>
    </Canvas>
  );
};

// Componente para renderizar números como texto
const TextMesh = ({ position, number }) => {
  const textRef = useRef();

  return (
    <group position={position}>
      <mesh>
        <textGeometry attach="geometry" args={[number.toString(), { font: "helvetiker", size: 1, height: 0.2 }]} />
        <meshBasicMaterial attach="material" color="white" />
      </mesh>
    </group>
  );
};

export default StarField;
