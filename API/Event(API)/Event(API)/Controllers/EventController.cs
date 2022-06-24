using AutoMapper;
using Event_API_.Data;
using Event_API_.DTOs;
using Event_API_.Helpers;
using Event_API_.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Event_API_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventController : ControllerBase
    {
        private readonly DataContext _dataContext;
        private readonly IMapper _mapper;
        private readonly IFileStorageService _fileStorageService;

        public EventController(DataContext dataContext, IMapper mapper,
            IFileStorageService fileStorageService)
        {
            _dataContext = dataContext;
            _mapper = mapper;
            _fileStorageService = fileStorageService;
        }

        [HttpPost] //to save the picture in "eventholder" and "event" 
        public async Task<ActionResult<int>> Post([FromForm] NewEventDTO newEventDTO)
        {
            var _event = _mapper.Map<Event>(newEventDTO);

            if (newEventDTO.Picture != null)
            {
                _event.Picture = await _fileStorageService.SaveFile("event", newEventDTO.Picture);
            }
                
            AnnotateHoldersOrder(_event);
            _dataContext.Add(_event);
            await _dataContext.SaveChangesAsync();
            return _event.Id;
        }
        private void AnnotateHoldersOrder(Event _event)
        {
            if (_event.EventHolders != null)
            {
                for (int i = 0; i < _event.EventHolders.Count; i++)
                {
                    _event.EventHolders[i].Order = i;
                }
            }
        }

        [HttpGet("PostGet")]
        public async Task<ActionResult<EventPostGetDTO>> PostGet()
        {
            var eventLocation = await _dataContext.EventLocations.OrderBy(x => x.Name).ToListAsync();
            var category = await _dataContext.Categories.OrderBy(x => x.Name).ToListAsync();

            var eventLocationDTO = _mapper.Map<List<EventLocationDTO>>(eventLocation);
            var categoryDTO = _mapper.Map<List<CategoryDTO>>(category);

            return new EventPostGetDTO() { Category = categoryDTO, EventLocation = eventLocationDTO };
        }
    }
}


