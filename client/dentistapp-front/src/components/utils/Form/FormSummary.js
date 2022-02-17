import React from 'react'

export const FormSummary = ({emergencyData}) => {
console.log(emergencyData)
  return (
    <div>
        <h1>
            Gracias por su dolor
        </h1>
        <h3>Aquí están los datos de su dolor:</h3>
        <p>
          {JSON.stringify(emergencyData, null, 2)}
        </p>
    </div>
  )
}
