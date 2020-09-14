import React from 'react';
import { Layout } from '../componets/Layout';
import '../index.css'
import FotoAnliana from '../img/FotoAnliana.jpeg'

export const HomePage = () => {
  return (
    <Layout>
      <div className="contenedor">
        <div className='hijo'> 
          <p className='nameHome'>ANLIANA AGUILAR</p>
          <img  src={FotoAnliana} alt="Foto" />
        </div>
      
        <div className="hijo">
             <p className="hijoText">Developer Front-End e Ingeniera Industrial, me caracterizo por tener iniciativa, ser proactiva, autodidacta, organizada, con alto sentido de responsabilidad, con capacidad de trabajar en equipo.<br/>
              En la actualidad decidí cambiar de rugro laboral y profesional, para convertirme en una desarrolladora web, realicé una bootcamp con la Fundación Laboratoria, desarrollé más de 6 proyectos reales y practicos en los que puse en practica Javascript, HTML, CCS, Node.Js, Read, GitHub. 
              <br/>
              Cuento con una amplia experiencia como ingeniera industrial lo que me permite tener un buen  desenvolvimiento en planeación, desarrollo y ejecución de proyectos. 
              <br/>Datos free: Me gusta bailar, hacer ejecicios, los perritos y fuí cheff de un restaurante de comida Chilena..</p>
        </div>
      
      </div>
    </Layout>
  )
}