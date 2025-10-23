import axios from "axios";
import { PureComponent } from "react";
import MoviesList from "./components/MoviesList";
import SlideShow from "./components/SlideShow";

export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      movies: null,
      error: null,
      loading: true,
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7"
      );
      const { results } = await response.data;
      console.log(results);
      this.setState({
        movies: results,
        loading: false,
      });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  }

  render() {
    if (!this.state.movies) {
      return <p>Loading...</p>;
    }
    return <MoviesList movies={this.state.movies} />;
    // return <SlideShow />;
  }
}
