namespace Event_API_.Model
{
    public class EventHolder
    {
        public Event Event { get; set; }
        public int EventId { get; set; }
        public Holder Holder { get; set; }  
        public int HolderId { get; set; }
        public string ContactPerson { get; set; }
        public int Order { get; set; }

    }
}
