using System.Collections;
using System.Globalization;
using CsvHelper;
using CsvHelper.Configuration;
using Patient.Dashboard.Models;

namespace Patient.Dashboard.Repository;

public class DataAccess: IDataAccess
{
    public async Task<IEnumerable<Models.Patient>> GetPatients()
    {
        var clinic1Patients = await GetRecords<Models.Patient>("patients-1.csv");
        var clinic2Patients = await GetRecords<Models.Patient>("patients-2.csv");
        return clinic1Patients.Concat(clinic2Patients);
    }

    public async Task<IEnumerable<Models.Patient>> GetPatientsByClinicId(int clinicId)
    {
        return await GetRecords<Models.Patient>($"patients-{clinicId}.csv");
    }

    public async Task<IEnumerable<Clinic>> GetClinics()
    {
        return await GetRecords<Clinic>("clinics.csv");
    }

    private async Task<IEnumerable<T>> GetRecords<T>(string filePath)
    {
        try
        {
            using (var reader = new StreamReader($"bin\\Debug\\net6.0\\Data\\{filePath}"))
            using (var csv = new CsvReader(reader, CultureInfo.InvariantCulture))
            {
                csv.Context.RegisterClassMap<PatientMap>();
                csv.Context.RegisterClassMap<ClinicMap>();
                return csv.GetRecords<T>().ToList();
            }
        }

        catch
        {
            return new List<T>();
        }
    }
}

public sealed class PatientMap : ClassMap<Models.Patient>
{
    public PatientMap()
    {
        Map(m => m.Id).Name("id");
        Map(m => m.ClinicId).Name("clinic_id");
        Map(m => m.FirstName).Name("first_name");
        Map(m => m.LastName).Name("last_name");
        Map(m => m.DateOfBirth).Name("date_of_birth");
    }
}

public sealed class ClinicMap : ClassMap<Clinic>
{
    public ClinicMap()
    {
        Map(m => m.Id).Name("id");
        Map(m => m.Name).Name("name");
    }
}