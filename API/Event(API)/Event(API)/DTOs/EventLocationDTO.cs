using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Event_API_.DTOs
{

    public class EventLocationDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }

    }
}
