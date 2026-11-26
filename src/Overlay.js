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
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11 5 6 9H3v6h3l5 4V5Z" />
          {musicPlaying ? (
            <>
              <path d="M15.5 8.5a5 5 0 0 1 0 7" />
              <path d="M18.5 5.5a9 9 0 0 1 0 13" />
            </>
          ) : (
            <path d="m16 9 5 6m0-6-5 6" />
          )}
        </svg>
      </button>
      {musicError && (
        <p className="music-error" role="status">
          {musicError}
        </p>
      )}
    </>
  )
}
