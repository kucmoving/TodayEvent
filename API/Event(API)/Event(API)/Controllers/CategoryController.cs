using AutoMapper;
using Event_API_.Data;
using Event_API_.DTOs;
using Event_API_.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Event_API_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ILogger<CategoryController> _logger;
        private readonly DataContext _dataContext;
        private readonly IMapper _mapper;

        public CategoryController(ILogger<CategoryController> logger,
            DataContext dataContext, IMapper mapper)
        {
            _logger = logger;
            _dataContext = dataContext;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<List<CategoryDTO>>> Get()
        {
            _logger.LogInformation("Getting all the categories");
            var category = await _dataContext.Categories.OrderBy(x => x.Name).ToListAsync();
            return _mapper.Map<List<CategoryDTO>>(category);

        }

        [HttpGet("{Id:int}", Name = "getCategory")] // api/category/example
        public async Task<ActionResult<CategoryDTO>> Get(int Id)
        {
            var category = await _dataContext.Categories.FirstOrDefaultAsync(x => x.Id == Id);
            if (category == null)
            {
                return NotFound();
            }
            return _mapper.Map<CategoryDTO>(category);
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] NewCategoryDTO newCategoryDTO)
        {
            var category = _mapper.Map<Category>(newCategoryDTO);
            _dataContext.Add(category);
            await _dataContext.SaveChangesAsync();
            return NoContent();
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id, [FromBody] NewCategoryDTO newCategoryDTO)
        {
            var category = _mapper.Map<Category>(newCategoryDTO);
            category.Id = id;
            _dataContext.Entry(category).State = EntityState.Modified; //if already exist, then modify
            await _dataContext.SaveChangesAsync();
            return NoContent();
        }


        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int Id)
        {
            var category = await _dataContext.Categories.FirstOrDefaultAsync(x => x.Id == Id);
            if (category == null)
            {
                return NotFound();
            }
            _dataContext.Remove(category);
            await _dataContext.SaveChangesAsync();
            return NoContent();

        }
    }
}
