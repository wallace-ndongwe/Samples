import React, { useState, useEffect } from 'react';
import { variables } from './Variables.js';

function Patients() {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        fetchPatients();
    }, []);

    const fetchPatients = () => {
        fetch(variables.API_URL + 'patient')
            .then(response => response.json())
            .then(data => {
                setPatients(data);
            });
    };

    return (
        <div>
            <h2>Patients</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Clinic Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Date of Birth</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map(patient =>
                        <tr key={patient.id - patient.clinicId}>
                            <td>{patient.id}</td>
                            <td>{patient.clinicId}</td>
                            <td>{patient.firstName}</td>
                            <td>{patient.lastName}</td>
                            <td>{patient.dateOfBirth}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Patients;