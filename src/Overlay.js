export default function Overlay({
  inside,
  setInside,
  musicPlaying,
  musicError,
  onStartMusic,
  onToggleMusic
}) {
  return (
    <>
      <button
        className="greeting"
        type="button"
        aria-label="切换雪景球视角"
        onClick={() => {
          setInside(!inside)
          onStartMusic()
        }}
      >
        <span className="greeting__title">圣诞快乐！</span>
        <span className="greeting__message">愿你平安喜乐，温暖常伴。</span>
      </button>
      <button
        className="music-toggle"
        type="button"
        aria-label={musicPlaying ? '暂停音乐' : '开启音乐'}
        aria-pressed={musicPlaying}
        onClick={onToggleMusic}
      >
        <span aria-hidden="true">♫</span>
        <span>{musicPlaying ? '暂停音乐' : '开启音乐'}</span>
      </button>
      {musicError && (
        <p className="music-error" role="status">
          {musicError}
        </p>
      )}
    </>
  )
}
