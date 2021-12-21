import React from 'react';
import { NavLink } from 'react-router-dom'

export const Nav = () => {
  
  //TODO esto deberiamos moverlo a algun archivo
  const routesList = { 
    routes:[
      {
        path:'/',
        title:'Home',
        key:'Home'
      },
      {
        path:'/login',
        title:'Login',
        key:'Login'
      },
      {
        path:'/urgencias',
        title:'Urgencias',
        key:'Urgencias'
      },
      {
        path:'/paciente',
        title:'Pacientes home',
        key:'Pacientes'
      },
      {
        path:'/paciente/citas',
        title:'Citas',
        key:'Citas'
      },
      {
        path:'/admin',
        title:'Admin home',
        key:'Admin'
      },
      {
        path:'/admin/control',
        title:'Admin control',
        key:'Admin2'
      },
    ]
  }

  
  const {routes} = routesList;


  return (
    
      <nav>
      {
        routes.map(route=>(
          <>
            <NavLink
            to={route.path}
            key={route.key}
            >{route.title}</NavLink>
          </>
        ))
      }
      </nav>
    
  )
}
