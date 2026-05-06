import { Toaster } from '../lib/components/Toaster'

function App() {
  return (
    <>
      <Toaster 
        label='Archivo agregado satisfactoriamente' 
        type='info' 
        title='Echo Toast'
      />
    </>
  )
}

export default App
