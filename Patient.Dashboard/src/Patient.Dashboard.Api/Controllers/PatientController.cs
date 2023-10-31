using Microsoft.AspNetCore.Mvc;
using Patient.Dashboard.Repository;

namespace Patient.Dashboard.Api.Controllers;

[ApiController]
[Route("[controller]")]
public class PatientController : ControllerBase
{
    private readonly IDataAccess _dataAccess;
    
    public PatientController(IDataAccess dataAccess)
    {
        _dataAccess = dataAccess;
    }

    [HttpGet]
    public async Task<IEnumerable<Models.Patient>> Get()
    {
        return await _dataAccess.GetPatients();
    }

    [HttpGet]
    [Route("/Patient/{clinicId}")]
    public async Task<IEnumerable<Models.Patient>> GetByClinicId(int clinicId)
    {
        return await _dataAccess.GetPatientsByClinicId(clinicId);
    }
}