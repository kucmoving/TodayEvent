using Event_API_.Data;
using Event_API_.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Event_API_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GenresController : ControllerBase
    {

        private readonly ILogger<GenresController> logger;
        private readonly DataContext _dataContext;

        public GenresController(ILogger<GenresController> logger,
            DataContext dataContext)
        {
            this.logger = logger;
            _dataContext = dataContext;
        }

        [HttpGet]

        public async Task<ActionResult<List<Category>>> Get()
        {
            logger.LogInformation("Getting all the genres");
            return await _dataContext.Categories.ToListAsync();

        }

        [HttpGet("{Id:int}", Name = "getCategory")] // api/genres/example
        public ActionResult<Category> Get(int Id)
        {
            throw new NotImplementedException();

        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] Category category)
        {
            _dataContext.Add(category);                   // add in memory
            await _dataContext.SaveChangesAsync(); //save
            return NoContent();
        }

        [HttpPut]
        public ActionResult Put([FromBody] Category genre)
        {

            throw new NotImplementedException();
        }

        [HttpDelete]
        public ActionResult Delete()
        {
            throw new NotImplementedException();

        }
    }
}
