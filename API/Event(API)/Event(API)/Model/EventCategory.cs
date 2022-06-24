namespace Event_API_.Model
{
    public class EventCategory
    {
        public Category Category { get; set; }
        public int CategoryId { get; set; }
        public Event Event { get; set; }
        public int EventId { get; set; }
    }
}
