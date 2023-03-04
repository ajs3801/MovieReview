package dev.ajs.movies;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {

    @Autowired
    private MovieRepository repository;

    public List<Movie> findAllMovies() {
        System.out.println("FETCH: " + repository.findAll());
        return repository.findAll();
    }
    public Optional<Movie> singleMovie(ObjectId imdbId) {
        return repository.findById(imdbId);
    }
}
