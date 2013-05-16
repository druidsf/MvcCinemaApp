using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebCinema01.Models
{
    public class Reservation
    {
        public int ReservationId { get; set; }
        public int ProgramId { get; set; }
        public int UserId { get; set; }
        public int HallId { get; set; }
        public int PlaceId { get; set; }
    }
}       