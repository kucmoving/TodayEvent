using AutoMapper;
using Event_API_.Data;
using Event_API_.DTOs;
using Event_API_.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Event_API_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventLocationController : ControllerBase
    {
        private readonly DataContext _dataContext;
        private readonly IMapper _mapper;

        public EventLocationController(DataContext dataContext, IMapper mapper)
        {
            _dataContext = dataContext;
            _mapper = mapper;
        }
        [HttpGet]
        public async Task<ActionResult<List<EventLocationDTO>>> Get()
        {
            var entities = await _dataContext.EventLocations.OrderBy(x => x.Name).ToListAsync();
            return _mapper.Map<List<EventLocationDTO>>(entities);
        }
        [HttpGet("{id:int}")]
        public async Task<ActionResult<EventLocationDTO>> Get(int id)
        {
            var eventLocation = await _dataContext.EventLocations.FirstOrDefaultAsync(x => x.Id == id);
            if (eventLocation== null)
            {
                return NotFound();
            }
            return _mapper.Map<EventLocationDTO>(eventLocation);
        }

        [HttpPost]
        public async Task<ActionResult> Post(NewEventLocationDTO newEventLocationDTO)
        {
            var eventLocation = _mapper.Map<EventLocation>(newEventLocationDTO);
            _dataContext.Add(eventLocation);
            await _dataContext.SaveChangesAsync();
            return NoContent();
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id, NewEventLocationDTO newEventLocationDTO)
        {
            var eventLocation = await _dataContext.EventLocations.FirstOrDefaultAsync(x => x.Id == id);

            if (eventLocation == null)
            {
                return NotFound();
            }

            eventLocation = _mapper.Map(newEventLocationDTO, eventLocation);
            await _dataContext.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            var eventLocation = await _dataContext.EventLocations.FirstOrDefaultAsync(x => x.Id == id);

            if (eventLocation == null)
            {
                return NotFound();
            }

            _dataContext.Remove(eventLocation);
            await _dataContext.SaveChangesAsync();
            return NoContent();
        }
    }
}