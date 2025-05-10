"use client"

import { Environment, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import Scene from "../../public/Scene"
import "../app/page.css"

const football = () => {
  return (
    <div className="min-h-screen relative">
      {/* Enhanced background with nebula/cloudy effect */}
      <div className="absolute inset-0 bg-nebula"></div>

      {/* Background text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-8xl md:text-9xl font-extrabold text-white opacity-30 uppercase">HYPERBALL</h1>
      </div>

      {/* Canvas on top with some transparency */}
      <div className="absolute inset-0" style={{ zIndex: 1 }}>
        <Canvas className="min-h-screen" style={{ background: "transparent" }}>
          <ambientLight intensity={0.8} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <OrbitControls enableZoom={false} />
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
          <Environment preset="warehouse" />
        </Canvas>
      </div>
    </div>
  )
}

export default football
