/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useGSAP } from "@gsap/react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useRef } from "react";
import * as THREE from "three";

const Target = (props: any) => {
  const targetRef = useRef<THREE.Group>(null);

  const { scene } = useGLTF("/models/cube.glb");

  useGSAP(
    () => {
      if (!targetRef.current) return;

      gsap.to(targetRef.current.position, {
        y: targetRef.current.position.y + 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    },
    { scope: targetRef },
  );

  return (
    <primitive
      {...props}
      ref={targetRef}
      object={scene}
      rotation={[0, Math.PI / 5, 0]}
      scale={1.5}
    />
  );
};

// Also update the preload to point locally
useGLTF.preload("/models/target.gltf");

export default Target;
