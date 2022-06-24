using Event_API_.Model;
using Microsoft.EntityFrameworkCore;

namespace Event_API_.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<EventHolder>()
                .HasKey(x => new { x.HolderId, x.EventId });

            modelBuilder.Entity<EventCategory>()
                .HasKey(x => new { x.CategoryId, x.EventId });

            modelBuilder.Entity<EventLocationEvent>()
                .HasKey(x => new { x.EventLocationId, x.EventId });

            base.OnModelCreating(modelBuilder);
        }
        public DbSet<Category> Categories { get; set; }

        public DbSet<Holder> Holders { get; set; }

        public DbSet<EventLocation> EventLocations { get; set; }

        public DbSet<Event> Events { get; set; }
        public DbSet<EventHolder> EventHolders { get; set; }   
        public DbSet<EventCategory> EventCategories { get; set; }
        public DbSet<EventLocationEvent> EventLocationEvents { get; set; }
    }
}

