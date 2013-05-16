using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebCinema01.Models
{
    public class Movie
    {
        public int MovieId { get; set; }
        public string Title { get; set; }
        public string Director { get; set; }
        public string Actors { get; set; }
        public string Description { get; set; }
        public DateTime? FromDate { get; set; }
        public DateTime? ToDate { get; set; }
        public string Picture { get; set; }
        public TimeSpan Duration { get; set; }
    }
}