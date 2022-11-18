import { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import Scene from './Scene'
import * as THREE from 'three'
import { EffectComposer, DepthOfField, Bloom, Vignette, SMAA } from '@react-three/postprocessing'
import { BakeShadows, CameraShake, Stats } from '@react-three/drei';
import { Environment } from '@react-three/drei';
import { LayerMaterial, Base, Depth, Noise } from 'lamina';
import { OrbitControls, PerspectiveCamera} from '@react-three/drei';
import { ReinhardToneMapping, sRGBEncoding } from 'three';


export const Face =() => {

function allez(){
  console.log('ouimissié')
}
  const lightTarg = new THREE.Vector3(-2,2,0)
  const neonLight = useRef()
useEffect(()=> {
  // neonLight.current.target.position
  console.log('caca' + neonLight.current)}, []
  )
//  console.log(neonLight.current.target.position)

return (
    <div className='headxav' >
        

<Canvas 
shadows = {true}
linear={false}

gl={{
  outputEncoding : sRGBEncoding,
  physicallyCorrectLights : true, 
  antialias : true,
  toneMapping : ReinhardToneMapping}}
  >
<Suspense fallback={
  <mesh position-y={4} scale={[2,3,2]}>
    <boxGeometry args={[2,2,2]}/>
    <meshBasicMaterial color={"#ff00ff"}/>
  </mesh>
}>
<spotLight ref={neonLight} lookAt={[-12,8,2]}  position={[-4,-4,14]} intensity={5} color='#ff00ff' castShadow />
<directionalLight intensity={0.51} position={[-2,6,10]}
          // castShadow={true}
          // shadow-mapSize-height={1024}
          // shadow-mapSize-width={1024}
          />
{/* <ambientLight intensity={1} position={[0,4,10]}/> */}

    <Scene/>
    </Suspense>
    <OrbitControls/>
    <Environment background resolution={128}
    blur={1}>
        <mesh scale={100}>
          <sphereGeometry args={[1, 64, 64]} />
          <LayerMaterial side={THREE.BackSide} color="#00ffff" alpha={0.1} mode="normal" >
 
            <Depth colorA="#ffffff" colorB="#0000b2" alpha={0.91} mode="darken" near={0} far={50} origin={[100, 100, 102]} />
            <Noise mapping="simplex" type="perlin" scale={1} mode="multiply" />
          </LayerMaterial>
        </mesh>
      </Environment>
                <PerspectiveCamera
          
            makeDefault
            fov={50}
            position={[2, 0, 26]}
          />
             <EffectComposer>
        <DepthOfField focusDistance={0.1} focalLength={2} bokehScale={14} height={960} />
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={600} />
        <Vignette eskil={false} offset={0.1} darkness={1} />
        <SMAA edgeDetectionMode={1} preset={3}/>
      </EffectComposer>
</Canvas>
<Stats/>
    
    </div>
)
  }