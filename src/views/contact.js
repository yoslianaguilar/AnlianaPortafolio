import React from 'react';
import { Layout } from '../componets/Layout';
import '../style/main.css'


export const ContactsPage = () =>{
  return(
    <Layout>
      <div className='information'>
        <i class="fas fa-id-card-alt"></i>
       <h3 className='contact' >¡Infomación de Contacto!</h3>
      <ul>
      <li><p class="fas fa-phone-volume"> +56-948-695-139</p></li>
      <li><a class="fas fa-envelope-open-text" href="mailto:anlianaaguilar@gmail.com"> anlianaaguilar@gmail.com</a></li>
      <li><p class="fas fa-map-marker-alt"> Santiago centro, Santiago</p></li>
      <li><a class="fab fa-github" href='https://github.com/AnlianaAguilar' target="_blank" > AnlianaAguilar</a></li>
      <li><a class="fab fa-linkedin" href='https://www.linkedin.com/in/anliana-aguilar-b73a2583/' target="_blank"> anlianaaguilar</a></li>
      </ul>
      </div>    </Layout>
  )
}