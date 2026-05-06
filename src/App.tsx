import { Toaster } from '../lib/components/Toaster'

function App() {
  return (
    <>
      <Toaster 
        label='Archivo agregado satisfactoriamente' 
        type='loading'
        title='Cargando...'
      />
    </>
  )
}

export default App
