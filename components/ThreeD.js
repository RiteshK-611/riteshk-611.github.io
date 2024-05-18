/* eslint-disable react/no-unknown-property */
import React, { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { Vector3 } from "three";

const vec1 = new Vector3();
const vec2 = new Vector3();

const Three = ({ pointerStatus, canvasRef }) => {
  const prof = useTexture("/profile.png");
  const mouse = useThree((state) => state.mouse);
  const camera = useThree((state) => state.camera);
  const lightRef = useRef();

  useFrame(() => {
    // lightRef.current.position.x = mouse.x * -3;
    // lightRef.current.position.y = mouse.y * -3;
    // if(!pointerStatus) {
    //   lightRef.current.position.x = 0;
    //   lightRef.current.position.y = 0;
    // }

    // With Smooth Transitions
    vec1.set(mouse.x * -3, mouse.y * -3, 15);
    if (!pointerStatus) vec1.set(0, 0, 19);
    lightRef.current.position.lerp(vec1, 0.1);

    // To Dynamically Change Sphere Visibility
    let size = Math.abs(canvasRef.current.scrollWidth / 100 - 9.7);
    vec2.set(0, 0, size);
    camera.position.lerp(vec2, 0.5);
  });

  return (
    <>
      <spotLight
        ref={lightRef}
        color="#ffffff"
        position={[0, 0, 8]}
        intensity={1}
        penumbra={0}
        angle={0.115}
        decay={2}
        distance={500}
        map={prof}
      />
      <mesh>
        <sphereGeometry args={[2.5, 64, 64]} />
        <meshPhongMaterial />
      </mesh>
    </>
  );
};

const Canva = () => {
  const [pointerStatus, setPointerStatus] = useState(false);
  const canvasRef = useRef();

  return (
    <>
      <Canvas
        ref={canvasRef}
        className="hidden md:block"
        onPointerEnter={(e) => setPointerStatus(true)}
        onPointerLeave={(e) => setPointerStatus(false)}>
        <Three pointerStatus={pointerStatus} canvasRef={canvasRef} />
      </Canvas>
    </>
  );
};

export default Canva;
