using Event_API_.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Event_API_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GenresController : ControllerBase
    {

        private readonly ILogger<GenresController> logger;

        public GenresController(ILogger<GenresController> logger)
        {
            this.logger = logger;
        }

        [HttpGet]

        public async Task<ActionResult<List<Category>>> Get()
        {
            logger.LogInformation("Getting all the genres");

            return new List<Category>() { new Category() { Id = 1, Name = "Sport" } };

        }

        [HttpGet("{Id:int}", Name = "getCategory")] // api/genres/example
        public ActionResult<Category> Get(int Id)
        {
            throw new NotImplementedException();

        }

        [HttpPost]
        public ActionResult Post([FromBody] Category genre)
        {
            throw new NotImplementedException();
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
