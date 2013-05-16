using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebCinema01.Models
{
    public class Program
    {
        public int ProgramId { get; set; }
        public int MovieId { get; set; }
        public DateTime Date { get; set; }
        public DateTime Time { get; set; }
        public decimal Price { get; set; }
    }
}