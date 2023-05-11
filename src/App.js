// import React from "react";
// import { Canvas, useThree } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";

// import "./App.css";
// // import { Model } from "./Scene";
// // import { Model } from "./Braid";
// // import { Model } from "./Scene-Hair";
// // import { Model } from "./Hair3";
// import { Model } from "./Hair3";




// function App() {
//   return (
//     <>
//       <Canvas>
//         <ambientLight />
//         <pointLight position={[5, 5, 5]} intensity={1} />
//         <pointLight position={[-3, -3, 2]} />
        

//         <Model />

//        <OrbitControls />
//       </Canvas>
      
//       ;
//     </>
//   );
// }

// export default App;


import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, OrbitControls, Float } from "@react-three/drei";

function Model(props) {
  const { scene } = useGLTF("/Hair.glb");
  return <primitive object={scene} {...props} />
}

function App() {
  return (
    <Canvas dpr={[1,2]}  camera={{ fov: 45 }} style={{"position": "absolute"}}>
      {/* <color attach="background" args={["#101010"]} /> */}
      {/* <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI / 4]}> */}
        <Stage environment={"sunset"}>
     
   
          <Model scale={0.01} />
      
        </Stage>
      <OrbitControls />
    </Canvas>
  );
}

export default App;

