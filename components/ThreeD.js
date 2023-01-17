import React, { useRef, useState } from "react";
import { Canvas, useLoader, useFrame, useThree } from "@react-three/fiber";
import { Environment, OrbitControls, useTexture } from "@react-three/drei";
import { TextureLoader, Vector3 } from "three";

const vec = new Vector3();

const Three = ({pointerStatus}) => {
  const pic = useLoader(TextureLoader, "/profile.png");
  const prof = useTexture("/profile.png");
  const mouse = useThree((state) => state.mouse);
  const lightRef = useRef();
  useFrame(({ clock }) => {
    // lightRef.current.position.x = mouse.x * -3;
    // lightRef.current.position.y = mouse.y * -3;

    // if(!pointerStatus) {
    //   lightRef.current.position.x = 0;
    //   lightRef.current.position.y = 0;
    // }

    // With Smooth Transitions
    vec.set(mouse.x * -3, mouse.y * -3, 15);
    if (!pointerStatus) vec.set(0, 0, 19);
    lightRef.current.position.lerp(vec, 0.1);
  });

  return (
    <>
      <spotLight
        ref={lightRef}
        color="#ffffff"
        position={[0, 0, 8]}
        intensity={1}
        penumbra={0}
        angle={0.1}
        decay={2}
        distance={500}
        map={pic}
      />
      <mesh>
        <sphereGeometry args={[2.3, 64, 64]} />
        <meshPhongMaterial color={"#ffffff"} />
        {/* <Environment preset="dawn" background blur={0.8} /> */}
        {/* <OrbitControls enableZoom={false} /> */}
      </mesh>
    </>
  );
};

const Canva = () => {
  const [pointerStatus, setPointerStatus] = useState(false);

  return (
    <>
      <Canvas className="dark:bg-[#111111]"
        onPointerEnter={(e) => setPointerStatus(true)}
        onPointerLeave={(e) => setPointerStatus(false)}>
        <Three pointerStatus={pointerStatus} />
      </Canvas>
    </>
  );
};

export default Canva;
