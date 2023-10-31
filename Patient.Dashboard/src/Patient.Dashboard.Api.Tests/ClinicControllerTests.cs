using System.Collections.Generic;
using System.Threading.Tasks;
using Xunit;
using FluentAssertions;
using Patient.Dashboard.Repository;
using Moq;
using Patient.Dashboard.Api.Controllers;
using Patient.Dashboard.Models;

namespace Patient.Dashboard.Api.Tests;

public class ClinicControllerTests
{
    [Fact]
    public async Task GetRetrievesExpectedClinics()
    {
        var expectedClinics = new List<Clinic>
        {
            new Clinic
            {
                Id = 1,
                Name = "London East"
            },
            new Clinic
            {
                Id = 2,
                Name = "London West"
            }
        };
        var dataAccess = new Mock<IDataAccess>();
        dataAccess.Setup(_ => _.GetClinics()).ReturnsAsync(expectedClinics);

        var controller = new ClinicController(dataAccess.Object);
       
        var response = await controller.Get();
        
        response.Should().BeEquivalentTo(expectedClinics);
    }
}