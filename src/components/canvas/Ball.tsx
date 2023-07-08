import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
// Orbit controls to be able to move the ball around
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'
// loads percentages
import CanvasLoader from '../Loader'

const Ball = (props: { imgUrl: any }) => {
  // get the balls texture
  const [decal] = useTexture([props.imgUrl])

  return (
    <Float>Ball</Float>
  )
}

const BallCanvas = ({ icon }) => (
  <Canvas
    frameloop="demand"
    shadows
    camera={{ position: [20, 3, 5], fov: 25 }}
    gl={{ preserveDrawingBuffer: true }}
  >
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls
        enableZoom={false}
      />
      <Ball imgUrl={icon} />

    </Suspense>

    <Preload all />
  </Canvas>
)

export default BallCanvas