import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";

import "./App.css";

import { useGLTF } from "@react-three/drei";

function Model(props) {
  const { nodes, materials } = useGLTF("/Hair3.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Hair008.geometry}
        material={materials["Hair Mat"]}
      />
    </group>
  );
}

useGLTF.preload("/Hair3.gltf");

function App() {
  return (
    <>
      <Canvas style={{ background: "#000", width:"auto" }}>
        <ambientLight intensity={1} />
        <spotLight
          intensity={0.5}
          angle={0.1}
          penumbra={1}
          position={[10, 15, 10]}
          castShadow
        />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
      ;
    </>
  );
}

export default App;
