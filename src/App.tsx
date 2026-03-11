import { useEffect, useRef } from 'react'
import { Penflow } from 'penflow/react'

function App() {
  const params = new URLSearchParams(window.location.search)

  const text = params.get('text') ?? 'Hello World'
  const color = params.get('color') ?? '#000000'
  const bgColor = params.get('bgColor') ?? 'transparent'
  const size = Number(params.get('size') ?? 60)

  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = wrapperRef.current?.querySelector('canvas')
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    wrapperRef.current!.style.marginLeft = -(rect.width / 2 - window.innerWidth / 2) + 'px'
  }, [text, size])

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: bgColor }}>
      <div ref={wrapperRef} style={{ display: 'inline-block', position: 'relative' }}>
        <Penflow
          text={text}
          color={color}
          size={size}
          fontUrl="/fonts/BrittanySignature.ttf"
        />
      </div>
    </div>
  )
}

export default App
