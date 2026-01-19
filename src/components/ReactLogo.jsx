import { useGLTF } from '@react-three/drei'
import { Float } from '@react-three/drei'


const ReactLogo = (props) => {
    const { nodes, materials } = useGLTF('/models/react.glb')
    return ( 
    <Float dispose={null}>
      <group position={[8,8,0]}scale={0.01} {...props} dispose={null}>
        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[950, 5.935, 18.102]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[30,30,30]}
        />
      </group>
    </Float>
  )
}


useGLTF.preload('/models/react.glb')

export default ReactLogo;



