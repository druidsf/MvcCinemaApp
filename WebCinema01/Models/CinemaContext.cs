using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace WebCinema01.Models
{
    public class CinemaContext : DbContext
    {
        public CinemaContext()
            : base("DefaultConnection")
        {
            System.Data.Entity.Database.SetInitializer(new System.Data.Entity.DropCreateDatabaseIfModelChanges<CinemaContext>());
        }

        public DbSet<UserProfile> UserProfiles { get; set; }
        public DbSet<Movie> Movies { get; set; }
        public DbSet<Hall> Halls { get; set; }
        public DbSet<Program> Programs { get; set; }
        public DbSet<Place> Places { get; set; }
        public DbSet<Reservation> Reservations { get; set; }
    }
}