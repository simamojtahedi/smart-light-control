import { Suspense, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

useGLTF.preload("/lamp.glb");

function LampComponent({ ...props }) {
  const ref = useRef();
  const [rotation, setRotation] = useState(0);
  const { nodes, materials }: any = useGLTF("/lamp.glb");
  const lightMaterial: any = materials["Material.002"].clone();
  const lampMaterial: any = materials["Material.001"].clone();

  lightMaterial.emissive = new THREE.Color("rgb(244, 220, 86)");
  lampMaterial.emissive = new THREE.Color("rgb(35, 35, 35)");

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((rotation) => rotation + 0.0007);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <group {...props} dispose={null}>
      <group
        //@ts-ignore
        ref={ref}
      >
        <group position={[0, -5, 50]}>
          <mesh
            castShadow
            geometry={nodes.Cylinder.geometry}
            material={lightMaterial}
            scale={[1, 3, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_1.geometry}
            material={lampMaterial}
            rotation={[0, rotation, 0]}
            scale={[1, 3, 1]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane.geometry}
            material={lightMaterial}
          />
        </group>
      </group>
    </group>
  );
}

export default function Lamp({ step }: { step: number }) {
  return (
    <>
      {step == 1 && (
        <motion.div
          key="lamp"
          initial={{ opacity: 0, transform: "translateY(-60px)" }}
          animate={{ opacity: 1, transform: "translateY(0)" }}
          transition={{ duration: 1.9, delay: 1 }}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            zIndex: 2,
          }}
        >
          <Canvas
            shadows
            dpr={[1, 2]}
            camera={{ position: [0, 0, 1.1], fov: 10 }}
          >
            <ambientLight intensity={2} />
            <Suspense fallback={null}>
              <LampComponent scale={0.045} position={[0, 0.3, -15]} />
            </Suspense>
          </Canvas>
        </motion.div>
      )}
    </>
  );
}
