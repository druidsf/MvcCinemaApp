using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebCinema01.Models;

namespace WebCinema01.Controllers
{   
    public class MoviesController : Controller
    {
		private readonly IMovieRepository movieRepository;

		// If you are using Dependency Injection, you can delete the following constructor
        public MoviesController() : this(new MovieRepository())
        {
        }

        public MoviesController(IMovieRepository movieRepository)
        {
			this.movieRepository = movieRepository;
        }

        //
        // GET: /Movies/

        public ViewResult Index()
        {
            return View(movieRepository.All);
        }

        //
        // GET: /Movies/Details/5

        public ViewResult Details(int id)
        {
            return View(movieRepository.Find(id));
        }

        //
        // GET: /Movies/Create

        public ActionResult Create()
        {
            return View();
        } 

        //
        // POST: /Movies/Create

        [HttpPost]
        public ActionResult Create(Movie movie)
        {
            if (ModelState.IsValid) {
                movieRepository.InsertOrUpdate(movie);
                movieRepository.Save();
                return RedirectToAction("Index");
            } else {
				return View();
			}
        }
        
        //
        // GET: /Movies/Edit/5
 
        public ActionResult Edit(int id)
        {
             return View(movieRepository.Find(id));
        }

        //
        // POST: /Movies/Edit/5

        [HttpPost]
        public ActionResult Edit(Movie movie)
        {
            if (ModelState.IsValid) {
                movieRepository.InsertOrUpdate(movie);
                movieRepository.Save();
                return RedirectToAction("Index");
            } else {
				return View();
			}
        }

        //
        // GET: /Movies/Delete/5
 
        public ActionResult Delete(int id)
        {
            return View(movieRepository.Find(id));
        }

        //
        // POST: /Movies/Delete/5

        [HttpPost, ActionName("Delete")]
        public ActionResult DeleteConfirmed(int id)
        {
            movieRepository.Delete(id);
            movieRepository.Save();

            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing) {
                movieRepository.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}

