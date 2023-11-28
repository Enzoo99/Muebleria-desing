import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layouts from './Components/Layouts'
import Productos from './Routes/Productos'
import Contacto from './Routes/Contacto'
import Inicio from './Routes/Inicio'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layouts/>}>
            <Route index element={<Inicio />} />
            <Route path='/Productos' element={<Productos/>} />
            <Route path ='/Contacto' element={<Contacto/>} />
            
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App 