using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Airlines_project.Dtos;
using Airlines_project.Models;

namespace Airlines_project.Controllers;

[ApiController]
[Route("[controller]")]
public class PassengerController : ControllerBase
{

    static private IList<NewPassengerDto> Passengers = new List<NewPassengerDto>();

    [HttpPost]
    [ProducesResponseType(201)]
    [ProducesResponseType(400)]
    [ProducesResponseType(500)]
    public IActionResult Register(NewPassengerDto dto)
    {
        Passengers.Add(dto);
        System.Diagnostics.Debug.WriteLine(Passengers.Count);
        return Ok();
    }

    [HttpGet("{email}")]
    public ActionResult<PassengerRm> Find(string email)
    {
        var passenger = Passengers.FirstOrDefault(p => p.Email == email);

        if (passenger == null) return NotFound();

        var rm = new PassengerRm(
            passenger.Email,
            passenger.FirstName,
            passenger.LastName,
            passenger.Gender
        );

        return Ok(rm);
    }


}

