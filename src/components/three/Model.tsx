import React from 'react';
import { useLoader, Canvas } from '@react-three/fiber';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Environment, OrbitControls } from '@react-three/drei';

// EL MODELO DEBE ESTAR EN public

const colorsMap: Record<Props['bgColor'], string> = {
  red: 'bg-red-500',
  yellow: 'bg-yellow-500',
  green: 'bg-green-200',
};

interface Props {
  bgColor: 'red' | 'yellow' | 'green';
}

function Box(props: Props) {
  const gltf = useLoader(GLTFLoader, './tablero.gltf');

  return (
    <div className='w-screen h-screen'>
      <div
        className={`w-screen h-screen flex items-center justify-center ${
          colorsMap[props.bgColor]
        }`}>
        <div className='w-3/4 h-3/4'>
          <Canvas className=''>
            <primitive object={gltf.scene} scale={0.4} />
            <OrbitControls />
            <Environment preset='forest' background />
          </Canvas>
        </div>
      </div>
    </div>
  );
}

export default Box;
