import './App.css'
import {Testimonio}  from'./components/Testimonio.jsx';
import testimoniofoto from '../public/Testimonio-foto.png';
import testimonionino from '../public/Testimonio-nino.png';
import testimoniopaisaje from '../public/Testimonio-paisaje.png';
import Logo from '../public/INTEGRAL_SOLUTION_logo.png';
import Boton from './components/boton.jsx';

function App() {
  const manejarClic=()=>{
    console.log('Click');
  }
  const reiniciarContador=()=>{
    console.log('Reiniciar');
  }

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
          <h1>Contador de clicks</h1>
          <div className='Free-Logo-Contenedor'>
            <img className='Free-Logo'
                  src={Logo}
                  alt='Logo' 
            />
          </div>
          <div className='Contenedor-Contador'>
            <Boton
            texto='Clic'
            esBotonDeClic={true}
            manejarClic={manejarClic}/>

            <Boton
            texto='Reiniciar'
            esBotonDeClic={false}
            manejarClic={reiniciarContador}/>
          </div>
      </div>
  )
}

export default App
