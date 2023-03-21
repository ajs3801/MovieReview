package dev.ajs.movies;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Reputation {
    @Id
    private ObjectId id;
    private Boolean IsThumbsUp;
}
