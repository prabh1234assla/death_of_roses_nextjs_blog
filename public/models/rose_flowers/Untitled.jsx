import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Model({ model_url, model_ref, class_name }) {
  const { nodes, materials } = useGLTF(model_url);

  useFrame((state, delta, frame) => {
    model_ref.current.rotation.z += 0.0;
    model_ref.current.rotation.x += 0.0;
    model_ref.current.rotation.y += 0.03;
    model_ref.current.position.x = 0.01*Math.sin(state.clock.elapsedTime);
  });

  return (
    <group ref={model_ref} dispose={null} position={[0.4, -3, -3]}>
      <group position={[0, 0.196, 0]} scale={0.011}>
        <group position={[-33.751, 13.25, 73.595]} rotation={[0, -1.304, 0]}>
          <group
            position={[33.231, 119.434, -70.503]}
            rotation={[-0.091, 0.338, -0.14]}
            scale={0.036}
          >
            <group position={[-620.735, 6321.924, 580.486]}>
              <mesh
                geometry={nodes.Rose098.geometry}
                material={materials["Material #25"]}
                position={[128.404, 575.607, -71.139]}
                rotation={[1.625, -0.042, 1.097]}
                scale={[0.433, 0.445, 0.457]}
              />
              <mesh
                geometry={nodes.Rose099.geometry}
                material={materials["Material #25"]}
                position={[-29.854, 709.538, -89.877]}
                rotation={[1.631, -0.013, -0.406]}
                scale={[0.197, 0.204, 0.334]}
              />
              <mesh
                geometry={nodes.Rose100.geometry}
                material={materials["Material #25"]}
                position={[19.253, 706.008, 52.821]}
                rotation={[1.624, 0.073, 2.702]}
                scale={[0.24, 0.246, 0.331]}
              />
              <mesh
                geometry={nodes.Rose101.geometry}
                material={materials["Material #25"]}
                position={[-17.43, 570.164, 134.385]}
                rotation={[1.496, -0.034, 2.995]}
                scale={[0.369, 0.356, 0.462]}
              />
              <mesh
                geometry={nodes.Rose102.geometry}
                material={materials["Material #25"]}
                position={[-126.503, 580.478, 27.397]}
                rotation={[1.559, -0.045, -2.015]}
                scale={[0.357, 0.368, 0.461]}
              />
              <mesh
                geometry={nodes.Rose103.geometry}
                material={materials["Material #25"]}
                position={[-91.144, 702.062, -31.899]}
                rotation={[1.619, -0.096, -1.678]}
                scale={[0.204, 0.197, 0.334]}
              />
              <mesh
                geometry={nodes.Rose104.geometry}
                material={materials["Material #25"]}
                position={[52.807, 71.175, -315.683]}
                rotation={[Math.PI / 2, -0.083, 0.194]}
                scale={[0.888, 0.888, 1.126]}
              />
              <mesh
                geometry={nodes.Rose105.geometry}
                material={materials["Material #25"]}
                position={[-657.8, -190.55, -130.324]}
                rotation={[Math.PI / 2, 0.137, -1.203]}
                scale={[1.287, 1, 1]}
              />
              <mesh
                geometry={nodes.Rose106.geometry}
                material={materials["Material #25"]}
                position={[491.468, -49.238, -361.293]}
                rotation={[Math.PI / 2, 0, 0.762]}
              />
              <mesh
                geometry={nodes.Rose107.geometry}
                material={materials["Material #25"]}
                position={[524.078, -421.573, 366.273]}
                rotation={[1.685, -0.285, 2.32]}
                scale={[1.285, 1.001, 0.801]}
              />
              <mesh
                geometry={nodes.Rose108.geometry}
                material={materials["Material #25"]}
                position={[-99.556, -168.222, 571.35]}
                rotation={[1.732, 0.03, -3.103]}
              />
              <mesh
                geometry={nodes.Rose109.geometry}
                material={materials["Material #25"]}
                position={[31.664, -190.548, -694.784]}
                rotation={[Math.PI / 2, 0, 0]}
              />
              <mesh
                geometry={nodes.Rose110.geometry}
                material={materials["Material #25"]}
                position={[-92.071, 83.189, 209.207]}
                rotation={[1.518, -0.022, -2.918]}
                scale={[0.732, 0.735, 1.138]}
              />
              <mesh
                geometry={nodes.Rose111.geometry}
                material={materials["Material #25"]}
                position={[214.715, 57.745, 171.618]}
                rotation={[1.483, 0.046, 2.073]}
                scale={[0.732, 0.735, 1.138]}
              />
              <mesh
                geometry={nodes.Rose112.geometry}
                material={materials["Material #25"]}
                position={[-41.358, -49.237, -370.646]}
                rotation={[Math.PI / 2, 0, 0.013]}
              />
              <mesh
                geometry={nodes.Rose113.geometry}
                material={materials["Material #25"]}
                position={[-435.616, -27.82, 166.331]}
                rotation={[Math.PI / 2, 0, -1.643]}
              />
              <mesh
                geometry={nodes.Rose114.geometry}
                material={materials["Material #25"]}
                position={[267.029, -27.821, 356.612]}
                rotation={[Math.PI / 2, 0, 2.535]}
              />
            </group>
            <mesh
              geometry={nodes.Rose000.geometry}
              material={materials["Material #27"]}
              position={[-292.022, 1156.797, -2463.265]}
              scale={[1.287, 1.177, 1.177]}
            />
            <mesh
              geometry={nodes.Rose115.geometry}
              material={materials["Material #28"]}
              position={[-917.481, 1804.099, -5103.726]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              geometry={nodes.Rose116.geometry}
              material={materials["Material #27"]}
              position={[-445.396, 1179.011, -399.794]}
              rotation={[2.984, -1.228, 2.789]}
              scale={[1.422, 1.193, 1.178]}
            />
            <mesh
              geometry={nodes.Rose117.geometry}
              material={materials["Material #27"]}
              position={[473.025, 4243.603, 2002.667]}
              rotation={[2.712, 0.725, 3.102]}
              scale={[1.145, 1.099, 1.269]}
            />
            <mesh
              geometry={nodes.Rose118.geometry}
              material={materials["Material #28"]}
              position={[-890.31, 2327.961, -3674.802]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.764}
            />
            <mesh
              geometry={nodes.Rose119.geometry}
              material={materials["Material #28"]}
              position={[-1108.174, 288.086, 926.3]}
              rotation={[1.273, 1.347, 0.197]}
              scale={[0.971, 1.179, 0.361]}
            />
            <mesh
              geometry={nodes.Rose120.geometry}
              material={materials["Material #28"]}
              position={[-885.969, 2565.988, 776.378]}
              rotation={[0, -0.955, 1.476]}
              scale={[0.971, 1.179, 0.361]}
            />
            <group position={[-599.226, 5419.838, 160.221]} scale={1.919}>
              <mesh
                geometry={nodes.Mesh118.geometry}
                material={materials["01 - Defaulte"]}
              />
              <mesh
                geometry={nodes.Mesh118_1.geometry}
                material={materials["Material #27"]}
              />
            </group>
            <group
              position={[-756.667, 5388.27, 990.274]}
              rotation={[-3.012, 0.392, 3.064]}
              scale={1.919}
            >
              <mesh
                geometry={nodes.Mesh119.geometry}
                material={materials["01 - Defaulte"]}
              />
              <mesh
                geometry={nodes.Mesh119_1.geometry}
                material={materials["Material #27"]}
              />
            </group>
            <group
              position={[-169.404, 5419.837, 515.624]}
              rotation={[0, -1.366, 0]}
              scale={1.919}
            >
              <mesh
                geometry={nodes.Mesh120.geometry}
                material={materials["01 - Defaulte"]}
              />
              <mesh
                geometry={nodes.Mesh120_1.geometry}
                material={materials["Material #27"]}
              />
            </group>
            <mesh
              geometry={nodes.Rose124.geometry}
              material={materials["Material #28"]}
              position={[-785.086, 2747.768, -5107.167]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <group
              position={[-961.743, 5451.98, 531.532]}
              rotation={[0.298, 1.401, -0.204]}
              scale={[2.108, 1.582, 1.59]}
            >
              <mesh
                geometry={nodes.Mesh122.geometry}
                material={materials["01 - Defaulte"]}
              />
              <mesh
                geometry={nodes.Mesh122_1.geometry}
                material={materials["Material #27"]}
              />
            </group>
            <mesh
              geometry={nodes.Rose126.geometry}
              material={materials["Material #27"]}
              position={[1503.287, 4069.193, 2639.297]}
              rotation={[-3.032, -0.484, -2.893]}
              scale={[1.713, 1.437, 1.419]}
            />
            <mesh
              geometry={nodes.Rose127.geometry}
              material={materials["Material #27"]}
              position={[1370.833, 4026.351, 1394.179]}
              rotation={[0, -1.058, 0]}
              scale={[1.115, 1.099, 1.269]}
            />
            <mesh
              geometry={nodes.Rose128.geometry}
              material={materials["Material #27"]}
              position={[-1590.154, 1226.956, -1174.162]}
              rotation={[0.508, 0.597, -0.702]}
              scale={[1.422, 1.193, 1.178]}
            />
            <mesh
              geometry={nodes.Rose130.geometry}
              material={materials["Material #27"]}
              position={[798.454, 1156.798, -2421.856]}
              rotation={[-0.14, -0.806, 0.096]}
              scale={[1.422, 1.193, 1.178]}
            />
          </group>
          <group
            position={[-18.193, 133.359, -56.819]}
            rotation={[0, 0.803, 0]}
            scale={0.036}
          >
            <group position={[-620.735, 6321.928, 580.486]}>
              <mesh
                geometry={nodes.Rose034.geometry}
                material={materials["Material #25"]}
                position={[128.405, 575.609, -71.139]}
                rotation={[1.625, -0.042, 1.097]}
                scale={[0.433, 0.445, 0.457]}
              />
              <mesh
                geometry={nodes.Rose035.geometry}
                material={materials["Material #25"]}
                position={[-29.854, 709.54, -89.877]}
                rotation={[1.631, -0.013, -0.406]}
                scale={[0.197, 0.204, 0.334]}
              />
              <mesh
                geometry={nodes.Rose036.geometry}
                material={materials["Material #25"]}
                position={[19.254, 706.011, 52.821]}
                rotation={[1.624, 0.073, 2.702]}
                scale={[0.24, 0.246, 0.331]}
              />
              <mesh
                geometry={nodes.Rose037.geometry}
                material={materials["Material #25"]}
                position={[-17.43, 570.167, 134.385]}
                rotation={[1.496, -0.034, 2.995]}
                scale={[0.369, 0.356, 0.462]}
              />
              <mesh
                geometry={nodes.Rose038.geometry}
                material={materials["Material #25"]}
                position={[-126.503, 580.479, 27.397]}
                rotation={[1.559, -0.045, -2.015]}
                scale={[0.357, 0.368, 0.461]}
              />
              <mesh
                geometry={nodes.Rose039.geometry}
                material={materials["Material #25"]}
                position={[-91.144, 702.064, -31.899]}
                rotation={[1.619, -0.096, -1.678]}
                scale={[0.204, 0.197, 0.334]}
              />
              <mesh
                geometry={nodes.Rose040.geometry}
                material={materials["Material #25"]}
                position={[52.807, 71.177, -315.683]}
                rotation={[Math.PI / 2, -0.083, 0.194]}
                scale={[0.888, 0.888, 1.126]}
              />
              <mesh
                geometry={nodes.Rose041.geometry}
                material={materials["Material #25"]}
                position={[-657.8, -190.548, -130.324]}
                rotation={[Math.PI / 2, 0.137, -1.203]}
                scale={[1.287, 1, 1]}
              />
              <mesh
                geometry={nodes.Rose042.geometry}
                material={materials["Material #25"]}
                position={[491.468, -49.237, -361.293]}
                rotation={[Math.PI / 2, 0, 0.762]}
              />
              <mesh
                geometry={nodes.Rose043.geometry}
                material={materials["Material #25"]}
                position={[524.078, -421.569, 366.273]}
                rotation={[1.685, -0.285, 2.32]}
                scale={[1.285, 1.001, 0.801]}
              />
              <mesh
                geometry={nodes.Rose044.geometry}
                material={materials["Material #25"]}
                position={[-99.556, -168.221, 571.35]}
                rotation={[1.732, 0.03, -3.103]}
              />
              <mesh
                geometry={nodes.Rose045.geometry}
                material={materials["Material #25"]}
                position={[31.664, -190.548, -694.784]}
                rotation={[Math.PI / 2, 0, 0]}
              />
              <mesh
                geometry={nodes.Rose046.geometry}
                material={materials["Material #25"]}
                position={[-92.071, 83.191, 209.207]}
                rotation={[1.518, -0.022, -2.918]}
                scale={[0.732, 0.735, 1.138]}
              />
              <mesh
                geometry={nodes.Rose047.geometry}
                material={materials["Material #25"]}
                position={[214.715, 57.746, 171.618]}
                rotation={[1.483, 0.046, 2.073]}
                scale={[0.732, 0.735, 1.138]}
              />
              <mesh
                geometry={nodes.Rose048.geometry}
                material={materials["Material #25"]}
                position={[-41.357, -49.237, -370.646]}
                rotation={[Math.PI / 2, 0, 0.013]}
              />
              <mesh
                geometry={nodes.Rose049.geometry}
                material={materials["Material #25"]}
                position={[-435.616, -27.82, 166.331]}
                rotation={[Math.PI / 2, 0, -1.643]}
              />
              <mesh
                geometry={nodes.Rose050.geometry}
                material={materials["Material #25"]}
                position={[267.029, -27.82, 356.613]}
                rotation={[Math.PI / 2, 0, 2.535]}
              />
            </group>
            <mesh
              geometry={nodes.Rose051.geometry}
              material={materials["Material #27"]}
              position={[-445.396, 1179.013, -399.794]}
              rotation={[2.984, -1.228, 2.789]}
              scale={[1.422, 1.193, 1.178]}
            />
            <mesh
              geometry={nodes.Rose052.geometry}
              material={materials["Material #27"]}
              position={[473.025, 4243.608, 2002.666]}
              rotation={[2.712, 0.725, 3.102]}
              scale={[1.145, 1.099, 1.269]}
            />
            <mesh
              geometry={nodes.Rose053.geometry}
              material={materials["Material #28"]}
              position={[-890.31, 2327.963, -3674.802]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.764}
            />
            <mesh
              geometry={nodes.Rose054.geometry}
              material={materials["Material #28"]}
              position={[-1108.174, 288.088, 926.3]}
              rotation={[1.273, 1.347, 0.197]}
              scale={[0.971, 1.179, 0.361]}
            />
            <mesh
              geometry={nodes.Rose055.geometry}
              material={materials["Material #28"]}
              position={[-885.969, 2565.99, 776.378]}
              rotation={[0, -0.955, 1.476]}
              scale={[0.971, 1.179, 0.361]}
            />
            <group position={[-599.226, 5419.84, 160.221]} scale={1.919}>
              <mesh
                geometry={nodes.Mesh055.geometry}
                material={materials["01 - Defaulte"]}
              />
              <mesh
                geometry={nodes.Mesh055_1.geometry}
                material={materials["Material #27"]}
              />
            </group>
            <group
              position={[-756.667, 5388.273, 990.273]}
              rotation={[-3.012, 0.392, 3.064]}
              scale={1.919}
            >
              <mesh
                geometry={nodes.Mesh056.geometry}
                material={materials["01 - Defaulte"]}
              />
              <mesh
                geometry={nodes.Mesh056_1.geometry}
                material={materials["Material #27"]}
              />
            </group>
            <group
              position={[-169.404, 5419.84, 515.624]}
              rotation={[0, -1.366, 0]}
              scale={1.919}
            >
              <mesh
                geometry={nodes.Mesh057.geometry}
                material={materials["01 - Defaulte"]}
              />
              <mesh
                geometry={nodes.Mesh057_1.geometry}
                material={materials["Material #27"]}
              />
            </group>
            <mesh
              geometry={nodes.Rose059.geometry}
              material={materials["Material #28"]}
              position={[-785.086, 2747.772, -5107.167]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <group
              position={[-961.743, 5451.984, 531.532]}
              rotation={[0.298, 1.401, -0.204]}
              scale={[2.108, 1.582, 1.59]}
            >
              <mesh
                geometry={nodes.Mesh059.geometry}
                material={materials["01 - Defaulte"]}
              />
              <mesh
                geometry={nodes.Mesh059_1.geometry}
                material={materials["Material #27"]}
              />
            </group>
            <mesh
              geometry={nodes.Rose061.geometry}
              material={materials["Material #28"]}
              position={[-917.481, 1804.102, -5103.727]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              geometry={nodes.Rose062.geometry}
              material={materials["Material #27"]}
              position={[1503.286, 4069.196, 2639.297]}
              rotation={[-3.032, -0.484, -2.893]}
              scale={[1.713, 1.437, 1.419]}
            />
            <mesh
              geometry={nodes.Rose063.geometry}
              material={materials["Material #27"]}
              position={[1370.833, 4026.354, 1394.18]}
              rotation={[0, -1.058, 0]}
              scale={[1.115, 1.099, 1.269]}
            />
            <mesh
              geometry={nodes.Rose064.geometry}
              material={materials["Material #27"]}
              position={[-1590.154, 1226.959, -1174.162]}
              rotation={[0.508, 0.597, -0.702]}
              scale={[1.422, 1.193, 1.178]}
            />
            <mesh
              geometry={nodes.Rose065.geometry}
              material={materials["Material #27"]}
              position={[-292.022, 1156.8, -2463.265]}
              scale={[1.287, 1.177, 1.177]}
            />
            <mesh
              geometry={nodes.Rose066.geometry}
              material={materials["Material #27"]}
              position={[798.455, 1156.8, -2421.856]}
              rotation={[-0.14, -0.806, 0.096]}
              scale={[1.422, 1.193, 1.178]}
            />
          </group>
          <group
            position={[-103.97, 150.844, -86.5]}
            rotation={[Math.PI, 1.213, 3.056]}
            scale={0.036}
          >
            <group position={[-1162.063, 6350.907, 1156.612]}>
              <mesh
                geometry={nodes.Rose068.geometry}
                material={materials["Material #25"]}
                position={[163.665, 550.231, -224.392]}
                rotation={[1.625, -0.042, 1.097]}
                scale={[0.433, 0.445, 0.457]}
              />
              <mesh
                geometry={nodes.Rose069.geometry}
                material={materials["Material #25"]}
                position={[-6.098, -74.615, -523.9]}
                rotation={[Math.PI / 2, 0, 0.013]}
              />
              <mesh
                geometry={nodes.Rose070.geometry}
                material={materials["Material #25"]}
                position={[-55.885, 676.685, -185.153]}
                rotation={[1.619, -0.096, -1.678]}
                scale={[0.204, 0.197, 0.334]}
              />
              <mesh
                geometry={nodes.Rose071.geometry}
                material={materials["Material #25"]}
                position={[5.405, 684.164, -243.13]}
                rotation={[1.631, -0.013, -0.406]}
                scale={[0.197, 0.204, 0.334]}
              />
              <mesh
                geometry={nodes.Rose072.geometry}
                material={materials["Material #25"]}
                position={[54.513, 680.629, -100.433]}
                rotation={[1.624, 0.073, 2.702]}
                scale={[0.24, 0.246, 0.331]}
              />
              <mesh
                geometry={nodes.Rose073.geometry}
                material={materials["Material #25"]}
                position={[88.067, 45.795, -468.936]}
                rotation={[Math.PI / 2, -0.083, 0.194]}
                scale={[0.888, 0.888, 1.126]}
              />
              <mesh
                geometry={nodes.Rose074.geometry}
                material={materials["Material #25"]}
                position={[249.973, 32.368, 18.365]}
                rotation={[1.483, 0.046, 2.073]}
                scale={[0.732, 0.735, 1.138]}
              />
              <mesh
                geometry={nodes.Rose075.geometry}
                material={materials["Material #25"]}
                position={[-56.811, 57.812, 55.954]}
                rotation={[1.518, -0.022, -2.918]}
                scale={[0.732, 0.735, 1.138]}
              />
              <mesh
                geometry={nodes.Rose076.geometry}
                material={materials["Material #25"]}
                position={[-400.356, -53.198, 13.078]}
                rotation={[Math.PI / 2, 0, -1.643]}
              />
              <mesh
                geometry={nodes.Rose077.geometry}
                material={materials["Material #25"]}
                position={[-91.245, 555.099, -125.856]}
                rotation={[1.559, -0.045, -2.015]}
                scale={[0.357, 0.368, 0.461]}
              />
              <mesh
                geometry={nodes.Rose078.geometry}
                material={materials["Material #25"]}
                position={[17.83, 544.787, -18.868]}
                rotation={[1.496, -0.034, 2.995]}
                scale={[0.369, 0.356, 0.462]}
              />
              <mesh
                geometry={nodes.Rose079.geometry}
                material={materials["Material #25"]}
                position={[-64.297, -193.598, 418.096]}
                rotation={[1.732, 0.03, -3.103]}
              />
              <mesh
                geometry={nodes.Rose080.geometry}
                material={materials["Material #25"]}
                position={[302.288, -53.198, 203.359]}
                rotation={[Math.PI / 2, 0, 2.535]}
              />
            </group>
            <mesh
              geometry={nodes.Rose081.geometry}
              material={materials["Material #27"]}
              position={[317.212, 2995.148, -345.494]}
              rotation={[-3.046, 1.221, -0.771]}
              scale={[-1.422, -1.193, -1.178]}
            />
            <group position={[-1188.657, 5416.233, 708.488]} scale={1.919}>
              <mesh
                geometry={nodes.Mesh080.geometry}
                material={materials["01 - Defaulte"]}
              />
              <mesh
                geometry={nodes.Mesh080_1.geometry}
                material={materials["Material #27"]}
              />
            </group>
            <mesh
              geometry={nodes.Rose083.geometry}
              material={materials["Material #28"]}
              position={[-974.375, 9042.52, -2050.311]}
              rotation={[2.471, -0.448, 0]}
            />
            <mesh
              geometry={nodes.Rose084.geometry}
              material={materials["Material #28"]}
              position={[1354.133, 2838.358, -2963.773]}
              rotation={[-1.963, 0.271, -0.574]}
              scale={-0.764}
            />
            <mesh
              geometry={nodes.Rose085.geometry}
              material={materials["Material #28"]}
              position={[-1506.909, 1800.495, -4555.457]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              geometry={nodes.Rose086.geometry}
              material={materials["Material #27"]}
              position={[-1027.104, 3304.642, -442.665]}
              rotation={[-2.584, -1.164, 0.77]}
              scale={[-1.422, -1.193, -1.178]}
            />
            <mesh
              geometry={nodes.Rose087.geometry}
              material={materials["Material #27"]}
              position={[-981.049, 2365.194, -2622.507]}
              rotation={[2.7, -0.262, 0.448]}
              scale={[-1.422, -1.193, -1.178]}
            />
            <mesh
              geometry={nodes.Rose088.geometry}
              material={materials["Material #27"]}
              position={[-77.102, 2346.362, -2011.46]}
              rotation={[2.579, 0.551, 0.319]}
              scale={[-1.287, -1.177, -1.177]}
            />
            <mesh
              geometry={nodes.Rose089.geometry}
              material={materials["Material #27"]}
              position={[1660.63, 3094.828, 2916.803]}
              rotation={[-1.925, -0.389, -2.41]}
              scale={[1.713, 1.437, 1.419]}
            />
            <mesh
              geometry={nodes.Rose090.geometry}
              material={materials["Material #27"]}
              position={[1522.695, 4082.356, 2158.214]}
              rotation={[0.244, -0.903, -0.776]}
              scale={[1.115, 1.099, 1.269]}
            />
            <mesh
              geometry={nodes.Rose091.geometry}
              material={materials["Material #27"]}
              position={[807.79, 3968.769, 2994.59]}
              rotation={[-2.937, 0.481, -2.72]}
              scale={[1.145, 1.099, 1.269]}
            />
            <mesh
              geometry={nodes.Rose092.geometry}
              material={materials["Material #28"]}
              position={[-1697.602, 284.482, 1474.569]}
              rotation={[1.273, 1.347, 0.197]}
              scale={[0.971, 1.179, 0.361]}
            />
            <group
              position={[-1551.172, 5448.378, 1079.8]}
              rotation={[0.298, 1.401, -0.204]}
              scale={[2.108, 1.582, 1.59]}
            >
              <mesh
                geometry={nodes.Mesh091.geometry}
                material={materials["01 - Defaulte"]}
              />
              <mesh
                geometry={nodes.Mesh091_1.geometry}
                material={materials["Material #27"]}
              />
            </group>
            <mesh
              geometry={nodes.Rose094.geometry}
              material={materials["Material #28"]}
              position={[-1475.4, 2562.384, 1324.644]}
              rotation={[0, -0.955, 1.476]}
              scale={[0.971, 1.179, 0.361]}
            />
            <group
              position={[-758.833, 5416.232, 1063.891]}
              rotation={[0, -1.366, 0]}
              scale={1.919}
            >
              <mesh
                geometry={nodes.Mesh093.geometry}
                material={materials["01 - Defaulte"]}
              />
              <mesh
                geometry={nodes.Mesh093_1.geometry}
                material={materials["Material #27"]}
              />
            </group>
            <group
              position={[-1346.096, 5384.664, 1538.541]}
              rotation={[-3.012, 0.392, 3.064]}
              scale={1.919}
            >
              <mesh
                geometry={nodes.Mesh094.geometry}
                material={materials["01 - Defaulte"]}
              />
              <mesh
                geometry={nodes.Mesh094_1.geometry}
                material={materials["Material #27"]}
              />
            </group>
          </group>
          <group
            position={[29.131, 147.269, 28.448]}
            rotation={[-0.088, -0.744, -0.134]}
            scale={[0.036, 0.04, 0.036]}
          >
            <group position={[-558.925, 6343.984, 152.118]}>
              <mesh
                geometry={nodes.Rose131.geometry}
                material={materials["Material #25"]}
                position={[150.683, 494.085, 83.879]}
                rotation={[1.621, 0.023, 2.196]}
                scale={[0.433, 0.445, 0.367]}
              />
              <mesh
                geometry={nodes.Rose132.geometry}
                material={materials["Material #25"]}
                position={[95.701, 601.337, -65.701]}
                rotation={[1.602, 0.038, 0.694]}
                scale={[0.197, 0.203, 0.268]}
              />
              <mesh
                geometry={nodes.Rose133.geometry}
                material={materials["Material #25"]}
                position={[-9.274, 598.512, 42.719]}
                rotation={[1.538, 0.064, -2.477]}
                scale={[0.239, 0.246, 0.265]}
              />
              <mesh
                geometry={nodes.Rose134.geometry}
                material={materials["Material #25"]}
                position={[-98.607, 489.727, 46.96]}
                rotation={[1.568, -0.066, -2.186]}
                scale={[0.369, 0.356, 0.37]}
              />
              <mesh
                geometry={nodes.Rose135.geometry}
                material={materials["Material #25"]}
                position={[-52.631, 497.988, -98.744]}
                rotation={[1.599, -0.025, -0.913]}
                scale={[0.357, 0.368, 0.369]}
              />
              <mesh
                geometry={nodes.Rose136.geometry}
                material={materials["Material #25"]}
                position={[334.455, 90.143, -94.29]}
                rotation={[1.534, -0.353, 1.278]}
                scale={[0.887, 0.864, 0.941]}
              />
              <mesh
                geometry={nodes.Rose137.geometry}
                material={materials["Material #25"]}
                position={[-26.646, 79.386, 270.789]}
                rotation={[1.639, -0.042, -3.105]}
                scale={[0.732, 0.734, 0.912]}
              />
              <mesh
                geometry={nodes.Rose138.geometry}
                material={materials["Material #25"]}
                position={[-199.123, 99.763, 14.308]}
                rotation={[1.568, -0.046, -1.816]}
                scale={[0.732, 0.735, 0.911]}
              />
              <mesh
                geometry={nodes.Rose139.geometry}
                material={materials["Material #25"]}
                position={[16.249, 595.349, -94.08]}
                rotation={[1.657, -0.001, -0.578]}
                scale={[0.204, 0.197, 0.268]}
              />
              <mesh
                geometry={nodes.Rose140.geometry}
                material={materials["Material #25"]}
                position={[-60.053, -307.411, 634.767]}
                rotation={[1.968, -0.006, -2.872]}
                scale={[1.285, 1.001, 0.801]}
              />
              <mesh
                geometry={nodes.Rose141.geometry}
                material={materials["Material #25"]}
                position={[-525.372, -215.658, 171.676]}
                rotation={[1.798, 0.503, -2.063]}
              />
              <mesh
                geometry={nodes.Rose142.geometry}
                material={materials["Material #25"]}
                position={[704.463, -116.287, -306.002]}
                rotation={[1.49, -0.157, 1.094]}
              />
              <mesh
                geometry={nodes.Rose143.geometry}
                material={materials["Material #25"]}
                position={[573.82, -96.674, 276.127]}
                rotation={[1.687, -0.367, 1.885]}
              />
              <mesh
                geometry={nodes.Rose144.geometry}
                material={materials["Material #25"]}
                position={[-314.686, -88.309, -592.904]}
                rotation={[1.272, 0.093, -0.427]}
                scale={[1.287, 1, 1]}
              />
              <mesh
                geometry={nodes.Rose145.geometry}
                material={materials["Material #25"]}
                position={[340.803, -96.675, -203.137]}
                rotation={[1.394, -0.343, 1.083]}
              />
              <mesh
                geometry={nodes.Rose146.geometry}
                material={materials["Material #25"]}
                position={[-316.514, -75.256, -311.391]}
                rotation={[1.237, 0.195, -0.509]}
              />
              <mesh
                geometry={nodes.Rose147.geometry}
                material={materials["Material #25"]}
                position={[-167.876, -75.258, 401.225]}
                rotation={[1.913, 0.179, -2.679]}
              />
            </group>
            <group position={[-495.775, 5557.756, -308.336]} scale={1.919}>
              <mesh
                geometry={nodes.Mesh145.geometry}
                material={materials["01 - Defaulte"]}
              />
              <mesh
                geometry={nodes.Mesh145_1.geometry}
                material={materials["Material #27"]}
              />
            </group>
            <group
              position={[-65.951, 5557.755, 47.067]}
              rotation={[0, -1.366, 0]}
              scale={1.919}
            >
              <mesh
                geometry={nodes.Mesh146.geometry}
                material={materials["01 - Defaulte"]}
              />
              <mesh
                geometry={nodes.Mesh146_1.geometry}
                material={materials["Material #27"]}
              />
            </group>
            <group
              position={[-653.215, 5526.191, 521.717]}
              rotation={[-3.012, 0.392, 3.064]}
              scale={1.919}
            >
              <mesh
                geometry={nodes.Mesh147.geometry}
                material={materials["01 - Defaulte"]}
              />
              <mesh
                geometry={nodes.Mesh147_1.geometry}
                material={materials["Material #27"]}
              />
            </group>
            <mesh
              geometry={nodes.Rose151.geometry}
              material={materials["Material #27"]}
              position={[-447.218, 644.028, 38.819]}
              rotation={[-2.696, -1.224, 2.764]}
              scale={[1.422, 1.193, 1.178]}
            />
            <mesh
              geometry={nodes.Rose152.geometry}
              material={materials["Material #28"]}
              position={[-782.518, 2703.908, 307.821]}
              rotation={[0, -0.955, 1.476]}
              scale={[0.971, 1.179, 0.361]}
            />
            <mesh
              geometry={nodes.Rose153.geometry}
              material={materials["Material #28"]}
              position={[-1004.722, 426.005, 457.745]}
              rotation={[1.273, 1.347, 0.197]}
              scale={[0.971, 1.179, 0.361]}
            />
            <group
              position={[-858.292, 5589.9, 62.976]}
              rotation={[0.298, 1.401, -0.204]}
              scale={[2.108, 1.582, 1.59]}
            >
              <mesh
                geometry={nodes.Mesh151.geometry}
                material={materials["01 - Defaulte"]}
              />
              <mesh
                geometry={nodes.Mesh151_1.geometry}
                material={materials["Material #27"]}
              />
            </group>
            <mesh
              geometry={nodes.Rose156.geometry}
              material={materials["Material #28"]}
              position={[-814.029, 1942.019, -5572.281]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              geometry={nodes.Rose157.geometry}
              material={materials["Material #28"]}
              position={[-892.133, 3500.947, -1931.907]}
              rotation={[2.2, 0, 0]}
              scale={0.764}
            />
            <mesh
              geometry={nodes.Rose158.geometry}
              material={materials["Material #27"]}
              position={[-1591.976, 1138.706, -558.874]}
              rotation={[1.164, 0.578, -0.717]}
              scale={[1.422, 1.193, 1.178]}
            />
            <mesh
              geometry={nodes.Rose159.geometry}
              material={materials["Material #27"]}
              position={[-293.844, 1840.98, -1642.165]}
              rotation={[0.63, 0, 0]}
              scale={[1.287, 1.177, 1.177]}
            />
            <mesh
              geometry={nodes.Rose163.geometry}
              material={materials["Material #27"]}
              position={[796.631, 1816.6, -1608.695]}
              rotation={[0.476, -0.807, 0.086]}
              scale={[1.422, 1.193, 1.178]}
            />
            <mesh
              geometry={nodes.Rose234.geometry}
              material={materials["Material #27"]}
              position={[1505.111, 3452.639, 2190.191]}
              rotation={[-3.032, -0.484, -2.893]}
              scale={[1.713, 1.437, 1.419]}
            />
            <mesh
              geometry={nodes.Rose235.geometry}
              material={materials["Material #27"]}
              position={[1372.657, 3409.796, 945.074]}
              rotation={[0, -1.058, 0]}
              scale={[1.115, 1.099, 1.269]}
            />
            <mesh
              geometry={nodes.Rose236.geometry}
              material={materials["Material #28"]}
              position={[-783.262, 2131.214, -5556.273]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              geometry={nodes.Rose237.geometry}
              material={materials["Material #27"]}
              position={[474.848, 3627.05, 1553.56]}
              rotation={[2.712, 0.725, 3.102]}
              scale={[1.145, 1.099, 1.269]}
            />
          </group>
          <group
            position={[-92.641, 132.582, 70.61]}
            rotation={[-3.013, -0.114, -3.109]}
            scale={0.036}
          >
            <group position={[-1162.063, 6350.91, 1156.612]}>
              <mesh
                geometry={nodes.Rose164.geometry}
                material={materials["Material #25"]}
                position={[-400.357, -53.202, 13.078]}
                rotation={[Math.PI / 2, 0, -1.643]}
              />
              <mesh
                geometry={nodes.Rose165.geometry}
                material={materials["Material #25"]}
                position={[163.665, 550.226, -224.392]}
                rotation={[1.625, -0.042, 1.097]}
                scale={[0.433, 0.445, 0.457]}
              />
              <mesh
                geometry={nodes.Rose166.geometry}
                material={materials["Material #25"]}
                position={[-6.099, -74.617, -523.899]}
                rotation={[Math.PI / 2, 0, 0.013]}
              />
              <mesh
                geometry={nodes.Rose167.geometry}
                material={materials["Material #25"]}
                position={[-55.885, 676.683, -185.153]}
                rotation={[1.619, -0.096, -1.678]}
                scale={[0.204, 0.197, 0.334]}
              />
              <mesh
                geometry={nodes.Rose168.geometry}
                material={materials["Material #25"]}
                position={[5.405, 684.159, -243.131]}
                rotation={[1.631, -0.013, -0.406]}
                scale={[0.197, 0.204, 0.334]}
              />
              <mesh
                geometry={nodes.Rose169.geometry}
                material={materials["Material #25"]}
                position={[54.513, 680.63, -100.433]}
                rotation={[1.624, 0.073, 2.702]}
                scale={[0.24, 0.246, 0.331]}
              />
              <mesh
                geometry={nodes.Rose170.geometry}
                material={materials["Material #25"]}
                position={[88.066, 45.794, -468.936]}
                rotation={[Math.PI / 2, -0.083, 0.194]}
                scale={[0.888, 0.888, 1.126]}
              />
              <mesh
                geometry={nodes.Rose171.geometry}
                material={materials["Material #25"]}
                position={[249.973, 32.364, 18.364]}
                rotation={[1.483, 0.046, 2.073]}
                scale={[0.732, 0.735, 1.138]}
              />
              <mesh
                geometry={nodes.Rose172.geometry}
                material={materials["Material #25"]}
                position={[-56.812, 57.809, 55.954]}
                rotation={[1.518, -0.022, -2.918]}
                scale={[0.732, 0.735, 1.138]}
              />
              <mesh
                geometry={nodes.Rose173.geometry}
                material={materials["Material #25"]}
                position={[-91.245, 555.095, -125.856]}
                rotation={[1.559, -0.045, -2.015]}
                scale={[0.357, 0.368, 0.461]}
              />
              <mesh
                geometry={nodes.Rose174.geometry}
                material={materials["Material #25"]}
                position={[17.83, 544.783, -18.868]}
                rotation={[1.496, -0.034, 2.995]}
                scale={[0.369, 0.356, 0.462]}
              />
              <mesh
                geometry={nodes.Rose175.geometry}
                material={materials["Material #25"]}
                position={[-64.297, -193.602, 418.096]}
                rotation={[1.732, 0.03, -3.103]}
              />
              <mesh
                geometry={nodes.Rose176.geometry}
                material={materials["Material #25"]}
                position={[302.288, -53.202, 203.358]}
                rotation={[Math.PI / 2, 0, 2.535]}
              />
            </group>
            <mesh
              geometry={nodes.Rose177.geometry}
              material={materials["Material #28"]}
              position={[-1697.602, 284.481, 1474.569]}
              rotation={[1.273, 1.347, 0.197]}
              scale={[0.971, 1.179, 0.361]}
            />
            <group
              position={[-1551.172, 5448.378, 1079.8]}
              rotation={[0.298, 1.401, -0.204]}
              scale={[2.108, 1.582, 1.59]}
            >
              <mesh
                geometry={nodes.Mesh175.geometry}
                material={materials["01 - Defaulte"]}
              />
              <mesh
                geometry={nodes.Mesh175_1.geometry}
                material={materials["Material #27"]}
              />
            </group>
            <mesh
              geometry={nodes.Rose179.geometry}
              material={materials["Material #28"]}
              position={[-1475.4, 2562.384, 1324.645]}
              rotation={[0, -0.955, 1.476]}
              scale={[0.971, 1.179, 0.361]}
            />
            <group
              position={[-758.833, 5416.233, 1063.892]}
              rotation={[0, -1.366, 0]}
              scale={1.919}
            >
              <mesh
                geometry={nodes.Mesh177.geometry}
                material={materials["01 - Defaulte"]}
              />
              <mesh
                geometry={nodes.Mesh177_1.geometry}
                material={materials["Material #27"]}
              />
            </group>
            <group
              position={[-1346.096, 5384.666, 1538.542]}
              rotation={[-3.012, 0.392, 3.064]}
              scale={1.919}
            >
              <mesh
                geometry={nodes.Mesh178.geometry}
                material={materials["01 - Defaulte"]}
              />
              <mesh
                geometry={nodes.Mesh178_1.geometry}
                material={materials["Material #27"]}
              />
            </group>
            <group position={[-1188.657, 5416.233, 708.488]} scale={1.919}>
              <mesh
                geometry={nodes.Mesh180.geometry}
                material={materials["01 - Defaulte"]}
              />
              <mesh
                geometry={nodes.Mesh180_1.geometry}
                material={materials["Material #27"]}
              />
            </group>
            <mesh
              geometry={nodes.Rose184.geometry}
              material={materials["Material #28"]}
              position={[-974.375, 9042.52, -2050.313]}
              rotation={[2.471, -0.448, 0]}
            />
            <mesh
              geometry={nodes.Rose186.geometry}
              material={materials["Material #28"]}
              position={[-1506.909, 1800.494, -4555.458]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              geometry={nodes.Rose189.geometry}
              material={materials["Material #27"]}
              position={[1660.63, 3094.826, 2916.803]}
              rotation={[-1.925, -0.389, -2.41]}
              scale={[1.713, 1.437, 1.419]}
            />
            <mesh
              geometry={nodes.Rose190.geometry}
              material={materials["Material #27"]}
              position={[1522.696, 4082.357, 2158.214]}
              rotation={[0.244, -0.903, -0.776]}
              scale={[1.115, 1.099, 1.269]}
            />
            <mesh
              geometry={nodes.Rose191.geometry}
              material={materials["Material #27"]}
              position={[807.791, 3968.769, 2994.59]}
              rotation={[-2.937, 0.481, -2.72]}
              scale={[1.145, 1.099, 1.269]}
            />
            <mesh
              geometry={nodes.Rose230.geometry}
              material={materials["Material #27"]}
              position={[-77.101, 2346.362, -2011.461]}
              rotation={[2.579, 0.551, 0.319]}
              scale={[-1.287, -1.177, -1.177]}
            />
            <mesh
              geometry={nodes.Rose231.geometry}
              material={materials["Material #27"]}
              position={[-1027.104, 3304.643, -442.666]}
              rotation={[-2.584, -1.164, 0.77]}
              scale={[-1.422, -1.193, -1.178]}
            />
            <mesh
              geometry={nodes.Rose232.geometry}
              material={materials["Material #28"]}
              position={[1354.134, 2838.357, -2963.775]}
              rotation={[-1.963, 0.271, -0.574]}
              scale={-0.764}
            />
            <mesh
              geometry={nodes.Rose233.geometry}
              material={materials["Material #27"]}
              position={[317.212, 2995.147, -345.494]}
              rotation={[-3.046, 1.221, -0.771]}
              scale={[-1.422, -1.193, -1.178]}
            />
            <mesh
              geometry={nodes.Rose266.geometry}
              material={materials["Material #27"]}
              position={[-981.05, 2365.194, -2622.508]}
              rotation={[2.7, -0.262, 0.448]}
              scale={[-1.422, -1.193, -1.178]}
            />
          </group>
          <group
            position={[16.653, 107.434, 55.236]}
            rotation={[-0.085, -1.047, -0.3]}
            scale={[0.036, 0.04, 0.036]}
          >
            <group position={[-558.926, 6343.983, 152.118]}>
              <mesh
                geometry={nodes.Rose207.geometry}
                material={materials["Material #25"]}
                position={[340.802, -96.676, -203.136]}
                rotation={[1.394, -0.343, 1.083]}
              />
              <mesh
                geometry={nodes.Rose208.geometry}
                material={materials["Material #25"]}
                position={[-316.515, -75.256, -311.391]}
                rotation={[1.237, 0.195, -0.509]}
              />
              <mesh
                geometry={nodes.Rose209.geometry}
                material={materials["Material #25"]}
                position={[573.819, -96.674, 276.127]}
                rotation={[1.687, -0.367, 1.885]}
              />
              <mesh
                geometry={nodes.Rose211.geometry}
                material={materials["Material #25"]}
                position={[704.463, -116.287, -306.001]}
                rotation={[1.49, -0.157, 1.094]}
              />
              <mesh
                geometry={nodes.Rose212.geometry}
                material={materials["Material #25"]}
                position={[-525.373, -215.657, 171.676]}
                rotation={[1.798, 0.503, -2.063]}
              />
              <mesh
                geometry={nodes.Rose213.geometry}
                material={materials["Material #25"]}
                position={[-60.052, -307.412, 634.767]}
                rotation={[1.968, -0.006, -2.872]}
                scale={[1.285, 1.001, 0.801]}
              />
              <mesh
                geometry={nodes.Rose214.geometry}
                material={materials["Material #25"]}
                position={[16.249, 595.35, -94.08]}
                rotation={[1.657, -0.001, -0.578]}
                scale={[0.204, 0.197, 0.268]}
              />
              <mesh
                geometry={nodes.Rose215.geometry}
                material={materials["Material #25"]}
                position={[-199.124, 99.763, 14.309]}
                rotation={[1.568, -0.046, -1.816]}
                scale={[0.732, 0.735, 0.911]}
              />
              <mesh
                geometry={nodes.Rose219.geometry}
                material={materials["Material #25"]}
                position={[-26.646, 79.387, 270.789]}
                rotation={[1.639, -0.042, -3.105]}
                scale={[0.732, 0.734, 0.912]}
              />
              <mesh
                geometry={nodes.Rose220.geometry}
                material={materials["Material #25"]}
                position={[334.455, 90.143, -94.291]}
                rotation={[1.534, -0.353, 1.278]}
                scale={[0.887, 0.864, 0.941]}
              />
              <mesh
                geometry={nodes.Rose224.geometry}
                material={materials["Material #25"]}
                position={[-52.632, 497.988, -98.744]}
                rotation={[1.599, -0.025, -0.913]}
                scale={[0.357, 0.368, 0.369]}
              />
              <mesh
                geometry={nodes.Rose225.geometry}
                material={materials["Material #25"]}
                position={[-98.608, 489.727, 46.96]}
                rotation={[1.568, -0.066, -2.186]}
                scale={[0.369, 0.356, 0.37]}
              />
              <mesh
                geometry={nodes.Rose226.geometry}
                material={materials["Material #25"]}
                position={[-9.274, 598.511, 42.719]}
                rotation={[1.538, 0.064, -2.477]}
                scale={[0.239, 0.246, 0.265]}
              />
              <mesh
                geometry={nodes.Rose227.geometry}
                material={materials["Material #25"]}
                position={[95.701, 601.336, -65.7]}
                rotation={[1.602, 0.038, 0.694]}
                scale={[0.197, 0.203, 0.268]}
              />
              <mesh
                geometry={nodes.Rose228.geometry}
                material={materials["Material #25"]}
                position={[150.683, 494.085, 83.879]}
                rotation={[1.621, 0.023, 2.196]}
                scale={[0.433, 0.445, 0.367]}
              />
              <mesh
                geometry={nodes.Rose229.geometry}
                material={materials["Material #25"]}
                position={[-167.875, -75.257, 401.225]}
                rotation={[1.913, 0.179, -2.679]}
              />
              <mesh
                geometry={nodes.Rose256.geometry}
                material={materials["Material #25"]}
                position={[-314.686, -88.311, -592.903]}
                rotation={[1.272, 0.093, -0.427]}
                scale={[1.287, 1, 1]}
              />
            </group>
            <mesh
              geometry={nodes.Rose198.geometry}
              material={materials["Material #27"]}
              position={[-293.845, 1840.979, -1642.164]}
              rotation={[0.63, 0, 0]}
              scale={[1.287, 1.177, 1.177]}
            />
            <mesh
              geometry={nodes.Rose199.geometry}
              material={materials["Material #27"]}
              position={[-1591.977, 1138.705, -558.873]}
              rotation={[1.164, 0.578, -0.717]}
              scale={[1.422, 1.193, 1.178]}
            />
            <group
              position={[-858.293, 5589.9, 62.976]}
              rotation={[0.298, 1.401, -0.204]}
              scale={[2.108, 1.582, 1.59]}
            >
              <mesh
                geometry={nodes.Mesh213.geometry}
                material={materials["01 - Defaulte"]}
              />
              <mesh
                geometry={nodes.Mesh213_1.geometry}
                material={materials["Material #27"]}
              />
            </group>
            <mesh
              geometry={nodes.Rose201.geometry}
              material={materials["Material #28"]}
              position={[-1004.722, 426.005, 457.745]}
              rotation={[1.274, 1.347, 0.197]}
              scale={[0.971, 1.179, 0.361]}
            />
            <mesh
              geometry={nodes.Rose202.geometry}
              material={materials["Material #28"]}
              position={[-782.519, 2703.907, 307.821]}
              rotation={[0, -0.955, 1.476]}
              scale={[0.971, 1.179, 0.361]}
            />
            <mesh
              geometry={nodes.Rose203.geometry}
              material={materials["Material #27"]}
              position={[-447.219, 644.028, 38.82]}
              rotation={[-2.696, -1.224, 2.764]}
              scale={[1.422, 1.193, 1.178]}
            />
            <group
              position={[-653.215, 5526.188, 521.718]}
              rotation={[-3.012, 0.392, 3.064]}
              scale={1.919}
            >
              <mesh
                geometry={nodes.Mesh209.geometry}
                material={materials["01 - Defaulte"]}
              />
              <mesh
                geometry={nodes.Mesh209_1.geometry}
                material={materials["Material #27"]}
              />
            </group>
            <group position={[-495.775, 5557.755, -308.336]} scale={1.919}>
              <mesh
                geometry={nodes.Mesh207.geometry}
                material={materials["01 - Defaulte"]}
              />
              <mesh
                geometry={nodes.Mesh207_1.geometry}
                material={materials["Material #27"]}
              />
            </group>
            <group
              position={[-65.953, 5557.756, 47.068]}
              rotation={[0, -1.366, 0]}
              scale={1.919}
            >
              <mesh
                geometry={nodes.Mesh208.geometry}
                material={materials["01 - Defaulte"]}
              />
              <mesh
                geometry={nodes.Mesh208_1.geometry}
                material={materials["Material #27"]}
              />
            </group>
            <mesh
              geometry={nodes.Rose216.geometry}
              material={materials["Material #27"]}
              position={[474.848, 3627.048, 1553.561]}
              rotation={[2.712, 0.725, 3.102]}
              scale={[1.145, 1.099, 1.269]}
            />
            <mesh
              geometry={nodes.Rose217.geometry}
              material={materials["Material #28"]}
              position={[-814.031, 1942.018, -5572.28]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              geometry={nodes.Rose218.geometry}
              material={materials["Material #28"]}
              position={[-892.134, 3500.947, -1931.906]}
              rotation={[2.2, 0, 0]}
              scale={0.764}
            />
            <mesh
              geometry={nodes.Rose221.geometry}
              material={materials["Material #28"]}
              position={[-783.264, 2131.213, -5556.271]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              geometry={nodes.Rose222.geometry}
              material={materials["Material #27"]}
              position={[1372.656, 3409.795, 945.074]}
              rotation={[0, -1.058, 0]}
              scale={[1.115, 1.099, 1.269]}
            />
            <mesh
              geometry={nodes.Rose223.geometry}
              material={materials["Material #27"]}
              position={[796.63, 1816.601, -1608.694]}
              rotation={[0.476, -0.807, 0.086]}
              scale={[1.422, 1.193, 1.178]}
            />
            <mesh
              geometry={nodes.Rose269.geometry}
              material={materials["Material #27"]}
              position={[1505.11, 3452.637, 2190.192]}
              rotation={[-3.032, -0.484, -2.893]}
              scale={[1.713, 1.437, 1.419]}
            />
          </group>
          <group
            position={[68.627, 116.303, 35.313]}
            rotation={[-0.481, -1, -0.564]}
            scale={0.036}
          >
            <group position={[-620.735, 6321.925, 580.486]}>
              <mesh
                geometry={nodes.Rose016.geometry}
                material={materials["Material #25"]}
                position={[267.03, -27.819, 356.612]}
                rotation={[Math.PI / 2, 0, 2.535]}
              />
              <mesh
                geometry={nodes.Rose025.geometry}
                material={materials["Material #25"]}
                position={[-435.616, -27.82, 166.331]}
                rotation={[Math.PI / 2, 0, -1.643]}
              />
              <mesh
                geometry={nodes.Rose129.geometry}
                material={materials["Material #25"]}
                position={[-41.357, -49.236, -370.646]}
                rotation={[Math.PI / 2, 0, 0.013]}
              />
              <mesh
                geometry={nodes.Rose155.geometry}
                material={materials["Material #25"]}
                position={[-92.071, 83.189, 209.208]}
                rotation={[1.518, -0.022, -2.918]}
                scale={[0.732, 0.735, 1.138]}
              />
              <mesh
                geometry={nodes.Rose160.geometry}
                material={materials["Material #25"]}
                position={[31.664, -190.548, -694.784]}
                rotation={[Math.PI / 2, 0, 0]}
              />
              <mesh
                geometry={nodes.Rose161.geometry}
                material={materials["Material #25"]}
                position={[-99.556, -168.22, 571.35]}
                rotation={[1.732, 0.03, -3.103]}
              />
              <mesh
                geometry={nodes.Rose162.geometry}
                material={materials["Material #25"]}
                position={[524.077, -421.57, 366.273]}
                rotation={[1.685, -0.285, 2.32]}
                scale={[1.285, 1.001, 0.801]}
              />
              <mesh
                geometry={nodes.Rose182.geometry}
                material={materials["Material #25"]}
                position={[491.468, -49.236, -361.293]}
                rotation={[Math.PI / 2, 0, 0.762]}
              />
              <mesh
                geometry={nodes.Rose185.geometry}
                material={materials["Material #25"]}
                position={[-657.799, -190.548, -130.324]}
                rotation={[Math.PI / 2, 0.137, -1.203]}
                scale={[1.287, 1, 1]}
              />
              <mesh
                geometry={nodes.Rose187.geometry}
                material={materials["Material #25"]}
                position={[52.808, 71.176, -315.683]}
                rotation={[Math.PI / 2, -0.083, 0.194]}
                scale={[0.888, 0.888, 1.126]}
              />
              <mesh
                geometry={nodes.Rose188.geometry}
                material={materials["Material #25"]}
                position={[-91.144, 702.064, -31.9]}
                rotation={[1.619, -0.096, -1.678]}
                scale={[0.204, 0.197, 0.334]}
              />
              <mesh
                geometry={nodes.Rose192.geometry}
                material={materials["Material #25"]}
                position={[-126.503, 580.478, 27.397]}
                rotation={[1.559, -0.045, -2.015]}
                scale={[0.357, 0.368, 0.461]}
              />
              <mesh
                geometry={nodes.Rose193.geometry}
                material={materials["Material #25"]}
                position={[-17.431, 570.166, 134.385]}
                rotation={[1.496, -0.034, 2.995]}
                scale={[0.369, 0.356, 0.462]}
              />
              <mesh
                geometry={nodes.Rose194.geometry}
                material={materials["Material #25"]}
                position={[19.254, 706.01, 52.822]}
                rotation={[1.624, 0.073, 2.702]}
                scale={[0.24, 0.246, 0.331]}
              />
              <mesh
                geometry={nodes.Rose195.geometry}
                material={materials["Material #25"]}
                position={[-29.854, 709.541, -89.877]}
                rotation={[1.631, -0.013, -0.406]}
                scale={[0.197, 0.204, 0.334]}
              />
              <mesh
                geometry={nodes.Rose196.geometry}
                material={materials["Material #25"]}
                position={[128.406, 575.607, -71.14]}
                rotation={[1.625, -0.042, 1.097]}
                scale={[0.433, 0.445, 0.457]}
              />
              <mesh
                geometry={nodes.Rose197.geometry}
                material={materials["Material #25"]}
                position={[214.715, 57.745, 171.618]}
                rotation={[1.483, 0.046, 2.073]}
                scale={[0.732, 0.735, 1.138]}
              />
            </group>
            <mesh
              geometry={nodes.Rose001.geometry}
              material={materials["Material #27"]}
              position={[-292.021, 1156.798, -2463.264]}
              scale={[1.287, 1.177, 1.177]}
            />
            <mesh
              geometry={nodes.Rose005.geometry}
              material={materials["Material #27"]}
              position={[-1590.154, 1226.957, -1174.162]}
              rotation={[0.508, 0.597, -0.702]}
              scale={[1.422, 1.193, 1.178]}
            />
            <mesh
              geometry={nodes.Rose006.geometry}
              material={materials["Material #28"]}
              position={[-917.48, 1804.101, -5103.725]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <group
              position={[-961.743, 5451.982, 531.532]}
              rotation={[0.298, 1.401, -0.204]}
              scale={[2.108, 1.582, 1.59]}
            >
              <mesh
                geometry={nodes.Mesh249.geometry}
                material={materials["01 - Defaulte"]}
              />
              <mesh
                geometry={nodes.Mesh249_1.geometry}
                material={materials["Material #27"]}
              />
            </group>
            <group
              position={[-169.404, 5419.838, 515.624]}
              rotation={[0, -1.366, 0]}
              scale={1.919}
            >
              <mesh
                geometry={nodes.Mesh247.geometry}
                material={materials["01 - Defaulte"]}
              />
              <mesh
                geometry={nodes.Mesh247_1.geometry}
                material={materials["Material #27"]}
              />
            </group>
            <group
              position={[-756.668, 5388.27, 990.274]}
              rotation={[-3.012, 0.392, 3.064]}
              scale={1.919}
            >
              <mesh
                geometry={nodes.Mesh246.geometry}
                material={materials["01 - Defaulte"]}
              />
              <mesh
                geometry={nodes.Mesh246_1.geometry}
                material={materials["Material #27"]}
              />
            </group>
            <group position={[-599.226, 5419.837, 160.222]} scale={1.919}>
              <mesh
                geometry={nodes.Mesh245.geometry}
                material={materials["01 - Defaulte"]}
              />
              <mesh
                geometry={nodes.Mesh245_1.geometry}
                material={materials["Material #27"]}
              />
            </group>
            <mesh
              geometry={nodes.Rose012.geometry}
              material={materials["Material #28"]}
              position={[-885.969, 2565.988, 776.379]}
              rotation={[0, -0.955, 1.476]}
              scale={[0.971, 1.179, 0.361]}
            />
            <mesh
              geometry={nodes.Rose013.geometry}
              material={materials["Material #28"]}
              position={[-1108.174, 288.087, 926.3]}
              rotation={[1.274, 1.347, 0.197]}
              scale={[0.971, 1.179, 0.361]}
            />
            <mesh
              geometry={nodes.Rose014.geometry}
              material={materials["Material #28"]}
              position={[-890.31, 2327.961, -3674.801]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.764}
            />
            <mesh
              geometry={nodes.Rose015.geometry}
              material={materials["Material #27"]}
              position={[-445.395, 1179.011, -399.794]}
              rotation={[2.984, -1.228, 2.789]}
              scale={[1.422, 1.193, 1.178]}
            />
            <mesh
              geometry={nodes.Rose206.geometry}
              material={materials["Material #27"]}
              position={[798.455, 1156.798, -2421.855]}
              rotation={[-0.14, -0.806, 0.096]}
              scale={[1.422, 1.193, 1.178]}
            />
            <mesh
              geometry={nodes.Rose242.geometry}
              material={materials["Material #27"]}
              position={[473.025, 4243.606, 2002.666]}
              rotation={[2.712, 0.725, 3.102]}
              scale={[1.145, 1.099, 1.269]}
            />
            <mesh
              geometry={nodes.Rose249.geometry}
              material={materials["Material #28"]}
              position={[-785.085, 2747.771, -5107.167]}
              rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
              geometry={nodes.Rose252.geometry}
              material={materials["Material #27"]}
              position={[1503.286, 4069.195, 2639.297]}
              rotation={[-3.032, -0.484, -2.893]}
              scale={[1.713, 1.437, 1.419]}
            />
            <mesh
              geometry={nodes.Rose253.geometry}
              material={materials["Material #27"]}
              position={[1370.833, 4026.351, 1394.18]}
              rotation={[0, -1.058, 0]}
              scale={[1.115, 1.099, 1.269]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}
