import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useGLTF} from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useFrame, useLoader } from "@react-three/fiber";
import { DoubleSide, NearestFilter, PCFSoftShadowMap } from "three";
import { SubsurfaceScatteringShader } from 'three/addons/shaders/SubsurfaceScatteringShader.js';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Scene(props) {
  //MAPS IMPORT
//FACE
  const faceMap = useLoader(TextureLoader, "/headus/Colour_8k-min.png");
        faceMap.flipY = false;
        faceMap.minFilter = THREE.LinearMipmapNearestFilter
        faceMap.magFilter = THREE.LinearFilter
  const faceNorm = useLoader(
    TextureLoader,
    "/headus/Normal-Map_SubDivision_1-min.png"
  );
  faceNorm.minFilter = THREE.LinearMipmapNearestFilter
        faceNorm.flipY = false;
  const faceRough = useLoader(TextureLoader, "/headus/Gloss_8k-min.jpg");
        faceRough.flipY = false;
        faceRough.minFilter = THREE.LinearMipmapNearestFilter
  const faceSpec = useLoader(TextureLoader, "/headus/Spec_8k-min.jpg");
        faceSpec.flipY = false;
        faceSpec.minFilter = THREE.LinearMipmapNearestFilter
  const faceDisp = useLoader(TextureLoader, "/headus/Cavity_8k-min.jpg");
        faceDisp.flipY = false;
        faceDisp.minFilter = THREE.LinearMipmapNearestFilter
        const faceShadow = useLoader(TextureLoader, "/headus/Shadow128S.png");
        faceShadow.flipY = false;
        // faceShadow.minFilter = THREE.LinearMipmapNearestFilter
////INNER EYE

    const innerEyeMap = useLoader(TextureLoader, "/headus/Sphere1_TXTR-min-min.png");
    innerEyeMap.flipY = false;
    const innerEyeNorm = useLoader(TextureLoader, "/headus/Sphere1_NM-min.png");
    innerEyeNorm.flipY = false;

        const { nodes, materials } = useGLTF( "/HeadDefULTRA.glb");
        
  materials.eyeout2 = new THREE.MeshPhysicalMaterial({
    transmission: 0.99,
    roughness: 0,
    opacity: 0.4,
    clearcoat: 1,
    clearcoatRoughness: 0,
    transparent: true
  });

  const eyeMaterial = new THREE.MeshStandardMaterial({
    map: innerEyeMap,
    normalMap: innerEyeNorm,
  })

  materials.Headus = new THREE.MeshPhysicalMaterial({
    map: faceMap,
   normalMap: faceNorm,
  //  bumpScale:-0.01,
    normalScale:new THREE.Vector2(1,-1),
    roughnessMap: faceRough,
    roughness:0.8,
    metalnessMap: faceSpec,
    metalness: 0.4,
    aoMap: faceShadow,
    aoMapIntensity: 1,
    // specularIntensityMap: faceSpec,
    // specularColorMap:faceSpec,
    // specularIntensity: 0.94,

    displacementMap: faceDisp,
    displacementScale: -0.01,
    // transmissionMap: faceDisp,
    // transmission: 0.31,
    // transparent: true,
    // opacity: 1,
    // wireframe: true,

  });




  materials.RootStrandLarge.vertexColors = new THREE.Color('#000')
  materials.hairStrands.vertexColors = new THREE.Color('#000')

const headFull = React.useRef()

// useFrame(({ clock }) => {
//   const a = clock.getElapsedTime()
//   //headFull.current.rotation.y = -1+Math.sin(a*0.1)*0.3// the value will be 0 at scene initialization and grow each frame

// })

  return (
    <group {...props} dispose={null} ref={headFull} position={[4,5,3]}>
        
        <mesh
        // castShadow
        // receiveShadow
        geometry={nodes.Mesh007.geometry}
        material={materials["LashesFBR.001"]}
        position={[0.743, 2.871, 1.512]}
        rotation={[1.422, -0.463, -0.969]}
      />
      <mesh
        // castShadow
        // receiveShadow
        geometry={nodes.Mesh001.geometry}
        material={materials["LashesFBR.001"]}
        position={[-0.691, 2.886, 1.521]}
        rotation={[1.477, 0.337, 0.835]}
      />
      <mesh
        // castShadow
        // receiveShadow
        geometry={nodes.Mesh002.geometry}
        material={materials["LashesFBR.001"]}
        position={[0.705, 2.649, 1.467]}
        rotation={[-1.212, -0.367, 0.932]}
      />
      <mesh
        // castShadow
        // receiveShadow
        geometry={nodes.Mesh003.geometry}
        material={materials["LashesFBR.001"]}
        position={[-0.691, 2.637, 1.467]}
        rotation={[-1.202, 0.403, -0.96]}
      />
      <mesh
        castShadow
        // receiveShadow
        geometry={nodes.Bebar.geometry}
        material={materials.Eyebrows}
        position={[0, 3.25, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        // receiveShadow
        geometry={nodes.bebar2.geometry}
        material={materials.Lashes}
        position={[0, 3.25, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        // castShadow
        // receiveShadow
        geometry={nodes.Torus.geometry}
        material={materials.silver}
        position={[1.395, 1.998, -0.009]}
        rotation={[0, 0.391, -Math.PI / 2]}
      />
      <mesh
        // castShadow
        // receiveShadow
        geometry={nodes.Broaux.geometry}
        material={materials.Eyebrows}
        position={[0, 3.235, -0.024]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Head2001.geometry}
        material={materials.Headus}
        position={[0, 3.275, -0.049]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        // castShadow
        // receiveShadow
        geometry={nodes.Sphere1.geometry}
        material={eyeMaterial}
        position={[-0.62, 2.79, 1.246]}
        rotation={[Math.PI / 2, 0, -0.03]}
      />
      <mesh
        // castShadow
        // receiveShadow
        geometry={nodes.Sphere1001.geometry}
        material={eyeMaterial}
        position={[0.648, 2.79, 1.246]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        // castShadow
        // receiveShadow
        geometry={nodes.Sphere2.geometry}
        material={materials.eyeout2}
        position={[-0.62, 2.768, 1.138]}
        rotation={[1.439, 0, 0]}
      />
      <mesh
        // castShadow
        // receiveShadow
        geometry={nodes.Sphere2001.geometry}
        material={materials.eyeout2}
        position={[0.64, 2.783, 1.245]}
        rotation={[1.439, 0, 0]}
      />
      <mesh
        // castShadow
        // receiveShadow
        geometry={nodes.NurbsPath011.geometry}
        material={materials.HairRoot}
        position={[1.437, 2.703, -0.643]}
        rotation={[-0.006, -0.042, 0.327]}
      />
      <mesh
        // castShadow
        // receiveShadow
        geometry={nodes.NurbsPath.geometry}
        material={materials.HairRoot}
        position={[1.942, 4.888, 2.218]}
      />
      <mesh
        // castShadow
        // receiveShadow
        geometry={nodes.NurbsPath027.geometry}
        material={materials.RootStrandLarge}
        position={[0.827, 0.518, 0.019]}
        rotation={[0.22, -0.172, -0.254]}
      />
      <mesh
        // castShadow
        // receiveShadow
        geometry={nodes.NurbsPath001.geometry}
        material={materials.RootStrandLarge}
        position={[0.615, 4.157, -3.301]}
        rotation={[0.775, -0.872, -1.859]}
      />
      <group position={[0.251, 3.028, -1.368]} rotation={[1.29, 0.161, -1.244]}>
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.NurbsPath004_1.geometry}
          material={materials.HairRoot}
        />
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.NurbsPath004_2.geometry}
          material={materials.hairStrands}
        />
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.NurbsPath004_3.geometry}
          material={materials.RootStrandLarge}
        />
      </group>
      <group position={[0.372, 3.09, 1.95]} rotation={[0.195, -1.044, 0.125]}>
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.NurbsPath031_1.geometry}
          material={materials.RootStrandLarge}
        />
        <mesh
          // castShadow
          // receiveShadow
          geometry={nodes.NurbsPath031_2.geometry}
          material={materials.hairStrands}
        />
      </group>
 
  </group>
  );
}

useGLTF.preload("/headDefULTRA.glb");
