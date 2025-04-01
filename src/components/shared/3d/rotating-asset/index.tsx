"use client";

import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls, MeshDistortMaterial, Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Scene = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const rotationSpeed = 0.005;
  
  // Create a smooth rotation effect
  useFrame((state) => {
    if (meshRef.current) {
      // Smooth rotation
      meshRef.current.rotation.y += rotationSpeed;
      
      // Subtle floating movement
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <>
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <directionalLight position={[-5, -5, -5]} intensity={0.2} color="#5d00ff" />
      <ambientLight intensity={0.3} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={0.5} />

      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh
          ref={meshRef}
          position={[0, 0, 0]}
        >
          <torusKnotGeometry args={[1.35, 0.45, 200, 32, 2, 3]} />
          <MeshDistortMaterial
            color="#00a3ff"
            envMapIntensity={1}
            clearcoat={0.8}
            clearcoatRoughness={0}
            metalness={0.2}
            roughness={0.2}
            distort={0.2}
            speed={2}
          />
        </mesh>
      </Float>

      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </>
  );
};

export function RotatingAsset() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 8], fov: 45 }}>
      <Scene />
    </Canvas>
  );
}
