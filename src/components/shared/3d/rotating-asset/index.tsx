"use client";

import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { OrbitControls } from "@react-three/drei";

const Scene = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <directionalLight
        position={[0, 1, 2]}
      />
      <ambientLight intensity={0.5} />

      <mesh
        position={[0, 0, 0]}
        onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
        onPointerLeave={() => setIsHovered(false)}
      >
        <sphereGeometry args={[3, 20, 20, 0]} />
        <meshStandardMaterial
          color={isHovered ? "orange" : "lightblue"}
          wireframe
        />
      </mesh>

      <OrbitControls enableZoom={false} autoRotate/>
    </>
  );
};

export function RotatingAsset() {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  );
};