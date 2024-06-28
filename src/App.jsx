import './App.css'
import {Testimonio}  from'./components/Testimonio.jsx';

import testimoniofoto from '../public/Testimonio-foto.png';
import testimonionino from '../public/Testimonio-nino.png';
import testimoniopaisaje from '../public/Testimonio-paisaje.png';

function App() {
  return (
      <div className="App">
          <div className="contenedor-principal">
            <h1>Esto es lo que dicen nuestros alumnos sobre nosotros</h1>
            <Testimonio
              nombre='Sara'
              pais='Honduras'
              image={testimoniofoto} 
              cargo='Fotografa'
              empresa='Design'
              texto='Sint amet quis laboris Lorem. Amet Lorem nostrud qui minim. Ex amet fugiat officia incididunt irure dolor minim pariatur officia. Tempor ad aliquip reprehenderit fugiat duis. Incididunt irure culpa ipsum nostrud id quis est culpa aliquip pariatur nostrud nostrud. Tempor ea labore esse enim exercitation adipisicing voluptate consectetur laboris irure.'
            />
            <Testimonio
              nombre='Niño'
              pais='Honduras'
              image={testimonionino} 
              cargo='Gamer'
              empresa='Apple'
              texto='Sint amet quis laboris Lorem. Amet Lorem nostrud qui minim. Ex amet fugiat officia incididunt irure dolor minim pariatur officia. Tempor ad aliquip reprehenderit fugiat duis. Incididunt irure culpa ipsum nostrud id quis est culpa aliquip pariatur nostrud nostrud. Tempor ea labore esse enim exercitation adipisicing voluptate consectetur laboris irure.'
            />
            <Testimonio
              nombre='Paisaje'
              pais='Italia'
              image={testimoniopaisaje} 
              cargo='Fotografo'
              empresa='Desing'
              texto='Sint amet quis laboris Lorem. Amet Lorem nostrud qui minim. Ex amet fugiat officia incididunt irure dolor minim pariatur officia. Tempor ad aliquip reprehenderit fugiat duis. Incididunt irure culpa ipsum nostrud id quis est culpa aliquip pariatur nostrud nostrud. Tempor ea labore esse enim exercitation adipisicing voluptate consectetur laboris irure.'
            />
          </div>
          
      </div>
  )
}

export default App
