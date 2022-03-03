import React from 'react';
import { NavLink } from 'react-router-dom'
import {FormattedMessage} from 'react-intl';

export const Nav = () => {
  
  //TODO esto deberiamos moverlo a algun archivo
  const routesList = { 
    routes:[
      {
        path:'/',
        title: <FormattedMessage
        id="nav.home"
        defaultMessage="Inicio"
      />,
        key:'Home'
      },
      {
        path:'/login',
        title: <FormattedMessage
        id="nav.login"
        defaultMessage="Login"
      />,
        key:'Login'
      },
      {
        path:'/urgencias',
        title: <FormattedMessage
        id="nav.emergencies"
        defaultMessage="Urgencias"
      />,
        key:'Urgencias'
      },
      {
        path:'/paciente',
        title: <FormattedMessage
        id="nav.patients"
        defaultMessage="Pacientes"
      />,
        key:'Pacientes'
      },
      {
        path:'/paciente/citas',
        title: <FormattedMessage
        id="nav.appointments"
        defaultMessage="Citas"
      />,
        key:'Citas'
      },
      {
        path:'/admin',
        title: <FormattedMessage
        id="nav.adminhome"
        defaultMessage="Admin Home"
      />,
        key:'Admin'
      },
      {
        path:'/admin/control',
        title: <FormattedMessage
        id="nav.admincontrol"
        defaultMessage="Admin Control"
      />,
        key:'Admin2'
      },
    ]
  }

  
  const {routes} = routesList;


  return (
    
      <nav>
      {
        routes.map(route=>(
            <NavLink
            to={route.path}
            key={route.key}
            >{route.title}</NavLink>
        ))
      }
      </nav>
    
  )
}
