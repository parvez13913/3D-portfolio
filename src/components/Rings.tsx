"use client";

import { useGSAP } from "@gsap/react";
import { Center, useTexture } from "@react-three/drei";
import gsap from "gsap";
import { useCallback, useRef } from "react";
import * as THREE from "three";

const Rings = ({ position = [0, 0, 0] }) => {
  const refList = useRef<THREE.Mesh[]>([]);
  const texture = useTexture("textures/rings.png");

  // Callback to collect refs
  const getRef = useCallback((mesh: THREE.Mesh | null) => {
    if (mesh && !refList.current.includes(mesh)) {
      refList.current.push(mesh);
    }
  }, []);

  // GSAP animation
  useGSAP(
    () => {
      if (!refList.current.length) return;

      refList.current.forEach((mesh) => {
        mesh.position.set(position[0], position[1], position[2]);
      });

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.5,
      });

      tl.to(
        refList.current.map((mesh) => mesh.rotation),
        {
          y: `+=${Math.PI * 2}`,
          x: `-=${Math.PI * 2}`,
          duration: 2.5,
          stagger: {
            each: 0.15,
          },
          ease: "power1.inOut",
        }
      );

      return () => tl.kill(); // cleanup on unmount
    },
    { dependencies: [position] }
  );

  return (
    <Center>
      <group scale={0.5}>
        {Array.from({ length: 4 }).map((_, index) => (
          <mesh key={index} ref={getRef}>
            <torusGeometry args={[(index + 1) * 0.5, 0.1]} />
            <meshMatcapMaterial matcap={texture} toneMapped={false} />
          </mesh>
        ))}
      </group>
    </Center>
  );
};

export default Rings;
