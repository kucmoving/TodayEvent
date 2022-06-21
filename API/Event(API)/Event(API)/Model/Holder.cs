using System.ComponentModel.DataAnnotations;

namespace Event_API_.Model
{
    public class Holder
    {
        public int Id { get; set; }
        [Required]
        [StringLength(120)]
        public string Name { get; set; }

        public DateTime StartingDate { get; set; }  
        public string Introduction { get; set; }
        public string Picture { get; set; }
    }
}
