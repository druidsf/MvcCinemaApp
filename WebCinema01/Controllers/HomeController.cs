using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebCinema01.Models;

namespace WebCinema01.Controllers
{
    public class HomeController : Controller
    {
        private readonly IMovieRepository movieRepository;
        public HomeController()
            : this(new MovieRepository())
        {
        }

        public HomeController(IMovieRepository movieRepository)
        {
            this.movieRepository = movieRepository;
        }

        //
        // GET: /Movies/

        public ViewResult Index()
        {
            return View(movieRepository.All);
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your app description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}
