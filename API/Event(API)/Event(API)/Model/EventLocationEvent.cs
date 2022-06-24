namespace Event_API_.Model
{
    public class EventLocationEvent
    {
        public EventLocation EventLoaction{get;set;}
        public int EventLocationId { get;set;}  
        public Event Event { get; set; }
        public int EventId { get; set; }

    }
}
