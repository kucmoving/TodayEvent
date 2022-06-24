using Event_API_.Helpers;
using Event_API_.Model;
using Microsoft.AspNetCore.Mvc;

namespace Event_API_.DTOs
{
    public class NewEventDTO
    {

        //FromForm, have to use typeBinder
        public string Title { get; set; }
        public string Summary { get; set; }
        public string Video { get; set; }
        public bool Locations { get; set; }
        public DateTime Date { get; set; }
        public IFormFile Picture { get; set; }
        [ModelBinder(BinderType = typeof(TypeBinder<List<int>>))]
        public List<int> CategoryIds { get; set; }
        [ModelBinder(BinderType = typeof(TypeBinder<List<int>>))]
        public List<int> EventLocationIds { get; set; }
        [ModelBinder(BinderType = typeof(TypeBinder<List<NewEventHolderDTO>>))]
        public List<NewEventHolderDTO> Holder { get; set; }

    }
}
