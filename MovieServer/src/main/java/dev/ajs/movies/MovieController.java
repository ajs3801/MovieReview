package dev.ajs.movies;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/movies")
public class MovieController {

    @Autowired
    private MovieService service;

    @GetMapping
    public ResponseEntity<List<Movie>> getMovies() {
        System.out.println("[FETCH] " + service.findAllMovies());
        return new ResponseEntity<List<Movie>>(service.findAllMovies(), HttpStatus.OK);
    }

    @GetMapping("/{imdbId}")
    public ResponseEntity<Optional<Movie>> getSingleMovie(@PathVariable String imdbId){
        System.out.println("[FETCH] " + service.singleMovie(imdbId));
        return new ResponseEntity<Optional<Movie>>(service.singleMovie(imdbId), HttpStatus.OK);
    }

    // post mapping for thumbs-up and thumbs-donw
    @PostMapping()
    public ResponseEntity<Review> createReview(@RequestBody ObjectId UserID, Boolean IsThumbsUp) {
        return new ResponseEntity<Review>(service.createReputation(UserID, IsThumbsUp), HttpStatus.OK);
    }
}
