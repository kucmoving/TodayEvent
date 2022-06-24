using AutoMapper;
using Event_API_.Data;
using Event_API_.DTOs;
using Event_API_.Helpers;
using Event_API_.Model;
using Microsoft.AspNetCore.Mvc;

namespace Event_API_.Controllers
{
    public class MoviesController : ControllerBase
    {
        private readonly DataContext _dataContext;
        private readonly IMapper _mapper;
        private readonly IFileStorageService _fileStorageService;

        public MoviesController(DataContext dataContext, IMapper mapper,
            IFileStorageService fileStorageService)
        {
            _dataContext = dataContext;
            _mapper = mapper;
            _fileStorageService = fileStorageService;
        }

        [HttpPost] //to save the photo in "eventholder" and "event" 
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
    }
}


