using System.ComponentModel.DataAnnotations;

namespace Event_API_.DTOs
{
    public class NewHolderDTO
    {
        [Required]
        [StringLength(120)]
        public string Name { get; set; }

        public DateTime StartingDate { get; set; }
        public string Introduction { get; set; }
        public IFormFile Picture { get; set; }
    }
}
