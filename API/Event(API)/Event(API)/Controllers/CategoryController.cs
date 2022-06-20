using Event_API_.Data;
using Event_API_.Model;
using Microsoft.AspNetCore.Mvc;

namespace Event_API_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {

        private readonly ILogger<CategoryController> logger;
        private readonly DataContext _dataContext;

        public CategoryController(ILogger<CategoryController> logger,
            DataContext dataContext)
        {
            this.logger = logger;
            _dataContext = dataContext;
        }

        [HttpGet]

        public async Task<ActionResult<List<Category>>> Get()
        {
            logger.LogInformation("Getting all the categories");
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
            throw new NotImplementedException();

        }

        [HttpPut]
        public ActionResult Put([FromBody] Category category)
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
