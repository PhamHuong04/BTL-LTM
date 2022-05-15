function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var movies = [{
  title: "Mad Max: Fury Road",
  genre: ["Action", "Adventure", "Sci-Fi"],
  rating: 8.3,
  poster: "https://s-media-cache-ak0.pinimg.com/originals/ce/0c/93/ce0c93d50ae68922d1f4f6667c95e1a8.jpg"
}, {
  title: "The Hunger Games: Mockingjay Part 1",
  genre: ["Adventure", "Sci-Fi", "Thriller"],
  rating: 6.8,
  poster: "https://1.bp.blogspot.com/-Ds0sudZmSq4/Vgxrr75E77I/AAAAAAAAREo/sZkZW5YMDTw/s1600/Mockingjay%2BPart%2B1.jpg"
}, {
  title: "Jurassic World",
  genre: ["Action", "Adventure", "Sci-Fi"],
  rating: 7.2,
  poster: "https://s-media-cache-ak0.pinimg.com/736x/0b/ab/9a/0bab9a9c671dbb7aa8626eec44a0195f.jpg"
}, {
  title: "Everest",
  genre: ["Adventure", "Drame", "Thriller"],
  rating: 7.4,
  poster: "http://www.impawards.com/2015/posters/everest_ver4.jpg"
}, {
  title: "Insurgent",
  genre: ["Adventure", "Sci-Fi", "Thriller"],
  rating: 6.4,
  poster: "http://cdn2-www.comingsoon.net/assets/uploads/2015/01/FIN16_Insurgent_Guns_1Sht_Trim-1422379653-mtv-14224534611.jpg"
}, {
  title: "Sicario",
  genre: ["Action", "Crime", "Drama"],
  rating: 7.6,
  poster: "https://s-media-cache-ak0.pinimg.com/564x/7f/a1/5c/7fa15c26aa2cb48562ea37bbc177be74.jpg"
}, {
  title: "Green Lantern",
  genre: ["Action", "Adventure", "Sci-Fi"],
  rating: 5.6,
  poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMyMTg3OTM5Ml5BMl5BanBnXkFtZTcwNzczMjEyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"
}, {
  title: "Prisoners",
  genre: ["Crime", "Drama", "Mystery"],
  rating: 8.1,
  poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"
}, {
  title: "The Hateful Eight",
  genre: ["Crime", "Drama", "Mystery"],
  rating: 7.8,
  poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA1MTc1NTg5NV5BMl5BanBnXkFtZTgwOTM2MDEzNzE@._V1_UX182_CR0,0,182,268_AL_.jpg"
}];

// removes all articles in the movie title
function strip(title) {
  return title.replace(/^(a|an|the)\s/i, "");
}

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      movies: movies,
      value: "Sort"
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  App.prototype.handleChange = function handleChange(e) {
    this.setState({ value: e.target.value });
  };

  App.prototype.handleSubmit = function handleSubmit(e) {
    var _state = this.state;
    var value = _state.value;
    var movies = _state.movies;

    switch (value) {
      case "Low rating":
        this.setState({
          movies: movies.sort(function (a, b) {
            return a.rating > b.rating ? 1 : -1;
          })
        });
        break;
      case "High rating":
        this.setState({
          movies: movies.sort(function (a, b) {
            return b.rating > a.rating ? 1 : -1;
          })
        });
        break;
      case "A-Z":
        this.setState({
          movies: movies.sort(function (a, b) {
            return strip(a.title) > strip(b.title) ? 1 : -1;
          })
        });
        break;
      case "Z-A":
        this.setState({
          movies: movies.sort(function (a, b) {
            return strip(b.title) > strip(a.title) ? 1 : -1;
          })
        });
        break;
      default:
        this.setState({
          movies: movies
        });
        break;

    }

    e.preventDefault();
  };

  App.prototype.render = function render() {
    var _state2 = this.state;
    var movies = _state2.movies;
    var value = _state2.value;

    return React.createElement(
      "div",
      null,
      React.createElement(
        "form",
        { onSubmit: this.handleSubmit },
        React.createElement(
          "select",
          { id: "rating-filter", value: value, onChange: this.handleChange },
          React.createElement(
            "option",
            { value: "Sort" },
            "Sort"
          ),
          React.createElement(
            "option",
            { value: "Low rating" },
            "Low rating"
          ),
          React.createElement(
            "option",
            { value: "High rating" },
            "High rating"
          ),
          React.createElement(
            "option",
            { value: "A-Z" },
            "A-Z"
          ),
          React.createElement(
            "option",
            { value: "Z-A" },
            "Z-A"
          )
        ),
        React.createElement("input", { type: "submit", value: "Filter" })
      ),
      React.createElement(
        "section",
        null,
        movies.map(function (m) {
          return React.createElement(Movietemplate, { movie: m });
        })
      )
    );
  };

  return App;
}(React.Component);

var Movietemplate = function (_React$Component2) {
  _inherits(Movietemplate, _React$Component2);

  function Movietemplate(props) {
    _classCallCheck(this, Movietemplate);

    return _possibleConstructorReturn(this, _React$Component2.call(this, props));
  }

  Movietemplate.prototype.render = function render() {
    var _props$movie = this.props.movie;
    var genre = _props$movie.genre;
    var rating = _props$movie.rating;
    var poster = _props$movie.poster;

    return React.createElement(
      "figure",
      null,
      React.createElement("img", { src: poster }),
      React.createElement(
        "figcaption",
        null,
        React.createElement(
          "p",
          null,
          genre
        ),
        React.createElement(
          "div",
          { className: "rating" },
          React.createElement("i", { className: "fa fa-heart" }),
          React.createElement(
            "h4",
            null,
            rating
          )
        )
      )
    );
  };

  return Movietemplate;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));