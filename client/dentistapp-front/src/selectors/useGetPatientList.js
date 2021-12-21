import { useFetch } from '../hooks/useFetch';
// import { useEffect, useState } from 'react';

export const useGetPatientList = () => {

    const data = useFetch('http://localhost:5000/patients/');

    return data; 
    
}