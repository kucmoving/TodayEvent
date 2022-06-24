namespace Event_API_.Model
{
    public class Event
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Summary { get; set; }
        public string Video { get;set; }
        public bool Locations { get; set; }
        public DateTime Date { get; set; }
        public string Picture { get; set; }
        public List<EventCategory> EventCategories { get; set; }
        public List<EventLocationEvent> EventLocationEvents { get; set; }
        public List<EventHolder> EventHolders { get; set; }

    }
}
