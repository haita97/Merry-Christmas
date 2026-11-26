export default function Overlay({ inside, setInside }) {
  return (
    <button
      className="greeting"
      type="button"
      aria-label="切换雪景球视角"
      onClick={() => setInside(!inside)}
    >
      <span className="greeting__title">圣诞快乐！</span>
      <span className="greeting__message">愿你平安喜乐，温暖常伴。</span>
    </button>
  )
}
