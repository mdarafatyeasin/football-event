"use client"

import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Scene from "../../public/Scene"
import "../app/page.css"

const football = () => {
  return (
    <div className="bg-gradient-to-b from-gray-950 to-black min-h-screen">
      <Canvas className="min-h-screen">
        <ambientLight />
        <OrbitControls enableZoom={false} />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
};

export default football;
