import { Penflow } from 'penflow/react'

function App() {
  const params = new URLSearchParams(window.location.search)
  const text = params.get('text') ?? 'Hello World'
  const color = params.get('color') ?? '#000000'
  const bgColor = params.get('bgColor') ?? 'transparent'
  const speed = params.get('speed') != null ? Number(params.get('speed')) : undefined
  const fontUrl = params.get('fontUrl') ?? '/fonts/BrittanySignature.ttf'

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: bgColor,
      boxSizing: 'border-box',
      padding: '40px',
    }}>
      <div style={{ width: 'fit-content', maxWidth: '90vw', overflow: 'visible' }}>
        <Penflow
          text={text}
          color={color}
          speed={speed}
          fontUrl={fontUrl}
        />
      </div>
    </div>
  )
}

export default App
