namespace Airlines_project.Models
{

    public record FlightRm(
        Guid Id,
        string Airline,
        string Price,
        TimePlaceRm Departure,
        TimePlaceRm Arrival,
        int NumberOfPassengers
    );
}