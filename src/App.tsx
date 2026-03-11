import { useEffect, useRef } from 'react'
import { Penflow } from 'penflow/react'

function App() {
  const params = new URLSearchParams(window.location.search)

  const text = params.get('text') ?? 'Hello World'
  const color = params.get('color') ?? '#000000'
  const bgColor = params.get('bgColor') ?? 'transparent'
  const size = params.get('size') ?? '120'
  const speed = params.get('speed') != null ? Number(params.get('speed')) : undefined
  const fontUrl = params.get('fontUrl') ?? '/fonts/BrittanySignature.ttf'

  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = innerRef.current?.querySelector('canvas')
    if (!canvas) return
    const offset = (canvas.scrollWidth - canvas.clientWidth) / 2
    innerRef.current!.style.marginLeft = `-${offset}px`
  }, [text, size])

  return (
    <div style={{ width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px 5% 80px 5%', paddingBottom: '60px', backgroundColor: bgColor, overflow: 'visible' }}>
      <div ref={innerRef} style={{ overflow: 'visible', width: 'fit-content' }}>
        <Penflow
          text={text}
          color={color}
          size={Number(size)}
          speed={speed}
          fontUrl={fontUrl}
        />
      </div>
    </div>
  )
}

export default App
