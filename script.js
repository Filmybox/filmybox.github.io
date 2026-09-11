const movies = [
  {
    title: "My First Movie",
    year: "1995",
    genre: "Drama",
    poster: "posters/movie1.jpg",
    link: "https://example.com"
  },

  {
    title: "Action Movie",
    year: "2000",
    genre: "Action",
    poster: "posters/movie2.jpg",
    link: "https://example.com"
  },

  {
    title: "Comedy Movie",
    year: "2005",
    genre: "Comedy",
    poster: "posters/movie3.jpg",
    link: "https://example.com"
  }
];

const container = document.getElementById("movieContainer");
const search = document.getElementById("search");

function showMovies(list) {
  container.innerHTML = "";

  list.forEach(movie => {
    const card = document.createElement("div");

    card.className = "movie";

    card.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}">

      <div class="movie-info">
        <h3>${movie.title}</h3>
        <p>${movie.year} • ${movie.genre}</p>

        <a
          href="${movie.link}"
          class="watch"
          target="_blank"
        >
          Watch / Download
        </a>
      </div>
    `;

    container.appendChild(card);
  });
}

search.addEventListener("input", function () {

  const text = this.value.toLowerCase();

  const filtered = movies.filter(movie =>
    movie.title.toLowerCase().includes(text)
  );

  showMovies(filtered);
});

showMovies(movies);