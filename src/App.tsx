import { Penflow } from 'penflow/react'

function App() {
  const params = new URLSearchParams(window.location.search)

  const text = params.get('text') ?? 'Hello World'
  const color = params.get('color') ?? '#000000'
  const speed = params.get('speed') != null ? Number(params.get('speed')) : undefined
  const fontUrl = params.get('fontUrl') ?? '/fonts/BrittanySignature.ttf'

  return (
    <div style={{ alignItems: 'center', justifyContent: 'center', padding: '40px 20px 80px 20px' }}>
      <Penflow
        text={text}
        color={color}
        speed={speed}
        fontUrl={fontUrl}
      />
    </div>
  )
}

export default App
