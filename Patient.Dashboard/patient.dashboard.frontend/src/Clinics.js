import React, { Component } from 'react';
import { variables } from './Variables.js';
import { ClinicPatients } from './ClinicPatients';

export class Clinics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clinics: [],
            patients: [],
            clinicPatients: []
        }
    }

    refreshList() {
        fetch(variables.API_URL + 'clinic')
            .then(response => response.json())
            .then(data => {
                this.setState({ clinics: data });
            });

        fetch(variables.API_URL + 'patient')
            .then(response => response.json())
            .then(data => {
                this.setState({ patients: data });
                this.setState({ clinicPatients: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    showClinicPatients(clinicId){
        var filteredPatients = this.state.patients.filter(patient => patient.clinicId === clinicId);
        this.setState({ clinicPatients: filteredPatients });
    }
 
    render() {
        const {
            clinics,
            clinicPatients
        } = this.state;

        return (
            <div>
                <h1>Patient Dashboard</h1>
                <div>
                    <h2>Clinics</h2>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>
                                Id
                            </th>
                            <th>
                                Name
                            </th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {clinics.map(clinic =>
                            <tr key={clinic.id}>
                                <td>{clinic.id}</td>
                                <td>{clinic.name}</td>
                                <td>
                                    <input value="View clinic patients" type="button" onClick={() => this.showClinicPatients(clinic.id)}/>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
                <ClinicPatients patientsForSelectedClinic = {clinicPatients}/>
            </div>
        )
    }
}