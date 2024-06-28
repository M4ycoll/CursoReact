import './App.css'
import {Testimonio}  from'./components/Testimonio.jsx';


function App() {
  return (
      <div className="App">
          <div className="contenedor-principal">
            <h1>Esto es lo que dicen nuestros alumnos sobre nosotros</h1>
            <Testimonio
              nombre='Sara'
              pais='Honduras'
              imagen=''
              cargo='Fotografa'
              empresa='Design'
              texto='Sint amet quis laboris Lorem. Amet Lorem nostrud qui minim. Ex amet fugiat officia incididunt irure dolor minim pariatur officia. Tempor ad aliquip reprehenderit fugiat duis. Incididunt irure culpa ipsum nostrud id quis est culpa aliquip pariatur nostrud nostrud. Tempor ea labore esse enim exercitation adipisicing voluptate consectetur laboris irure.'
            
            />
          </div>
          
      </div>
  )
}

export default App
