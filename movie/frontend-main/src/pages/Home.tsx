import axios from "axios";
import { useEffect, useState } from "react";
import EmptyState from "../components/homeSectin/EmptyState";
import MovieList from "../components/homeSectin/MovieList";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const [totalPages, setTotalPages] = useState(1); // Track total pages

  const token = localStorage.getItem("loginToken");

  const fetchMovies = async (page: number) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://moviesbackend-3rb8.onrender.com/movies?page=${page}`,
        {
          headers: {
            accept: "*/*",
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setLoading(false);

      // Assuming the response contains 'movies' and 'totalPages' properties
      setMovies(response.data.movies);
      setTotalPages(Math.ceil(response.data.count / 10));
    } catch (error) {
      console.error("Error fetching movies:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage]);

  // Handle page change
  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <>
      {loading ? (
        <>Loading.....</>
      ) : (
        <>
          {movies.length === 0 ? (
            <EmptyState />
          ) : (
            <MovieList
              movies={movies}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </>
      )}
    </>
  );
};

export default Home;
