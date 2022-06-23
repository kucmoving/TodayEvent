using NetTopologySuite.Geometries;
using System.ComponentModel.DataAnnotations;

namespace Event_API_.Model
{
    public class EventLocation
    {
        public int Id { get; set; }
        [Required]
        [StringLength(maximumLength:50)]
        public string Name { get; set; }
        public Point Location { get; set; }

    }
}
