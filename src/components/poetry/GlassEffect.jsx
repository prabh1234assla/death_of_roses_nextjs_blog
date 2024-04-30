import { Canvas } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { MeshTransmissionMaterial, useTexture } from "@react-three/drei";
import { useControls } from "leva";

import new_media from "@/assets/images/home_page/rose.png";

function Scene({ img_loader, geometry_type }) {
  const [props, setProps] = useState({
    geometry_with_one_thickness: 1,
    geometry_with_three_thickness: 3,
    geometry_roughness: 0.4,
    rotate_mesh: true,
  });

  const OnHoverInPropChanges = () => {
    setProps({
      geometry_with_one_thickness: 0,
      geometry_with_three_thickness: 0.5,
      geometry_roughness: 0,
      rotate_mesh: false,
    });
  };

  const OnHoverOffPropChanges = () => {
    setProps({
      geometry_with_one_thickness: 1,
      geometry_with_three_thickness: 3,
      geometry_roughness: 0.4,
      rotate_mesh: true,
    });
  };

  const point_ref = useRef();

  const geomteries_cum_props = [
    {
      box: [2.2, 2.2, 2.2, 1, 1, 1],
      props: {
        thickness: props.geometry_with_one_thickness,
        roughness: 0.35,
        transmission: 1,
        ior: 1.15,
        chromaticAberration: 0.05,
        backside: true,
      },
    },
    {
      capsule: [1.5, 1, 1, 10],
      props: {
        thickness: props.geometry_with_three_thickness,
        roughness: 0,
        transmission: 1,
        ior: 1,
        chromaticAberration: 1,
        backside: true,
      },
    },
    {
      dodecahedron: [1.8, 0],
      props: {
        thickness: props.geometry_with_three_thickness,
        roughness: 0.05,
        transmission: 1,
        ior: 1.5,
        chromaticAberration: 0.05,
        backside: true,
      },
    },
    {
      icosahedron: [1.9, 0],
      props: {
        thickness: props.geometry_with_three_thickness,
        roughness: 0.2,
        transmission: 1,
        ior: 0.95,
        chromaticAberration: 0.05,
        backside: true,
      },
    },
    {
      octahedron: [20, 0],
      props: {
        thickness: 3,
        roughness: props.geometry_roughness,
        transmission: 1,
        ior: 1.05,
        chromaticAberration: 0.05,
        backside: true,
      },
    },
    {
      tetrahedron: [10, 0],
      props: {
        thickness: props.geometry_with_three_thickness,
        roughness: 0.25,
        transmission: 1,
        ior: 0.9,
        chromaticAberration: 0.05,
        backside: true,
      },
    },
    {
      torusGeometry: [1.3, 0.5, 20, 40, Math.PI * 2],
      props: {
        thickness: props.geometry_with_three_thickness,
        roughness: 0,
        transmission: 0.9,
        ior: 1.35,
        chromaticAberration: 0.05,
        backside: true,
      },
    },
    {
      torusKnotGeometry: [1.1, 0.2, 100, 10, 2, 7],
      props: {
        thickness: props.geometry_with_three_thickness,
        roughness: 0.05,
        transmission: 1,
        ior: 1.5,
        chromaticAberration: 0.05,
        backside: true,
      },
    },
  ];

  useFrame((state, delta, frame) => {
    if (props.rotate_mesh) {
      point_ref.current.rotation.x +=
        (Math.PI / 90) * Math.sin(state.clock.elapsedTime);
      point_ref.current.rotation.y +=
        (Math.PI / 90) * Math.sin(state.clock.elapsedTime);
      point_ref.current.rotation.z +=
        (Math.PI / 90) * Math.sin(state.clock.elapsedTime);
    }
  });

  const a = geometry_type == 5 ? 1.9 : geometry_type == 4 ? 1.95 : 1;

  return (
    <>
      <directionalLight
        position={[0, 10, 8]}
        intensity={3}
        color={"0xfff0dd"}
      />

      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[4, 4]} />
        <meshStandardMaterial
          transparent
          map={useTexture(img_loader.asset.src)}
        />
      </mesh>

      <mesh
        ref={point_ref}
        position={[0, 0, 0]}
        onPointerEnter={() => OnHoverInPropChanges()}
        onPointerLeave={() => OnHoverOffPropChanges()}
        scale={[a, a, a]}
      >
        {geometry_type == 0 ? (
          <>
            <boxGeometry args={geomteries_cum_props[0].box} />

            <MeshTransmissionMaterial {...geomteries_cum_props[0].props} />
          </>
        ) : geometry_type == 1 ? (
          <>
            <capsuleGeometry args={geomteries_cum_props[1].capsule} />

            <MeshTransmissionMaterial {...geomteries_cum_props[1].props} />
          </>
        ) : geometry_type == 2 ? (
          <>
            <dodecahedronGeometry args={geomteries_cum_props[2].dodecahedron} />

            <MeshTransmissionMaterial {...geomteries_cum_props[2].props} />
          </>
        ) : geometry_type == 3 ? (
          <>
            <icosahedronGeometry args={geomteries_cum_props[3].icosahedron} />

            <MeshTransmissionMaterial {...geomteries_cum_props[3].props} />
          </>
        ) : geometry_type == 4 ? (
          <>
            <octahedronGeometry
              args={geomteries_cum_props[4].octahedronGeometry}
            />
            <MeshTransmissionMaterial {...geomteries_cum_props[4].props} />
          </>
        ) : geometry_type == 5 ? (
          <>
            <tetrahedronGeometry
              args={geomteries_cum_props[5].tetrahedronGeometry}
            />
            <MeshTransmissionMaterial {...geomteries_cum_props[5].props} />
          </>
        ) : geometry_type == 6 ? (
          <>
            <torusGeometry args={geomteries_cum_props[6].torusGeometry} />
            <MeshTransmissionMaterial {...geomteries_cum_props[6].props} />
          </>
        ) : geometry_type == 7 ? (
          <>
            <torusKnotGeometry
              args={geomteries_cum_props[7].torusKnotGeometry}
            />
            <MeshTransmissionMaterial {...geomteries_cum_props[7].props} />
          </>
        ) : null}
      </mesh>
    </>
  );
}

export default function GlassEffect({ media_img, geometry_type }) {
  return (
    <Canvas
      gl={{
        antialias: true,
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 100,
      }}
      style={{
        width: "300px",
        height: "300px",
      }}
    >
      <Scene img_loader={media_img} geometry_type={geometry_type} />
    </Canvas>
  );
}
