import Head from "next/head";
import MovieCollection from "../components/MovieCollection";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import requests from "../utils/requests";

export default function Home({ movies }) {
  return (
    <div>
      <Head>
        <title>Hulu 2️⃣</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Navigation />
      <MovieCollection movies={movies} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      movies: request.results,
    },
  };
}