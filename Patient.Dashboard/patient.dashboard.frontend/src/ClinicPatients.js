import React, { Component } from 'react';

export class ClinicPatients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clinicPatients: this.props.patientsForSelectedClinic
        }
    }
    
    sortClinicPatients(prop, asc){
        var sortedPatients = this.state.clinicPatients.sort(function (a, b) {
            if (asc) {
                return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
            }
            else {
                return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
            }
        });
        this.setState({ clinicPatients: sortedPatients });
    }
    render() {
        const {
            clinicPatients
        } = this.state;

        return (
            <div>
                <h2>Patients</h2>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>
                            Id
                        </th>
                        <th>
                            Clinic Id
                        </th>
                        <th>
                            <div className="d-flex flex-row">
                                <button type="button" className="btn btn-light"
                                        onClick={() => this.sortClinicPatients('firstName', true)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z" />
                                    </svg>
                                </button>
                                <button type="button" className="btn btn-light"
                                        onClick={() => this.sortClinicPatients('firstName', false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                                        <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z" />
                                    </svg>
                                </button>
                            </div>
                            First Name
                        </th>
                        <th>
                            <div className="d-flex flex-row">
                                <button type="button" className="btn btn-light"
                                        onClick={() => this.sortClinicPatients('lastName', true)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z" />
                                    </svg>
                                </button>
                                <button type="button" className="btn btn-light"
                                        onClick={() => this.sortClinicPatients('lastName', false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                                        <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z" />
                                    </svg>
                                </button>
                            </div>
                            Last Name
                        </th>
                        <th>
                            <div className="d-flex flex-row">
                                <button type="button" className="btn btn-light"
                                        onClick={() => this.sortClinicPatients('dateOfBirth', true)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0z" />
                                    </svg>
                                </button>
                                <button type="button" className="btn btn-light"
                                        onClick={() => this.sortClinicPatients('dateOfBirth', false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-square-fill" viewBox="0 0 16 16">
                                        <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z" />
                                    </svg>
                                </button>
                            </div>
                            Date of Birth
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {clinicPatients.map(patient =>
                        <tr key={patient.id-patient.clinicId}>
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
        )
    }
}