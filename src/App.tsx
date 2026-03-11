import { Penflow } from 'penflow/react'

function App() {
  const params = new URLSearchParams(window.location.search)

  const text = params.get('text') ?? 'Hello World'
  const color = params.get('color') ?? '#000000'
  const duration = Number(params.get('duration') ?? 3)
  const fontUrl = params.get('fontUrl') ?? '/fonts/BrittanySignature.ttf'

  return (
    <Penflow
      text={text}
      color={color}
      duration={duration}
      fontUrl={fontUrl}
    />
  )
}

export default App
