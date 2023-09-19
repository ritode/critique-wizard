import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
export default function Room(props) {
  const roomRef = useRef(null);
  const {nodes, materials} = useGLTF("models/room.glb");
 
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group
          position={[388.469, 117.552, -211.434]}
          rotation={[-Math.PI / 2, 0.148, 0]}
          scale={[2.712, 31.279, 31.279]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.painting_Material010_0.geometry}
            material={materials["Material.010"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.painting_Material011_0.geometry}
            material={materials["Material.011"]}
          />
        </group>
        <group
          position={[366.217, 115.97, -143.771]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={3.789}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.candle_Material013_0.geometry}
            material={materials["Material.013"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.candle_Material008_0.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.candle_Material007_0.geometry}
            material={materials["Material.007"]}
          />
        </group>
        <group
          position={[85.821, 88.279, 64.486]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.flower_leaf2_0.geometry}
            material={materials.leaf2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.flower_leaf1_0.geometry}
            material={materials.leaf1}
          />
        </group>
        <group
          position={[188.831, 243.457, -26.58]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[2.688, 2.688, 23.024]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lighting_Material001_0.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lighting_Material003_0.geometry}
            material={materials["Material.003"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lighting_Material014_0.geometry}
            material={materials["Material.014"]}
          />
        </group>
        <group
          position={[81.651, 59.793, -127.726]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={[25.257, 25.257, 2.667]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.seat_Leather_0.geometry}
            material={materials.Leather}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.seat_Material5_0.geometry}
            material={materials.Material5}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.house_Material009_0.geometry}
          material={materials["Material.009"]}
          position={[0, 151.309, -0.282]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[396.176, 396.176, 150]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cabinet_Material015_0.geometry}
          material={materials["Material.015"]}
          position={[367.527, 300.186, 45.941]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[34.407, 249.171, 3.605]}
          onPointerMove={()=>{console.log("cabinet")}}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.window_Material016_0.geometry}
          material={materials["Material.016"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.table_Material5001_0.geometry}
          material={materials["Material5.001"]}
          position={[83.1, 65.739, 24.667]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[80.747, 80.747, 10.763]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.floor_floor_0.geometry}
          material={materials.floor}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.jar4_Material017_0.geometry}
          material={materials["Material.017"]}
          position={[377.036, 94.34, 219.292]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={7.771}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.jar3_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[383.419, 94.983, 239.01]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={8.337}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.vase_grey001_0.geometry}
          material={materials["grey.001"]}
          position={[85.258, 86.332, 64.115]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={8.337}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.faucet_Material006_0.geometry}
          material={materials["Material.006"]}
          position={[392.071, 95.046, 141.652]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[0.204, 0.204, 1.555]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bowl_grey_0.geometry}
          material={materials.grey}
          position={[372.827, 99.081, 270.913]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[16.524, 16.524, 12.674]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.IKEA_seat_wood__0.geometry}
          material={materials.wood}
          position={[363.595, 31.995, -331.439]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={[17.536, 15.514, 15.514]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.carpet_Carpet__0.geometry}
          material={materials.Carpet}
          position={[81.578, 2.411, 26.536]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[190.768, 245.015, 0.524]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chopping_board1_Material1_0.geometry}
          material={materials.Material1}
          position={[388.318, 97.913, 187.245]}
          rotation={[-1.593, -1.28, -0.023]}
          scale={[1.332, 1.546, 1.332]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chopping_board2_Material2_0.geometry}
          material={materials.Material2}
          position={[391.595, 98.773, 194.446]}
          rotation={[-1.6, -1.347, -0.03]}
          scale={[1.399, 1.586, 1.399]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.jar1_Material3_0.geometry}
          material={materials.Material3}
          position={[375.22, 92.792, -108.769]}
          rotation={[-Math.PI / 2, 0, -1.875]}
          scale={0.898}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.jar2_Material4_0.geometry}
          material={materials.Material4}
          position={[372.586, 97.235, -121.78]}
          rotation={[-Math.PI / 2, 0, -1.247]}
          scale={0.824}
        />
      </group>
    </group>
  );
}
