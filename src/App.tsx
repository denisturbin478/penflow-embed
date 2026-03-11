import { Penflow } from 'penflow/react'

function App() {
  const params = new URLSearchParams(window.location.search)

  const text = params.get('text') ?? 'Hello World'
  const color = params.get('color') ?? '#000000'
  const bgColor = params.get('bgColor') ?? 'transparent'
  const size = params.get('size') ?? '120'
  const speed = params.get('speed') != null ? Number(params.get('speed')) : undefined
  const fontUrl = params.get('fontUrl') ?? '/fonts/BrittanySignature.ttf'

  return (
    <div style={{ width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px 5% 80px 5%', backgroundColor: bgColor, overflow: 'visible' }}>
      <div style={{ overflow: 'visible', display: 'flex', justifyContent: 'center', width: '100%' }}>
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
