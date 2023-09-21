namespace Airlines_project.Dtos;

public record NewPassengerDto(
    string Email,
    string FirstName,
    string LastName,
    bool Gender
);
