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

        public DbSet<Holder> Holders { get; set; }

        public DbSet<EventLocation> EventLocations { get; set; }
    }
}
