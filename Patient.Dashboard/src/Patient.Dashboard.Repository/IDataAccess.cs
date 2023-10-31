namespace Patient.Dashboard.Repository;

public interface IDataAccess
{
    Task<IEnumerable<Models.Patient>> GetPatients();
    Task<IEnumerable<Models.Patient>> GetPatientsByClinicId(int clinicId);

    Task<IEnumerable<Models.Clinic>> GetClinics();
}