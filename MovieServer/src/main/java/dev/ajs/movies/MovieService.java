package dev.ajs.movies;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class MovieService {

    @Autowired
    private MovieRepository repository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public List<Movie> findAllMovies() {
        System.out.println("FETCH: " + repository.findAll());
        return repository.findAll();
    }
    public Optional<Movie> singleMovie(String imdbId) {
        return repository.findMovieByImdbId(imdbId);
    }

    public Reputation createReputation(ObjectId UserID, Boolean IsThumbsUp) {
        // new Review form
        Reputation reputation = repository.insert(new Reputation(UserID, IsThumbsUp));

        // update the review
        mongoTemplate.update(Movie.class)
                .matching(Criteria.where("imdbId").is(imdbId))
                .apply(new Update().push("reviews").value(reputation))
                .first();

        return reputation;
    }
}
