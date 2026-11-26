import { extend } from '@react-three/fiber'
import { LumaSplatsThree } from '@lumaai/luma-web'

extend({ LumaSplats: LumaSplatsThree })

export default function LumaWorld({ visible }) {
  return (
    <lumaSplats
      source={`${process.env.PUBLIC_URL}/luma`}
      enableThreeShaderIntegration={false}
      position={[-250, -113, 50]}
      scale={208.5}
      visible={visible}
    />
  )
}
