import React, {useState, useEffect } from 'react';
import { variables } from './Variables.js';

function Clinics() {
    const [clinics, setClinics] = useState([]);

    useEffect(() => {
        fetchClinics();
    }, []);

    const fetchClinics = () => {
        fetch(variables.API_URL + 'clinic')
            .then(response => response.json())
            .then(data => {
                setClinics(data);
            });
    };

    return (
        <div>
            <div>
                <h2>Clinics</h2>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {clinics.map(clinic =>
                        <tr key={clinic.id}>
                            <td>{clinic.id}</td>
                            <td>{clinic.name}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
   );
}

export default Clinics;