import * as THREE from 'three'
import React, { useRef } from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useLoader(GLTFLoader, '/test4good.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        material={materials.RGB_255_189_129}
        geometry={nodes.voxel_1440.geometry}
        position={[0, 1120.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_900.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1712.geometry}
        position={[0, 2230.56, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1571.geometry}
        position={[0, 4868.65, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_2042.geometry}
        position={[0, 1861.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1648.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1602.geometry}
        position={[0, 4868.65, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1914.geometry}
        position={[0, -863.63, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_2006.geometry}
        position={[0, 1607.7, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1361.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1949.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1110.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_2144.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_2011.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1667.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_2009.geometry}
        position={[0, 1861.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1807.geometry}
        position={[0, -2860.32, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1598.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1340.geometry}
        position={[0, 1086.68, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1873.geometry}
        position={[0, -4624.13, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1294.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1619.geometry}
        position={[0, 1789.22, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_2133.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1465.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_812.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1389.geometry}
        position={[0, 1789.22, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1065.geometry}
        position={[0, -531.65, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_754.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1435.geometry}
        position={[0, 1120.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_811.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1803.geometry}
        position={[0, -537.64, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_2044.geometry}
        position={[0, 1861.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_2132.geometry}
        position={[0, 3396.92, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1211.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_354.geometry}
        position={[0, 4868.65, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1462.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1478.geometry}
        position={[0, 1789.22, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_2056.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_2179.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1711.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1258.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1508.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1853.geometry}
        position={[0, 4123.16, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1739.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_2100.geometry}
        position={[0, 1607.7, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_353.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_896.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1691.geometry}
        position={[0, 4868.65, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1964.geometry}
        position={[0, 1861.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_946.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1372.geometry}
        position={[0, 1883.82, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_898.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_2182.geometry}
        position={[0, 1789.22, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_710.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1111.geometry}
        position={[0, 1861.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_2053.geometry}
        position={[0, 1861.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1527.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_2134.geometry}
        position={[0, 1120.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1962.geometry}
        position={[0, 1120.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_906.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1663.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1555.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1524.geometry}
        position={[0, 4868.65, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1647.geometry}
        position={[0, 6683.28, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1875.geometry}
        position={[0, 336.86, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_708.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_2008.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1600.geometry}
        position={[0, 1086.68, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_298.geometry}
        position={[0, 4868.65, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1202.geometry}
        position={[0, 4868.65, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1997.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1158.geometry}
        position={[0, 4868.65, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1066.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1249.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_2184.geometry}
        position={[0, 4655.47, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_2099.geometry}
        position={[0, 1789.22, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_2088.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_755.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1916.geometry}
        position={[0, 882.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1965.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1802.geometry}
        position={[0, 2259.54, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1806.geometry}
        position={[0, -244.56, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1112.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1826.geometry}
        position={[0, 829.43, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1950.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1620.geometry}
        position={[0, 1861.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_2041.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1805.geometry}
        position={[0, 1807.64, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1419.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1528.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1251.geometry}
        position={[0, 1120.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1342.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_305.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1644.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1297.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1854.geometry}
        position={[0, -4453.89, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1668.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1896.geometry}
        position={[0, 5955.78, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1556.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1646.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1365.geometry}
        position={[0, 1883.82, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1463.geometry}
        position={[0, 2230.56, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1870.geometry}
        position={[0, 903.39, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1436.geometry}
        position={[0, 2230.56, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_2138.geometry}
        position={[0, 1607.7, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_2054.geometry}
        position={[0, 1086.68, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1738.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1709.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_2087.geometry}
        position={[0, 4655.47, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1387.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1735.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_2005.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1894.geometry}
        position={[0, 4884.43, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1961.geometry}
        position={[0, 1861.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1326.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1575.geometry}
        position={[0, -731.72, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1295.geometry}
        position={[0, 3040.69, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1761.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1856.geometry}
        position={[0, 4542.09, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_2183.geometry}
        position={[0, 1861.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1481.geometry}
        position={[0, 1861.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1689.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1156.geometry}
        position={[0, 4868.65, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1963.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_2055.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1756.geometry}
        position={[0, 1861.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1783.geometry}
        position={[0, -1316.88, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1553.geometry}
        position={[0, 987.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_610.geometry}
        position={[0, 5721.8, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1692.geometry}
        position={[0, 1086.68, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1998.geometry}
        position={[0, 1861.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_2090.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1915.geometry}
        position={[0, 551.25, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1203.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1849.geometry}
        position={[0, 3406.87, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_304.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1616.geometry}
        position={[0, 1789.22, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1959.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1343.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1714.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_2146.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_899.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1920.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1782.geometry}
        position={[0, 1194.38, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_2137.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1509.geometry}
        position={[0, 1086.68, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1919.geometry}
        position={[0, 5763.64, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_2135.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1570.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1872.geometry}
        position={[0, 3857.95, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1784.geometry}
        position={[0, 1760.95, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_810.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1737.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1715.geometry}
        position={[0, 2230.56, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1250.geometry}
        position={[0, 1861.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1780.geometry}
        position={[0, -2970.64, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_809.geometry}
        position={[0, 4868.65, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1827.geometry}
        position={[0, -4029.97, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1851.geometry}
        position={[0, 3814.47, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1710.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1248.geometry}
        position={[0, 1789.22, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_2181.geometry}
        position={[0, 1861.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1157.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1762.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_2180.geometry}
        position={[0, 1861.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_2089.geometry}
        position={[0, 4868.65, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1917.geometry}
        position={[0, 1782.39, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1736.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1525.geometry}
        position={[0, 5721.8, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1662.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1852.geometry}
        position={[0, 2954.56, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1693.geometry}
        position={[0, 4868.65, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1464.geometry}
        position={[0, 1789.22, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1259.geometry}
        position={[0, 1086.68, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1898.geometry}
        position={[0, -4722.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1755.geometry}
        position={[0, 1789.22, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1572.geometry}
        position={[0, 1861.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1204.geometry}
        position={[0, 5721.8, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_2043.geometry}
        position={[0, 1789.22, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1363.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1599.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_852.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1645.geometry}
        position={[0, 3307.09, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1432.geometry}
        position={[0, 1086.68, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1995.geometry}
        position={[0, 1861.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1781.geometry}
        position={[0, -2067.2, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1850.geometry}
        position={[0, -4387.74, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1918.geometry}
        position={[0, 2627.64, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1621.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1902.geometry}
        position={[0, 3748.52, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1618.geometry}
        position={[0, 2230.56, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1895.geometry}
        position={[0, -5052.86, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1808.geometry}
        position={[0, 1148.38, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1417.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1390.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1951.geometry}
        position={[0, 1883.82, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_2010.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_905.geometry}
        position={[0, 2230.56, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_709.geometry}
        position={[0, 1120.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_897.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1573.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1690.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1510.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1433.geometry}
        position={[0, 2230.56, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1829.geometry}
        position={[0, 2054.33, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1601.geometry}
        position={[0, 1861.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1664.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1758.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1757.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1801.geometry}
        position={[0, 1010.63, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1874.geometry}
        position={[0, 1270.87, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_800.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_2098.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_2051.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1482.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1960.geometry}
        position={[0, 1086.68, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1386.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1529.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1526.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1507.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1897.geometry}
        position={[0, 214.36, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_2136.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_2101.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_2097.geometry}
        position={[0, 1607.7, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1903.geometry}
        position={[0, 4410.03, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1871.geometry}
        position={[0, 2449.87, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1479.geometry}
        position={[0, 4868.65, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1666.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1617.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_2139.geometry}
        position={[0, 4868.65, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1804.geometry}
        position={[0, 2142.06, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1260.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_2102.geometry}
        position={[0, 1861.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1855.geometry}
        position={[0, 4057.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1388.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1341.geometry}
        position={[0, 3040.69, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1434.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_2052.geometry}
        position={[0, 4655.47, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1760.geometry}
        position={[0, -1702.03, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_2091.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1825.geometry}
        position={[0, 2347.93, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1418.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_859.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1759.geometry}
        position={[0, -1702.03, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1713.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1296.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1869.geometry}
        position={[0, 3505.79, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1996.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1828.geometry}
        position={[0, 3394.11, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1364.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_2007.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1574.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1904.geometry}
        position={[0, 4079.28, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1809.geometry}
        position={[0, -2211.7, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1848.geometry}
        position={[0, -4542.49, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1554.geometry}
        position={[0, 1789.22, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1480.geometry}
        position={[0, 1120.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_2145.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1665.geometry}
        position={[0, 5721.8, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1371.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_1362.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_0_0_0}
        geometry={nodes.voxel_299.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_19_0_0}
        geometry={nodes.voxel_2048.geometry}
        position={[0, 1120.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_19_0_0}
        geometry={nodes.voxel_858.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_19_0_0}
        geometry={nodes.voxel_565.geometry}
        position={[0, 1120.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_19_0_0}
        geometry={nodes.voxel_1941.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_141_38_3}
        geometry={nodes.voxel_1763.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_36_0_0}
        geometry={nodes.voxel_2189.geometry}
        position={[0, 4868.65, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_36_0_0}
        geometry={nodes.voxel_1952.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_36_0_0}
        geometry={nodes.voxel_2232.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_36_0_0}
        geometry={nodes.voxel_2085.geometry}
        position={[0, 4868.65, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_36_0_0}
        geometry={nodes.voxel_1327.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_36_0_0}
        geometry={nodes.voxel_908.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_36_0_0}
        geometry={nodes.voxel_665.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_131_48_23}
        geometry={nodes.voxel_1097.geometry}
        position={[0, -1603.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_192_124}
        geometry={nodes.voxel_1580.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_119_13_0}
        geometry={nodes.voxel_1308.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_202_78_23}
        geometry={nodes.voxel_1309.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_167_44_0}
        geometry={nodes.voxel_613.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_48_0_0}
        geometry={nodes.voxel_1453.geometry}
        position={[0, -2503.36, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_48_0_0}
        geometry={nodes.voxel_1315.geometry}
        position={[0, 1120.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_48_0_0}
        geometry={nodes.voxel_1499.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_48_0_0}
        geometry={nodes.voxel_954.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_48_0_0}
        geometry={nodes.voxel_587.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_48_0_0}
        geometry={nodes.voxel_901.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_103_43_11}
        geometry={nodes.voxel_1233.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_211_99_51}
        geometry={nodes.voxel_1253.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_194_132}
        geometry={nodes.voxel_1679.geometry}
        position={[0, -1302.6, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_166_74_26}
        geometry={nodes.voxel_1412.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_38_0_0}
        geometry={nodes.voxel_2177.geometry}
        position={[0, 4655.47, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_38_0_0}
        geometry={nodes.voxel_756.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_38_0_0}
        geometry={nodes.voxel_351.geometry}
        position={[0, 4868.65, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_38_0_0}
        geometry={nodes.voxel_707.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_38_0_0}
        geometry={nodes.voxel_929.geometry}
        position={[0, 2230.56, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_38_0_0}
        geometry={nodes.voxel_1159.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_38_0_0}
        geometry={nodes.voxel_446.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_146_78}
        geometry={nodes.voxel_583.geometry}
        position={[0, 4868.65, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_192_131}
        geometry={nodes.voxel_1227.geometry}
        position={[0, 3374.88, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_142_83}
        geometry={nodes.voxel_1310.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_142_83}
        geometry={nodes.voxel_881.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_78_0_0}
        geometry={nodes.voxel_705.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_184_76_23}
        geometry={nodes.voxel_491.geometry}
        position={[0, 1086.68, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_43_0_0}
        geometry={nodes.voxel_2049.geometry}
        position={[0, 4655.47, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_43_0_0}
        geometry={nodes.voxel_760.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_43_0_0}
        geometry={nodes.voxel_1905.geometry}
        position={[0, 2333.64, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_43_0_0}
        geometry={nodes.voxel_2038.geometry}
        position={[0, 4655.47, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_144_31_0}
        geometry={nodes.voxel_349.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_254_114_78}
        geometry={nodes.voxel_624.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_88_18_0}
        geometry={nodes.voxel_1002.geometry}
        position={[0, -198.06, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_6_0_0}
        geometry={nodes.voxel_1416.geometry}
        position={[0, 1883.82, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_6_0_0}
        geometry={nodes.voxel_1020.geometry}
        position={[0, -2207.26, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_6_0_0}
        geometry={nodes.voxel_1966.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_6_0_0}
        geometry={nodes.voxel_1899.geometry}
        position={[0, -4207.9, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_33_0_0}
        geometry={nodes.voxel_2142.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_33_0_0}
        geometry={nodes.voxel_759.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_33_0_0}
        geometry={nodes.voxel_2092.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_33_0_0}
        geometry={nodes.voxel_1779.geometry}
        position={[0, 444.07, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_191_129}
        geometry={nodes.voxel_1861.geometry}
        position={[0, 5137.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_214_109_58}
        geometry={nodes.voxel_1349.geometry}
        position={[0, 1861.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_66_0_0}
        geometry={nodes.voxel_342.geometry}
        position={[0, 5721.8, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_66_0_0}
        geometry={nodes.voxel_1405.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_66_0_0}
        geometry={nodes.voxel_863.geometry}
        position={[0, 2230.56, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_66_0_0}
        geometry={nodes.voxel_850.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_66_0_0}
        geometry={nodes.voxel_2084.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_66_0_0}
        geometry={nodes.voxel_344.geometry}
        position={[0, 6683.28, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_149_69_39}
        geometry={nodes.voxel_666.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_106_48_18}
        geometry={nodes.voxel_1187.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_244_121_71}
        geometry={nodes.voxel_1445.geometry}
        position={[0, -1646.75, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_29_0_0}
        geometry={nodes.voxel_952.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_29_0_0}
        geometry={nodes.voxel_950.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_29_0_0}
        geometry={nodes.voxel_2131.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_29_0_0}
        geometry={nodes.voxel_1913.geometry}
        position={[0, 367.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_24_0_0}
        geometry={nodes.voxel_752.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_126_11_0}
        geometry={nodes.voxel_345.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_114_0_0}
        geometry={nodes.voxel_997.geometry}
        position={[0, 4868.65, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_114_0_0}
        geometry={nodes.voxel_844.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_236_109_49}
        geometry={nodes.voxel_1670.geometry}
        position={[0, 1789.22, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_181_53_3}
        geometry={nodes.voxel_1271.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_139_78}
        geometry={nodes.voxel_1223.geometry}
        position={[0, 5721.8, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_146_41_6}
        geometry={nodes.voxel_928.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_167_121}
        geometry={nodes.voxel_745.geometry}
        position={[0, 5721.8, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_167_98}
        geometry={nodes.voxel_481.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_167_98}
        geometry={nodes.voxel_746.geometry}
        position={[0, 1086.68, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_144_84_51}
        geometry={nodes.voxel_2000.geometry}
        position={[0, 1861.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_68_0_0}
        geometry={nodes.voxel_975.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_68_0_0}
        geometry={nodes.voxel_1210.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_68_0_0}
        geometry={nodes.voxel_854.geometry}
        position={[0, 1509.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_74_1_0}
        geometry={nodes.voxel_1366.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_192_132}
        geometry={nodes.voxel_1077.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_192_132}
        geometry={nodes.voxel_1725.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_119_21_0}
        geometry={nodes.voxel_1716.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_56_0_0}
        geometry={nodes.voxel_706.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_56_0_0}
        geometry={nodes.voxel_1344.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_56_0_0}
        geometry={nodes.voxel_1957.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_56_0_0}
        geometry={nodes.voxel_862.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_56_0_0}
        geometry={nodes.voxel_664.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_56_0_0}
        geometry={nodes.voxel_955.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_171_31_0}
        geometry={nodes.voxel_938.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_229_167}
        geometry={nodes.voxel_1535.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_76_0_0}
        geometry={nodes.voxel_1406.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_76_0_0}
        geometry={nodes.voxel_974.geometry}
        position={[0, 1120.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_76_0_0}
        geometry={nodes.voxel_797.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_76_0_0}
        geometry={nodes.voxel_817.geometry}
        position={[0, 1086.68, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_76_0_0}
        geometry={nodes.voxel_904.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_109_1_0}
        geometry={nodes.voxel_660.geometry}
        position={[0, 3244.44, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_76_6_0}
        geometry={nodes.voxel_1142.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_91_64_56}
        geometry={nodes.voxel_727.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_108_26_0}
        geometry={nodes.voxel_1410.geometry}
        position={[0, 1883.82, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_104_28_0}
        geometry={nodes.voxel_1506.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_81_10_0}
        geometry={nodes.voxel_910.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_58_0_0}
        geometry={nodes.voxel_1992.geometry}
        position={[0, 4868.65, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_58_0_0}
        geometry={nodes.voxel_1988.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_58_0_0}
        geometry={nodes.voxel_845.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_58_0_0}
        geometry={nodes.voxel_895.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_58_0_0}
        geometry={nodes.voxel_1188.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_58_0_0}
        geometry={nodes.voxel_1643.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_121_13_0}
        geometry={nodes.voxel_388.geometry}
        position={[0, 1120.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_167_78_33}
        geometry={nodes.voxel_1503.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_237_121_74}
        geometry={nodes.voxel_1444.geometry}
        position={[0, -723.69, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_111_6_0}
        geometry={nodes.voxel_999.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_137_56_18}
        geometry={nodes.voxel_1415.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_172_113}
        geometry={nodes.voxel_1593.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_172_113}
        geometry={nodes.voxel_1176.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_5_0_0}
        geometry={nodes.voxel_2093.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_5_0_0}
        geometry={nodes.voxel_860.geometry}
        position={[0, 1789.22, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_5_0_0}
        geometry={nodes.voxel_753.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_5_0_0}
        geometry={nodes.voxel_2226.geometry}
        position={[0, 1120.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_232_91_44}
        geometry={nodes.voxel_985.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_149_79}
        geometry={nodes.voxel_1485.geometry}
        position={[0, 2230.56, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_108_19_0}
        geometry={nodes.voxel_1047.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_136_78}
        geometry={nodes.voxel_1447.geometry}
        position={[0, -2008.6, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_136_78}
        geometry={nodes.voxel_1033.geometry}
        position={[0, 6683.28, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_161_93}
        geometry={nodes.voxel_1625.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_161_93}
        geometry={nodes.voxel_582.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_244_93_58}
        geometry={nodes.voxel_621.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_212_98_43}
        geometry={nodes.voxel_627.geometry}
        position={[0, 1120.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_96_23_0}
        geometry={nodes.voxel_1409.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_96_23_0}
        geometry={nodes.voxel_2037.geometry}
        position={[0, 1789.22, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_194_129}
        geometry={nodes.voxel_438.geometry}
        position={[0, 1086.68, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_194_129}
        geometry={nodes.voxel_1818.geometry}
        position={[0, 3508.95, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_184_129}
        geometry={nodes.voxel_1492.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_184_129}
        geometry={nodes.voxel_1174.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_15_0_0}
        geometry={nodes.voxel_1901.geometry}
        position={[0, 2168.26, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_15_0_0}
        geometry={nodes.voxel_1958.geometry}
        position={[0, 1861.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_15_0_0}
        geometry={nodes.voxel_2050.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_128_11_0}
        geometry={nodes.voxel_998.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_221_176}
        geometry={nodes.voxel_1082.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_221_176}
        geometry={nodes.voxel_1036.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_232_184}
        geometry={nodes.voxel_1081.geometry}
        position={[0, 1789.22, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_184_53_1}
        geometry={nodes.voxel_615.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_156_28_0}
        geometry={nodes.voxel_843.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_156_28_0}
        geometry={nodes.voxel_1040.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_104_0_0}
        geometry={nodes.voxel_815.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_247_132_73}
        geometry={nodes.voxel_581.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_186_61_15}
        geometry={nodes.voxel_1045.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_169_111}
        geometry={nodes.voxel_1860.geometry}
        position={[0, 1318.21, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_169_111}
        geometry={nodes.voxel_440.geometry}
        position={[0, 6683.28, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_164_46_11}
        geometry={nodes.voxel_719.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_181_118}
        geometry={nodes.voxel_1726.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_197_147_124}
        geometry={nodes.voxel_716.geometry}
        position={[0, 1086.68, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_179_118}
        geometry={nodes.voxel_488.geometry}
        position={[0, 4868.65, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_103_13_0}
        geometry={nodes.voxel_1214.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_231_172}
        geometry={nodes.voxel_1584.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_231_159_129}
        geometry={nodes.voxel_835.geometry}
        position={[0, 1086.68, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_214_154}
        geometry={nodes.voxel_1719.geometry}
        position={[0, 2951.54, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_101_49_13}
        geometry={nodes.voxel_957.geometry}
        position={[0, 1789.22, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_181_78_38}
        geometry={nodes.voxel_1550.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_234_179}
        geometry={nodes.voxel_1536.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_8_0_0}
        geometry={nodes.voxel_2147.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_8_0_0}
        geometry={nodes.voxel_352.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_8_0_0}
        geometry={nodes.voxel_1734.geometry}
        position={[0, 1789.22, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_8_0_0}
        geometry={nodes.voxel_2227.geometry}
        position={[0, 1086.68, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_8_0_0}
        geometry={nodes.voxel_2096.geometry}
        position={[0, 1789.22, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_8_0_0}
        geometry={nodes.voxel_1943.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_41_0_0}
        geometry={nodes.voxel_2039.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_41_0_0}
        geometry={nodes.voxel_494.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_41_0_0}
        geometry={nodes.voxel_798.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_41_0_0}
        geometry={nodes.voxel_953.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_41_0_0}
        geometry={nodes.voxel_341.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_41_0_0}
        geometry={nodes.voxel_493.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_41_0_0}
        geometry={nodes.voxel_586.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_41_0_0}
        geometry={nodes.voxel_1019.geometry}
        position={[0, 656.36, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_41_0_0}
        geometry={nodes.voxel_861.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_41_0_0}
        geometry={nodes.voxel_2003.geometry}
        position={[0, 1607.7, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_41_0_0}
        geometry={nodes.voxel_1398.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_41_0_0}
        geometry={nodes.voxel_540.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_41_0_0}
        geometry={nodes.voxel_2095.geometry}
        position={[0, 1086.68, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_41_0_0}
        geometry={nodes.voxel_757.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_204_146}
        geometry={nodes.voxel_1591.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_204_146}
        geometry={nodes.voxel_1765.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_109_29_0}
        geometry={nodes.voxel_1189.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_11_0_0}
        geometry={nodes.voxel_1452.geometry}
        position={[0, -2503.36, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_11_0_0}
        geometry={nodes.voxel_851.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_11_0_0}
        geometry={nodes.voxel_951.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_171_48_0}
        geometry={nodes.voxel_842.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_212_162}
        geometry={nodes.voxel_1173.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_212_162}
        geometry={nodes.voxel_1588.geometry}
        position={[0, 987.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_89_5_0}
        geometry={nodes.voxel_1000001.geometry}
        position={[185.06, -1613.14, 0.26]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_89_5_0}
        geometry={nodes.voxel_1000.geometry}
        position={[0, -1073.32, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_179_113}
        geometry={nodes.voxel_1773.geometry}
        position={[0, -3645.9, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_229_169}
        geometry={nodes.voxel_1582.geometry}
        position={[0, 1789.22, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_229_169}
        geometry={nodes.voxel_1489.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_202_99_48}
        geometry={nodes.voxel_1231.geometry}
        position={[0, 1789.22, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_244_137_91}
        geometry={nodes.voxel_1443.geometry}
        position={[0, 1861.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_202_53_21}
        geometry={nodes.voxel_620.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_18_0_0}
        geometry={nodes.voxel_2191.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_18_0_0}
        geometry={nodes.voxel_808.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_18_0_0}
        geometry={nodes.voxel_1942.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_18_0_0}
        geometry={nodes.voxel_303.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_18_0_0}
        geometry={nodes.voxel_1824.geometry}
        position={[0, 191.4, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_18_0_0}
        geometry={nodes.voxel_302.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_18_0_0}
        geometry={nodes.voxel_907.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_18_0_0}
        geometry={nodes.voxel_2178.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_18_0_0}
        geometry={nodes.voxel_2185.geometry}
        position={[0, 1861.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_189_86_41}
        geometry={nodes.voxel_1548.geometry}
        position={[0, 6683.28, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_212_154}
        geometry={nodes.voxel_1769.geometry}
        position={[0, 1455.3, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_182_111}
        geometry={nodes.voxel_1637.geometry}
        position={[0, -1107.65, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_197_73_10}
        geometry={nodes.voxel_769.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_219_161}
        geometry={nodes.voxel_1814.geometry}
        position={[0, 2647.66, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_151_94}
        geometry={nodes.voxel_987.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_212_86_33}
        geometry={nodes.voxel_848.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_176_111}
        geometry={nodes.voxel_1182.geometry}
        position={[0, 2167.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_176_111}
        geometry={nodes.voxel_489.geometry}
        position={[0, 3040.69, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_63_5_0}
        geometry={nodes.voxel_1461.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_63_5_0}
        geometry={nodes.voxel_1990.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_144_49_13}
        geometry={nodes.voxel_1906.geometry}
        position={[0, 4795.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_124_31_0}
        geometry={nodes.voxel_1501.geometry}
        position={[0, -1116.23, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_151_36_0}
        geometry={nodes.voxel_1168.geometry}
        position={[0, 1789.22, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_151_36_0}
        geometry={nodes.voxel_1400.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_244_114_64}
        geometry={nodes.voxel_1039.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_222_86_28}
        geometry={nodes.voxel_1044.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_149_91}
        geometry={nodes.voxel_1311.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_242_108_44}
        geometry={nodes.voxel_617.geometry}
        position={[0, 4868.65, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_254_136_78}
        geometry={nodes.voxel_532.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_206_91_33}
        geometry={nodes.voxel_1267.geometry}
        position={[0, 1120.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_106_3_0}
        geometry={nodes.voxel_1262.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_136_73}
        geometry={nodes.voxel_1221.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_136_73}
        geometry={nodes.voxel_435.geometry}
        position={[0, 5721.8, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_159_76_36}
        geometry={nodes.voxel_1232.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_144_53_16}
        geometry={nodes.voxel_1505.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_211_91_43}
        geometry={nodes.voxel_804.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_21_0_0}
        geometry={nodes.voxel_947.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_21_0_0}
        geometry={nodes.voxel_1948.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_21_0_0}
        geometry={nodes.voxel_1947.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_21_0_0}
        geometry={nodes.voxel_761.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_21_0_0}
        geometry={nodes.voxel_846.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_250_119_64}
        geometry={nodes.voxel_529.geometry}
        position={[0, 1509.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_212_151}
        geometry={nodes.voxel_1028.geometry}
        position={[0, 3244.44, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_184_121}
        geometry={nodes.voxel_1080.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_96_10_0}
        geometry={nodes.voxel_492.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_96_10_0}
        geometry={nodes.voxel_1956.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_171_96}
        geometry={nodes.voxel_1071.geometry}
        position={[0, 2230.56, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_137_78}
        geometry={nodes.voxel_1717.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_123_11_0}
        geometry={nodes.voxel_661.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_136_16_0}
        geometry={nodes.voxel_894.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_59_0_0}
        geometry={nodes.voxel_1353.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_171_39_0}
        geometry={nodes.voxel_1041.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_88_28_5}
        geometry={nodes.voxel_566.geometry}
        position={[0, 2230.56, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_159_89}
        geometry={nodes.voxel_1683.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_94_16_0}
        geometry={nodes.voxel_2083.geometry}
        position={[0, 1086.68, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_224_84_28}
        geometry={nodes.voxel_888.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_31_0_0}
        geometry={nodes.voxel_1212.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_31_0_0}
        geometry={nodes.voxel_399.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_34_0_0}
        geometry={nodes.voxel_448.geometry}
        position={[0, 4868.65, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_34_0_0}
        geometry={nodes.voxel_758.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_49_0_0}
        geometry={nodes.voxel_766.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_49_0_0}
        geometry={nodes.voxel_1945.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_49_0_0}
        geometry={nodes.voxel_1397.geometry}
        position={[0, -721.43, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_49_0_0}
        geometry={nodes.voxel_995.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_49_0_0}
        geometry={nodes.voxel_1857.geometry}
        position={[0, 5137.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_187_83_34}
        geometry={nodes.voxel_1185.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_152_54_13}
        geometry={nodes.voxel_1858.geometry}
        position={[0, 1631.62, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_177_118}
        geometry={nodes.voxel_1493.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_221_88_34}
        geometry={nodes.voxel_396.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_217_66_16}
        geometry={nodes.voxel_986.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_222_111_59}
        geometry={nodes.voxel_1301.geometry}
        position={[0, 987.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_129_34_0}
        geometry={nodes.voxel_1733.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_1_0_0}
        geometry={nodes.voxel_2143.geometry}
        position={[0, 1607.7, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_1_0_0}
        geometry={nodes.voxel_400.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_1_0_0}
        geometry={nodes.voxel_1900.geometry}
        position={[0, 4097.65, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_239_126_63}
        geometry={nodes.voxel_537.geometry}
        position={[0, 1789.22, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_141_38_0}
        geometry={nodes.voxel_840.geometry}
        position={[0, 1861.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_227_93_31}
        geometry={nodes.voxel_1043.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_136_69}
        geometry={nodes.voxel_1217.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_207_59_8}
        geometry={nodes.voxel_890.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_96_13_0}
        geometry={nodes.voxel_771.geometry}
        position={[0, 2230.56, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_181_74_31}
        geometry={nodes.voxel_1347.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_181_53_5}
        geometry={nodes.voxel_1270.geometry}
        position={[0, 987.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_53_0_0}
        geometry={nodes.voxel_807.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_53_0_0}
        geometry={nodes.voxel_1113.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_53_0_0}
        geometry={nodes.voxel_909.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_53_0_0}
        geometry={nodes.voxel_1946.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_181_119}
        geometry={nodes.voxel_1123.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_247_132_76}
        geometry={nodes.voxel_1303.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_154_84}
        geometry={nodes.voxel_980.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_88_16_1}
        geometry={nodes.voxel_1213.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_144_68}
        geometry={nodes.voxel_1531.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_59_26_23}
        geometry={nodes.voxel_656.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_44_0_0}
        geometry={nodes.voxel_633.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_44_0_0}
        geometry={nodes.voxel_2047.geometry}
        position={[0, 1861.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_44_0_0}
        geometry={nodes.voxel_1552.geometry}
        position={[0, 1861.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_44_0_0}
        geometry={nodes.voxel_1993.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_44_0_0}
        geometry={nodes.voxel_1280.geometry}
        position={[0, 1789.22, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_142_61_33}
        geometry={nodes.voxel_1051.geometry}
        position={[0, -1602.35, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_141_83}
        geometry={nodes.voxel_1496.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_10_0_0}
        geometry={nodes.voxel_1205.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_10_0_0}
        geometry={nodes.voxel_1994.geometry}
        position={[0, 1861.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_10_0_0}
        geometry={nodes.voxel_2225.geometry}
        position={[0, 1607.7, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_10_0_0}
        geometry={nodes.voxel_1325.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_182_121}
        geometry={nodes.voxel_1126.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_157_51_5}
        geometry={nodes.voxel_1404.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_201_98_43}
        geometry={nodes.voxel_1348.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_88_51_33}
        geometry={nodes.voxel_773.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_226_171}
        geometry={nodes.voxel_1133.geometry}
        position={[0, 1509.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_136_31_0}
        geometry={nodes.voxel_1823.geometry}
        position={[0, 2794.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_250_121_56}
        geometry={nodes.voxel_1438.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_211_154}
        geometry={nodes.voxel_1674.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_211_154}
        geometry={nodes.voxel_1181.geometry}
        position={[0, 2167.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_211_154}
        geometry={nodes.voxel_1723.geometry}
        position={[0, 1086.68, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_239_108_51}
        geometry={nodes.voxel_395.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_252_124_68}
        geometry={nodes.voxel_1446.geometry}
        position={[0, -1831.37, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_152_29_0}
        geometry={nodes.voxel_347.geometry}
        position={[0, 5721.8, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_201_86_44}
        geometry={nodes.voxel_1114.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_174_104}
        geometry={nodes.voxel_482.geometry}
        position={[0, 4868.65, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_224_108_53}
        geometry={nodes.voxel_1161.geometry}
        position={[0, 4868.65, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_196_84_44}
        geometry={nodes.voxel_1068.geometry}
        position={[0, -1103.25, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_43_10_8}
        geometry={nodes.voxel_2229.geometry}
        position={[0, 1120.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_132_16_0}
        geometry={nodes.voxel_659.geometry}
        position={[0, 3374.88, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_154_78}
        geometry={nodes.voxel_1578.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_139_41_0}
        geometry={nodes.voxel_1351.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_179_131}
        geometry={nodes.voxel_1544.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_91_48_26}
        geometry={nodes.voxel_819.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_224_167}
        geometry={nodes.voxel_1768.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_224_167}
        geometry={nodes.voxel_1766.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_169_76_31}
        geometry={nodes.voxel_1413.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_211_156}
        geometry={nodes.voxel_1075.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_211_156}
        geometry={nodes.voxel_1540.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_81_43_41}
        geometry={nodes.voxel_2128.geometry}
        position={[0, 3040.69, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_162_59_6}
        geometry={nodes.voxel_538.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_134_56_28}
        geometry={nodes.voxel_1324.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_217_83_29}
        geometry={nodes.voxel_1042.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_131_38_0}
        geometry={nodes.voxel_1437.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_221_91_31}
        geometry={nodes.voxel_479.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_74_3_0}
        geometry={nodes.voxel_2141.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_13_0_0}
        geometry={nodes.voxel_799.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_13_0_0}
        geometry={nodes.voxel_300.geometry}
        position={[0, 3374.88, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_13_0_0}
        geometry={nodes.voxel_2086.geometry}
        position={[0, 1607.7, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_13_0_0}
        geometry={nodes.voxel_711.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_13_0_0}
        geometry={nodes.voxel_1944.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_13_0_0}
        geometry={nodes.voxel_2233.geometry}
        position={[0, 1861.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_13_0_0}
        geometry={nodes.voxel_301.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_161_86_66}
        geometry={nodes.voxel_1005.geometry}
        position={[0, 1002.29, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_146_79}
        geometry={nodes.voxel_1729.geometry}
        position={[0, 1861.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_146_79}
        geometry={nodes.voxel_1070.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_146_79}
        geometry={nodes.voxel_629.geometry}
        position={[0, 2230.56, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_159_39_1}
        geometry={nodes.voxel_943.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_68_6_0}
        geometry={nodes.voxel_2187.geometry}
        position={[0, 4655.47, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_154_108}
        geometry={nodes.voxel_1545.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_99_19_0}
        geometry={nodes.voxel_1688.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_242_124_64}
        geometry={nodes.voxel_674.geometry}
        position={[0, 1120.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_96_0_0}
        geometry={nodes.voxel_806.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_164_99}
        geometry={nodes.voxel_982.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_199_123_88}
        geometry={nodes.voxel_667.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_161_103}
        geometry={nodes.voxel_1908.geometry}
        position={[0, 2039.64, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_174_108}
        geometry={nodes.voxel_1228.geometry}
        position={[0, 3374.88, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_174_108}
        geometry={nodes.voxel_1727.geometry}
        position={[0, 5721.8, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_187_83_29}
        geometry={nodes.voxel_1596.geometry}
        position={[0, 1120.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_176_116}
        geometry={nodes.voxel_1494.geometry}
        position={[0, 1861.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_176_116}
        geometry={nodes.voxel_1124.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_186_78_23}
        geometry={nodes.voxel_1312.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_152_89}
        geometry={nodes.voxel_1639.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_89_34_15}
        geometry={nodes.voxel_2081.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_151_89}
        geometry={nodes.voxel_1264.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_108_51_28}
        geometry={nodes.voxel_712.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_199_147}
        geometry={nodes.voxel_1491.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_141_76}
        geometry={nodes.voxel_392.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_141_76}
        geometry={nodes.voxel_1137.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_141_76}
        geometry={nodes.voxel_1685.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_209_98_48}
        geometry={nodes.voxel_1254.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_237_106_51}
        geometry={nodes.voxel_1023.geometry}
        position={[0, 1099.85, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_240_128_78}
        geometry={nodes.voxel_1811.geometry}
        position={[0, 616.72, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_179_121}
        geometry={nodes.voxel_1135.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_179_121}
        geometry={nodes.voxel_1265.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_109_54_23}
        geometry={nodes.voxel_1003.geometry}
        position={[0, 1423.73, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_234_93_29}
        geometry={nodes.voxel_570.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_124_21_0}
        geometry={nodes.voxel_949.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_164_96}
        geometry={nodes.voxel_536.geometry}
        position={[0, 4868.65, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_164_96}
        geometry={nodes.voxel_1728.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_149_74}
        geometry={nodes.voxel_1025.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_23_0_0}
        geometry={nodes.voxel_813.geometry}
        position={[0, 4868.65, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_23_0_0}
        geometry={nodes.voxel_447.geometry}
        position={[0, 2230.56, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_23_0_0}
        geometry={nodes.voxel_853.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_23_0_0}
        geometry={nodes.voxel_2040.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_98_31_0}
        geometry={nodes.voxel_2036.geometry}
        position={[0, 1861.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_237_106_64}
        geometry={nodes.voxel_991.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_186_119}
        geometry={nodes.voxel_437.geometry}
        position={[0, 3040.69, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_144_73}
        geometry={nodes.voxel_1624.geometry}
        position={[0, 1120.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_144_73}
        geometry={nodes.voxel_572.geometry}
        position={[0, 2167.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_149_81}
        geometry={nodes.voxel_791.geometry}
        position={[0, 4868.65, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_149_41_0}
        geometry={nodes.voxel_631.geometry}
        position={[0, 4868.65, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_86_0_0}
        geometry={nodes.voxel_1451.geometry}
        position={[0, -2503.36, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_194_86_41}
        geometry={nodes.voxel_1160.geometry}
        position={[0, 1509.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_240_114_59}
        geometry={nodes.voxel_1115.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_202_93_48}
        geometry={nodes.voxel_1346.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_222_103_44}
        geometry={nodes.voxel_803.geometry}
        position={[0, 1086.68, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_239_134_76}
        geometry={nodes.voxel_1456.geometry}
        position={[0, -2495.98, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_109_8_0}
        geometry={nodes.voxel_350.geometry}
        position={[0, 6683.28, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_219_171}
        geometry={nodes.voxel_1587.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_124_16_0}
        geometry={nodes.voxel_1354.geometry}
        position={[0, 1086.68, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_93_5_0}
        geometry={nodes.voxel_1396.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_51_0_0}
        geometry={nodes.voxel_2186.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_51_0_0}
        geometry={nodes.voxel_893.geometry}
        position={[0, 6378.56, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_51_0_0}
        geometry={nodes.voxel_751.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_51_0_0}
        geometry={nodes.voxel_343.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_147_78}
        geometry={nodes.voxel_1821.geometry}
        position={[0, 1569.54, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_199_142}
        geometry={nodes.voxel_485.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_221_103_58}
        geometry={nodes.voxel_992.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_159_99}
        geometry={nodes.voxel_983.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_137_41_1}
        geometry={nodes.voxel_1093.geometry}
        position={[0, -700.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_177_98_64}
        geometry={nodes.voxel_669.geometry}
        position={[0, 5721.8, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_222_69_29}
        geometry={nodes.voxel_576.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_211_159}
        geometry={nodes.voxel_1589.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_116_29_1}
        geometry={nodes.voxel_1408.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_222_116_63}
        geometry={nodes.voxel_1907.geometry}
        position={[0, 5310.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_217_159}
        geometry={nodes.voxel_1539.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_94_46_18}
        geometry={nodes.voxel_911.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_126_53_21}
        geometry={nodes.voxel_657.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_149_74_46}
        geometry={nodes.voxel_718.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_189_126}
        geometry={nodes.voxel_1864.geometry}
        position={[0, 3505.79, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_189_126}
        geometry={nodes.voxel_1680.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_207_73_29}
        geometry={nodes.voxel_673.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_157_58_16}
        geometry={nodes.voxel_748.geometry}
        position={[0, 9028.89, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_240_99_61}
        geometry={nodes.voxel_622.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_119_46_21}
        geometry={nodes.voxel_702.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_66_5_0}
        geometry={nodes.voxel_2001.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_10_0_3}
        geometry={nodes.voxel_2057.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_137_69}
        geometry={nodes.voxel_792.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_162_91}
        geometry={nodes.voxel_436.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_201_98_56}
        geometry={nodes.voxel_1547.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_26_0_0}
        geometry={nodes.voxel_2045.geometry}
        position={[0, 1607.7, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_26_0_0}
        geometry={nodes.voxel_762.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_26_0_0}
        geometry={nodes.voxel_2190.geometry}
        position={[0, 1086.68, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_26_0_0}
        geometry={nodes.voxel_765.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_164_108}
        geometry={nodes.voxel_988.geometry}
        position={[0, 1120.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_161_28_0}
        geometry={nodes.voxel_940.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_129_53_13}
        geometry={nodes.voxel_1953.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_186_83_36}
        geometry={nodes.voxel_1394.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_61_3_0}
        geometry={nodes.voxel_2129.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_154_103}
        geometry={nodes.voxel_1083.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_104_1_0}
        geometry={nodes.voxel_948.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_239_103_48}
        geometry={nodes.voxel_1085.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_171_108}
        geometry={nodes.voxel_1171.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_162_58_16}
        geometry={nodes.voxel_1252.geometry}
        position={[0, 1086.68, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_171_56_6}
        geometry={nodes.voxel_444.geometry}
        position={[0, 1789.22, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_118_54_28}
        geometry={nodes.voxel_1049.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_196_141}
        geometry={nodes.voxel_1219.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_212_79_23}
        geometry={nodes.voxel_1163.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_99_39_6}
        geometry={nodes.voxel_2035.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_204_147}
        geometry={nodes.voxel_1678.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_189_132}
        geometry={nodes.voxel_439.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_187_132}
        geometry={nodes.voxel_1031.geometry}
        position={[0, 4868.65, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_28_0_0}
        geometry={nodes.voxel_763.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_28_0_0}
        geometry={nodes.voxel_1622.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_28_0_0}
        geometry={nodes.voxel_1987.geometry}
        position={[0, 4655.47, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_179_109}
        geometry={nodes.voxel_1486.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_179_109}
        geometry={nodes.voxel_483.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_222_147_113}
        geometry={nodes.voxel_700.geometry}
        position={[0, 1861.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_247_106_46}
        geometry={nodes.voxel_978.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_204_61_19}
        geometry={nodes.voxel_577.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_111_11_0}
        geometry={nodes.voxel_1912.geometry}
        position={[0, -606.38, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_166_114}
        geometry={nodes.voxel_989.geometry}
        position={[0, 4868.65, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_61_0_0}
        geometry={nodes.voxel_1067.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_61_0_0}
        geometry={nodes.voxel_386.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_61_0_0}
        geometry={nodes.voxel_892.geometry}
        position={[0, 7511.02, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_16_0_0}
        geometry={nodes.voxel_401.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_16_0_0}
        geometry={nodes.voxel_2228.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_16_0_0}
        geometry={nodes.voxel_2094.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_124_26_0}
        geometry={nodes.voxel_1215.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_103_28_0}
        geometry={nodes.voxel_2082.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_196_103_74}
        geometry={nodes.voxel_670.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_111_41_16}
        geometry={nodes.voxel_958.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_174_106}
        geometry={nodes.voxel_1682.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_209_156}
        geometry={nodes.voxel_1633.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_247_128_73}
        geometry={nodes.voxel_531.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_3_0_0}
        geometry={nodes.voxel_2004.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_3_0_0}
        geometry={nodes.voxel_1261.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_141_26_0}
        geometry={nodes.voxel_1167.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_189_136}
        geometry={nodes.voxel_1542.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_64_0_0}
        geometry={nodes.voxel_1021.geometry}
        position={[-0.1, -185.39, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_64_0_0}
        geometry={nodes.voxel_1483.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_64_0_0}
        geometry={nodes.voxel_541.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_64_0_0}
        geometry={nodes.voxel_996.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_64_0_0}
        geometry={nodes.voxel_1500.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_79_16_0}
        geometry={nodes.voxel_1234.geometry}
        position={[0, 1086.68, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_139_34_0}
        geometry={nodes.voxel_567.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_206_99_53}
        geometry={nodes.voxel_1277.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_222_106_51}
        geometry={nodes.voxel_1208.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_106_13_0}
        geometry={nodes.voxel_678.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_146_86}
        geometry={nodes.voxel_1594.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_201_144}
        geometry={nodes.voxel_1863.geometry}
        position={[0, 1631.62, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_118_59}
        geometry={nodes.voxel_573.geometry}
        position={[0, 2167.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_221_103_53}
        geometry={nodes.voxel_1138.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_199_144}
        geometry={nodes.voxel_1029.geometry}
        position={[0, 6683.28, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_79_0_0}
        geometry={nodes.voxel_816.geometry}
        position={[0, 1789.22, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_137_89}
        geometry={nodes.voxel_1038.geometry}
        position={[0, 4868.65, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_139_69}
        geometry={nodes.voxel_1116.geometry}
        position={[0, 1861.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_237_118_61}
        geometry={nodes.voxel_1357.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_179_66_23}
        geometry={nodes.voxel_1164.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_221_167}
        geometry={nodes.voxel_1721.geometry}
        position={[0, -1488.68, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_224_118_59}
        geometry={nodes.voxel_1595.geometry}
        position={[0, 5721.8, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_114_18_0}
        geometry={nodes.voxel_884.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_128_68}
        geometry={nodes.voxel_1273.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_151_86}
        geometry={nodes.voxel_1684.geometry}
        position={[0, 1789.22, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_231_79_48}
        geometry={nodes.voxel_625.geometry}
        position={[0, 2167.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_222_89_28}
        geometry={nodes.voxel_524.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_161_101}
        geometry={nodes.voxel_441.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_144_54_13}
        geometry={nodes.voxel_1504.geometry}
        position={[0, 6683.28, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_114_15_0}
        geometry={nodes.voxel_432.geometry}
        position={[0, 1120.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_46_0_0}
        geometry={nodes.voxel_1989.geometry}
        position={[0, 1861.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_46_0_0}
        geometry={nodes.voxel_2140.geometry}
        position={[0, 1789.22, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_46_0_0}
        geometry={nodes.voxel_2130.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_46_0_0}
        geometry={nodes.voxel_764.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_46_0_0}
        geometry={nodes.voxel_945.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_73_0_0}
        geometry={nodes.voxel_431.geometry}
        position={[0, 4868.65, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_73_0_0}
        geometry={nodes.voxel_1314.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_151_106}
        geometry={nodes.voxel_990.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_111_5_0}
        geometry={nodes.voxel_994.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_202_139}
        geometry={nodes.voxel_1627.geometry}
        position={[0, 3672.19, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_179_123}
        geometry={nodes.voxel_1131.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_157_96_69}
        geometry={nodes.voxel_713.geometry}
        position={[0, 1120.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_191_79_36}
        geometry={nodes.voxel_993.geometry}
        position={[0, 1789.22, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_159_59_13}
        geometry={nodes.voxel_1778.geometry}
        position={[0, -949.38, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_244_89_41}
        geometry={nodes.voxel_574.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_186_129}
        geometry={nodes.voxel_1122.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_186_129}
        geometry={nodes.voxel_487.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_166_96}
        geometry={nodes.voxel_1026.geometry}
        position={[0, 1120.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_232_128_81}
        geometry={nodes.voxel_1546.geometry}
        position={[0, -1113.81, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_104_53_28}
        geometry={nodes.voxel_2046.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_201_146_118}
        geometry={nodes.voxel_714.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_191_128}
        geometry={nodes.voxel_484.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_239_109_48}
        geometry={nodes.voxel_1484.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_177_114}
        geometry={nodes.voxel_1079.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_252_129_68}
        geometry={nodes.voxel_1731.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_172_116}
        geometry={nodes.voxel_1170.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_237_101_61}
        geometry={nodes.voxel_623.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_134_56}
        geometry={nodes.voxel_1577.geometry}
        position={[0, 3740.47, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_196_63_19}
        geometry={nodes.voxel_578.geometry}
        position={[0, 4868.65, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_118_36_11}
        geometry={nodes.voxel_1143.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_124_36_0}
        geometry={nodes.voxel_930.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_217_157}
        geometry={nodes.voxel_1074.geometry}
        position={[0, 3374.88, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_157_88}
        geometry={nodes.voxel_1671.geometry}
        position={[0, 1086.68, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_171_104}
        geometry={nodes.voxel_1865.geometry}
        position={[0, 1631.62, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_171_104}
        geometry={nodes.voxel_535.geometry}
        position={[0, 1120.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_171_104}
        geometry={nodes.voxel_1638.geometry}
        position={[0, 5721.8, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_156_51_16}
        geometry={nodes.voxel_885.geometry}
        position={[0, 1861.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_151_83}
        geometry={nodes.voxel_1229.geometry}
        position={[0, 1789.22, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_154_86}
        geometry={nodes.voxel_527.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_209_152}
        geometry={nodes.voxel_1815.geometry}
        position={[0, -3147.42, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_116_31_0}
        geometry={nodes.voxel_1319.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_156_49_11}
        geometry={nodes.voxel_1320.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_131_63}
        geometry={nodes.voxel_979.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_169_99}
        geometry={nodes.voxel_1579.geometry}
        position={[0, 1086.68, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_38_16_24}
        geometry={nodes.voxel_1373.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_174_73_28}
        geometry={nodes.voxel_1368.geometry}
        position={[0, 2230.56, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_59_28_28}
        geometry={nodes.voxel_2176.geometry}
        position={[0, 1120.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_151_64_18}
        geometry={nodes.voxel_1955.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_124_23_0}
        geometry={nodes.voxel_770.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_211_157}
        geometry={nodes.voxel_1590.geometry}
        position={[0, 2230.56, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_108_1_0}
        geometry={nodes.voxel_944.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_121_64}
        geometry={nodes.voxel_394.geometry}
        position={[0, 2230.56, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_84_0_0}
        geometry={nodes.voxel_1360.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_147_91}
        geometry={nodes.voxel_984.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_239_128_69}
        geometry={nodes.voxel_1910.geometry}
        position={[0, -532.03, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_149_88}
        geometry={nodes.voxel_1220.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_186_71_18}
        geometry={nodes.voxel_802.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_88_10_0}
        geometry={nodes.voxel_1235.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_224_98_46}
        geometry={nodes.voxel_977.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_187_74_23}
        geometry={nodes.voxel_1867.geometry}
        position={[0, 3505.79, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_202_149}
        geometry={nodes.voxel_1076.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_74_11_0}
        geometry={nodes.voxel_726.geometry}
        position={[0, 1883.82, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_217_89_34}
        geometry={nodes.voxel_1272.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_71_21_0}
        geometry={nodes.voxel_680.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_74_0_0}
        geometry={nodes.voxel_1352.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_74_0_0}
        geometry={nodes.voxel_539.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_74_0_0}
        geometry={nodes.voxel_1399.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_79_11_0}
        geometry={nodes.voxel_476.geometry}
        position={[0, 987.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_79_11_0}
        geometry={nodes.voxel_956.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_247_124_68}
        geometry={nodes.voxel_1640.geometry}
        position={[0, 987.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_71_0_0}
        geometry={nodes.voxel_398.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_71_0_0}
        geometry={nodes.voxel_973.geometry}
        position={[0, 1861.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_171_51_10}
        geometry={nodes.voxel_886.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_202_58_23}
        geometry={nodes.voxel_619.geometry}
        position={[0, 3374.88, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_176_66_21}
        geometry={nodes.voxel_1165.geometry}
        position={[0, 1086.68, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_219_164}
        geometry={nodes.voxel_1676.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_219_164}
        geometry={nodes.voxel_1675.geometry}
        position={[0, 5721.8, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_162_96}
        geometry={nodes.voxel_981.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_207_94_46}
        geometry={nodes.voxel_1299.geometry}
        position={[0, 1120.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_141_68_46}
        geometry={nodes.voxel_1004.geometry}
        position={[0, -700.68, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_204_94_39}
        geometry={nodes.voxel_1641.geometry}
        position={[0, 2230.56, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_179_111}
        geometry={nodes.voxel_1626.geometry}
        position={[0, 1789.22, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_179_111}
        geometry={nodes.voxel_1119.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_167_91}
        geometry={nodes.voxel_1117.geometry}
        position={[0, 6683.28, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_252_139_74}
        geometry={nodes.voxel_628.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_184_69_26}
        geometry={nodes.voxel_931.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_239_119_58}
        geometry={nodes.voxel_1230.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_104_29_0}
        geometry={nodes.voxel_1048.geometry}
        position={[0, -1617.12, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_211_96_46}
        geometry={nodes.voxel_942.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_192_101_53}
        geometry={nodes.voxel_1304.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_244_104_41}
        geometry={nodes.voxel_933.geometry}
        position={[0, 3374.88, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_59_5_0}
        geometry={nodes.voxel_2188.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_113_36_1}
        geometry={nodes.voxel_1305.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_184_58_3}
        geometry={nodes.voxel_568.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_191_126}
        geometry={nodes.voxel_1078.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_191_73_15}
        geometry={nodes.voxel_677.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_134_73}
        geometry={nodes.voxel_528.geometry}
        position={[0, 4868.65, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_216_99_49}
        geometry={nodes.voxel_580.geometry}
        position={[0, 2167.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_81_3_0}
        geometry={nodes.voxel_855.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_161_69_28}
        geometry={nodes.voxel_1502.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_169_103}
        geometry={nodes.voxel_1774.geometry}
        position={[0, -1807.63, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_131_54}
        geometry={nodes.voxel_676.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_106_8_0}
        geometry={nodes.voxel_1810.geometry}
        position={[0, 2520.06, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_106_0_0}
        geometry={nodes.voxel_662.geometry}
        position={[0, 5721.8, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_254_167_126}
        geometry={nodes.voxel_790.geometry}
        position={[0, 1086.68, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_152_84}
        geometry={nodes.voxel_1274.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_116_34_0}
        geometry={nodes.voxel_1597.geometry}
        position={[0, 1861.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_245_128_64}
        geometry={nodes.voxel_1392.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_144_74}
        geometry={nodes.voxel_480.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_197_89_43}
        geometry={nodes.voxel_1256.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_144_76}
        geometry={nodes.voxel_675.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_162_88}
        geometry={nodes.voxel_526.geometry}
        position={[0, 1120.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_156_94}
        geometry={nodes.voxel_534.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_176_64_16}
        geometry={nodes.voxel_1687.geometry}
        position={[0, 1861.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_245_113_63}
        geometry={nodes.voxel_1084.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_204_98_43}
        geometry={nodes.voxel_793.geometry}
        position={[0, 1861.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_139_44_1}
        geometry={nodes.voxel_794.geometry}
        position={[0, 1509.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_147_74}
        geometry={nodes.voxel_1275.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_187_123}
        geometry={nodes.voxel_1027.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_83_0_0}
        geometry={nodes.voxel_1669.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_234_172}
        geometry={nodes.voxel_1583.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_94_10_0}
        geometry={nodes.voxel_856.geometry}
        position={[0, 1120.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_212_84_31}
        geometry={nodes.voxel_434.geometry}
        position={[0, 1086.68, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_197_89_39}
        geometry={nodes.voxel_1322.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_159_103}
        geometry={nodes.voxel_1495.geometry}
        position={[0, -2521.17, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_131_36_0}
        geometry={nodes.voxel_612.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_123_59_31}
        geometry={nodes.voxel_1095.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_236_123_61}
        geometry={nodes.voxel_1276.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_236_121_71}
        geometry={nodes.voxel_1393.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_63_0_0}
        geometry={nodes.voxel_679.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_63_0_0}
        geometry={nodes.voxel_632.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_152_93}
        geometry={nodes.voxel_442.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_224_169}
        geometry={nodes.voxel_1631.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_224_169}
        geometry={nodes.voxel_1720.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_206_152}
        geometry={nodes.voxel_1816.geometry}
        position={[0, 3136.79, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_206_152}
        geometry={nodes.voxel_1634.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_197_93_43}
        geometry={nodes.voxel_767.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_147_24_0}
        geometry={nodes.voxel_346.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_206_146}
        geometry={nodes.voxel_1817.geometry}
        position={[0, 3062.35, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_199_88_36}
        geometry={nodes.voxel_1450.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_202_144}
        geometry={nodes.voxel_1673.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_202_144}
        geometry={nodes.voxel_1635.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_64_6_0}
        geometry={nodes.voxel_1999.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_211_74_18}
        geometry={nodes.voxel_616.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_69_0_0}
        geometry={nodes.voxel_801.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_151_66_28}
        geometry={nodes.voxel_1186.geometry}
        position={[0, 2230.56, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_194_79_34}
        geometry={nodes.voxel_1911.geometry}
        position={[0, 679.88, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_137_36_0}
        geometry={nodes.voxel_724.geometry}
        position={[0, 1789.22, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_192_91_48}
        geometry={nodes.voxel_1549.geometry}
        position={[0, -1105.88, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_229_113_56}
        geometry={nodes.voxel_1403.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_186_81_33}
        geometry={nodes.voxel_1206.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_124_44_8}
        geometry={nodes.voxel_1094.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_177_86_38}
        geometry={nodes.voxel_1458.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_123_59}
        geometry={nodes.voxel_1024.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_157_93}
        geometry={nodes.voxel_1218.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_221_166}
        geometry={nodes.voxel_1722.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_221_166}
        geometry={nodes.voxel_1538.geometry}
        position={[0, -1122.67, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_76_36_28}
        geometry={nodes.voxel_2230.geometry}
        position={[0, 1607.7, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_250_129_73}
        geometry={nodes.voxel_490.geometry}
        position={[0, 3040.69, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_79_33_11}
        geometry={nodes.voxel_634.geometry}
        position={[0, 1883.82, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_247_121_66}
        geometry={nodes.voxel_530.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_134_34_0}
        geometry={nodes.voxel_1046.geometry}
        position={[0, -1073.65, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_216_123_63}
        geometry={nodes.voxel_1457.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_232_104_56}
        geometry={nodes.voxel_941.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_252_114_63}
        geometry={nodes.voxel_618.geometry}
        position={[0, 3374.88, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_162_104}
        geometry={nodes.voxel_1130.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_64_15_0}
        geometry={nodes.voxel_2034.geometry}
        position={[0, 4868.65, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_232_106_54}
        geometry={nodes.voxel_837.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_206_147}
        geometry={nodes.voxel_1770.geometry}
        position={[0, -3324.2, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_166_109_86}
        geometry={nodes.voxel_717.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_232_174}
        geometry={nodes.voxel_1585.geometry}
        position={[0, 1789.22, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_216_101_36}
        geometry={nodes.voxel_584.geometry}
        position={[0, 1086.68, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_89_0_0}
        geometry={nodes.voxel_847.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_89_0_0}
        geometry={nodes.voxel_1359.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_89_0_0}
        geometry={nodes.voxel_939.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_211_86_26}
        geometry={nodes.voxel_1263.geometry}
        position={[0, 1861.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_239_111_56}
        geometry={nodes.voxel_1069.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_182_78_26}
        geometry={nodes.voxel_1391.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_222_162}
        geometry={nodes.voxel_1629.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_194_134}
        geometry={nodes.voxel_1592.geometry}
        position={[0, 1120.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_229_96_41}
        geometry={nodes.voxel_927.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_33_8_18}
        geometry={nodes.voxel_2224.geometry}
        position={[0, 1607.7, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_39_0_0}
        geometry={nodes.voxel_1281.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_39_0_0}
        geometry={nodes.voxel_2002.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_159_96}
        geometry={nodes.voxel_1222.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_250_118_59}
        geometry={nodes.voxel_391.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_217_104_53}
        geometry={nodes.voxel_1216.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_224_103_44}
        geometry={nodes.voxel_1732.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_134_76}
        geometry={nodes.voxel_393.geometry}
        position={[0, 4868.65, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_176_113}
        geometry={nodes.voxel_1125.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_227_101_49}
        geometry={nodes.voxel_1401.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_219_174}
        geometry={nodes.voxel_1035.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_119_54}
        geometry={nodes.voxel_934.geometry}
        position={[0, 1789.22, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_214_157}
        geometry={nodes.voxel_1488.geometry}
        position={[0, 5721.8, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_196_88_43}
        geometry={nodes.voxel_1300.geometry}
        position={[0, 2230.56, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_154_43_0}
        geometry={nodes.voxel_841.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_231_177}
        geometry={nodes.voxel_1586.geometry}
        position={[0, 1509.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_149_84}
        geometry={nodes.voxel_1183.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_149_84}
        geometry={nodes.voxel_1775.geometry}
        position={[0, -2695.02, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_119_59_31}
        geometry={nodes.voxel_1141.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_184_116}
        geometry={nodes.voxel_1072.geometry}
        position={[0, 5721.8, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_182_113}
        geometry={nodes.voxel_1819.geometry}
        position={[0, 903.82, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_83_36_19}
        geometry={nodes.voxel_611.geometry}
        position={[0, 4868.65, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_237_111_58}
        geometry={nodes.voxel_1686.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_240_106_46}
        geometry={nodes.voxel_1162.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_187_88_48}
        geometry={nodes.voxel_1323.geometry}
        position={[0, 1789.22, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_201_141}
        geometry={nodes.voxel_1487.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_161_104}
        geometry={nodes.voxel_1909.geometry}
        position={[0, 441, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_161_104}
        geometry={nodes.voxel_1087.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_134_81}
        geometry={nodes.voxel_1086.geometry}
        position={[0, -192.23, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_157_56_13}
        geometry={nodes.voxel_1367.geometry}
        position={[0, 1509.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_68_24_8}
        geometry={nodes.voxel_340.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_181_83_36}
        geometry={nodes.voxel_701.geometry}
        position={[0, 1120.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_237_126_74}
        geometry={nodes.voxel_1859.geometry}
        position={[0, 1631.62, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_187_137}
        geometry={nodes.voxel_1543.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_98_3_0}
        geometry={nodes.voxel_750.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_106_15_0}
        geometry={nodes.voxel_585.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_126_24_0}
        geometry={nodes.voxel_704.geometry}
        position={[0, 1883.82, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_51_29_36}
        geometry={nodes.voxel_2234.geometry}
        position={[0, 1086.68, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_106_28_0}
        geometry={nodes.voxel_1318.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_252_132_73}
        geometry={nodes.voxel_1302.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_242_81_43}
        geometry={nodes.voxel_575.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_93_44_23}
        geometry={nodes.voxel_865.geometry}
        position={[0, 1086.68, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_144_83}
        geometry={nodes.voxel_836.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_144_83}
        geometry={nodes.voxel_747.geometry}
        position={[0, 1120.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_93_3_0}
        geometry={nodes.voxel_1307.geometry}
        position={[0, 1086.68, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_176_108}
        geometry={nodes.voxel_1118.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_164_38_0}
        geometry={nodes.voxel_614.geometry}
        position={[0, 1120.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_134_68}
        geometry={nodes.voxel_1866.geometry}
        position={[0, 1631.62, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_166_108_81}
        geometry={nodes.voxel_715.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_73_6_0}
        geometry={nodes.voxel_1991.geometry}
        position={[0, 6476.35, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_206_79_33}
        geometry={nodes.voxel_579.geometry}
        position={[0, 3374.88, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_169_74_28}
        geometry={nodes.voxel_1414.geometry}
        position={[0, 5721.8, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_204_137_99}
        geometry={nodes.voxel_668.geometry}
        position={[0, 5721.8, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_86_46_36}
        geometry={nodes.voxel_588.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_89_1_0}
        geometry={nodes.voxel_387.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_181_56_1}
        geometry={nodes.voxel_523.geometry}
        position={[0, 1789.22, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_146_49_10}
        geometry={nodes.voxel_1395.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_227_121_63}
        geometry={nodes.voxel_1455.geometry}
        position={[0, -2495.98, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_19_6_6}
        geometry={nodes.voxel_655.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_84_3_0}
        geometry={nodes.voxel_1306.geometry}
        position={[0, 1861.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_162_51_10}
        geometry={nodes.voxel_849.geometry}
        position={[0, 1120.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_91_0_0}
        geometry={nodes.voxel_883.geometry}
        position={[0, 5721.8, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_216_161}
        geometry={nodes.voxel_1132.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_214_93_41}
        geometry={nodes.voxel_1530.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_229_181}
        geometry={nodes.voxel_1127.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_249_121_51}
        geometry={nodes.voxel_630.geometry}
        position={[0, 1789.22, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_191_83_38}
        geometry={nodes.voxel_1209.geometry}
        position={[0, 1086.68, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_214_79_29}
        geometry={nodes.voxel_932.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_146_56_16}
        geometry={nodes.voxel_1460.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_151_91}
        geometry={nodes.voxel_1764.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_182_118}
        geometry={nodes.voxel_1681.geometry}
        position={[0, 1789.22, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_186_118}
        geometry={nodes.voxel_1533.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_212_88_28}
        geometry={nodes.voxel_390.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_229_109_53}
        geometry={nodes.voxel_1777.geometry}
        position={[0, 2036.58, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_98_0_0}
        geometry={nodes.voxel_814.geometry}
        position={[0, 1086.68, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_179_66_26}
        geometry={nodes.voxel_838.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_201_147}
        geometry={nodes.voxel_1541.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_156_98}
        geometry={nodes.voxel_1034.geometry}
        position={[0, -1089.27, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_204_63_28}
        geometry={nodes.voxel_626.geometry}
        position={[0, 3609.54, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_172_108}
        geometry={nodes.voxel_1120.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_144_54_15}
        geometry={nodes.voxel_1551.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_189_88_38}
        geometry={nodes.voxel_1350.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_214_91_38}
        geometry={nodes.voxel_1355.geometry}
        position={[0, -900.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_162_63_15}
        geometry={nodes.voxel_1642.geometry}
        position={[0, 5721.8, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_164_114}
        geometry={nodes.voxel_1442.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_232_176}
        geometry={nodes.voxel_1179.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_159_51_0}
        geometry={nodes.voxel_903.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_156_53_5}
        geometry={nodes.voxel_1454.geometry}
        position={[0, -2503.36, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_78_18_0}
        geometry={nodes.voxel_1279.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_232_111_56}
        geometry={nodes.voxel_1184.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_61_26_19}
        geometry={nodes.voxel_520.geometry}
        position={[0, 1086.68, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_161_98}
        geometry={nodes.voxel_1088.geometry}
        position={[0, -886.09, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_219_166}
        geometry={nodes.voxel_1490.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_226_108_58}
        geometry={nodes.voxel_1169.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_199_79_51}
        geometry={nodes.voxel_671.geometry}
        position={[0, 4868.65, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_78_11_0}
        geometry={nodes.voxel_1257.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_128_21_0}
        geometry={nodes.voxel_477.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_108_16_0}
        geometry={nodes.voxel_445.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_182_74_38}
        geometry={nodes.voxel_1022.geometry}
        position={[0, -1553.66, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_221_164}
        geometry={nodes.voxel_1632.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_169_114}
        geometry={nodes.voxel_1129.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_154_94}
        geometry={nodes.voxel_1175.geometry}
        position={[0, 1789.22, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_159_93}
        geometry={nodes.voxel_1136.geometry}
        position={[0, 1789.22, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_156_43_10}
        geometry={nodes.voxel_805.geometry}
        position={[0, 1789.22, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_164_48_1}
        geometry={nodes.voxel_389.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_197_137}
        geometry={nodes.voxel_1862.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_192_136}
        geometry={nodes.voxel_486.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_187_136}
        geometry={nodes.voxel_1441.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_144_84}
        geometry={nodes.voxel_533.geometry}
        position={[0, 3374.88, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_146_29_0}
        geometry={nodes.voxel_348.geometry}
        position={[0, 1789.22, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_123_58}
        geometry={nodes.voxel_1090.geometry}
        position={[0, 2230.56, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_84_15_0}
        geometry={nodes.voxel_818.geometry}
        position={[0, 1086.68, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_131_73}
        geometry={nodes.voxel_443.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_167_63_19}
        geometry={nodes.voxel_1139.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_227_93_36}
        geometry={nodes.voxel_1623.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_118_19_0}
        geometry={nodes.voxel_1407.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_234_118_61}
        geometry={nodes.voxel_1224.geometry}
        position={[0, 6683.28, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_194_114_63}
        geometry={nodes.voxel_1954.geometry}
        position={[0, 1861.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_234_104_48}
        geometry={nodes.voxel_1091.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_157_66_26}
        geometry={nodes.voxel_1459.geometry}
        position={[0, 1883.82, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_134_71}
        geometry={nodes.voxel_1776.geometry}
        position={[0, -398.13, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_113_51}
        geometry={nodes.voxel_936.geometry}
        position={[0, 1120.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_131_28_0}
        geometry={nodes.voxel_522.geometry}
        position={[0, 6683.28, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_164_89}
        geometry={nodes.voxel_1532.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_214_159}
        geometry={nodes.voxel_1677.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_159_61_23}
        geometry={nodes.voxel_976.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_184_123}
        geometry={nodes.voxel_1226.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_144_29_0}
        geometry={nodes.voxel_397.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_124_49_26}
        geometry={nodes.voxel_1050.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_189_131}
        geometry={nodes.voxel_1177.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_187_128}
        geometry={nodes.voxel_1812.geometry}
        position={[0, -2977.29, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_151_103}
        geometry={nodes.voxel_1037.geometry}
        position={[0, -1080.72, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_182_114}
        geometry={nodes.voxel_1672.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_209_161}
        geometry={nodes.voxel_1128.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_172_48_0}
        geometry={nodes.voxel_478.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_151_41_0}
        geometry={nodes.voxel_658.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_111_13_0}
        geometry={nodes.voxel_796.geometry}
        position={[0, 1861.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_182_66_18}
        geometry={nodes.voxel_1321.geometry}
        position={[0, 1120.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_139_73}
        geometry={nodes.voxel_721.geometry}
        position={[0, 1789.22, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_222_169}
        geometry={nodes.voxel_1630.geometry}
        position={[0, 3740.47, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_142_38_5}
        geometry={nodes.voxel_1576.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_196_69_16}
        geometry={nodes.voxel_887.geometry}
        position={[0, 3244.44, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_139_83}
        geometry={nodes.voxel_1225.geometry}
        position={[0, 1861.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_99_29_5}
        geometry={nodes.voxel_1096.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_146_46_8}
        geometry={nodes.voxel_703.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_118_16_0}
        geometry={nodes.voxel_902.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_217_96_49}
        geometry={nodes.voxel_720.geometry}
        position={[0, 1086.68, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_216_151}
        geometry={nodes.voxel_1581.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_131_58}
        geometry={nodes.voxel_525.geometry}
        position={[0, 3374.88, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_157_73_36}
        geometry={nodes.voxel_1278.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_207_149}
        geometry={nodes.voxel_1134.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_131_74}
        geometry={nodes.voxel_1449.geometry}
        position={[0, -2510.75, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_216_159}
        geometry={nodes.voxel_1178.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_201_142}
        geometry={nodes.voxel_1724.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_201_142}
        geometry={nodes.voxel_1771.geometry}
        position={[0, 781.26, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_216_156}
        geometry={nodes.voxel_1813.geometry}
        position={[0, -255.2, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_113_19_0}
        geometry={nodes.voxel_1298.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_49_11_6}
        geometry={nodes.voxel_912.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_93_0_0}
        geometry={nodes.voxel_1868.geometry}
        position={[0, 1631.62, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_136_76}
        geometry={nodes.voxel_1730.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_247_124_63}
        geometry={nodes.voxel_1356.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_78_19_6}
        geometry={nodes.voxel_2231.geometry}
        position={[0, 1607.7, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_144_79}
        geometry={nodes.bb.geometry}
        position={[0, 4868.65, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_201_91_46}
        geometry={nodes.voxel_1497.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_212_106_53}
        geometry={nodes.voxel_1207.geometry}
        position={[0, 1789.22, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_167_94}
        geometry={nodes.voxel_1820.geometry}
        position={[0, -3432.57, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_189_124}
        geometry={nodes.voxel_1772.geometry}
        position={[0, -4013.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_98_5_0}
        geometry={nodes.voxel_663.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_184_74_28}
        geometry={nodes.voxel_1092.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_108_8_0}
        geometry={nodes.voxel_1313.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_157_91}
        geometry={nodes.voxel_1439.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_151_93}
        geometry={nodes.voxel_1032.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_214_152}
        geometry={nodes.voxel_1628.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_227_171}
        geometry={nodes.voxel_1767.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_162_54_5}
        geometry={nodes.voxel_1358.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_204_91_41}
        geometry={nodes.voxel_1345.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_88_21_1}
        geometry={nodes.voxel_1316.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_144_59_23}
        geometry={nodes.voxel_1140.geometry}
        position={[0, -699.28, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_91_18_0}
        geometry={nodes.voxel_521.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_219_91_28}
        geometry={nodes.voxel_723.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_236_176}
        geometry={nodes.voxel_1180.geometry}
        position={[0, 4222.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_171_106}
        geometry={nodes.voxel_1172.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_142_86}
        geometry={nodes.voxel_1448.geometry}
        position={[0, -2340.9, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_167_109}
        geometry={nodes.voxel_1121.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_196_129}
        geometry={nodes.voxel_1636.geometry}
        position={[0, 1086.68, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_79_19_0}
        geometry={nodes.voxel_1370.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_141_33_0}
        geometry={nodes.voxel_433.geometry}
        position={[0, 6683.28, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_202_68_8}
        geometry={nodes.voxel_569.geometry}
        position={[0, 2865.18, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_137_46_8}
        geometry={nodes.voxel_1411.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_207_59_33}
        geometry={nodes.voxel_672.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_124_53}
        geometry={nodes.voxel_571.geometry}
        position={[0, 3374.88, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_191_137}
        geometry={nodes.voxel_1030.geometry}
        position={[0, -1093.22, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_231_176}
        geometry={nodes.voxel_1537.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_201_79_29}
        geometry={nodes.voxel_882.geometry}
        position={[0, 4868.65, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_245_124_66}
        geometry={nodes.voxel_1402.geometry}
        position={[0, -2171.06, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_118_54}
        geometry={nodes.voxel_935.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_139_3_0}
        geometry={nodes.voxel_891.geometry}
        position={[0, 2233.84, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_126_49}
        geometry={nodes.voxel_722.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_144_34_0}
        geometry={nodes.voxel_749.geometry}
        position={[0, 1789.22, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_169_73_36}
        geometry={nodes.voxel_1369.geometry}
        position={[0, 1120.91, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_222_109_56}
        geometry={nodes.voxel_1268.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_86_11_0}
        geometry={nodes.voxel_864.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_177_56_11}
        geometry={nodes.voxel_1166.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_108_34_5}
        geometry={nodes.voxel_1317.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_206_144}
        geometry={nodes.voxel_1073.geometry}
        position={[0, 1861.41, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_231_118_58}
        geometry={nodes.voxel_1266.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_191_74_23}
        geometry={nodes.voxel_1269.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_219_109_53}
        geometry={nodes.voxel_1255.geometry}
        position={[0, 464.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_86_5_0}
        geometry={nodes.voxel_857.geometry}
        position={[0, 1086.68, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_81_11_0}
        geometry={nodes.voxel_772.geometry}
        position={[0, 1789.22, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_207_141}
        geometry={nodes.voxel_1534.geometry}
        position={[0, 3740.47, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_231_108_48}
        geometry={nodes.voxel_1822.geometry}
        position={[0, 663.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_237_88_36}
        geometry={nodes.voxel_937.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_229_81_24}
        geometry={nodes.voxel_889.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_98_18_0}
        geometry={nodes.voxel_725.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_134_29_0}
        geometry={nodes.voxel_795.geometry}
        position={[0, 5721.8, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_96_11_0}
        geometry={nodes.voxel_1498.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_224_96_28}
        geometry={nodes.voxel_768.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_255_189_119}
        geometry={nodes.voxel_1718.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
      <mesh
        material={materials.RGB_152_53_13}
        geometry={nodes.voxel_839.geometry}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[100, 100, 100]}
      />
    </group>
  )
}
