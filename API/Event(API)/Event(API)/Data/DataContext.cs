using Event_API_.Model;
using Microsoft.EntityFrameworkCore;

namespace Event_API_.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Category> Categories { get; set; }
        public object Category { get; internal set; }
    }
}
