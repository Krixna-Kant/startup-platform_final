"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, useGLTF, Environment, Float } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

// function Model(props) {
//   const { scene } = useGLTF("/assets/3d/duck.glb")
//   const ref = useRef()

//   useFrame((state, delta) => {
//     ref.current.rotation.y += delta * 0.2
//   })

//   return (
//     <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
//       <primitive ref={ref} object={scene} scale={1.5} {...props} />
//     </Float>
//   )
// }

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[#0a192f] z-0">
        <div className="absolute inset-0 bg-gradient-radial from-[#6c5ce7]/20 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            🚀{" "}
            <span className="bg-gradient-to-r from-[#00f5d4] to-[#6c5ce7] text-transparent bg-clip-text">
              AI-Powered Startup Planning & Guidance
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
            Validate ideas, connect with mentors, get funding insights, and plan your startup journey with AI
            assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button className="bg-gradient-to-r from-[#00f5d4] to-[#6c5ce7] text-black font-bold text-lg px-8 py-6 rounded-xl hover:shadow-lg hover:shadow-[#00f5d4]/20 transition-all">
              Get Started for Free
            </Button>
            <Button
              variant="outline"
              className="border-[#6c5ce7] text-white hover:bg-[#6c5ce7]/20 font-medium text-lg px-8 py-6 rounded-xl"
            >
              Watch Demo
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="lg:w-1/2 h-[400px] lg:h-[500px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a2942] to-[#0d1b2a] border border-[#2a3a5a] shadow-xl">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
              {/* <Model position={[0, -1, 0]} /> */}
              <Environment preset="city" />
              <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0a192f] to-transparent z-10"></div>
    </section>
  )
}

