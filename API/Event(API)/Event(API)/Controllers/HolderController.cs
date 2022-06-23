using AutoMapper;
using Event_API_.Data;
using Event_API_.DTOs;
using Event_API_.Helpers;
using Event_API_.Model;
using Event_API_.wwwroot;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Event_API_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HolderController : ControllerBase
    {
        private readonly DataContext _dataContext;
        private readonly IMapper _mapper;
        private readonly IFileStorageService _fileStorageService;

        public HolderController(DataContext dataContext, IMapper mapper, IFileStorageService fileStorageService)
        {
            _dataContext = dataContext;
            _mapper = mapper;
            _fileStorageService = fileStorageService;
        }

        [HttpGet]
        public async Task<ActionResult<List<HolderDTO>>> Get([FromQuery] PaginationDTO paginationDTO)
        {
            var queryable = _dataContext.Holders.AsQueryable();
            await HttpContext.InsertParametersPaginationInHeader(queryable);
            var holders = await _dataContext.Holders.OrderBy(x => x.Name)
                .Paginate(paginationDTO).ToListAsync();
            return _mapper.Map<List<HolderDTO>>(holders);

        }

        [HttpGet("{Id:int}")]
        public async Task<ActionResult<HolderDTO>> Get(int Id)
        {
            var holder= await _dataContext.Holders.FirstOrDefaultAsync(x => x.Id == Id);
            if (holder == null)
            {
                return NotFound();
            }
            return _mapper.Map<HolderDTO>(holder);
        }


         [HttpPost]
         public async Task<ActionResult> Post([FromForm] NewHolderDTO newHolderDTO)
        {
            var holder = _mapper.Map<Holder>(newHolderDTO);
            if (newHolderDTO.Picture != null)
            {
                holder.Picture = await _fileStorageService.SaveFile("holder", newHolderDTO.Picture);
            }
            _dataContext.Add(holder);
            await _dataContext.SaveChangesAsync();
            return NoContent();
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id, [FromForm] NewHolderDTO newHolderDTO)
        {
            var holder = await _dataContext.Holders.FirstOrDefaultAsync(x => x.Id == id);
            if (holder == null)
            {
                return NotFound();
            }
            holder = _mapper.Map(newHolderDTO, holder);
            if(newHolderDTO.Picture != null)
            {
                holder.Picture = await _fileStorageService.EditFile("holder", newHolderDTO.Picture, holder.Picture);
            }
            await _dataContext.SaveChangesAsync();
            return NoContent();
        }


        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int Id)
        {
            var holder = await _dataContext.Holders.FirstOrDefaultAsync(x => x.Id == Id);
            if (holder == null)
            {
                return NotFound();
            }
            _dataContext.Remove(holder);
            await _dataContext.SaveChangesAsync();
            await _fileStorageService.DeleteFile(holder.Picture, "holder");  //del person , picture will del 

            return NoContent();

        }
    }


}

