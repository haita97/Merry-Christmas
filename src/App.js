import { Canvas } from '@react-three/fiber'
import { Loader } from '@react-three/drei'
import { useState, Suspense, useRef, useEffect, useCallback } from 'react'
import PostProcessingEffects from './PostProcessingEffects'
import SnowGlobeModel, { OUTSIDE_CAMERA_POSITION } from './SnowGlobeModel'
import Overlay from './Overlay'
import SceneSetup from './Scene'

export default function App() {
  const audioRef = useRef()
  const [inside, setInside] = useState(false)
  const isMobile = window.innerWidth < 768
  const canvasConfig = { antialias: false, depth: false, stencil: false, alpha: false }
  const [musicPlaying, setMusicPlaying] = useState(false)
  const [musicError, setMusicError] = useState('')

  const startMusic = useCallback(() => {
    const audio = audioRef.current
    if (!audio || !audio.paused) return

    setMusicError('')
    audio.play().catch((error) => {
      if (error.name === 'NotAllowedError') {
        setMusicError('浏览器限制自动播放，请点击“开启音乐”。')
        return
      }

      console.error('Unable to play background music:', error)
      setMusicError('音乐播放失败，请检查设备音量或网络后重试。')
    })
  }, [])

  useEffect(() => {
    startMusic()
  }, [startMusic])

  const toggleMusic = () => {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) {
      startMusic()
    } else {
      audio.pause()
    }
  }

  return (
    <>
      <Canvas
        gl={canvasConfig}
        camera={{ position: OUTSIDE_CAMERA_POSITION, fov: 35, far: 20000 }}
        dpr={1}
      >
        <Suspense fallback={null}>
          <SceneSetup isMobile={isMobile} />
          <SnowGlobeModel
            position={[0, -1.1, 0]}
            scale={0.09}
            inside={inside}
          />

          <PostProcessingEffects />
        </Suspense>
      </Canvas>
      <audio
        ref={audioRef}
        src={`${process.env.PUBLIC_URL}/music.mp3`}
        loop
        preload="none"
        onPlay={() => setMusicPlaying(true)}
        onPause={() => setMusicPlaying(false)}
      />
      <Overlay
        inside={inside}
        setInside={setInside}
        musicPlaying={musicPlaying}
        musicError={musicError}
        onStartMusic={startMusic}
        onToggleMusic={toggleMusic}
      />
      <Loader />
    </>
  )
}
