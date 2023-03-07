import { Carousel } from "react-material-ui-carousel";
import { Paper } from "@mui/material";

import './Hero.css';

const Hero = ({movies}) => {
  return (
    <div>
      <Carousel>
        {
          movies.map((movie) => {
            return (
              <Paper>
                <div className="movie-card-container">
                  <div className="movie-card">

                  </div>
                </div>
              </Paper>
            )
          })
        }
      </Carousel>
    </div>
  );  
};

export default Hero;