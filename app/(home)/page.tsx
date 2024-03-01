import { Metadata } from "next";
import Link from "next/link";
import { API_URL } from "../../common";

export const metadata: Metadata = {
  title: "Home",
};

async function getMovies() {
  const response = await fetch(API_URL);
  return response.json();
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}
